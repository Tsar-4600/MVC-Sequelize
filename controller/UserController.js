const {User, sequelize } = require('../db/db');
class UserController {

    async getAll(req, res) {
        
        let users = await User.findAll();
        res.send(users);
    }

    async getOne(req, res, userId) {
        

        try {
            const user = await User.findByPk(userId); // Находим пользователя по id
            if (!user) {
              return res.status(404).json({ message: 'Пользователь не найден' });
            }
            return res.json(user);
          } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Ошибка сервера' });
          }
    }

    async create(req, res) {


        try {
            await sequelize.sync({ force: false }); // Сначала синхронизируемся

            // Заполнение User
         
 
            const user8 = await User.create({ name: 'Ольга', lastname: 'Васильева', age: 22 });
            const user9 = await User.create({ name: 'Андрей', lastname: 'Соколов', age: 45 });
            const user10 = await User.create({ name: 'Мария', lastname: 'Попова', age: 38 });

            res.send('Game name created');
        }
        catch (error) {
            console.error('Ошибка при заполнении данных:', error);
        }
  
    }


    async destroy(req, res, userId) {

        try {
            await User.destroy({ where: {id:userId} });
            res.send(`Пользователь удален ${userId}`);
            
          
        } catch (error) {
            console.error('Ошибка удаление данных', error)
        }
       
    }

}

module.exports = new UserController();