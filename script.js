function msg(){
    console.log("Eae rapeize, só na curiosidade?")
}
msg()

function myName(nome){
    console.log(`O meu nome é ${nome}`)
}
myName("Anthony")

function perfil(nome, idade, estilo){
    return (`Salve, meu nome é ${nome}, tenho ${idade} anos e meu estilo musical é ${estilo}`)
}

console.log(perfil ("Anthony", "17", "Rap Internacional"))

function likes(filme, musica){
    return (`Meu filme favorito é ${filme}, e minha música favorita é ${musica}`)
}
console.log(likes("a saga inteira de Harry Potter", "Myself do cantor Bazzi"))

function triplo (numero){
    return console.log(numero*15)
}
triplo (45)