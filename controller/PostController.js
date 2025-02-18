class PostController {

    async getAll(req, res) {
        
        res.send('All posts');
    }

    async getOne(req, res) {

        res.send('One post');
    }

    async create(req, res) {

        res.send('Post created');
    }

    async destroy(req, res) {

        res.send('Post deleted');
    }

}

module.exports = new PostController();