const database = require('../infra/database');

exports.getUsers= function(){
    return database.query('select * from projetofinal.usuarios');
}
exports.getUser= function(usuario){
    const query = `select * from projetofinal.usuarios where usuario='${usuario}';`;
    return database.query(query);
}
exports.getUserById= function(id){
    const query = `select * from projetofinal.usuarios where id='${id}';`;
    return database.query(query);
}

exports.insertUser= function(usuario,senha){
    const query = `insert into projetoFinal.usuarios (usuario, senha) values ('${usuario}', '${senha}');`;
    return database.query(query);
}

exports.updateUser= function(usuario,senha){
    const query = `update projetoFinal.usuarios set senha='${senha}' where usuario='${usuario}';`;
    console.log(query)
    return database.query(query);
}
exports.deleteUser= function(usuarioId){
    const query = `delete from projetoFinal.usuarios  WHERE id=${usuarioId};`;
    return database.query(query);
}