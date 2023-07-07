const express = require('express');
const router = express.Router();
const postsRouter = require('./posts.routes');
const usersRouter = require('./users.routes')

router.use('/posts', postsRouter);
router.use('/users', usersRouter);

module.exports = router;
