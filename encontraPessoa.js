const participantes = [
    { nome: "João" },
    { nome: "Carlos" },
    { nome: "Ana" },
    { nome: "Beatriz" },
    { nome: "Maria" },
    { nome: "Ana Clara" },
    { nome: "Joana" },
    { nome: "Augusto" },
    { nome: "Renan" },
    { nome: "Patricia" },
    { nome: "Renato" },
    { nome: "José" },
    { nome: "Roberto" },
    { nome: "Sara" },
    { nome: "Junior" },
    { nome: "Pedro" },
    { nome: "Vitor" },
    { nome: "Antonio" },
]

for (let localizar = 0; localizar < participantes.length; localizar++) {
    participantes[localizar].nome == "Carlos" ?
        console.log(`
        Galera... 
        Achei ${participantes[localizar].nome} está na posição ${localizar + 1}, corre lá!!
        `) : ''
}