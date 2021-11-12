const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

    //bodyParser
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded ({
        extended: true
    }));

    //PADRÂO!!!
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');
    app.use('/public', express.static(path.join(__dirname, 'public')));
    app.set('views', path.join(__dirname, '/views')); 

    var tarefas = ['Arrumar o quarto', 'Comprar no supermercado'];

    app.post('/', (req,res) => {
        tarefas.push(req.body.tarefa);
        res.render('index', {tarefasList:tarefas});

    })


app.get('/', (req , res) => {

    res.render('index', {tarefasList:tarefas});

});

app.get('/deletar/:id', ( req , res) => {

    tarefas = tarefas.filter(function(val,index){
        if(index != req.params.id){
            return val;
        }
    })
    res.render('index', {tarefasList:tarefas});
})


PORT = 3000;

app.listen(PORT, () => {
    console.log("server rodando");
});