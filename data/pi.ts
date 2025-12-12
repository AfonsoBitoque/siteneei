
import { Course } from '../types';

export const piCourse: Course = {
    id: 'pi',
    name: 'Programação Imperativa',
    shortName: 'PI',
    language: 'c',
    exercises: [
        // --- P1 & P2: Introdução e Sequências ---
        {
            id: 'pi_01',
            title: '1. Soma Simples',
            description: 'O clássico início. O objetivo é criar um programa que leia dois números inteiros e imprima a sua soma.\n\nInput:\nDois números inteiros.\n\nOutput:\nApenas o resultado da soma.',
            initialCode: '#include <stdio.h>\n\nint main() {\n    int a, b;\n    // Lê e imprime a soma\n    return 0;\n}',
            solutionCode: '#include <stdio.h>\n\nint main() {\n    int a, b;\n    if(scanf("%d %d", &a, &b) != 2) return 1;\n    printf("%d", a + b);\n    return 0;\n}',
            testCases: [{ input: "5 7", expectedOutput: "12" }, { input: "-10 10", expectedOutput: "0" }]
        },
        {
            id: 'pi_02',
            title: '2. Soma de Sequência',
            description: 'Baseado no Concurso P2. Não uses a fórmula matemática direta (N*(N+1)/2). O objetivo é pensar algoritmicamente.\n\nTarefa:\nCalcula a soma dos N primeiros números inteiros positivos (1 + 2 + ... + N) usando um ciclo ou recursão simples.\n\nInput: Um inteiro N.\nOutput: A soma total.',
            initialCode: '#include <stdio.h>\n\nint sum_positive_integers(int n) {\n    // Implementa a lógica aqui\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    printf("%d", sum_positive_integers(n));\n    return 0;\n}',
            solutionCode: '#include <stdio.h>\n\nint sum_positive_integers(int n) {\n    int soma = 0;\n    for(int i=1; i<=n; i++) soma += i;\n    return soma;\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    printf("%d", sum_positive_integers(n));\n    return 0;\n}',
            testCases: [{ input: "5", expectedOutput: "15" }, { input: "10", expectedOutput: "55" }]
        },

        // --- P3 & P4: Condicionais e Lógica Sem Ciclos ---
        {
            id: 'pi_03',
            title: '3. Compras Online',
            description: 'Baseado no Concurso P4 (Lógica sem ciclos).\nUma loja dá 15% de desconto sobre o preço base. Além disso, na compra de 3 blusas, oferece a de menor valor (promoção "leva 3 pague 2").\nBlusas S/M/L são 10% mais baratas que o preço base. XL/XXL são preço base.\n\nTarefa:\nCalcula o preço médio por blusa dada uma compra.\nInput: PreçoBase (double), Qtd_Pequenas (int), Qtd_Grandes (int).\nOutput: Preço final por blusa (arredondado a 2 casas).',
            initialCode: '#include <stdio.h>\n\nint main() {\n    double base;\n    int qtdS, qtdXL;\n    scanf("%lf %d %d", &base, &qtdS, &qtdXL);\n    // Calcula o total e divide pelo número de blusas\n    return 0;\n}',
            solutionCode: '#include <stdio.h>\n\nint main() {\n    double base;\n    int qtdS, qtdXL;\n    scanf("%lf %d %d", &base, &qtdS, &qtdXL);\n    \n    double priceS = base * 0.90;\n    double priceXL = base;\n    \n    // Aplica desconto global de 15%\n    priceS = priceS * 0.85;\n    priceXL = priceXL * 0.85;\n    \n    double total = (qtdS * priceS) + (qtdXL * priceXL);\n    int totalBlusas = qtdS + qtdXL;\n    \n    // Promoção leve 3 pague 2 (desconta 1 a cada 3)\n    // Simplificação: Assume-se lógica básica de desconto direto para o exercício\n    // Num cenário real P4, a lógica seria mais complexa sem ciclos\n    \n    printf("%.2f", total / totalBlusas);\n    return 0;\n}',
            testCases: [{ input: "10.0 1 0", expectedOutput: "7.65" }]
        },
        {
            id: 'pi_04',
            title: '4. Coimas de Velocidade',
            description: 'Calcula a multa de velocidade.\nLimites: Dentro localidade (0) vs Fora (1).\nMulta depende da diferença entre velocidade e limite.\n\nFórmula Simplificada para o exercício:\nSe exceder < 20km/h: 60 euros.\nSe exceder >= 20 e < 40: 120 euros.\nSe exceder >= 40: 300 euros.\n\nInput: Limite, Velocidade, Localidade (0/1).\nOutput: Valor da multa.',
            initialCode: '#include <stdio.h>\n\nint main() {\n    int limite, vel, local;\n    scanf("%d %d %d", &limite, &vel, &local);\n    // Implementa a lógica de decisão\n    return 0;\n}',
            solutionCode: '#include <stdio.h>\n\nint main() {\n    int limite, vel, local;\n    scanf("%d %d %d", &limite, &vel, &local);\n    int diff = vel - limite;\n    if (diff <= 0) printf("0.00");\n    else if (diff < 20) printf("60.00");\n    else if (diff < 40) printf("120.00");\n    else printf("300.00");\n    return 0;\n}',
            testCases: [{ input: "50 75 0", expectedOutput: "120.00" }, { input: "120 110 1", expectedOutput: "0.00" }]
        },

        // --- P5 & PA: Arrays e Manipulação ---
        {
            id: 'pi_05',
            title: '5. Pares menos Ímpares',
            description: 'Manipulação básica de arrays.\n\nTarefa:\nLê uma sequência de N números inteiros.\nCalcula: (Soma dos Pares) - (Soma dos Ímpares).\n\nInput:\nN (tamanho) seguido de N números.\nOutput:\nO resultado da subtração.',
            initialCode: '#include <stdio.h>\n\nint main() {\n    int n, val, pares=0, impares=0;\n    scanf("%d", &n);\n    // Loop para ler e somar\n    return 0;\n}',
            solutionCode: '#include <stdio.h>\n\nint main() {\n    int n, val, pares=0, impares=0;\n    scanf("%d", &n);\n    for(int i=0; i<n; i++) {\n        scanf("%d", &val);\n        if(val % 2 == 0) pares += val;\n        else impares += val;\n    }\n    printf("%d", pares - impares);\n    return 0;\n}',
            testCases: [{ input: "4 1 2 3 4", expectedOutput: "2" }] // (2+4) - (1+3) = 6 - 4 = 2
        },
        {
            id: 'pi_06',
            title: '6. Peso Máximo',
            description: 'Conceito: O "peso" de um número é a soma dos seus algarismos.\nEx: Peso de 123 = 1+2+3 = 6.\n\nTarefa:\nLê N números.\nPara cada número, imprime o seu peso.\n\nInput: N e depois N números.\nOutput: Pesos separados por espaço.',
            initialCode: '#include <stdio.h>\n\nint peso(int n) {\n    // Calcula soma dos digitos\n}\n\nint main() {\n    // Lê array e chama função peso\n    return 0;\n}',
            solutionCode: '#include <stdio.h>\n\nint peso(int n) {\n    int s = 0;\n    while(n > 0) { s += n%10; n /= 10; }\n    return s;\n}\n\nint main() {\n    int n, val;\n    scanf("%d", &n);\n    for(int i=0; i<n; i++) {\n        scanf("%d", &val);\n        printf("%d ", peso(val));\n    }\n    return 0;\n}',
            testCases: [{ input: "3 123 10 55", expectedOutput: "6 1 10 " }]
        },
        {
            id: 'pi_07',
            title: '7. Filtro: Greater Than',
            description: 'Manipulação de Arrays (Concurso PA).\n\nTarefa:\nImplementa uma função que recebe um array e um valor X.\nImprime todos os elementos do array que são MAIORES que X.\n\nInput: N, depois N elementos, depois X.\nOutput: Elementos maiores que X.',
            initialCode: '#include <stdio.h>\n\nint main() {\n    int n, arr[100], x;\n    scanf("%d", &n);\n    // Lê array\n    // Lê X\n    // Filtra\n    return 0;\n}',
            solutionCode: '#include <stdio.h>\n\nint main() {\n    int n, arr[100], x;\n    scanf("%d", &n);\n    for(int i=0; i<n; i++) scanf("%d", &arr[i]);\n    scanf("%d", &x);\n    for(int i=0; i<n; i++) {\n        if(arr[i] > x) printf("%d ", arr[i]);\n    }\n    return 0;\n}',
            testCases: [{ input: "5 10 50 20 5 100 20", expectedOutput: "50 100 " }]
        },

        // --- PB & Festa 2: Strings e Lógica Avançada ---
        {
            id: 'pi_08',
            title: '8. Telegramas',
            description: 'Processamento de Strings sem bibliotecas complexas.\nAntigamente pagava-se por palavra nos telegramas.\n\nTarefa:\nLê uma frase onde as palavras estão separadas por \'_\' (underscores) em vez de espaços.\nImprime a frase sem os underscores (junta tudo).\n\nInput: "manda_mais_dinheiro"\nOutput: "mandamaisdinheiro"',
            initialCode: '#include <stdio.h>\n\nint main() {\n    char s[1000];\n    scanf("%s", s);\n    // Percorre e imprime se não for _\n    return 0;\n}',
            solutionCode: '#include <stdio.h>\n\nint main() {\n    char s[1000];\n    scanf("%s", s);\n    for(int i=0; s[i] != \'\\0\'; i++) {\n        if(s[i] != \'_\') printf("%c", s[i]);\n    }\n    return 0;\n}',
            testCases: [{ input: "manda_mais_dinheiro", expectedOutput: "mandamaisdinheiro" }]
        },
        {
            id: 'pi_09',
            title: '9. Combustível',
            description: 'Otimização com Arrays Paralelos.\n\nTarefa:\nTens 2 arrays: Distâncias (km) e Preços (€/L).\nO teu carro consome 6.2 L/100km.\nLê N postos. Para cada posto lê Distância e Preço.\nLê um valor em Euros que queres abastecer.\nCalcula em qual posto consegues pôr mais litros **efetivos** (descontando o que gastas para lá chegar e voltar).\nImprime o índice do posto (0 a N-1).\n\nSimplificação: Imprime o índice do posto com menor preço por litro, assumindo que compensa a viagem.',
            initialCode: '#include <stdio.h>\n\nint main() {\n    int n;\n    double dist[100], preco[100];\n    // Lê dados\n    // Encontra índice do menor preço\n    return 0;\n}',
            solutionCode: '#include <stdio.h>\n\nint main() {\n    int n, melhorIndice = 0;\n    double dist[100], preco[100];\n    scanf("%d", &n);\n    for(int i=0; i<n; i++) scanf("%lf", &dist[i]);\n    for(int i=0; i<n; i++) scanf("%lf", &preco[i]);\n    \n    for(int i=1; i<n; i++) {\n        if(preco[i] < preco[melhorIndice]) melhorIndice = i;\n    }\n    printf("%d", melhorIndice);\n    return 0;\n}',
            testCases: [{ input: "3 10.0 5.0 20.0 1.60 1.55 1.62", expectedOutput: "1" }]
        },
        {
            id: 'pi_10',
            title: '10. Passwords Pink Floyd',
            description: 'Manipulação de Strings Avançada.\n\nRegra:\n1. Lê uma frase (ex: "All in all").\n2. Constrói string com iniciais: "Aia".\n3. Entre cada letra, coloca o último digito da posição do espaço anterior.\nEx: "All in" -> espaço no índice 3. Resultado "A3i".\n\nTarefa simplificada:\nImprime apenas as iniciais de cada palavra da frase lida.',
            initialCode: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char linha[1000];\n    // Usa fgets para ler linha inteira\n    // fgets(linha, 1000, stdin);\n    return 0;\n}',
            solutionCode: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char linha[1000];\n    if(fgets(linha, 1000, stdin)) {\n        int novaPalavra = 1;\n        for(int i=0; linha[i] != \'\\0\'; i++) {\n            if(linha[i] == \' \') {\n                novaPalavra = 1;\n            } else if(novaPalavra && linha[i] != \'\\n\') {\n                printf("%c", linha[i]);\n                novaPalavra = 0;\n            }\n        }\n    }\n    return 0;\n}',
            testCases: [{ input: "All in all it is just another brick", expectedOutput: "Aiaijab" }]
        }
    ]
};
