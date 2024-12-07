interface Nodo<T> {
    valor: T;
    nodos?: Nodo<T>[]; // si no hay mas nodos es una hoja
}

type Arbol<T> = Nodo<T>;

const directorios: Arbol<string> = {
    valor: "src",
    nodos: [
        {
            valor: "02-entregables",
            nodos: [
                {
                    valor: "ejercicio-01.ts"
                },
                {
                    valor: "ejercicio-02.ts"
                },
                {
                    valor: "ejercicio-03.ts"
                },
                {
                    valor: "ejercicio-04.ts"
                },
                {
                    valor: "ejercicio-05.ts"
                }

            ]
        },
        {
            valor: "03-retos",
            nodos: [
                {
                    valor: "console-traces.md"
                },
                {
                    valor: "console-traces.ts"
                },
                {
                    valor: "deep-access.md"
                },
                {
                    valor: "deep-access.ts"
                },
                {
                    valor: "flatten-array.md"
                },
                {
                    valor: "flatter-array.ts"
                },
                {
                    valor: "memoization.md"
                },
                {
                    valor: "memoization.ts"
                },
                {
                    valor: "tree.md"
                },
                {
                    valor: "tree.ts"
                },
                {
                    valor: "understanding-js.md"
                },
                {
                    valor: "understanding-js.ts"
                }
            ]
        }
    ]
};




