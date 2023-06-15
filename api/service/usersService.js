const usersData = require('../data/usersData');
const notasData = require('../data/notasData');

exports.getUsers = function () {
    return usersData.getUsers();
}

exports.createNewUser =  async function (usuario, senha) {
    usuariobase = await usersData.getUser(usuario);
    console.log(usuariobase[0]);
    if(usuariobase[0] !=undefined){
        throw new Error('Usuario já cadastrado');
 
    }
    resp = usersData.insertUser(usuario, senha)
    return resp;
}
exports.autenticarUsuario =  async function (usuario, senha) {
    usuariobase = await usersData.getUser(usuario);
    if(usuariobase[0] ==undefined){
        throw new Error('Usuario não existe');
 
    }if(usuariobase[0].senha !=senha){
        throw new Error('senha incorreta');
 
    }
    return usuariobase;
}
exports.updateUser = async function (usuario, senha){
    //checar se usuario existe
    usuariobase = await usersData.getUser(usuario);
    if(usuariobase[0] ==undefined){
        throw new Error('Usuário não encontrado')
    }
    return usersData.updateUser(usuario,senha)
}
exports.deleteUser = async function (usuarioId){
    //checar se usuario existe
    usuariobase = await usersData.getUserById(usuarioId);
    if(usuariobase[0] ==undefined){
        throw new Error('Usuário não encontrado')
    }
    const notas= await notasData.deleteNotas(usuarioId)
    return usersData.deleteUser(usuarioId)
}