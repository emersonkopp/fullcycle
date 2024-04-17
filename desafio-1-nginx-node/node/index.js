const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    database: 'nodedb',
    user: 'root',
    password: 'root'
}
const mysql = require('mysql2')
const connection = mysql.createConnection(config)

const dbCreationCmd = 'create table if not exists people(id int not null auto_increment primary key, name varchar(255))'
const insertCmd = `insert into people(name) values(?)`
const selectCmd = `select id, name from people`

connection.query(dbCreationCmd, function (err, result) {
    if (err) throw err;
    console.log("Table created");
})

app.get('/', (req,res) => {
    connection.query(insertCmd, 'Emerson', function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");

        connection.query(selectCmd, function(err, rows){
            if (err) throw err;
            let resp = '<h1>Full Cycle</h1>'
            rows.forEach(p => {
                resp += '<p>' + p.id + ': ' + p.name + '</p>'
            })
            res.send(resp)
        })
    })
})

app.listen(port, () => {
    console.log('Running at port ' + port)
})