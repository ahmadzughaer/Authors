const AuthController = require('../controllers/auth.controller');

module.exports = function(app){
    app.post('/api/author', AuthController.createAuthor);
    app.get('/api/author', AuthController.getAllAuthors);
    app.get('/api/author/:id', AuthController.getAuthor);
    app.put('/api/author/:id', AuthController.updateAuthor);
    app.delete('/api/author/:id', AuthController.deleteAuthor);
}