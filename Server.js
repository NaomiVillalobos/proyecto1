const express = require("express");
const sql = require("msnodesqlv8");
const path = require("path");
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
const public = path.join(__dirname, "public");
app.use(express.json());
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

const connectionString =
    "server=.;Database=pets;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";

const queryHandler = (sqlQuery, res) => {
    sql.query(connectionString, sqlQuery, (err, rows) => {
        if (err) {
            return res.send(
                JSON.stringify({
                    errCode: "500",
                    err,
                    sqlQuery,
                })
            );
        }
        return res.send(JSON.stringify(rows));
    });
};

let users = [{
        name: "Nahomi Villalobos",
        mail: "nao@gmail.com",
        group: "admin",
        id: 0
    },
    {
        name: "Jose Salas",
        mail: "jose@gmail.com",
        group: "other 1",
        id: 1
    },
    {
        name: "Bruno Salas",
        mail: "ferm@gmail.com",
        group: "other 2",
        id: 2
    },
    {
        name: "Valentio Salas V.",
        mail: "vale@gmail.com",
        group: "other 3",
        id: 3
    },
];

app.post("/app/auth", (request, response) => {
    const user = {
        name: request.body.name,
        password: request.body.password
    };
    if (user.name && user.password && user.name === 'admin' && user.password === 'root') {
        request.session.loggedin = true;
        request.session.username = user.name;
        response.send(
            JSON.stringify({
                errCode: "200"
            }))
    } else {
        response.send(
            JSON.stringify({
                errCode: "500"
            }))
    }
    response.end();
})


const CHECK_LOGGED = (req, res, ok) => {
    if (req.session.loggedin) {
        ok();
    } else {
        res.send(JSON.stringify({
            errCode: '403'
        }))
    }
}

app.get("/logout", (req, res) => {
    req.session.destroy();
})


app.get("/app/users", (req, res) => {
    CHECK_LOGGED(req, res, ok => {
        res.send(JSON.stringify(users)); //@TODO-Add query
    })
});

app.delete("/app/users/delete/:id", (req, res) => {
    users = users.filter(user => user.id != req.params.id)
    res.send({
        code: 200
    });
});

app.post("/app/users/add", (req, res) => {
    const respose = {
        code: 500,
        msg: "Ha ocurrido un error",
    };
    const user = req.body;
    const blanks = Object.values(user).some((value) => value.trim() === "");
    if (blanks) {
        respose.msg = "Verifique que ha ingresado todos los valores";
    } else if (user.password !== user.passwordConfirm) {
        respose.msg = "Las contraseñas no coinciden";
    } else if (user.securityQuestion !== user.securityQuestionConfirm) {
        respose.msg = "Pregunta de seguridad no coincide";
    } else {
        respose.code = 200;
        user.id = users[user.length - 1] - 1;
        users.push(user); //@TODO-Add query
    }
    res.send(JSON.stringify(respose));
});

app.get("/", (req, res) => {
    res.sendFile(path.join(public, "index.html"));
});

app.delete("/delete/:id", (req, res) => {
    const query = `Delete from pets where id='${req.params.id}'`;
    queryHandler(query, res);
});

app.put("/set/:id", (req, res) => {
    const query = `Update pets set name = '${req.body.name}', specie= '${req.body.specie}' where id='${req.params.id}'`;
    queryHandler(query, res);
});

app.post("/newPet", (req, res) => {
    const query = `Insert into pets VALUES (NEXT VALUE FOR petsSeq, '${req.body.name}', '${req.body.specie}') `;
    queryHandler(query, res);
});

app.get("/list", (req, res) => {
    const query = "SELECT * from pets";
    queryHandler(query, res);
});

app.listen(4000, (ok) => console.log("Corriendo..."));