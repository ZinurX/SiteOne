const express = require('express')
const app = express()
app.set('view engine','ejs')
app.use(express.static('public'))

app.use(express.urlencoded({extended: false}))
app.get('/',(req,res) => {
    //res.send('hi')
    //res.sendFile(__dirname+'\\expr.html')
    res.render('expr')
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/blogPost',(req,res)=>{
    res.render('about')
})


app.get('/user/:username',(req,res) => {
    let data = { username: req.params.username,
        hobbies: ['Football','Skate','Golf']}
    res.render('user',data)
})

app.post('/check-user',(req,res) => {
    let username=req.body.username
    if(username == "")
    return res.redirect('/')
    else return res.redirect('/user/'+username)
})

app.listen(3000,()=>{
    console.log('running')
})



