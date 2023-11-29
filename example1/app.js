//constant =>  variable yang tidak akan diubah2 lagi.
const express = require('express')
const cors = require('cors')

const app = express() 

app.use(express.json()) // pendefinisian content type ke json
app.use(express.urlencoded({extended:true})) //file form upload dll


const db = require('./app/models/')
db.mongoose
    .connect(db.url, {
        // useNewUrlParser:true,
        // useUnifiedTopology:true
    })
    .then(()=>{
        console.log(`Database Connected`)
    }).catch((err)=>{
        console.log(`Cannot connect to database!`, err)
        process.exit()
    })

// define url
// method app (object express) sehingga dapat memanggil method get
app.get('/', (req, res) =>{
    res.json({ //res merupakan parameter dari method get yang digunakan untuk mengirmkan respon ke client, sedangkan json merupakan method yang digunakan untuk mengenerate kedalam bentuk json
        message: "Welcome"
    })
})

const PORT = 8000
app.listen(PORT, ()=> { //Arrow function, jika berhassil akan menjalankan command bawahnya
    console.log(`server is running on http://localhost:${PORT}`)
})

