let express = require("express")
let app = express()
let port = process.env.port || 3000;

app.use(express.static(__dirname + "/"));

app.get('/', (req, res) => {
    res.render('index.html');
});

app.get('/addTwoNumbers', (req, res) => {
    //let payLoad = {}
    let statusCode = 200;
    let sucessMessage = 'successful';
    let number1 = req.query.number1; //1
    let number2 = req.query.number2; //2
    let data = parseInt(number1) + parseInt(number2);

    res.json({ message: sucessMessage, code: statusCode, data: data })
});

app.listen(port, () => {
    console.log("App listening to: " + port)
})

