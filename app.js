const express = require('express');
const postRouter = require('./routes/posts.routes')
const userRouter = require('./routes/users.routes')
const app = express();
const port = 3000;

// body-parser 적용
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/posts', postRouter)
app.use('/users', userRouter)

app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요!');
});
