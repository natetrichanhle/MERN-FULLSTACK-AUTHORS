const AuthorController = require('../controllers/author.controller');
module.exports = function (app) {
    app.get('/api/author', AuthorController.getAuthor);
    app.post('/api/author/new', AuthorController.createAuthor);
    app.get('/api/author/:id', AuthorController.getOneAuthor);
    app.put('/api/author/edit/:id', AuthorController.updateAuthor);
    app.delete('/api/author/:id', AuthorController.deleteAuthor);
}