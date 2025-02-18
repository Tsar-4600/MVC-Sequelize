const { Router } = require("express");
const { postRouter } = require("./postRouter");
const { gameRouter} = require("./gameRouter");
const { userRouter} = require("./userRouter");



const router = new Router();

router.use('/posts', postRouter);
router.use('/games', gameRouter);
router.use('/users', userRouter);


// Добавляем новый роутер для таблицы на примере postRouter

module.exports = {router}