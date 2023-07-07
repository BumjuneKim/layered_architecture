const express = require('express');
const apiRouter = require('./routes/index')
const app = express();
const port = 3000;

// body-parser 적용
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api', apiRouter)

app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요!');
});

module.exports = app
