/*
    0 obter um usuario
    1 Obter o numero de telefone de um usuario a patir de seu Id
    2 obter o endereço do usiario pelo Id
*/

function obterUsuario(callback) {
    setTimeout(()=>{
        return callback(null, {
            id: 1,
            nome: 'João',
            dataNascimento: new Date()

        })
    }, 1000)

}

function obterTelefone(idUsuario, callback) {
    setTimeout(()=>{
        return callback(null,{
            telefone: '1199002',
            ddd: 21
        })
    }, 2000)
    
}

function obterEndereco(idUsuario, callback) {
    setTimeout(()=>{
        return callback(null,{
            rua: "dos bobos",
            numero: 0
        })
    },2000)
}

function resolverUsuario(erro, usuario) {
    console.list('usuario', usuario)

}

obterUsuario(function resolverUsuario(error, usuario) {
    // null || "" || 0 === false
    if (error) {
        console.error('DEU RUIM em USUARIO', error)
        return;
    }
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
        if (error1) {
            console.error('DEU RUIM em USUARIO', error1)
            return;
        }
        obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
            if (error2) {
                console.error('DEU RUIM em USUARIO', error2)
                return;
            }

            console.log(`
            Nome: ${usuario.nome},
            Endereço: ${endereco.rua}, ${endereco.numero}
            Telefone: (${telefone.ddd}) ${telefone.telefone}
            `)
            console.table(usuario)

        })
    })
})
//const telefone = obterTelefone(usuario.id)

console.log('telefone')