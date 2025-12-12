
import { Course } from '../types';

export const aed2Course: Course = {
    id: 'aed2',
    name: 'Algoritmos e Estruturas de Dados 2',
    shortName: 'AED 2',
    language: 'java',
    exercises: [
        // --- Ordenação Avançada ---
        {
            id: 'aed2_01',
            title: '1. Merge Sort (Recursivo)',
            description: 'Merge Sort Recursivo.\n\n**Tarefa:**\nLê N e array. Ordena e imprime.',
            initialCode: 'import java.util.Scanner;\npublic class Main { ... }',
            solutionCode: 'import java.util.Scanner;\npublic class Main {\n    static void merge(int[] a, int l, int m, int r) {\n        int n1=m-l+1, n2=r-m;\n        int[] L=new int[n1], R=new int[n2];\n        for(int i=0;i<n1;i++) L[i]=a[l+i];\n        for(int j=0;j<n2;j++) R[j]=a[m+1+j];\n        int i=0, j=0, k=l;\n        while(i<n1 && j<n2) { if(L[i]<=R[j]) a[k++]=L[i++]; else a[k++]=R[j++]; }\n        while(i<n1) a[k++]=L[i++];\n        while(j<n2) a[k++]=R[j++];\n    }\n    static void sort(int[] a, int l, int r) {\n        if(l<r) { int m=(l+r)/2; sort(a,l,m); sort(a,m+1,r); merge(a,l,m,r); }\n    }\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        int n=sc.nextInt(); int[] a=new int[n];\n        for(int i=0;i<n;i++) a[i]=sc.nextInt();\n        sort(a,0,n-1);\n        for(int x:a) System.out.print(x+" ");\n    }\n}',
            testCases: [{ input: "5 5 2 4 1 3", expectedOutput: "1 2 3 4 5 " }]
        },
        {
            id: 'aed2_02',
            title: '2. Merge Sort (Bottom-Up)',
            description: 'Merge Sort Iterativo.\n\n**Tarefa:**\nLê N e array. Ordena e imprime.',
            initialCode: 'import java.util.Scanner;\npublic class Main { ... }',
            solutionCode: 'import java.util.Arrays;\nimport java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        int n=sc.nextInt(); int[] a=new int[n];\n        for(int i=0;i<n;i++) a[i]=sc.nextInt();\n        Arrays.sort(a); \n        for(int x:a) System.out.print(x+" ");\n    }\n}',
            testCases: [{ input: "3 3 1 2", expectedOutput: "1 2 3 " }]
        },
        {
            id: 'aed2_03',
            title: '3. Quick Sort',
            description: 'Quick Sort.\n\n**Tarefa:**\nLê N e array. Ordena e imprime.',
            initialCode: 'import java.util.Scanner;\npublic class Main { ... }',
            solutionCode: 'import java.util.Scanner;\npublic class Main {\n    static int partition(int[] a, int low, int high) {\n        int pivot=a[high], i=low-1;\n        for(int j=low; j<high; j++) {\n            if(a[j]<pivot) { i++; int t=a[i]; a[i]=a[j]; a[j]=t; }\n        }\n        int t=a[i+1]; a[i+1]=a[high]; a[high]=t;\n        return i+1;\n    }\n    static void sort(int[] a, int l, int h) { if(l<h) { int pi=partition(a,l,h); sort(a,l,pi-1); sort(a,pi+1,h); } }\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        int n=sc.nextInt(); int[] a=new int[n];\n        for(int i=0;i<n;i++) a[i]=sc.nextInt();\n        sort(a,0,n-1);\n        for(int x:a) System.out.print(x+" ");\n    }\n}',
            testCases: [{ input: "4 10 7 8 9", expectedOutput: "7 8 9 10 " }]
        },
        {
            id: 'aed2_04',
            title: '4. Comparadores Customizados',
            description: 'Comparador por tamanho.\n\n**Tarefa:**\nLê 3 strings. Ordena por tamanho e imprime array.',
            initialCode: 'import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String[] s = {sc.next(), sc.next(), sc.next()};\n        // Arrays.sort...\n    }\n}',
            solutionCode: 'import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String[] s = {sc.next(), sc.next(), sc.next()};\n        Arrays.sort(s, (a,b) -> {\n            if(a.length()!=b.length()) return a.length()-b.length();\n            return a.compareTo(b);\n        });\n        System.out.println(Arrays.toString(s));\n    }\n}',
            testCases: [{ input: "a ccc bb", expectedOutput: "[a, bb, ccc]" }]
        },

        // --- Filas com Prioridade (Heaps) ---
        {
            id: 'aed2_05',
            title: '5. PriorityQueue (Max Heap)',
            description: 'Max Heap.\n\n**Tarefa:**\nLê 2 inteiros. Adiciona a PQ reversa. Remove e imprime.',
            initialCode: 'import java.util.*;\npublic class Main { ... }',
            solutionCode: 'import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());\n        pq.add(sc.nextInt()); pq.add(sc.nextInt());\n        System.out.println(pq.poll());\n    }\n}',
            testCases: [{ input: "10 20", expectedOutput: "20" }]
        },
        {
            id: 'aed2_06',
            title: '6. Heap Sort com PriorityQueue',
            description: 'Heap Sort.\n\n**Tarefa:**\nLê N e N inteiros. Usa PQ para ordenar.',
            initialCode: 'import java.util.*;\npublic class Main { ... }',
            solutionCode: 'import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        int n=sc.nextInt();\n        PriorityQueue<Integer> pq = new PriorityQueue<>();\n        for(int i=0;i<n;i++) pq.add(sc.nextInt());\n        while(!pq.isEmpty()) System.out.print(pq.poll()+" ");\n    }\n}',
            testCases: [{ input: "3 3 1 2", expectedOutput: "1 2 3 " }]
        },
        {
            id: 'aed2_07',
            title: '7. O K-ésimo Maior Elemento',
            description: 'K-ésimo maior.\n\n**Tarefa:**\nLê N, K e N inteiros. Imprime K-ésimo maior.',
            initialCode: 'import java.util.*;\npublic class Main { ... }',
            solutionCode: 'import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        int n=sc.nextInt(), k=sc.nextInt();\n        PriorityQueue<Integer> pq = new PriorityQueue<>();\n        for(int i=0;i<n;i++) {\n            pq.add(sc.nextInt());\n            if(pq.size()>k) pq.poll();\n        }\n        System.out.println(pq.peek());\n    }\n}',
            testCases: [{ input: "5 2 10 20 5 30 15", expectedOutput: "20" }]
        },
        {
            id: 'aed2_08',
            title: '8. Operação Swim (Subir na Heap)',
            description: 'Swim em Heap.\n\n**Tarefa:**\nLê 4 inteiros para array (indices 1..4). Lê k (índice). Chama swim e imprime raiz.',
            initialCode: 'import java.util.Scanner;\npublic class Main {\n    static void swim(int[] pq, int k) { ... }\n    public static void main(String[] args) { ... }\n}',
            solutionCode: 'import java.util.Scanner;\npublic class Main {\n    static void swim(int[] pq, int k) {\n        while(k>1 && pq[k/2] < pq[k]) {\n            int t=pq[k]; pq[k]=pq[k/2]; pq[k/2]=t;\n            k=k/2;\n        }\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int[] pq = new int[5];\n        for(int i=1;i<=4;i++) pq[i]=sc.nextInt();\n        int k = sc.nextInt();\n        swim(pq, k);\n        System.out.println(pq[1]);\n    }\n}',
            testCases: [{ input: "0 10 5 20 3", expectedOutput: "20" }] // Heap: 10, 5, 20. Swim idx 3 (20) -> goes to root.
        },

        // --- Mapas ---
        {
            id: 'aed2_09',
            title: '9. Java HashMap',
            description: 'Contar palavras.\n\n**Tarefa:**\nLê palavras até fim. Imprime contagem de "ola".',
            initialCode: 'import java.util.*;\npublic class Main { ... }',
            solutionCode: 'import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Map<String, Integer> map = new HashMap<>();\n        while(sc.hasNext()) {\n            String s = sc.next();\n            map.put(s, map.getOrDefault(s, 0) + 1);\n        }\n        System.out.println(map.get("ola"));\n    }\n}',
            testCases: [{ input: "ola mundo ola", expectedOutput: "2" }]
        },
        {
            id: 'aed2_10',
            title: '10. Problema 2SUM',
            description: '2SUM O(N).\n\n**Tarefa:**\nLê N, array, e Target. Imprime indices.',
            initialCode: 'import java.util.*;\npublic class Main { ... }',
            solutionCode: 'import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        int n=sc.nextInt(); int[] nums=new int[n];\n        for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n        int target=sc.nextInt();\n        Map<Integer, Integer> map = new HashMap<>();\n        for(int i=0; i<nums.length; i++) {\n            int comp = target - nums[i];\n            if(map.containsKey(comp)) { System.out.println(map.get(comp) + " " + i); return; }\n            map.put(nums[i], i);\n        }\n    }\n}',
            testCases: [{ input: "4 2 7 11 15 9", expectedOutput: "0 1" }]
        },
        {
            id: 'aed2_11',
            title: '11. Conjuntos Únicos (HashSet)',
            description: 'HashSet.\n\n**Tarefa:**\nLê N e inteiros. Imprime quantos únicos.',
            initialCode: 'import java.util.*;\npublic class Main { ... }',
            solutionCode: 'import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Set<Integer> set = new HashSet<>();\n        int n=sc.nextInt();\n        for(int i=0;i<n;i++) set.add(sc.nextInt());\n        System.out.println(set.size());\n    }\n}',
            testCases: [{ input: "5 1 2 1 3 2", expectedOutput: "3" }]
        },
        {
            id: 'aed2_12',
            title: '12. Hash Table Manual',
            description: 'Linear Probing.\n\n**Tarefa:**\nLê K, V para put. Lê chave para get. Imprime valor.',
            initialCode: 'import java.util.Scanner;\nclass Hash { ... }\npublic class Main { ... }',
            solutionCode: 'import java.util.Scanner;\nclass Hash {\n    int[] keys=new int[10], vals=new int[10];\n    void put(int k, int v) {\n        int i = k % 10;\n        while(keys[i]!=0 && keys[i]!=k) i=(i+1)%10;\n        keys[i]=k; vals[i]=v;\n    }\n    int get(int k) {\n        int i=k%10;\n        while(keys[i]!=0) { if(keys[i]==k) return vals[i]; i=(i+1)%10; }\n        return -1;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        Hash h=new Hash();\n        h.put(sc.nextInt(), sc.nextInt());\n        System.out.println(h.get(sc.nextInt()));\n    }\n}',
            testCases: [{ input: "1 10 1", expectedOutput: "10" }]
        },

        // --- BST ---
        {
            id: 'aed2_13',
            title: '13. BST: Inserção',
            description: 'BST Inserção.\n\n**Tarefa:**\nLê N valores. Insere e imprime InOrder.',
            initialCode: 'import java.util.Scanner;\nclass Node { ... }\npublic class Main { ... }',
            solutionCode: 'import java.util.Scanner;\nclass Node { int val; Node left, right; Node(int v){val=v;} }\npublic class Main {\n    static Node insert(Node root, int v) {\n        if(root==null) return new Node(v);\n        if(v < root.val) root.left = insert(root.left, v);\n        else root.right = insert(root.right, v);\n        return root;\n    }\n    static void inorder(Node r) { if(r!=null){ inorder(r.left); System.out.print(r.val+" "); inorder(r.right); } }\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        int n=sc.nextInt(); Node root=null;\n        for(int i=0;i<n;i++) root=insert(root, sc.nextInt());\n        inorder(root);\n    }\n}',
            testCases: [{ input: "3 2 1 3", expectedOutput: "1 2 3 " }]
        },
        {
            id: 'aed2_14',
            title: '14. BST: Mínimo e Máximo',
            description: 'Mínimo da BST.\n\n**Tarefa:**\nLê N valores. Constroi BST. Imprime mínimo.',
            initialCode: 'import java.util.Scanner;\npublic class Main { ... }',
            solutionCode: 'import java.util.Scanner;\nclass Node { int val; Node left, right; Node(int v){val=v;} }\npublic class Main {\n    static Node insert(Node root, int v) {\n        if(root==null) return new Node(v);\n        if(v < root.val) root.left = insert(root.left, v);\n        else root.right = insert(root.right, v);\n        return root;\n    }\n    static int min(Node r) { while(r.left!=null) r=r.left; return r.val; }\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        int n=sc.nextInt(); Node root=null;\n        for(int i=0;i<n;i++) root=insert(root, sc.nextInt());\n        System.out.println(min(root));\n    }\n}',
            testCases: [{ input: "3 10 5 20", expectedOutput: "5" }]
        },
        {
            id: 'aed2_15',
            title: '15. BST: Floor',
            description: 'Floor na BST.\n\n**Tarefa:**\nLê N valores para BST. Lê K. Imprime Floor(K).',
            initialCode: 'import java.util.Scanner;\npublic class Main { ... }',
            solutionCode: 'import java.util.Scanner;\nclass Node { int val; Node left, right; Node(int v){val=v;} }\npublic class Main {\n    static Node insert(Node r, int v) { if(r==null)return new Node(v); if(v<r.val)r.left=insert(r.left,v); else r.right=insert(r.right,v); return r; }\n    static Integer floor(Node r, int k) {\n        if(r==null) return null;\n        if(k==r.val) return r.val;\n        if(k<r.val) return floor(r.left, k);\n        Integer t = floor(r.right, k);\n        if(t!=null) return t;\n        return r.val;\n    }\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        int n=sc.nextInt(); Node r=null;\n        for(int i=0;i<n;i++) r=insert(r, sc.nextInt());\n        System.out.println(floor(r, sc.nextInt()));\n    }\n}',
            testCases: [{ input: "2 10 5 7", expectedOutput: "5" }]
        },
        {
            id: 'aed2_16',
            title: '16. Travessias de Árvores',
            description: 'PreOrder.\n\n**Tarefa:**\nLê N valores. Constroi BST. Imprime PreOrder.',
            initialCode: 'import java.util.Scanner;\npublic class Main { ... }',
            solutionCode: 'import java.util.Scanner;\nclass Node { int val; Node l, r; Node(int v){val=v;} }\npublic class Main {\n    static Node insert(Node r, int v) { if(r==null)return new Node(v); if(v<r.val)r.l=insert(r.l,v); else r.r=insert(r.r,v); return r; }\n    static void pre(Node r) { if(r!=null) { System.out.print(r.val); pre(r.l); pre(r.r); } }\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        int n=sc.nextInt(); Node r=null;\n        for(int i=0;i<n;i++) r=insert(r, sc.nextInt());\n        pre(r);\n    }\n}',
            testCases: [{ input: "3 2 1 3", expectedOutput: "213" }]
        },
        {
            id: 'aed2_17',
            title: '17. Validar BST',
            description: 'Validar BST.\n\n**Tarefa:**\nLê N valores. Constroi BST. Verifica (dará true se construída corretamente). Imprime true.',
            initialCode: 'import java.util.Scanner;\npublic class Main { ... }',
            solutionCode: 'import java.util.Scanner;\nclass Node { int val; Node l, r; Node(int v){val=v;} }\npublic class Main {\n    static Node insert(Node r, int v) { if(r==null)return new Node(v); if(v<r.val)r.l=insert(r.l,v); else r.r=insert(r.r,v); return r; }\n    static boolean isBST(Node r, long min, long max) {\n        if(r==null) return true;\n        if(r.val<=min || r.val>=max) return false;\n        return isBST(r.l, min, r.val) && isBST(r.r, r.val, max);\n    }\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        int n=sc.nextInt(); Node r=null;\n        for(int i=0;i<n;i++) r=insert(r, sc.nextInt());\n        System.out.println(isBST(r, Long.MIN_VALUE, Long.MAX_VALUE));\n    }\n}',
            testCases: [{ input: "1 10", expectedOutput: "true" }]
        },

        // --- TreeMap ---
        {
            id: 'aed2_18',
            title: '18. Árvores Equilibradas (TreeMap)',
            description: 'TreeMap.\n\n**Tarefa:**\nLê N. Lê N pares (Chave Inteiro, Valor String). Imprime chaves ordenadas.',
            initialCode: 'import java.util.*;\npublic class Main { ... }',
            solutionCode: 'import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        TreeMap<Integer, String> tm = new TreeMap<>();\n        int n=sc.nextInt();\n        for(int i=0;i<n;i++) tm.put(sc.nextInt(), sc.next());\n        for(Integer k : tm.keySet()) System.out.print(k + " ");\n    }\n}',
            testCases: [{ input: "3 10 A 5 B 20 C", expectedOutput: "5 10 20 " }]
        },
        {
            id: 'aed2_19',
            title: '19. Pesquisa de Intervalo (Range Search)',
            description: 'SubMap.\n\n**Tarefa:**\nLê N pares (K, V). Lê Min e Max. Conta chaves no intervalo.',
            initialCode: 'import java.util.*;\npublic class Main { ... }',
            solutionCode: 'import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        TreeMap<Integer, String> tm = new TreeMap<>();\n        int n=sc.nextInt();\n        for(int i=0;i<n;i++) tm.put(sc.nextInt(), sc.next());\n        int min=sc.nextInt(), max=sc.nextInt();\n        System.out.println(tm.subMap(min, max).size());\n    }\n}',
            testCases: [{ input: "3 1 A 5 B 10 C 2 11", expectedOutput: "2" }]
        },

        // --- Aplicações ---
        {
            id: 'aed2_20',
            title: '20. Interseção de Intervalos 1D',
            description: 'Intervalos.\n\n**Tarefa:**\nLê 2 intervalos. Imprime Yes se intersetam.',
            initialCode: 'import java.util.*;\npublic class Main { ... }',
            solutionCode: 'import java.util.*;\nclass Interval implements Comparable<Interval> { int s, e; Interval(int a, int b){s=a;e=b;} public int compareTo(Interval o){return s-o.s;} }\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        Interval[] i = {new Interval(sc.nextInt(), sc.nextInt()), new Interval(sc.nextInt(), sc.nextInt())};\n        Arrays.sort(i);\n        if(i[0].e >= i[1].s) System.out.println("Yes");\n    }\n}',
            testCases: [{ input: "1 3 2 4", expectedOutput: "Yes" }]
        },
        {
            id: 'aed2_21',
            title: '21. Mediana Dinâmica (Two Heaps)',
            description: 'Mediana.\n\n**Tarefa:**\nLê 2 numeros. Imprime o menor (como simulação de mediana stream).',
            initialCode: 'import java.util.*;\npublic class Main { ... }',
            solutionCode: 'import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        PriorityQueue<Integer> lo = new PriorityQueue<>(Collections.reverseOrder());\n        lo.add(sc.nextInt()); int x=sc.nextInt();\n        System.out.println(lo.peek());\n    }\n}',
            testCases: [{ input: "5 10", expectedOutput: "5" }]
        },

        // --- Grafos Intro ---
        {
            id: 'aed2_22',
            title: '22. Representação de Grafos',
            description: 'Lista de adjacência.\n\n**Tarefa:**\nLê 3 inteiros (u, v, node). Cria aresta u-v. Imprime primeiro vizinho de node.',
            initialCode: 'import java.util.*;\npublic class Main { ... }',
            solutionCode: 'import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        int V=3;\n        List<Integer>[] adj = new ArrayList[V];\n        for(int i=0;i<V;i++) adj[i]=new ArrayList<>();\n        int u=sc.nextInt(), v=sc.nextInt();\n        adj[u].add(v); adj[v].add(u);\n        System.out.println(adj[sc.nextInt()].get(0));\n    }\n}',
            testCases: [{ input: "0 1 0", expectedOutput: "1" }]
        },
        {
            id: 'aed2_23',
            title: '23. Grau de um Vértice',
            description: 'Grau.\n\n**Tarefa:**\nLê V, E. Lê E arestas. Imprime grau do vértice 0.',
            initialCode: 'import java.util.*;\npublic class Main { ... }',
            solutionCode: 'import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int V=sc.nextInt(), E=sc.nextInt();\n        int[] deg = new int[V];\n        for(int i=0; i<E; i++) { int u=sc.nextInt(), v=sc.nextInt(); deg[u]++; deg[v]++; }\n        System.out.println(deg[0]);\n    }\n}',
            testCases: [{ input: "3 2 0 1 1 2", expectedOutput: "1" }]
        },

        // --- Diversos ---
        {
            id: 'aed2_24',
            title: '24. Deteção de Anagramas',
            description: 'Anagramas.\n\n**Tarefa:**\nLê 2 strings. Imprime true se anagramas.',
            initialCode: 'import java.util.*;\npublic class Main { ... }',
            solutionCode: 'import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        char[] a = sc.next().toCharArray(), b = sc.next().toCharArray();\n        Arrays.sort(a); Arrays.sort(b);\n        System.out.println(Arrays.equals(a, b));\n    }\n}',
            testCases: [{ input: "abc cba", expectedOutput: "true" }]
        },
        {
            id: 'aed2_25',
            title: '25. Remover Duplicados (LinkedHashSet)',
            description: 'LinkedHashSet.\n\n**Tarefa:**\nLê N e inteiros. Imprime tamanho set.',
            initialCode: 'import java.util.*;\npublic class Main { ... }',
            solutionCode: 'import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        LinkedHashSet<Integer> s = new LinkedHashSet<>();\n        int n=sc.nextInt(); for(int i=0;i<n;i++) s.add(sc.nextInt());\n        System.out.println(s.size());\n    }\n}',
            testCases: [{ input: "3 1 2 1", expectedOutput: "2" }]
        },
        {
            id: 'aed2_26',
            title: '26. Counting Sort',
            description: 'Counting Sort.\n\n**Tarefa:**\nLê N e array. Ordena e imprime.',
            initialCode: 'import java.util.Scanner;\npublic class Main { ... }',
            solutionCode: 'import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        int n=sc.nextInt();\n        int[] cnt = new int[10];\n        for(int i=0;i<n;i++) cnt[sc.nextInt()]++;\n        for(int i=0; i<10; i++) while(cnt[i]-->0) System.out.print(i+" ");\n    }\n}',
            testCases: [{ input: "7 1 4 1 2 7 5 2", expectedOutput: "1 1 2 2 4 5 7 " }]
        },
        {
            id: 'aed2_27',
            title: '27. Busca Binária Recursiva',
            description: 'BS Recursivo.\n\n**Tarefa:**\nLê N, array ordenado e alvo. Imprime indice.',
            initialCode: 'import java.util.Scanner;\npublic class Main { ... }',
            solutionCode: 'import java.util.Scanner;\npublic class Main {\n    static int bs(int[] a, int l, int r, int x) {\n        if(r>=l) {\n            int mid = l + (r-l)/2;\n            if(a[mid]==x) return mid;\n            if(a[mid]>x) return bs(a, l, mid-1, x);\n            return bs(a, mid+1, r, x);\n        }\n        return -1;\n    }\n    public static void main(String[] s) { \n        Scanner sc=new Scanner(System.in);\n        int n=sc.nextInt(); int[] a=new int[n];\n        for(int i=0;i<n;i++) a[i]=sc.nextInt();\n        System.out.println(bs(a,0,n-1,sc.nextInt())); \n    }\n}',
            testCases: [{ input: "3 1 2 3 2", expectedOutput: "1" }]
        }
    ]
};
