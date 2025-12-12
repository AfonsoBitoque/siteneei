
import { Course } from '../types';

export const aedCourse: Course = {
    id: 'aed',
    name: 'Algoritmos e Estruturas de Dados 1',
    shortName: 'AED 1',
    language: 'java',
    exercises: [
        // --- Introdução ao Java ---
        {
            id: 'aed1_01',
            title: '1. Olá Java',
            description: 'Bem-vindo ao mundo do Java! O Java é uma linguagem fortemente tipada e Orientada a Objetos.\n\n**Objetivo:**\nImplementa um programa simples que escreva a mensagem "Ola Mundo" no ecrã.\n\n**Nota:**\nCertifica-te que respeitas as maiúsculas e minúsculas.',
            initialCode: 'public class Main {\n    public static void main(String[] args) {\n        // O teu código aqui\n    }\n}',
            solutionCode: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Ola Mundo");\n    }\n}',
            testCases: [{ input: "", expectedOutput: "Ola Mundo" }]
        },
        {
            id: 'aed1_02',
            title: '2. Entrada de Dados (Scanner)',
            description: 'A leitura de dados em Java é frequentemente feita através da classe `java.util.Scanner`.\n\n**Objetivo:**\nEscreve um programa que leia dois números inteiros a partir do standard input e imprima a sua soma.\n\n**Exemplo:**\nSe a entrada for "10 20", a saída deverá ser "30".',
            initialCode: 'import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // int a = sc.nextInt();\n    }\n}',
            solutionCode: 'import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()) {\n            int a = sc.nextInt();\n            int b = sc.nextInt();\n            System.out.println(a + b);\n        }\n    }\n}',
            testCases: [{ input: "10 20", expectedOutput: "30" }]
        },
        {
            id: 'aed1_03',
            title: '3. Formatação de Output',
            description: 'Muitas vezes precisamos de formatar a saída de números reais (double) com um número fixo de casas decimais.\n\n**Objetivo:**\nLê um número real $r$ (raio de um círculo), calcula a sua área ($Area = \\pi \\times r^2$) e imprime o resultado formatado com **exatamente 2 casas decimais**.\n\n**Dica:**\nUsa `System.out.printf("%.2f", valor)` e a constante `Math.PI`.',
            initialCode: 'import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        // Usa Math.PI e printf("%.2f")\n    }\n}',
            solutionCode: 'import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        double r = sc.nextDouble();\n        System.out.printf("%.2f", Math.PI * r * r);\n    }\n}',
            testCases: [{ input: "5", expectedOutput: "78.54" }]
        },

        // --- Arrays e Loops ---
        {
            id: 'aed1_04',
            title: '4. Arrays em Java',
            description: 'Os Arrays permitem armazenar múltiplos valores do mesmo tipo numa única estrutura.\n\n**Objetivo:**\nLê um número inteiro $N$, seguido de $N$ números inteiros que devem ser armazenados num array. De seguida, imprime os elementos do array pela ordem **inversa** à da leitura, separados por um espaço.',
            initialCode: 'import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        // int[] arr = ...\n    }\n}',
            solutionCode: 'import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] arr = new int[n];\n        for(int i=0; i<n; i++) arr[i] = sc.nextInt();\n        for(int i=n-1; i>=0; i--) System.out.print(arr[i] + " ");\n    }\n}',
            testCases: [{ input: "3 10 20 30", expectedOutput: "30 20 10 " }]
        },
        {
            id: 'aed1_05',
            title: '5. O For-Each Loop',
            description: 'O loop "for-each" simplifica a iteração sobre coleções e arrays.\n\n**Objetivo:**\nLê um número $N$ e uma sequência de $N$ inteiros. Armazena-os num array e calcula a soma de todos os elementos utilizando a sintaxe `for (int valor : array)`. Imprime o resultado final.',
            initialCode: 'import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        //...\n    }\n}',
            solutionCode: 'import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] arr = new int[n];\n        for(int i=0; i<n; i++) arr[i] = sc.nextInt();\n        int sum = 0;\n        for(int x : arr) sum += x;\n        System.out.println(sum);\n    }\n}',
            testCases: [{ input: "3 1 2 3", expectedOutput: "6" }]
        },

        // --- Programação com Classes (OOP) ---
        {
            id: 'aed1_06',
            title: '6. A Classe Ponto',
            description: 'Java é Orientado a Objetos. Vamos criar a nossa primeira classe.\n\n**Objetivo:**\n1. Cria uma classe estática `Ponto` com dois atributos inteiros: `x` e `y`.\n2. Implementa um construtor `Ponto(int x, int y)`.\n3. Implementa o método `toString()` que devolve uma string no formato "(x,y)".\n4. No método main, lê dois inteiros, cria um objeto `Ponto` e imprime-o.',
            initialCode: 'import java.util.Scanner;\npublic class Main {\n    static class Ponto {\n        // ...\n    }\n    public static void main(String[] args) {\n        //...\n    }\n}',
            solutionCode: 'import java.util.Scanner;\npublic class Main {\n    static class Ponto {\n        int x, y;\n        public Ponto(int x, int y) { this.x = x; this.y = y; }\n        public String toString() { return "(" + x + "," + y + ")"; }\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Ponto p = new Ponto(sc.nextInt(), sc.nextInt());\n        System.out.println(p.toString());\n    }\n}',
            testCases: [{ input: "10 20", expectedOutput: "(10,20)" }]
        },
        {
            id: 'aed1_07',
            title: '7. Encapsulamento',
            description: 'O Encapsulamento é um dos pilares da OOP, protegendo o acesso direto aos atributos.\n\n**Objetivo:**\nImplementa a classe `Retangulo` com:\n- Atributos privados `w` e `h` (inteiros).\n- Método público `set(int w, int h)` para definir as dimensões.\n- Método público `getArea()` que devolve a área.\n\nNo `main`, lê dois inteiros, configura o retângulo e imprime a sua área.',
            initialCode: 'import java.util.Scanner;\npublic class Main {\n    static class Retangulo { ... }\n    public static void main(String[] args) { ... }\n}',
            solutionCode: 'import java.util.Scanner;\npublic class Main {\n    static class Retangulo {\n        private int w, h;\n        public void set(int w, int h) { this.w = w; this.h = h; }\n        public int getArea() { return w * h; }\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Retangulo r = new Retangulo();\n        r.set(sc.nextInt(), sc.nextInt());\n        System.out.println(r.getArea());\n    }\n}',
            testCases: [{ input: "5 10", expectedOutput: "50" }]
        },
        {
            id: 'aed1_08',
            title: '8. Interfaces e Polimorfismo',
            description: 'O Polimorfismo permite tratar objetos de diferentes tipos de forma uniforme através de Interfaces.\n\n**Objetivo:**\n1. Define a interface `Figura` com o método `double area()`.\n2. Cria a classe `Circulo` que implementa `Figura`, com um construtor que recebe o raio.\n3. No `main`, lê um valor real (raio), instancia um `Circulo` (guardando numa variável do tipo `Figura`) e imprime a sua área com 2 casas decimais.',
            initialCode: 'import java.util.Scanner;\ninterface Figura { double area(); }\n// class Circulo ...\npublic class Main { ... }',
            solutionCode: 'import java.util.Scanner;\ninterface Figura { double area(); }\nclass Circulo implements Figura {\n    double r; Circulo(double r){this.r=r;}\n    public double area(){return Math.PI*r*r;}\n}\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Figura f = new Circulo(sc.nextDouble());\n        System.out.printf("%.2f", f.area());\n    }\n}',
            testCases: [{ input: "2", expectedOutput: "12.57" }]
        },

        // --- Strings ---
        {
            id: 'aed1_09',
            title: '9. StringBuilder vs String',
            description: 'Em Java, Strings são imutáveis. Para concatenações frequentes, deve-se usar `StringBuilder` para maior eficiência.\n\n**Objetivo:**\nLê um inteiro $N$, seguido de $N$ palavras (strings). Concatena todas as palavras numa única String usando `StringBuilder` e imprime o resultado final.',
            initialCode: 'import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        // StringBuilder sb = ...\n    }\n}',
            solutionCode: 'import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        StringBuilder sb = new StringBuilder();\n        for(int i=0; i<n; i++) sb.append(sc.next());\n        System.out.println(sb.toString());\n    }\n}',
            testCases: [{ input: "3 Ola Mun do", expectedOutput: "OlaMundo" }]
        },
        {
            id: 'aed1_10',
            title: '10. Manipulação de Strings',
            description: 'A classe `String` possui vários métodos úteis para manipulação de texto.\n\n**Objetivo:**\nLê uma linha completa de texto. Imprime a mesma linha convertida para letras **maiúsculas** e com todas as ocorrências do caráter "A" substituídas pelo caráter "X".',
            initialCode: 'import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        // ...\n    }\n}',
            solutionCode: 'import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextLine()) {\n            String s = sc.nextLine();\n            System.out.println(s.toUpperCase().replace(\'A\', \'X\'));\n        }\n    }\n}',
            testCases: [{ input: "banana", expectedOutput: "BXNXNX" }]
        },

        // --- Pilhas e Filas ---
        {
            id: 'aed1_11',
            title: '11. API Java: Stack',
            description: 'A estrutura de dados Pilha (Stack) segue o princípio LIFO (Last-In, First-Out).\n\n**Objetivo:**\nUtiliza a classe `java.util.Stack` para ler $N$ inteiros e armazená-los. De seguida, remove e imprime todos os elementos da pilha. Como é uma pilha, a ordem de saída será inversa à da entrada.',
            initialCode: 'import java.util.Scanner;\nimport java.util.Stack;\npublic class Main {\n    public static void main(String[] args) {\n        Stack<Integer> s = new Stack<>();\n        // ...\n    }\n}',
            solutionCode: 'import java.util.Scanner;\nimport java.util.Stack;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        Stack<Integer> s = new Stack<>();\n        for(int i=0; i<n; i++) s.push(sc.nextInt());\n        while(!s.isEmpty()) System.out.print(s.pop() + " ");\n    }\n}',
            testCases: [{ input: "3 1 2 3", expectedOutput: "3 2 1 " }]
        },
        {
            id: 'aed1_12',
            title: '12. Balanceamento de Parênteses',
            description: 'Uma aplicação clássica de pilhas é a verificação de parênteses balanceados.\n\n**Objetivo:**\nLê uma string contendo apenas parênteses `( )` e colchetes `[ ]`. Verifica se a expressão está bem formada (balanceada).\n\n**Saída:**\nImprime "OK" se estiver balanceada, ou "ERRO" caso contrário.',
            initialCode: 'import java.util.Scanner;\nimport java.util.Stack;\npublic class Main {\n    public static void main(String[] args) {\n        // ...\n    }\n}',
            solutionCode: 'import java.util.Scanner;\nimport java.util.Stack;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String str = sc.next();\n        Stack<Character> s = new Stack<>();\n        boolean ok = true;\n        for(char c : str.toCharArray()) {\n            if(c==\'(\') s.push(\')\');\n            else if(c==\'[\') s.push(\']\');\n            else if(s.isEmpty() || s.pop() != c) { ok=false; break; }\n        }\n        System.out.println(ok && s.isEmpty() ? "OK" : "ERRO");\n    }\n}',
            testCases: [{ input: "([()])", expectedOutput: "OK" }]
        },
        {
            id: 'aed1_13',
            title: '13. API Java: Queue',
            description: 'A estrutura de dados Fila (Queue) segue o princípio FIFO (First-In, First-Out).\n\n**Objetivo:**\nUtiliza a interface `java.util.Queue` e a implementação `LinkedList` para simular uma fila.\nLê $N$ inteiros, adiciona-os à fila e, em seguida, remove-os e imprime-os um a um.',
            initialCode: 'import java.util.Scanner;\nimport java.util.Queue;\nimport java.util.LinkedList;\npublic class Main {\n    public static void main(String[] args) {\n        // ...\n    }\n}',
            solutionCode: 'import java.util.Scanner;\nimport java.util.Queue;\nimport java.util.LinkedList;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        Queue<Integer> q = new LinkedList<>();\n        for(int i=0; i<n; i++) q.add(sc.nextInt());\n        while(!q.isEmpty()) System.out.print(q.poll() + " ");\n    }\n}',
            testCases: [{ input: "3 1 2 3", expectedOutput: "1 2 3 " }]
        },

        // --- Implementação Manual ---
        {
            id: 'aed1_14',
            title: '14. Lista Ligada Manual',
            description: 'Vamos implementar uma Lista Ligada simples manualmente, sem usar as coleções do Java.\n\n**Objetivo:**\n1. Cria uma classe `Node` com um valor inteiro e uma referência `next`.\n2. Lê um inteiro $N$.\n3. Cria uma lista ligada contendo os números de 1 até $N$.\n4. Percorre a lista e imprime os valores.',
            initialCode: 'import java.util.Scanner;\nclass Node { int val; Node next; Node(int v){val=v;} }\npublic class Main { ... }',
            solutionCode: 'import java.util.Scanner;\nclass Node { int val; Node next; Node(int v){val=v;} }\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        if(n==0) return;\n        Node head = new Node(1);\n        Node curr = head;\n        for(int i=2; i<=n; i++) { curr.next = new Node(i); curr = curr.next; }\n        curr = head;\n        while(curr != null) { System.out.print(curr.val + " "); curr = curr.next; }\n    }\n}',
            testCases: [{ input: "3", expectedOutput: "1 2 3 " }]
        },
        {
            id: 'aed1_15',
            title: '15. Pilha com Array',
            description: 'Vamos compreender como funciona uma Pilha internamente.\n\n**Objetivo:**\nImplementa a classe `Pilha` usando um array simples para armazenamento.\n\nO programa deve:\n1. Ler dois inteiros.\n2. Fazer `push` de ambos para a pilha.\n3. Fazer `pop` duas vezes e imprimir os valores obtidos.',
            initialCode: 'import java.util.Scanner;\nclass Pilha { ... }\npublic class Main { ... }',
            solutionCode: 'import java.util.Scanner;\nclass Pilha {\n    int[] arr = new int[100]; int top=0;\n    void push(int v) { arr[top++] = v; }\n    int pop() { return arr[--top]; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Pilha p = new Pilha();\n        p.push(sc.nextInt()); p.push(sc.nextInt());\n        System.out.println(p.pop() + " " + p.pop());\n    }\n}',
            testCases: [{ input: "10 20", expectedOutput: "20 10" }]
        },
        {
            id: 'aed1_16',
            title: '16. Fila com Array Circular',
            description: 'Uma Fila Circular aproveita o espaço de um array fixo de forma eficiente.\n\n**Objetivo:**\nImplementa a classe `Fila` usando um array com índices `start` e `end` que "dão a volta" (usando o operador módulo, se necessário, ou lógica simples).\n\n1. Lê um inteiro $N$.\n2. Enfileira os números de 1 a $N$.\n3. De seguida, desenfileira e imprime todos os elementos.',
            initialCode: 'import java.util.Scanner;\nclass Fila { ... }\npublic class Main { ... }',
            solutionCode: 'import java.util.Scanner;\nclass Fila {\n    int[] arr = new int[100]; int start=0, end=0;\n    void enq(int v) { arr[end++] = v; }\n    int deq() { return arr[start++]; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        Fila f = new Fila();\n        for(int i=1; i<=n; i++) f.enq(i);\n        for(int i=1; i<=n; i++) System.out.print(f.deq() + " ");\n    }\n}',
            testCases: [{ input: "2", expectedOutput: "1 2 " }]
        },

        // --- Análise ---
        {
            id: 'aed1_17',
            title: '17. Problema 3SUM',
            description: 'O problema 3SUM é um clássico de algoritmia.\n\n**Objetivo:**\nDado um array de $N$ inteiros, conta quantos trios de índices distintos $(i, j, k)$ existem tais que $A[i] + A[j] + A[k] == 0$.\n\n**Entrada:**\nLê $N$, seguido de $N$ inteiros.\n\n**Saída:**\nImprime o número total de trios válidos.',
            initialCode: 'import java.util.Scanner;\npublic class Main { ... }',
            solutionCode: 'import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] a = new int[n];\n        for(int i=0;i<n;i++) a[i]=sc.nextInt();\n        int count=0;\n        for(int i=0;i<n;i++)\n            for(int j=i+1;j<n;j++)\n                for(int k=j+1;k<n;k++)\n                    if(a[i]+a[j]+a[k]==0) count++;\n        System.out.println(count);\n    }\n}',
            testCases: [{ input: "4 1 -1 0 2", expectedOutput: "1" }]
        },

        // --- Union-Find ---
        {
            id: 'aed1_18',
            title: '18. Union-Find: Quick Find',
            description: 'O algoritmo Union-Find resolve o problema da conectividade dinâmica. Nesta versão "Quick Find", a operação `find` é rápida ($O(1)$) mas a `union` é lenta.\n\n**Objetivo:**\nImplementa a estrutura Union-Find (versão Quick Find).\n\n1. Lê $N$ (número de elementos) e inicializa a estrutura.\n2. Lê um par $U, V$ e executa a operação `union(U, V)`.\n3. Imprime "true" ou "false" para a conectividade `connected(U, V)` e depois para `connected(0, N-1)`.',
            initialCode: 'import java.util.Scanner;\nclass UF { ... }\npublic class Main { ... }',
            solutionCode: 'import java.util.Scanner;\nclass UF {\n    int[] id;\n    UF(int n) { id=new int[n]; for(int i=0;i<n;i++) id[i]=i; }\n    boolean connected(int p, int q) { return id[p]==id[q]; }\n    void union(int p, int q) {\n        int pid = id[p], qid = id[q];\n        for(int i=0; i<id.length; i++) if(id[i]==pid) id[i]=qid;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt(); UF uf = new UF(n);\n        int u = sc.nextInt(), v = sc.nextInt();\n        uf.union(u, v);\n        System.out.println(uf.connected(u, v) + " " + uf.connected(0, n-1));\n    }\n}',
            testCases: [{ input: "5 0 1", expectedOutput: "true false" }]
        },
        {
            id: 'aed1_19',
            title: '19. Union-Find: Quick Union',
            description: 'A versão "Quick Union" do Union-Find usa uma estrutura de árvore (floresta).\n\n**Objetivo:**\nImplementa a estrutura Union-Find (versão Quick Union).\n\n1. Lê $N$ e inicializa.\n2. Realiza as uniões internas fixas: `union(0, 1)` e `union(1, 2)`.\n3. Verifica e imprime se o elemento 0 está conectado ao elemento 2 (transitividade).',
            initialCode: 'import java.util.Scanner;\nclass UF { ... }\npublic class Main { ... }',
            solutionCode: 'import java.util.Scanner;\nclass UF {\n    int[] parent;\n    UF(int n) { parent=new int[n]; for(int i=0;i<n;i++) parent[i]=i; }\n    int root(int i) { while(i!=parent[i]) i=parent[i]; return i; }\n    void union(int p, int q) { int rootP=root(p); int rootQ=root(q); parent[rootP]=rootQ; }\n    boolean conn(int p, int q) { return root(p)==root(q); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n=sc.nextInt(); UF uf = new UF(n);\n        uf.union(0, 1); uf.union(1, 2);\n        System.out.println(uf.conn(0, 2));\n    }\n}',
            testCases: [{ input: "5", expectedOutput: "true" }]
        },

        // --- Ordenação ---
        {
            id: 'aed1_20',
            title: '20. Selection Sort',
            description: 'Algoritmos de ordenação são fundamentais. O Selection Sort seleciona repetidamente o menor elemento restante.\n\n**Objetivo:**\nImplementa o algoritmo Selection Sort para ordenar um array de inteiros.\n\n**Entrada:**\nLê $N$ e depois $N$ inteiros.\n\n**Saída:**\nImprime o array ordenado por ordem crescente, com os elementos separados por espaço.',
            initialCode: 'import java.util.Scanner;\npublic class Main { ... }',
            solutionCode: 'import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt(); int[] a = new int[n];\n        for(int i=0;i<n;i++) a[i]=sc.nextInt();\n        for(int i=0;i<n;i++) {\n            int min=i;\n            for(int j=i+1;j<n;j++) if(a[j]<a[min]) min=j;\n            int t=a[i]; a[i]=a[min]; a[min]=t;\n        }\n        for(int x:a) System.out.print(x+" ");\n    }\n}',
            testCases: [{ input: "5 5 1 4 2 8", expectedOutput: "1 2 4 5 8 " }]
        },
        {
            id: 'aed1_21',
            title: '21. Insertion Sort',
            description: 'O Insertion Sort constrói o array ordenado um elemento de cada vez, inserindo o próximo elemento na posição correta.\n\n**Objetivo:**\nImplementa o algoritmo Insertion Sort.\n\n**Entrada:**\nLê $N$ e depois $N$ inteiros.\n\n**Saída:**\nImprime o array ordenado.',
            initialCode: 'import java.util.Scanner;\npublic class Main { ... }',
            solutionCode: 'import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt(); int[] a = new int[n];\n        for(int i=0;i<n;i++) a[i]=sc.nextInt();\n        for(int i=1;i<n;i++) {\n            for(int j=i; j>0 && a[j]<a[j-1]; j--) {\n                int t=a[j]; a[j]=a[j-1]; a[j-1]=t;\n            }\n        }\n        for(int x:a) System.out.print(x+" ");\n    }\n}',
            testCases: [{ input: "4 4 3 2 1", expectedOutput: "1 2 3 4 " }]
        },
        {
            id: 'aed1_22',
            title: '22. Interface Comparable',
            description: 'Para ordenar objetos personalizados em Java, a classe deve implementar a interface `Comparable`.\n\n**Objetivo:**\n1. Cria a classe `Pessoa` com `nome` (String) e `idade` (int).\n2. Faz a classe implementar `Comparable<Pessoa>`, definindo a ordem natural pela idade (crescente).\n3. Lê os dados de 2 pessoas, coloca-as num array, ordena o array usando `Arrays.sort()` e imprime o nome da pessoa mais nova (primeira do array ordenado).',
            initialCode: 'import java.util.Scanner;\nclass Pessoa implements Comparable<Pessoa> { ... }\npublic class Main { ... }',
            solutionCode: 'import java.util.Arrays;\nimport java.util.Scanner;\nclass Pessoa implements Comparable<Pessoa> {\n    String nome; int idade;\n    Pessoa(String n, int i){nome=n; idade=i;}\n    public int compareTo(Pessoa p) { return this.idade - p.idade; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Pessoa[] p = {new Pessoa(sc.next(), sc.nextInt()), new Pessoa(sc.next(), sc.nextInt())};\n        Arrays.sort(p);\n        System.out.println(p[0].nome);\n    }\n}',
            testCases: [{ input: "Bob 20 Ana 10", expectedOutput: "Ana" }]
        },

        // --- Recursão ---
        {
            id: 'aed1_23',
            title: '23. Recursividade: Fatorial',
            description: 'A recursividade é uma técnica onde uma função se chama a si mesma. O fatorial é o exemplo clássico.\n\n**Objetivo:**\nImplementa uma função recursiva `fat(n)` que retorne o fatorial de $N$ ($N! = N \\times (N-1)!$).\n\n**Entrada:**\nLê um inteiro $N$.\n\n**Saída:**\nImprime o valor de $N!$.',
            initialCode: 'import java.util.Scanner;\npublic class Main { ... }',
            solutionCode: 'import java.util.Scanner;\npublic class Main {\n    static long fat(int n) { return n<=1 ? 1 : n*fat(n-1); }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.println(fat(sc.nextInt()));\n    }\n}',
            testCases: [{ input: "5", expectedOutput: "120" }]
        },
        {
            id: 'aed1_24',
            title: '24. Recursividade: MDC',
            description: 'O Algoritmo de Euclides é uma forma eficiente de calcular o Máximo Divisor Comum (MDC) de forma recursiva.\n\n**Objetivo:**\nImplementa uma função recursiva `gcd(a, b)` que retorne o MDC de dois números.\n\n**Lógica:**\n- Se $b == 0$, retorna $a$.\n- Caso contrário, retorna `gcd(b, a % b)`.\n\nLê dois inteiros e imprime o seu MDC.',
            initialCode: 'import java.util.Scanner;\npublic class Main { ... }',
            solutionCode: 'import java.util.Scanner;\npublic class Main {\n    static int gcd(int a, int b) { return b==0 ? a : gcd(b, a%b); }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.println(gcd(sc.nextInt(), sc.nextInt()));\n    }\n}',
            testCases: [{ input: "10 5", expectedOutput: "5" }]
        },
        {
            id: 'aed1_25',
            title: '25. Classes Genéricas',
            description: 'Generics permitem criar classes que trabalham com qualquer tipo de dados de forma segura.\n\n**Objetivo:**\n1. Cria uma classe genérica `Caixa<T>` que armazena um valor do tipo `T`.\n2. Implementa métodos `set(T v)` e `T get()`.\n3. No `main`, instancia uma `Caixa<String>`, lê uma palavra, guarda-a na caixa e depois recupera-a para imprimir.',
            initialCode: 'import java.util.Scanner;\nclass Caixa<T> { ... }\npublic class Main { ... }',
            solutionCode: 'import java.util.Scanner;\nclass Caixa<T> {\n    T val;\n    void set(T v){ val=v; }\n    T get(){ return val; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Caixa<String> c = new Caixa<>(); c.set(sc.next());\n        System.out.println(c.get());\n    }\n}',
            testCases: [{ input: "Generico", expectedOutput: "Generico" }]
        },
        {
            id: 'aed1_26',
            title: '26. Iteradores',
            description: 'Ao remover elementos de uma coleção durante uma iteração, deve-se usar um `Iterator` para evitar `ConcurrentModificationException`.\n\n**Objetivo:**\n1. Lê 3 números inteiros e adiciona-os a um `ArrayList`.\n2. Usa um iterador para percorrer a lista e remover todos os números ímpares.\n3. Imprime a lista resultante no final.',
            initialCode: 'import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        // ...\n    }\n}',
            solutionCode: 'import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        ArrayList<Integer> l = new ArrayList<>();\n        l.add(sc.nextInt()); l.add(sc.nextInt()); l.add(sc.nextInt());\n        Iterator<Integer> it = l.iterator();\n        while(it.hasNext()) {\n            if(it.next() % 2 != 0) it.remove();\n        }\n        System.out.println(l);\n    }\n}',
            testCases: [{ input: "1 2 3", expectedOutput: "[2]" }]
        },
        {
            id: 'aed1_27',
            title: '27. Inversão de Frase',
            description: 'Manipulação de arrays de Strings.\n\n**Objetivo:**\nLê uma frase completa (linha). Divide a frase em palavras (usando espaço como separador) e imprime as palavras pela ordem inversa da frase original.\n\n**Exemplo:**\nEntrada: "a b c"\nSaída: "c b a"',
            initialCode: 'import java.util.Scanner;\npublic class Main { ... }',
            solutionCode: 'import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextLine()) {\n            String[] p = sc.nextLine().split(" ");\n            for(int i=p.length-1; i>=0; i--) System.out.print(p[i] + " ");\n        }\n    }\n}',
            testCases: [{ input: "a b c", expectedOutput: "c b a " }]
        },
        {
            id: 'aed1_28',
            title: '28. Palíndromo com Stack',
            description: 'Um palíndromo lê-se da mesma forma da esquerda para a direita e vice-versa.\n\n**Objetivo:**\nUsa uma `Stack` para verificar se uma string é um palíndromo.\n\n1. Empilha todos os caracteres da string.\n2. Percorre a string novamente e compara cada caracter com o topo da pilha (desempilhando).\n3. Imprime "true" se todos corresponderem, "false" caso contrário.',
            initialCode: 'import java.util.*;\npublic class Main { ... }',
            solutionCode: 'import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        Stack<Character> stack = new Stack<>();\n        for(char c : s.toCharArray()) stack.push(c);\n        boolean pal = true;\n        for(char c : s.toCharArray()) if(stack.pop() != c) pal=false;\n        System.out.println(pal);\n    }\n}',
            testCases: [{ input: "radar", expectedOutput: "true" }]
        },
        {
            id: 'aed1_29',
            title: '29. Estatística com Saco',
            description: 'Um "Saco" (Bag) é uma coleção simples onde a ordem não importa e repetições são permitidas.\n\n**Objetivo:**\nLê uma sequência de números reais (doubles) até não haver mais dados na entrada. Armazena-os num `ArrayList` (ou similar). Calcula e imprime a média de todos os valores, formatada com 2 casas decimais.',
            initialCode: 'import java.util.*;\npublic class Main { ... }',
            solutionCode: 'import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        ArrayList<Double> bag = new ArrayList<>();\n        double sum=0;\n        while(sc.hasNextDouble()) { double d=sc.nextDouble(); bag.add(d); sum+=d; }\n        double mean = sum/bag.size();\n        System.out.printf("%.2f", mean);\n    }\n}',
            testCases: [{ input: "10 20 30", expectedOutput: "20.00" }]
        },
        {
            id: 'aed1_30',
            title: '30. Problema de Josephus',
            description: 'O Problema de Josephus é um problema clássico de eliminação circular.\n\n**Objetivo:**\nSimula o processo usando uma Fila (`Queue`).\n\n1. Começas com $N$ pessoas (numeradas 1 a $N$) numa fila.\n2. Em cada passo, saltas $M-1$ pessoas (movendo-as do início para o fim da fila) e eliminas a $M$-ésima pessoa (removendo-a permanentemente).\n3. Repete até a fila estar vazia, imprimindo o número de cada pessoa à medida que é eliminada.',
            initialCode: 'import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n=sc.nextInt(), m=sc.nextInt();\n        // ...\n    }\n}',
            solutionCode: 'import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n=sc.nextInt(), m=sc.nextInt();\n        Queue<Integer> q = new LinkedList<>();\n        for(int i=1; i<=n; i++) q.add(i);\n        while(!q.isEmpty()) {\n            for(int i=0; i<m-1; i++) q.add(q.poll());\n            System.out.print(q.poll() + " ");\n        }\n    }\n}',
            testCases: [{ input: "7 2", expectedOutput: "2 4 6 1 5 3 7 " }]
        }
    ]
};
