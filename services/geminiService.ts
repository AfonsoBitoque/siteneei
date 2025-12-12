
import { ExecutionStatus, Language, ExecutionResult } from "../types";

// Piston API Configuration (Public Instance)
// Documentação: https://piston.readthedocs.io/en/latest/api-v2/
const PISTON_API_URL = "https://emkc.org/api/v2/piston/execute";

interface SimulationParams {
    code: string;
    language: Language;
    testCases: { input: string; expectedOutput: string }[];
}

/**
 * Executa o código usando a API Piston (Compilador Real).
 * Retorna null se a API falhar, ou o objeto de resultado se funcionar.
 */
async function executeWithPiston(code: string, language: Language, stdin: string): Promise<{ run: { stdout: string, stderr: string, code: number }, compile?: { stderr: string } } | null> {
    try {
        // Configuração específica para garantir que Java e C funcionam bem
        const langConfig = language === 'c'
            ? { language: "c", version: "10.2.0", filename: "Main.c" }
            : { language: "java", version: "15.0.2", filename: "Main.java" };

        const response = await fetch(PISTON_API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                language: langConfig.language,
                version: langConfig.version,
                files: [{
                    name: langConfig.filename,
                    content: code
                }],
                stdin: stdin,
                run_timeout: 3000, // 3 segundos max de execução real no servidor
                compile_timeout: 10000
            })
        });

        if (!response.ok) return null;
        return await response.json();
    } catch (e) {
        console.error("Piston API Error:", e);
        return null;
    }
}

export const executeCode = async (params: SimulationParams): Promise<ExecutionResult> => {
    const { code, language, testCases } = params;

    // Execução Real (Piston API) apenas com o primeiro caso de teste
    // (Para simplificar a UX, executamos o primeiro caso visível)
    const primaryTestCase = testCases[0];
    const pistonResult = await executeWithPiston(code, language, primaryTestCase.input);

    let realOutput = "";
    let realError = "";
    let status = ExecutionStatus.ERROR;
    let details = "";

    if (pistonResult) {
        // Verificar erro de compilação
        if (pistonResult.compile && pistonResult.compile.stderr) {
            realError = pistonResult.compile.stderr;
            details = "Erro de Compilação";
            status = ExecutionStatus.ERROR;
        } else {
            // Execução correu (pode ter erro de runtime ou sucesso)
            realOutput = pistonResult.run.stdout;

            // Se o código de saída for != 0, houve erro de runtime (ex: segfault)
            if (pistonResult.run.code !== 0) {
                realError = pistonResult.run.stderr || `Erro de execução (Exit Code: ${pistonResult.run.code})`;
                details = "Erro de Execução (Runtime Error)";
                status = ExecutionStatus.ERROR;
            } else if (pistonResult.run.stderr) {
                // Às vezes há avisos no stderr mesmo com sucesso
                if (!realOutput) {
                    realError = pistonResult.run.stderr;
                    status = ExecutionStatus.ERROR;
                    details = "Erro na Execução";
                } else {
                    // Tem output mas tem avisos
                    status = ExecutionStatus.SUCCESS;
                }
            } else {
                status = ExecutionStatus.SUCCESS;
            }

            // Verifica se o output bate certo (normalização básica)
            const cleanOutput = realOutput ? realOutput.trim() : "";
            const cleanExpected = primaryTestCase.expectedOutput.trim();

            if (status === ExecutionStatus.SUCCESS) {
                if (cleanOutput === cleanExpected) {
                    details = 'Sucesso! O output corresponde ao esperado.';
                } else {
                    status = ExecutionStatus.ERROR;
                    details = `Output Incorreto.\nEsperado: "${cleanExpected}"\nObtido: "${cleanOutput}"`;
                }
            }
        }
    } else {
        details = "Servidor de execução temporariamente indisponível.";
        status = ExecutionStatus.ERROR;
    }

    return {
        status: status,
        output: realError ? (realOutput + "\n\n--- ERRO ---\n" + realError) : realOutput,
        details: details,
        passedTests: status === ExecutionStatus.SUCCESS ? 1 : 0,
        totalTests: 1
    };
};
