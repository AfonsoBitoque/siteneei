
import { Course } from '../types';

export const lp2Course: Course = {
    id: 'lp2',
    name: 'Laboratório de Programação 2',
    shortName: 'LP2',
    language: 'c',
    exercises: [
        // --- Semana 6: Listas Ligadas ---
        {
            id: 'lp2_01',
            title: '1. Funções Básicas de Lista',
            description: 'Implemente as funções `lista_max` (retorna o maior elemento) e `lista_sum` (soma dos elementos) para uma lista ligada de doubles.\n\nInput: N elementos.\nOutput: Max Soma',
            initialCode: '#include <stdio.h>\n#include <stdlib.h>\n#include <float.h>\n\ntypedef struct Node {\n    double v;\n    struct Node *next;\n} Lista;\n\ndouble lista_max(Lista* l) {\n    // Retorna max\n}\n\ndouble lista_sum(Lista* l) {\n    // Retorna soma\n}\n\n// Auxiliar para criar lista\nLista* add(Lista* l, double v) {\n    Lista* n = malloc(sizeof(Lista));\n    n->v = v; n->next = l; return n;\n}\n\nint main() {\n    // Teste\n    return 0;\n}',
            solutionCode: '#include <stdio.h>\n#include <stdlib.h>\n#include <float.h>\n\ntypedef struct Node {\n    double v;\n    struct Node *next;\n} Lista;\n\ndouble lista_max(Lista* l) {\n    double max = -DBL_MAX;\n    while(l) {\n        if(l->v > max) max = l->v;\n        l = l->next;\n    }\n    return max;\n}\n\ndouble lista_sum(Lista* l) {\n    double sum = 0;\n    while(l) {\n        sum += l->v;\n        l = l->next;\n    }\n    return sum;\n}\n\nLista* add(Lista* l, double v) {\n    Lista* n = malloc(sizeof(Lista));\n    n->v = v; n->next = l; return n;\n}\n\nint main() {\n    Lista *l = NULL;\n    l = add(l, 10.5); l = add(l, 20.0); l = add(l, 5.5);\n    printf("%.1f %.1f", lista_max(l), lista_sum(l));\n    return 0;\n}',
            testCases: [{ input: "", expectedOutput: "20.0 36.0" }]
        },
        {
            id: 'lp2_02',
            title: '2. Filtrar Lista',
            description: 'Implemente `lista_filtra_positivos`. Recebe uma lista e retorna uma NOVA lista contendo apenas os números positivos, mantendo a ordem original.\n\nDica: Insira no fim da nova lista.',
            initialCode: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct Node { double v; struct Node *next; } Lista;\n\nLista *lista_filtra_positivos(Lista* l) {\n    // Implementar\n}\n\n// Auxiliares...\nint main() { ... }',
            solutionCode: '#include <stdio.h>\n#include <stdlib.h>\ntypedef struct Node { double v; struct Node *next; } Lista;\n\nLista* novo(double v) { Lista* n = malloc(sizeof(Lista)); n->v=v; n->next=NULL; return n; }\n\nLista *lista_filtra_positivos(Lista* l) {\n    Lista *head = NULL, *tail = NULL;\n    while(l) {\n        if(l->v > 0) {\n            Lista *n = novo(l->v);\n            if(!head) head = n; else tail->next = n;\n            tail = n;\n        }\n        l = l->next;\n    }\n    return head;\n}\n\nint main() {\n    Lista *l = novo(10); l->next = novo(-5); l->next->next = novo(20);\n    Lista *res = lista_filtra_positivos(l);\n    while(res) { printf("%.0f ", res->v); res=res->next; }\n    return 0;\n}',
            testCases: [{ input: "", expectedOutput: "10 20 " }]
        },
        {
            id: 'lp2_03',
            title: '3. Inverter Lista',
            description: 'Implemente `lista_inverte(Lista *l)`. A função deve alterar os ponteiros da própria lista para a inverter e retornar a nova cabeça.',
            initialCode: '#include <stdio.h>\n#include <stdlib.h>\ntypedef struct Node { double v; struct Node *next; } Lista;\n\nLista *lista_inverte(Lista *l) {\n    // Implementar\n}\nint main() { ... }',
            solutionCode: '#include <stdio.h>\n#include <stdlib.h>\ntypedef struct Node { double v; struct Node *next; } Lista;\nLista* novo(double v) { Lista* n = malloc(sizeof(Lista)); n->v=v; n->next=NULL; return n; }\n\nLista *lista_inverte(Lista *l) {\n    Lista *prev = NULL, *curr = l, *next = NULL;\n    while (curr != NULL) {\n        next = curr->next;\n        curr->next = prev;\n        prev = curr;\n        curr = next;\n    }\n    return prev;\n}\n\nint main() {\n    Lista *l = novo(1); l->next = novo(2); l->next->next = novo(3);\n    l = lista_inverte(l);\n    while(l) { printf("%.0f ", l->v); l=l->next; }\n    return 0;\n}',
            testCases: [{ input: "", expectedOutput: "3 2 1 " }]
        },
        {
            id: 'lp2_04',
            title: '4. HOF em Listas: All/Any',
            description: 'Implemente as funções `all` (retorna 1 se todos satisfazem predicado) e `any` (retorna 1 se pelo menos um satisfaz).\nPredicado teste: `is_positive`.',
            initialCode: '#include <stdio.h>\n#include <stdlib.h>\ntypedef struct Node { double v; struct Node *next; } Lista;\ntypedef int (*DoublePredicate)(double);\n\nint all(Lista* l, DoublePredicate p) { ... }\nint any(Lista* l, DoublePredicate p) { ... }\n\nint is_positive(double v) { return v > 0; }\nint main() { ... }',
            solutionCode: '#include <stdio.h>\n#include <stdlib.h>\ntypedef struct Node { double v; struct Node *next; } Lista;\ntypedef int (*DoublePredicate)(double);\nLista* novo(double v) { Lista* n = malloc(sizeof(Lista)); n->v=v; n->next=NULL; return n; }\n\nint all(Lista* l, DoublePredicate p) {\n    while(l) { if(!p(l->v)) return 0; l=l->next; }\n    return 1;\n}\nint any(Lista* l, DoublePredicate p) {\n    while(l) { if(p(l->v)) return 1; l=l->next; }\n    return 0;\n}\nint is_positive(double v) { return v > 0; }\n\nint main() {\n    Lista *l = novo(1); l->next = novo(-2);\n    printf("%d %d", all(l, is_positive), any(l, is_positive));\n    return 0;\n}',
            testCases: [{ input: "", expectedOutput: "0 1" }]
        },

        // --- Semana 7: Recursividade ---
        {
            id: 'lp2_05',
            title: '5. Recursão Inteiros',
            description: 'Implemente recursivamente:\n1. `potencia(x, n)`: calcula x^n.\n2. `ocorre(d, n)`: conta quantas vezes o digito `d` ocorre em `n`.\n\nInput: x n d num\nOutput: pot ocorrencias',
            initialCode: '#include <stdio.h>\n\nint potencia(int x, int n) { ... }\nint ocorre(int d, int n) { ... }\n\nint main() {\n    // Leitura e testes\n    return 0;\n}',
            solutionCode: '#include <stdio.h>\n\nint potencia(int x, int n) {\n    if (n == 0) return 1;\n    return x * potencia(x, n - 1);\n}\n\nint ocorre(int d, int n) {\n    if (n == 0) return 0;\n    return (n % 10 == d) + ocorre(d, n / 10);\n}\n\nint main() {\n    int x, n, d, num;\n    scanf("%d %d %d %d", &x, &n, &d, &num);\n    printf("%d %d", potencia(x, n), ocorre(d, num));\n    return 0;\n}',
            testCases: [{ input: "2 3 5 1550", expectedOutput: "8 2" }]
        },
        {
            id: 'lp2_06',
            title: '6. MDC Recursivo',
            description: 'Implemente `mdc(x, y)` recursivamente usando:\n- mdc(x,y) = mdc(x-y, y) se x > y\n- mdc(x,y) = mdc(y, x) se y > x\n- mdc(x,x) = x',
            initialCode: '#include <stdio.h>\nint mdc(int x, int y) { ... }\nint main() { int a,b; scanf("%d %d", &a,&b); printf("%d", mdc(a,b)); return 0; }',
            solutionCode: '#include <stdio.h>\nint mdc(int x, int y) {\n    if (x == y) return x;\n    if (x > y) return mdc(x - y, y);\n    return mdc(y, x);\n}\nint main() { int a,b; scanf("%d %d", &a,&b); printf("%d", mdc(a,b)); return 0; }',
            testCases: [{ input: "48 18", expectedOutput: "6" }]
        },
        {
            id: 'lp2_07',
            title: '7. Recursão em Arrays',
            description: 'Implemente `double array_max(double a[], int n)` de forma recursiva.\nRetorna o maior elemento do array de tamanho n.',
            initialCode: '#include <stdio.h>\ndouble array_max(double a[], int n) { ... }\nint main() { double a[]={1.0, 5.5, 2.0}; printf("%.1f", array_max(a, 3)); return 0; }',
            solutionCode: '#include <stdio.h>\ndouble array_max(double a[], int n) {\n    if (n == 1) return a[0];\n    double max_rest = array_max(a, n - 1);\n    return a[n - 1] > max_rest ? a[n - 1] : max_rest;\n}\nint main() { double a[]={1.0, 5.5, 2.0}; printf("%.1f", array_max(a, 3)); return 0; }',
            testCases: [{ input: "", expectedOutput: "5.5" }]
        },
        {
            id: 'lp2_08',
            title: '8. Recursão em Listas',
            description: 'Implemente `double lista_min(Lista *l)` recursivamente.\nDevolve o menor elemento. Se lista vazia devolva um valor alto ou trate como base.',
            initialCode: '#include <stdio.h>\n#include <stdlib.h>\n#include <float.h>\ntypedef struct Node { double v; struct Node *next; } Lista;\n\ndouble lista_min(Lista *l) { ... }\n\n// Auxiliares e main\nint main() { ... }',
            solutionCode: '#include <stdio.h>\n#include <stdlib.h>\n#include <float.h>\ntypedef struct Node { double v; struct Node *next; } Lista;\nLista* novo(double v) { Lista* n = malloc(sizeof(Lista)); n->v=v; n->next=NULL; return n; }\n\ndouble lista_min(Lista *l) {\n    if (!l) return DBL_MAX;\n    double min_rest = lista_min(l->next);\n    return l->v < min_rest ? l->v : min_rest;\n}\n\nint main() {\n    Lista *l = novo(10); l->next = novo(5); l->next->next = novo(20);\n    printf("%.0f", lista_min(l));\n    return 0;\n}',
            testCases: [{ input: "", expectedOutput: "5" }]
        }
    ]
};
