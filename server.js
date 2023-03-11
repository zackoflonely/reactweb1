const response = require('./response');
const express = require('express')
const mysql    = require('mysql')
const server = express();
const cors = require('cors')
const bodyparser = require('body-parser');


const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'coffeshop'
});

server.use(cors())
server.use(bodyparser.urlencoded({extended:true}))
server.use(express.json())

server.get('/api/get',(req,res)=>{
    const sqlSelect = "SELECT*FROM menu";
    db.query(sqlSelect,(err,result)=>{
        res.send(result);
    });
})

server.get('/api/getmenu',(req,res)=>{
    const sqlSelect = "SELECT*FROM keranjang";
    db.query(sqlSelect,(err,result)=>{
        res.send(result);
    });
})
server.get('/api/totalharga',(req,res)=>{
    const sqlSelect = "SELECT SUM(Harga) as Totalharga, SUM(Jumlah) as Totaljumlah FROM keranjang";
    db.query(sqlSelect,(err,rows)=>{
        res.send(rows)
    });
})

server.post('/api/insert',(req,res)=>{
    const { Menu,Jumlah,Harga } = req.body
    const sqlInsert = `INSERT INTO keranjang (Menu,Jumlah,Harga) VALUES ('${Menu}',${Jumlah},${Harga})`;
    db.query(sqlInsert,(err,fields)=>{
        if(err){
            window.location.reload(false);
            throw err
        }
        if(fields.affectedRows){
            response(200,"INI INSERT","BERHASIL",res)
        }else{
            console.log("gagal")
        }
        console.log(fields)
    })
    // res.send("ok")
})
server.put('/api/update',(req,res)=>{
    const {Menu,Jumlah,Harga}=req.body
    const sqlUpdate = `UPDATE keranjang SET Jumlah = ${Jumlah}, Harga=${Harga} WHERE Menu ='${Menu}'`
    db.query(sqlUpdate,(err,fields)=>{
        if(err)throw err
        if(fields.affectedRows){
            response(200,'INI UPDATE','BERHASIL',res)    
        }else{
            console.log("gagal")
        }
        console.log(fields)
    })
})
server.delete('/api/del',(req,res)=>{
    const sqlUpdate = `TRUNCATE TABLE keranjang`
    db.query(sqlUpdate,(err,fields)=>{
        if(err)throw err
        if(fields.affectedRows){
            console.log("gagal")
        }else{
            response(200,'INI del','BERHASIL',res)    
        }
    })
})
db.connect((err)=>{
    if(err)throw err
        console.log("Sukses terhubung")
        // const sql = "SELECT image FROM menu"
        // db.query(sql,(err,result)=>{
        //     const menu = JSON.parse(JSON.stringify(result))
        //     console.log('hasil = ',menu)
        // })
        server.get("/",(req,res)=>{
                res.send("OK")
        //     })
    })

server.listen(8000, ()=>{
        console.log("Started")
    });
})
