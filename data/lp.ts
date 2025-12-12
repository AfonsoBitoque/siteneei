
import { Course } from '../types';

export const lpCourse: Course = {
    id: 'lp',
    name: 'Laboratório de Programação',
    shortName: 'LP',
    language: 'c',
    exercises: [
        // --- Semana 2: Ponteiros e Passagem por Referência ---
        {
            id: 'lp_01',
            title: '1. Passagem por Referência',
            description: 'Implemente a função `soma_2` que recebe 2 inteiros, soma-os, e grava o valor resultante na zona de memória referenciada pelo ponteiro `out` recebido.\n\nInput:\nDois inteiros.\nOutput:\nO resultado da soma.',
            initialCode: '#include <stdio.h>\n\nvoid soma_2(int x, int y, int *out) {\n    // Implemente aqui\n}\n\nint main() {\n    int a, b, res;\n    if(scanf("%d %d", &a, &b) != 2) return 1;\n    soma_2(a, b, &res);\n    printf("%d", res);\n    return 0;\n}',
            solutionCode: '#include <stdio.h>\n\nvoid soma_2(int x, int y, int *out) {\n    *out = x + y;\n}\n\nint main() {\n    int a, b, res;\n    if(scanf("%d %d", &a, &b) != 2) return 1;\n    soma_2(a, b, &res);\n    printf("%d", res);\n    return 0;\n}',
            testCases: [{ input: "10 20", expectedOutput: "30" }]
        },
        {
            id: 'lp_02',
            title: '2. Arrays e Ponteiros',
            description: 'Implemente a função `maximum` usando APENAS notação de ponteiros para aceder aos elementos (não pode usar `a[i]`).\nDado um array de doubles, retorna um ponteiro para o maior elemento.',
            initialCode: '#include <stdio.h>\n\ndouble *maximum(double *a, int size) {\n    // Implemente usando ponteiros (*p)\n}\n\nint main() {\n    int n;\n    double arr[100];\n    scanf("%d", &n);\n    for(int i=0; i<n; i++) scanf("%lf", &arr[i]);\n    \n    double *max = maximum(arr, n);\n    printf("%.1f", *max);\n    return 0;\n}',
            solutionCode: '#include <stdio.h>\n\ndouble *maximum(double *a, int size) {\n    if (size == 0) return NULL;\n    double *max = a;\n    for(int i=1; i<size; i++) {\n        if(*(a+i) > *max) max = (a+i);\n    }\n    return max;\n}\n\nint main() {\n    int n;\n    double arr[100];\n    scanf("%d", &n);\n    for(int i=0; i<n; i++) scanf("%lf", &arr[i]);\n    double *max = maximum(arr, n);\n    printf("%.1f", *max);\n    return 0;\n}',
            testCases: [{ input: "3 1.5 4.2 2.1", expectedOutput: "4.2" }]
        },

        // --- Semana 3: Alocação Dinâmica ---
        {
            id: 'lp_03',
            title: '3. Array Dinâmico na Heap',
            description: 'Implemente `ints_get_to_heap` que recebe um número `n`, lê `n` inteiros do input e grava-os num array criado na Heap (malloc).\n\nOutput esperado: Os números lidos separados por espaço.',
            initialCode: '#include <stdio.h>\n#include <stdlib.h>\n\nint *ints_get_to_heap(int n) {\n    // malloc e leitura\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int *arr = ints_get_to_heap(n);\n    for(int i=0; i<n; i++) printf("%d ", arr[i]);\n    free(arr);\n    return 0;\n}',
            solutionCode: '#include <stdio.h>\n#include <stdlib.h>\n\nint *ints_get_to_heap(int n) {\n    int *arr = (int*)malloc(n * sizeof(int));\n    for(int i=0; i<n; i++) {\n        scanf("%d", &arr[i]);\n    }\n    return arr;\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int *arr = ints_get_to_heap(n);\n    for(int i=0; i<n; i++) printf("%d ", arr[i]);\n    free(arr);\n    return 0;\n}',
            testCases: [{ input: "3 10 20 30", expectedOutput: "10 20 30 " }]
        },
        {
            id: 'lp_04',
            title: '4. Struct com Memória Dinâmica',
            description: 'Implemente o construtor `rectangle` que aloca memória para uma estrutura `Rectangle` e para os seus membros dinâmicos (como o nome e descrição).\n\nNota: Para simplificar o teste, a estrutura Color é simplificada.',
            initialCode: '#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\ntypedef struct { int r, g, b; } Color;\n\ntypedef struct {\n    int width, height;\n    Color c;\n    char *name;\n} Rectangle;\n\nRectangle *new_rectangle(int w, int h, int r, int g, int b, char *name) {\n    // alocar Rectangle e name (strdup ou malloc+strcpy)\n}\n\nint main() {\n    Rectangle *rect = new_rectangle(100, 200, 255, 0, 0, "QuadradoVermelho");\n    printf("%s: %dx%d RGB(%d,%d,%d)", rect->name, rect->width, rect->height, rect->c.r, rect->c.g, rect->c.b);\n    // free(rect->name); free(rect);\n    return 0;\n}',
            solutionCode: '#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\ntypedef struct { int r, g, b; } Color;\n\ntypedef struct {\n    int width, height;\n    Color c;\n    char *name;\n} Rectangle;\n\nRectangle *new_rectangle(int w, int h, int r, int g, int b, char *name) {\n    Rectangle *rec = (Rectangle*)malloc(sizeof(Rectangle));\n    rec->width = w;\n    rec->height = h;\n    rec->c.r = r; rec->c.g = g; rec->c.b = b;\n    rec->name = strdup(name);\n    return rec;\n}\n\nint main() {\n    Rectangle *rect = new_rectangle(100, 200, 255, 0, 0, "QuadradoVermelho");\n    printf("%s: %dx%d RGB(%d,%d,%d)", rect->name, rect->width, rect->height, rect->c.r, rect->c.g, rect->c.b);\n    free(rect->name);\n    free(rect);\n    return 0;\n}',
            testCases: [{ input: "", expectedOutput: "QuadradoVermelho: 100x200 RGB(255,0,0)" }]
        },

        // --- Semana 4 e 5: Leitura Avançada e Funções de Ordem Superior ---
        {
            id: 'lp_05',
            title: '5. Tokenizer com strtok',
            description: 'Implemente `ints_get_line` que recebe uma string e separadores, e preenche um array de inteiros usando `strtok`.\n\nInput: Uma string com números separados por vírgulas.\nOutput: Os números lidos.',
            initialCode: '#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nint ints_get_line(char *line, int *a, char *delimiters) {\n    // Usar strtok e atoi\n    return 0; // retornar qtd lida\n}\n\nint main() {\n    char line[100];\n    int arr[10];\n    scanf("%s", line);\n    int n = ints_get_line(line, arr, ",");\n    for(int i=0; i<n; i++) printf("%d ", arr[i]);\n    return 0;\n}',
            solutionCode: '#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nint ints_get_line(char *line, int *a, char *delimiters) {\n    int count = 0;\n    char *token = strtok(line, delimiters);\n    while(token != NULL) {\n        a[count++] = atoi(token);\n        token = strtok(NULL, delimiters);\n    }\n    return count;\n}\n\nint main() {\n    char line[100];\n    int arr[10];\n    scanf("%s", line);\n    int n = ints_get_line(line, arr, ",");\n    for(int i=0; i<n; i++) printf("%d ", arr[i]);\n    return 0;\n}',
            testCases: [{ input: "10,20,30,40", expectedOutput: "10 20 30 40 " }]
        },
        {
            id: 'lp_06',
            title: '6. HOF: Filter',
            description: 'Implemente a função de ordem superior `filter`.\nRecebe um array `in`, um array `out`, e um predicado (ponteiro para função). Preenche `out` apenas com elementos que satisfazem o predicado.\n\nPredicado: `int is_even(int x)` (se é par).',
            initialCode: '#include <stdio.h>\n\ntypedef int (*IntPredicate)(int);\n\nint filter(int in[], int n, int out[], IntPredicate p) {\n    // Implementar\n}\n\nint is_even(int x) { return x % 2 == 0; }\n\nint main() {\n    int in[] = {1, 2, 3, 4, 5, 6};\n    int out[6];\n    int k = filter(in, 6, out, is_even);\n    for(int i=0; i<k; i++) printf("%d ", out[i]);\n    return 0;\n}',
            solutionCode: '#include <stdio.h>\n\ntypedef int (*IntPredicate)(int);\n\nint filter(int in[], int n, int out[], IntPredicate p) {\n    int count = 0;\n    for(int i=0; i<n; i++) {\n        if(p(in[i])) {\n            out[count++] = in[i];\n        }\n    }\n    return count;\n}\n\nint is_even(int x) { return x % 2 == 0; }\n\nint main() {\n    int in[] = {1, 2, 3, 4, 5, 6};\n    int out[6];\n    int k = filter(in, 6, out, is_even);\n    for(int i=0; i<k; i++) printf("%d ", out[i]);\n    return 0;\n}',
            testCases: [{ input: "", expectedOutput: "2 4 6 " }]
        },
        {
            id: 'lp_07',
            title: '7. HOF: Reduce/Accumulate',
            description: 'Implemente `reduce_or_default`. Recebe array, valor por omissão e operador binário. Aplica sucessivamente o operador. Se array vazio, retorna default.\n\nOperador de teste: `sum` (soma dois inteiros).',
            initialCode: '#include <stdio.h>\n\ntypedef int (*IntBinaryOperator)(int, int);\n\nint reduce_or_default(int a[], int n, int def, IntBinaryOperator op) {\n    // Implementar\n}\n\nint sum(int a, int b) { return a + b; }\n\nint main() {\n    int a[] = {1, 2, 3, 4};\n    printf("%d", reduce_or_default(a, 4, 0, sum));\n    return 0;\n}',
            solutionCode: '#include <stdio.h>\n\ntypedef int (*IntBinaryOperator)(int, int);\n\nint reduce_or_default(int a[], int n, int def, IntBinaryOperator op) {\n    if (n == 0) return def;\n    int res = a[0];\n    for(int i=1; i<n; i++) {\n        res = op(res, a[i]);\n    }\n    return res;\n}\n\nint sum(int a, int b) { return a + b; }\n\nint main() {\n    int a[] = {1, 2, 3, 4};\n    printf("%d", reduce_or_default(a, 4, 0, sum));\n    return 0;\n}',
            testCases: [{ input: "", expectedOutput: "10" }]
        }
    ]
};
