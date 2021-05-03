const express = require('express');

const server = express();

server.use(express.json());

const users = ['Guilherme', 'Blocked', 'Reverb']
// users list
server.get('/users/:index', (req, res) => {

    const {index} = req.params;

    return res.json({message: `Como assim ${users[index]}? O que que vc ta fazendo no meu Id ${index}?`});
    
});
// all users list
server.get('/users', (req, res) => {
    return res.json(users);
});
// create users
server.post("/users", (req, res) => {

    const {name} = req.body;

    users.push(name);

    return res.json(users);

});
// user edit
server.put("/users/:index", (req, res) => {

    const {index} = req.params;
    const {name} = req.body;

    users[index] = name;

    return res.json(users);

});
// user delete
server.delete("/users/:index", (req, res) => {
    
    const {index} = req.params;

    users.splice(index, 1);

    return res.json(users);
});

server.listen(3000)