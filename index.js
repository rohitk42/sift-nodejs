const express = require('express')
const cors = require('cors')
const app = express()

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.post('/', (req, res) => {

    console.log(req.body);

    console.log(req.headers);

    return res.json({messsage: "ok"});
});


app.listen(PORT, () => {
    console.log(`server is running at ${PORT }`);
})

