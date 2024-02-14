import express from 'express'
import {Person} from './Person.js'

const app = express()
const router = express.Router()
const port = +process.env.PORT || 4400

app.use(
    express.json(),
    router
)

router.get('^/$|/class', (req,res)=>{
    res.json({
        status : res.statusMessage,
        msg : 'Welcome home'
    })
})

router.get('/person1', (req,res)=>{
    let person1 = new Person()
    person1.FirstName = 'Shawn'
    person1.LastName = "Louw"
    person1.Age = 24
    person1.display()
    res.end('Please check the console')
})

router.get('/person2', (req,res)=>{
    let person2 = new Person()
    person2.FirstName = "Qaqmbile"
    person2.LastName = "Mqikela"
    person2.Age = 20
    person2.display()
    res.end('Please check the console')
})


app.listen(port, ()=>{
    console.log( `Server is running on http://localhost:${port}`);
})