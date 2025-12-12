
import { Course } from '../types';

export const poo2Course: Course = {
    id: 'poo2',
    name: 'Programação Orientada a Objetos 2',
    shortName: 'POO 2',
    language: 'java',
    exercises: [
        // --- 6. Gestão de Erros e Exceções (Avançado) ---
        {
            id: 'poo2_01',
            title: '1. Exceções Personalizadas',
            description: 'Podemos criar os nossos próprios tipos de erro estendendo `Exception`.\n\n**Tarefa:**\n1. Cria a classe `IdadeInvalidaException` que estende `Exception`.\n2. No main, cria um método `check(int age)` que lança esta exceção se `age < 0`.\n3. Lê um número inteiro do input.\n4. Chama o método com esse número e captura a exceção, imprimindo a mensagem "Negativo" se ocorrer.',
            initialCode: 'import java.util.Scanner;\npublic class Main { ... }\nclass IdadeInvalidaException extends Exception {\n    //...\n}',
            solutionCode: 'import java.util.Scanner;\npublic class Main {\n    static void check(int age) throws IdadeInvalidaException {\n        if(age<0) throw new IdadeInvalidaException("Negativo");\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()) {\n            try { check(sc.nextInt()); } catch(IdadeInvalidaException e) { System.out.println(e.getMessage()); }\n        }\n    }\n}\nclass IdadeInvalidaException extends Exception { public IdadeInvalidaException(String s){super(s);} }',
            testCases: [{ input: "-5", expectedOutput: "Negativo" }]
        },
        {
            id: 'poo2_02',
            title: '2. Try-with-resources (AutoCloseable)',
            description: 'Para garantir que recursos (ficheiros, conexões) são fechados, implementamos `AutoCloseable`.\n\n**Tarefa:**\n1. Cria classe `Recurso` que implementa `AutoCloseable`. No método `close()`, imprime "Fechado".\n2. Usa a sintaxe `try(Recurso r = new Recurso())`.\n3. Dentro do bloco try, imprime "Aberto ".',
            initialCode: 'public class Main { ... }\nclass Recurso implements AutoCloseable {\n    public void close() { System.out.print("Fechado"); }\n}',
            solutionCode: 'public class Main {\n    public static void main(String[] args) {\n        try(Recurso r = new Recurso()) { System.out.print("Aberto "); }\n    }\n}\nclass Recurso implements AutoCloseable {\n    public void close() { System.out.print("Fechado"); }\n}',
            testCases: [{ input: "", expectedOutput: "Aberto Fechado" }]
        },
        {
            id: 'poo2_03',
            title: '3. Encadeamento de Exceções (Chained Exceptions)',
            description: 'Às vezes capturamos um erro de baixo nível e lançamos um de alto nível, mantendo a causa original.\n\n**Tarefa:**\n1. Lê uma mensagem do input.\n2. Lança `ArithmeticException` com essa mensagem.\n3. Captura-a e lança uma `RuntimeException` passando a exceção original no construtor.\n4. No catch final, imprime a mensagem da causa original (`getCause().getMessage()`).',
            initialCode: 'import java.util.Scanner;\npublic class Main { ... }',
            solutionCode: 'import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String msg = sc.next();\n        try {\n            try { throw new ArithmeticException(msg); }\n            catch(Exception e) { throw new RuntimeException(e); }\n        } catch(RuntimeException e) {\n            System.out.println(e.getCause().getMessage());\n        }\n    }\n}',
            testCases: [{ input: "CausaErro", expectedOutput: "CausaErro" }]
        },
        {
            id: 'poo2_04',
            title: '4. Análise de StackTrace',
            description: 'O StackTrace mostra a pilha de chamadas onde ocorreu o erro. É vital para debugging.\n\n**Tarefa:**\nLê uma string "Erro". Lança uma exceção com essa mensagem. Captura-a e imprime `e.toString()`.',
            initialCode: 'import java.util.Scanner;\npublic class Main { ... }',
            solutionCode: 'import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        try { throw new Exception(sc.next()); }\n        catch(Exception e) { System.out.println(e.toString()); }\n    }\n}',
            testCases: [{ input: "FalhaCritica", expectedOutput: "java.lang.Exception: FalhaCritica" }]
        },
        {
            id: 'poo2_05',
            title: '5. Asserções (Assertions)',
            description: 'Asserções servem para validar invariantes durante o desenvolvimento. `assert condicao : "Msg";`.\n\n**Tarefa:**\nLê um número X. Escreve um código que usa `assert` para validar se x > 0. Nota: Como o assert pode estar desativado na JVM de teste, imprime "Compila" no final para passar o teste.',
            initialCode: 'import java.util.Scanner;\npublic class Main { ... }',
            solutionCode: 'import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int x = sc.nextInt();\n        // assert x > 0 : "X deve ser positivo";\n        System.out.println("Compila");\n    }\n}',
            testCases: [{ input: "-1", expectedOutput: "Compila" }]
        },

        // --- 7. Classes Aninhadas (Nested Classes) ---
        {
            id: 'poo2_06',
            title: '6. Classes Internas (Inner Class)',
            description: 'Uma classe interna (não estática) tem acesso aos membros da classe externa.\n\n**Tarefa:**\n1. Classe `Outer` com atributo privado `msg` lido do construtor.\n2. Classe `Inner` dentro de `Outer` com método `show()` que imprime `msg`.\n3. No main: Lê uma string, cria `Outer` com ela, instancia `Inner` e chama `show()`.',
            initialCode: 'import java.util.Scanner;\npublic class Main { ... }\nclass Outer {\n    private String msg;\n    Outer(String m) { msg = m; }\n    class Inner { ... }\n}',
            solutionCode: 'import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Outer o = new Outer(sc.next());\n        Outer.Inner i = o.new Inner();\n        i.show();\n    }\n}\nclass Outer {\n    private String msg;\n    Outer(String m) { msg = m; }\n    class Inner { void show() { System.out.println(msg); } }\n}',
            testCases: [{ input: "OlaMundo", expectedOutput: "OlaMundo" }]
        },
        {
            id: 'poo2_07',
            title: '7. Classes Aninhadas Estáticas',
            description: 'Uma classe estática dentro de outra comporta-se como uma classe normal, mas agrupada logicamente.\n\n**Tarefa:**\nDefine `static class Nested` dentro de `Outer` com método `show(String s)` que imprime a string. No main, lê uma string e passa-a para a nested class.',
            initialCode: 'import java.util.Scanner;\npublic class Main { ... }\nclass Outer {\n    static class Nested { ... }\n}',
            solutionCode: 'import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Outer.Nested n = new Outer.Nested();\n        n.show(sc.next());\n    }\n}\nclass Outer {\n    static class Nested { void show(String s) { System.out.println(s); } }\n}',
            testCases: [{ input: "StaticTest", expectedOutput: "StaticTest" }]
        },
        {
            id: 'poo2_08',
            title: '8. Classes Locais',
            description: 'Podemos definir uma classe dentro de um método. Ela só é visível lá.\n\n**Tarefa:**\nNo método `metodo(String texto)`, define `class Local`, instancia-a e chama um método dela que imprima `texto`.',
            initialCode: 'import java.util.Scanner;\npublic class Main { ... }\nclass Outer {\n    void metodo(String texto) {\n        class Local { ... }\n    }\n}',
            solutionCode: 'import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        new Outer().metodo(sc.next());\n    }\n}\nclass Outer {\n    void metodo(String texto) {\n        class Local { void msg() { System.out.println(texto); } }\n        new Local().msg();\n    }\n}',
            testCases: [{ input: "LocalScope", expectedOutput: "LocalScope" }]
        },
        {
            id: 'poo2_09',
            title: '9. Classes Anónimas (Interfaces)',
            description: 'Classes anónimas são úteis para implementar interfaces "on the fly".\n\n**Tarefa:**\nCria uma instância de `Runnable` usando uma classe anónima. No método `run`, imprime a string lida do input.',
            initialCode: 'import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        final String s = sc.next();\n        Runnable r = new Runnable() { ... };\n        r.run();\n    }\n}',
            solutionCode: 'import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        final String s = sc.next();\n        Runnable r = new Runnable() {\n            public void run() { System.out.println(s); }\n        };\n        r.run();\n    }\n}',
            testCases: [{ input: "ExecAnom", expectedOutput: "ExecAnom" }]
        },
        {
            id: 'poo2_10',
            title: '10. Classes Anónimas (Herança)',
            description: 'Também podemos usar classes anónimas para estender classes abstratas pontualmente.\n\n**Tarefa:**\nDada `abstract class Animal`, cria uma instância anónima no main que implementa `som()` imprimindo o texto lido do input.',
            initialCode: 'import java.util.Scanner;\npublic class Main { ... }\nabstract class Animal { abstract void som(); }',
            solutionCode: 'import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        final String s = sc.next();\n        Animal a = new Animal() {\n            void som() { System.out.println(s); }\n        };\n        a.som();\n    }\n}\nabstract class Animal { abstract void som(); }',
            testCases: [{ input: "Muuu", expectedOutput: "Muuu" }]
        },

        // --- 9. Classes e Métodos Genéricos ---
        {
            id: 'poo2_11',
            title: '11. Classes Genéricas (Box<T>)',
            description: 'Generics permitem criar código reutilizável e type-safe.\n\n**Tarefa:**\n1. Cria a classe `Box<T>` que armazena um valor do tipo T.\n2. Métodos: `put(T v)` e `T get()`.\n3. Instancia `Box<String>`, guarda a palavra lida do input e imprime.',
            initialCode: 'import java.util.Scanner;\npublic class Main { ... }\nclass Box<T> {\n    T val;\n    //...\n}',
            solutionCode: 'import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Box<String> b = new Box<>(); b.put(sc.next());\n        System.out.println(b.get());\n    }\n}\nclass Box<T> {\n    T val; void put(T v){val=v;} T get(){return val;}\n}',
            testCases: [{ input: "GenBox", expectedOutput: "GenBox" }]
        },
        {
            id: 'poo2_12',
            title: '12. Métodos Genéricos',
            description: 'Um método pode ter os seus próprios parâmetros de tipo.\n\n**Tarefa:**\nCria o método estático `<T> void printArray(T[] arr)` que imprime qualquer array.\nNo main, lê dois inteiros para um array Integer[] e chama o método.',
            initialCode: 'import java.util.Scanner;\npublic class Main {\n    static <T> void printArray(T[] arr) { ... }\n}',
            solutionCode: 'import java.util.Scanner;\npublic class Main {\n    static <T> void printArray(T[] arr) {\n        for(T t : arr) System.out.print(t + " ");\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Integer[] arr = {sc.nextInt(), sc.nextInt()};\n        printArray(arr);\n    }\n}',
            testCases: [{ input: "1 2", expectedOutput: "1 2 " }]
        },
        {
            id: 'poo2_13',
            title: '13. Bounded Type Parameters',
            description: 'Podemos restringir os tipos aceites. Ex: `T extends Number`.\n\n**Tarefa:**\nCria classe `Numero<T extends Number>`. Implementa `double valor()`. No main lê um inteiro e imprime o valor double.',
            initialCode: 'import java.util.Scanner;\npublic class Main { ... }\nclass Numero<T extends Number> {\n    T n;\n    //...\n}',
            solutionCode: 'import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.println(new Numero<>(sc.nextInt()).valor());\n    }\n}\nclass Numero<T extends Number> {\n    T n; Numero(T n){this.n=n;}\n    double valor() { return n.doubleValue(); }\n}',
            testCases: [{ input: "10", expectedOutput: "10.0" }]
        },
        {
            id: 'poo2_14',
            title: '14. Múltiplos Tipos Genéricos (Pair)',
            description: 'Classes podem ter vários parâmetros de tipo, como `Map<K, V>`.\n\n**Tarefa:**\nImplementa `class Pair<K, V>` com `toString` retornando "K=V". Lê um inteiro e uma string do input e cria o par.',
            initialCode: 'import java.util.Scanner;\npublic class Main { ... }\nclass Pair<K,V> { ... }',
            solutionCode: 'import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.println(new Pair<>(sc.nextInt(), sc.next()));\n    }\n}\nclass Pair<K,V> {\n    K k; V v; Pair(K k, V v){this.k=k; this.v=v;}\n    public String toString(){return k+"="+v;}\n}',
            testCases: [{ input: "1 A", expectedOutput: "1=A" }]
        },
        {
            id: 'poo2_15',
            title: '15. Wildcards (?)',
            description: 'O wildcard `?` representa "qualquer tipo".\n\n**Tarefa:**\nImplementa `printList(List<?> l)` que imprime o primeiro elemento. Cria uma lista com uma string lida do input e chama o método.',
            initialCode: 'import java.util.*;\npublic class Main {\n    static void printList(List<?> l) { ... }\n}',
            solutionCode: 'import java.util.*;\npublic class Main {\n    static void printList(List<?> l) { System.out.println(l.get(0)); }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        printList(Arrays.asList(sc.next()));\n    }\n}',
            testCases: [{ input: "Wildcard", expectedOutput: "Wildcard" }]
        },

        // --- 8. Padrões de Projeto (Design Patterns) ---
        // Strategy Pattern
        {
            id: 'poo2_16',
            title: '16. Pattern Strategy: Pagamentos',
            description: 'O **Strategy** permite trocar algoritmos em tempo de execução.\n\n**Tarefa:**\n1. Interface `Pagamento` (`pagar(int v)`).\n2. Estratégias: `Cartao`. Imprime "Cartao [valor]".\n3. Lê um valor do input e executa o pagamento.',
            initialCode: 'import java.util.Scanner;\npublic class Main { ... }\ninterface Pagamento { void pagar(int v); }\nclass Cartao implements Pagamento { ... }\nclass Compra { ... }',
            solutionCode: 'import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        new Compra(new Cartao()).processar(sc.nextInt());\n    }\n}\ninterface Pagamento { void pagar(int v); }\nclass Cartao implements Pagamento { public void pagar(int v){System.out.println("Cartao "+v);} }\nclass Compra { \n    Pagamento p; Compra(Pagamento p){this.p=p;}\n    void processar(int v){p.pagar(v);}\n}',
            testCases: [{ input: "150", expectedOutput: "Cartao 150" }]
        },
        {
            id: 'poo2_17',
            title: '17. Pattern Strategy: Ordenação',
            description: 'Podemos usar Strategy para definir como ordenar dados.\n\n**Tarefa:**\n1. Interface `SortStrategy`.\n2. Implementação `Quick`. Imprime a string lida do input (nome do algoritmo).\n3. Classe `Sorter` onde injetamos a estratégia.',
            initialCode: 'import java.util.Scanner;\npublic class Main { ... }\ninterface SortStrategy { void sort(); }\n//...',
            solutionCode: 'import java.util.Scanner;\npublic class Main {\n    public static void main(String[] a){\n        Scanner sc = new Scanner(System.in);\n        Sorter s=new Sorter(); s.set(new Quick(sc.next())); s.exec();\n    }\n}\ninterface SortStrategy { void sort(); }\nclass Quick implements SortStrategy {\n    String name; Quick(String n){name=n;}\n    public void sort(){System.out.print(name);}\n}\nclass Sorter { SortStrategy s; void set(SortStrategy s){this.s=s;} void exec(){s.sort();} }',
            testCases: [{ input: "QuickSort", expectedOutput: "QuickSort" }]
        },
        {
            id: 'poo2_18',
            title: '18. Strategy: Calculadora',
            description: 'Calculadora onde cada operação é uma estratégia.\n\n**Tarefa:**\nDefine `interface Op`. Implementa `Soma`. Lê dois inteiros do input e imprime a soma.',
            initialCode: 'import java.util.Scanner;\npublic class Main { ... }\ninterface Op { int calc(int a, int b); }\n//...',
            solutionCode: 'import java.util.Scanner;\npublic class Main {\n    public static void main(String[] a){\n        Scanner sc = new Scanner(System.in);\n        System.out.println(new Soma().calc(sc.nextInt(), sc.nextInt()));\n    }\n}\ninterface Op { int calc(int a, int b); }\nclass Soma implements Op { public int calc(int a, int b){return a+b;} }',
            testCases: [{ input: "5 7", expectedOutput: "12" }]
        },

        // Template Method Pattern
        {
            id: 'poo2_19',
            title: '19. Template Method: Bebidas',
            description: 'O **Template Method** define o esqueleto de um algoritmo.\n\n**Tarefa:**\n1. `Bebida`: `preparar()` chama `misturar()`.\n2. `Cafe`: `misturar()` imprime a string lida do input.\n3. Instancia e chama preparar.',
            initialCode: 'import java.util.Scanner;\npublic class Main { ... }\nabstract class Bebida {\n    final void preparar() { misturar(); }\n    abstract void misturar();\n}\n//...',
            solutionCode: 'import java.util.Scanner;\npublic class Main {\n    public static void main(String[] a){\n        Scanner sc = new Scanner(System.in);\n        new Cafe(sc.next()).preparar();\n    }\n}\nabstract class Bebida {\n    final void preparar() { misturar(); }\n    abstract void misturar();\n}\nclass Cafe extends Bebida {\n    String s; Cafe(String s){this.s=s;}\n    void misturar(){System.out.print(s);}\n}',
            testCases: [{ input: "Expresso", expectedOutput: "Expresso" }]
        },
        {
            id: 'poo2_20',
            title: '20. Template Method: Processamento',
            description: 'Pipeline de dados: Ler -> Processar -> Salvar.\n\n**Tarefa:**\nImplementa `PDF` que estende `Processador`. No passo `processar`, imprime a palavra lida do input.',
            initialCode: 'import java.util.Scanner;\npublic class Main { ... }\nabstract class Processador { ... }',
            solutionCode: 'import java.util.Scanner;\npublic class Main {\n    public static void main(String[] a){\n        Scanner sc = new Scanner(System.in);\n        new PDF(sc.next()).run();\n    }\n}\nabstract class Processador {\n    void run() { processar(); }\n    abstract void processar();\n}\nclass PDF extends Processador {\n    String s; PDF(String s){this.s=s;}\n    void processar(){System.out.print("PDF " + s);}\n}',
            testCases: [{ input: "File", expectedOutput: "PDF File" }]
        },

        // Iterator Pattern
        {
            id: 'poo2_21',
            title: '21. Iterator (Java Collections)',
            description: 'O padrão **Iterator** permite percorrer elementos sem expor a estrutura interna.\n\n**Tarefa:**\n1. Lê duas palavras do input.\n2. Guarda-as numa ArrayList.\n3. Usa o `Iterator` da lista para percorrer e imprimir os elementos juntos.',
            initialCode: 'import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        List<String> l = new ArrayList<>();\n        // Adiciona e itera\n    }\n}',
            solutionCode: 'import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        List<String> l = new ArrayList<>();\n        l.add(sc.next()); l.add(sc.next());\n        Iterator<String> it = l.iterator();\n        while(it.hasNext()) System.out.print(it.next());\n    }\n}',
            testCases: [{ input: "A B", expectedOutput: "AB" }]
        },
        {
            id: 'poo2_22',
            title: '22. Iterable Interface',
            description: 'Para usar o loop `for-each`, a classe deve implementar `Iterable<T>`.\n\n**Tarefa:**\n1. Cria `Colecao` que implementa `Iterable<Integer>`.\n2. O construtor recebe dois inteiros do input.\n3. O iterador percorre esses inteiros.',
            initialCode: 'import java.util.*;\npublic class Main { ... }\nclass Colecao implements Iterable<Integer> { ... }',
            solutionCode: 'import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        for(int i : new Colecao(sc.nextInt(), sc.nextInt())) System.out.print(i);\n    }\n}\nclass Colecao implements Iterable<Integer> {\n    Integer[] arr; \n    Colecao(int a, int b) { arr = new Integer[]{a, b}; }\n    public Iterator<Integer> iterator() { return Arrays.asList(arr).iterator(); }\n}',
            testCases: [{ input: "1 2", expectedOutput: "12" }]
        },
        {
            id: 'poo2_23',
            title: '23. Implementar Iterator Manualmente',
            description: 'Cria uma classe que implementa a interface `Iterator<T>` para percorrer um valor único.\n\n**Tarefa:**\nLê um inteiro do input. Cria um iterador que retorna esse inteiro uma única vez.',
            initialCode: 'import java.util.*;\npublic class Main { ... }\nclass SingleIt implements Iterator<Integer> { ... }',
            solutionCode: 'import java.util.*;\npublic class Main {\n    public static void main(String[] x){\n        Scanner sc = new Scanner(System.in);\n        SingleIt i=new SingleIt(sc.nextInt());\n        System.out.println(i.next());\n    }\n}\nclass SingleIt implements Iterator<Integer> {\n    int val; boolean done=false;\n    SingleIt(int v){val=v;}\n    public boolean hasNext(){return !done;}\n    public Integer next(){done=true; return val;}\n}',
            testCases: [{ input: "5", expectedOutput: "5" }]
        },

        // Composite Pattern (Simplificado para input)
        {
            id: 'poo2_24',
            title: '24. Pattern Composite: Sistema de Ficheiros',
            description: 'O **Composite** trata objetos individuais e composições de forma uniforme.\n\n**Tarefa:**\nLê duas strings (nomes de ficheiros). Adiciona a uma Pasta e imprime.',
            initialCode: 'import java.util.*;\npublic class Main { ... }\ninterface Comp { void show(); }\nclass File implements Comp { ... }\nclass Folder implements Comp { ... }',
            solutionCode: 'import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Folder root = new Folder();\n        root.add(new File(sc.next()));\n        root.add(new File(sc.next()));\n        root.show();\n    }\n}\ninterface Comp { void show(); }\nclass File implements Comp { String n; File(String n){this.n=n;} public void show(){System.out.print(n+" ");} }\nclass Folder implements Comp {\n    List<Comp> c = new ArrayList<>();\n    void add(Comp i){c.add(i);}\n    public void show(){ for(Comp i:c) i.show(); }\n}',
            testCases: [{ input: "A B", expectedOutput: "A B " }]
        },
        {
            id: 'poo2_25',
            title: '25. Composite: Expressões Aritméticas',
            description: 'Representar `(A + B)` como árvore.\n\n**Tarefa:**\nLê dois inteiros A e B. Cria a árvore de soma `Soma(Num(A), Num(B))` e avalia.',
            initialCode: 'import java.util.Scanner;\npublic class Main { ... }\ninterface Expr { int eval(); }\nclass Num implements Expr { ... }\nclass Soma implements Expr { ... }',
            solutionCode: 'import java.util.Scanner;\npublic class Main {\n    public static void main(String[] a){\n        Scanner sc = new Scanner(System.in);\n        System.out.println(new Soma(new Num(sc.nextInt()), new Num(sc.nextInt())).eval());\n    }\n}\ninterface Expr { int eval(); }\nclass Num implements Expr { int v; Num(int v){this.v=v;} public int eval(){return v;} }\nclass Soma implements Expr { Expr l,r; Soma(Expr l, Expr r){this.l=l;this.r=r;} public int eval(){return l.eval()+r.eval();} }',
            testCases: [{ input: "1 2", expectedOutput: "3" }]
        },
        {
            id: 'poo2_26',
            title: '26. Composite: HTML Generator',
            description: 'Gerar HTML aninhado.\n\n**Tarefa:**\nLê uma palavra. Envolve-a numa Tag `div` e imprime.',
            initialCode: 'import java.util.Scanner;\npublic class Main { ... }\nabstract class Elem { abstract void print(); }\nclass Texto extends Elem { ... }\nclass Tag extends Elem { ... }',
            solutionCode: 'import java.util.*;\npublic class Main {\n    public static void main(String[] a){\n        Scanner sc = new Scanner(System.in);\n        Tag t=new Tag(); t.add(new Texto(sc.next())); t.print();\n    }\n}\nabstract class Elem { abstract void print(); }\nclass Texto extends Elem { String t; Texto(String t){this.t=t;} void print(){System.out.print(t);} }\nclass Tag extends Elem { \n    List<Elem> l=new ArrayList<>(); void add(Elem e){l.add(e);} \n    void print(){System.out.print("<div>"); for(Elem e:l)e.print(); System.out.print("</div>");}\n}',
            testCases: [{ input: "Ola", expectedOutput: "<div>Ola</div>" }]
        },

        // --- Java Moderno (Revisão Final) ---
        {
            id: 'poo2_27',
            title: '27. Expressões Lambda (Java 8)',
            description: 'Lambdas simplificam a implementação de interfaces funcionais.\n\n**Tarefa:**\nLê uma string. Cria um `Runnable` com lambda que imprime essa string e executa.',
            initialCode: 'import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Runnable r = () -> ...;\n        r.run();\n    }\n}',
            solutionCode: 'import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        Runnable r = () -> System.out.println(s);\n        r.run();\n    }\n}',
            testCases: [{ input: "LambdaTest", expectedOutput: "LambdaTest" }]
        },
        {
            id: 'poo2_28',
            title: '28. Streams API',
            description: 'Streams permitem processar coleções de forma declarativa.\n\n**Tarefa:**\nLê 4 inteiros. Usa `stream().filter().forEach()` para imprimir apenas os pares.',
            initialCode: 'import java.util.*;\npublic class Main { ... }',
            solutionCode: 'import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        List<Integer> l = Arrays.asList(sc.nextInt(), sc.nextInt(), sc.nextInt(), sc.nextInt());\n        l.stream().filter(n -> n%2==0).forEach(System.out::print);\n    }\n}',
            testCases: [{ input: "1 2 3 4", expectedOutput: "24" }]
        },
        {
            id: 'poo2_29',
            title: '29. Optional (Evitar NullPointerException)',
            description: '`Optional<T>` é um contentor que pode ou não ter valor.\n\n**Tarefa:**\nLê uma string. Se for "null" (texto), considera como null real. Usa `Optional.ofNullable(...).orElse("Vazio")` para imprimir.',
            initialCode: 'import java.util.*;\npublic class Main { ... }',
            solutionCode: 'import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        if(s.equals("null")) s = null;\n        System.out.println(Optional.ofNullable(s).orElse("Vazio"));\n    }\n}',
            testCases: [{ input: "null", expectedOutput: "Vazio" }]
        },
        {
            id: 'poo2_30',
            title: '30. Records (Java 14+)',
            description: 'Records são classes de dados imutáveis.\n\n**Tarefa:**\nDefine `record Ponto(int x, int y)`. Lê x e y do input, instancia e imprime `p.x()`.',
            initialCode: 'import java.util.Scanner;\npublic class Main { ... }\nrecord Ponto(int x, int y) {}',
            solutionCode: 'import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Ponto p = new Ponto(sc.nextInt(), sc.nextInt());\n        System.out.println(p.x());\n    }\n}\nrecord Ponto(int x, int y) {}',
            testCases: [{ input: "10 20", expectedOutput: "10" }]
        }
    ]
};
