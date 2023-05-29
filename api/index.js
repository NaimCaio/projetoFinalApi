

const usersService= require('./service/usersService');
const notasService= require('./service/notasService');
const express = require('express');
const app = express()

const route = express.Router()

route.get('/', (req, res) => {
    return res.json({
        success: true,
        message: "Sucesso!"
    })
})

route.get('/users',async function (req, res){
    const users = await usersService.getUsers();
    res.json(users);
});
route.get('/users/:id',async function (req, res){
    
});

route.post('/users',async function (req, res){
    try {
        const userCriado = await usersService.createNewUser(req.body.usuario, req.body.senha);
        res.json(userCriado);
    } catch (error) {
        res.status(500).send(error.toString())
    }
    
    
})

route.put('/users/',async function (req, res){
    try {
        const usuarioAtualizxado= await usersService.updateUser(req.body.usuario, req.body.senha);
        res.json(usuarioAtualizxado);
    } catch (error) {
        res.status(500).send(error)
    }
})
route.delete('/users/:id',async function (req, res){
    
})

route.get('/notas',async function (req, res){

   const notas = await notasService.getNotas()
   res.json(notas);
});
route.get('/notasUsuario/:id',async function (req, res){
    const notaCriada = await notasService.getUsuarioNotas(req.params.id);
    res.json(notaCriada);
});

route.post('/criarNota',async function (req, res){
    try {
        const notaCriada = await notasService.createNota(req.body.nota, req.body.usuario);
        res.json(notaCriada);
    } catch (error) {
        res.status(500).send(error.toString())
    }
    
    
})

route.put('/atualizaNota',async function (req, res){
    try {
        const usuarioAtualizxado= await notasService.updateNota(req.body);
        res.json(usuarioAtualizxado);
    } catch (error) {
        res.status(500).send(error.toString())
    }
})
route.delete('/nota/:id',async function (req, res){
    try {
        const notaDeletada = await notasService.deleteNota(req.params.id);
        res.json(req.params.id);
    } catch (error) {
        res.status(500).send(error.toString())
    }
})



app.use(route)

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log('Server running in ' + port)
})
