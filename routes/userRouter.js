const { Router } = require("express");

const UserController = require("../controller/UserController");



debugger;


const userRouter = new Router();

userRouter.get('/', UserController.getAll);
userRouter.get('/:id', (req, res) => {
    const userId = req.params.id;
    UserController.getOne(req, res, userId);

})
userRouter.delete('/delete/:id', (req, res) => {
    const userId = req.params.id;
    UserController.destroy(req, res, userId);
});
userRouter.post('/create', UserController.create);

module.exports = {userRouter};