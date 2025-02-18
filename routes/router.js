const { Router } = require("express");
const { postRouter } = require("./postRouter");



const router = new Router();

router.use('/posts', postRouter)
// Добавляем новый роутер для таблицы на примере postRouter

module.exports = {router}