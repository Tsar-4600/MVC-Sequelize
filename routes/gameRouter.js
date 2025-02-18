const { Router } = require("express");

const gameController = require("../controller/GameController");



debugger;


const gameRouter = new Router();

gameRouter.get('/', gameController.getAll)
gameRouter.get('/:id',(req, res) => {
    const gameId = req.params.id;
    gameController.getOne(req, res, gameId);

});
gameRouter.delete('/delete/:id', (req, res) => {
    const gameId = req.params.id;
    gameController.destroy(req, res, gameId);
});
gameRouter.post('/create', gameController.create)

module.exports = {gameRouter}