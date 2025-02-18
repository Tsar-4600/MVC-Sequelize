
const { Game, sequelize } = require('../db/db');
class GameController {

    async getAll(req, res) {

        let games = await Game.findAll();
        res.send(games);
        console.log('Игры вывелись')
    }

    async getOne(req, res, gameId) {

        try {
            const game = await Game.findByPk(gameId); // Находим пользователя по id
            if (!game) {
                return res.status(404).json({ message: 'Пользователь не найден' });
            }
            return res.json(game);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Ошибка сервера' });
        }
    }

    async create(req, res) {

    
        try {
            await sequelize.sync({ force: false }); // Сначала синхронизируемся

            // Заполнение Game
            let newGame1 = await Game.create({ name: 'Ведьмак 3', genre: 'RPG' });
            let newGame2 = await Game.create({ name: 'Red Dead Redemption 2', genre: 'Action-Adventure' });
            res.send('Game name created');
        }
        catch (error) {
            console.error('Ошибка при заполнении данных:', error);
        }

    }

    async destroy(req, res, gameId) {


        try {
            await Game.destroy({ where: {id:gameId} });
            res.send(`Пользователь удален: id=>${gameId}`);
            
          
        } catch (error) {
            console.error('Ошибка удаление данных', error)
        }

    }

}

module.exports = new GameController();