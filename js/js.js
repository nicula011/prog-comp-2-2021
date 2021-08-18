let carro1 = new Object()
carro1.marca = "chevrolet"
carro1.modelo = "onix"
carro1.ano = 2019
carro1.cor = "preto"

console.log(carro1)

let carro2 = new Object()
carro2.marca = "Fiat"
carro2.modelo = "Palio"
carro2.ano = 2014
carro2.cor = "Banco"

console.log(carro2)

let celular = new Object()
carro1.marca = "Xiaomi"
carro1.modelo = "Mi 11"
carro1.ano = 2020
carro1.cor = "Chumbo"

console.log(celular)

let time = 
{
    nome: "Atlético mineiro",
    Libertadores: 1,
    Apelido: "Galo",
    Localização: "Minas Gerais"
}
console.log(time)

let nuvem = new Object()

nuvem["local"] = "Amazon"
nuvem["disco"] = "1 TB de SSD"
nuvem["ram"] = 8

console.log(nuvem)

let vetor = []
for(let i=0;i<4;i++)
{
    let objeto = {
        nome: prompt("Informe o nome do objeto: "),
        qtd: Number(prompt("Informe a quantidade de produtos")),
        preco: Number(prompt("Informe o preço do produto: "))
    }
    vetor.push(objeto)
}

// Calcular a média de preços do produto

let soma = 0 
for(let i=0;i<4;i++)
{
    soma + soma + vetor[i].preco
}
console.log(`A média é de ${soma/4}`)



let gerencia = () => 
{
    //cadastro das redes sociais
    let vetor = []
    for(let i=0;i<5;i++)
    {
        let objeto = 
        {
            codigo: Number(prompt(`Informe o código da rede social: `)),
            nome: prompt(`Informe o nome da rede social: `),
            link: prompt(`Informe o link da rede social: `)
        }
        vetor.push(objeto)
    }

    let vetorUsuarios = []
    for(let i=0;i<5;i++)
    {
        let objeto = 
        {
            login: prompt(`Informe o login do usuário: `),
            nome: prompt(`Informe o nome do usuário: `),
            codigo: Number(prompt(`Informe o código da rede social: `)),
            qtdpost: Number(prompt(`Informe a quantidade de posts do usuário: `))
        }

        let achou = false
        let j = 0
        while (!achou && j<5)
        {
            if(vetor[j].codigo == objeto.codigo)
            {
                vetorUsuarios.push(objeto)
                achou = true 
                alert(`Usuário inserido com sucesso`)
            }
            j++
        }
    }
    if(!achou){
        alert(`Usuário não inserido, pois a rede social não foi encontrada`)
    }
    i++
}
