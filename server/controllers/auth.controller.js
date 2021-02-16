const { Auth } = require('../models/auth.model');


module.exports.createAuthor = (request, response) => {
    const { name } = request.body;
    Auth.create({
        name
    })
        .then(auth => response.json(auth))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllAuthors= (request, response) => {
    Auth.find({})
        .then(auth => response.json(auth))
        .catch(err => response.json(err))
}

module.exports.getAuthor= (request, response) => {
    Auth.find({_id:request.params.id})
        .then(auth => response.json(auth))
        .catch(err => response.json(err))
}
module.exports.deleteAuthor = (request, response) => {
    Auth.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedAuthor => response.json(updatedAuthor))
        .catch(error => response.status(400).json(error))
}