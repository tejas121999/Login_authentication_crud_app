const express = require('express')
var router = express.Router()


var { Post } = require('../models/Post')

// get all user
router.route('/').get((req, res) => {
    Post.find()
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json('Error:' + err))
})

// add user
router.route('/add').post((req, res) => {
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;
    const street = req.body.street;

    const newUser = new Post({ name, phone, email, street })
    newUser.save()
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json('Error:' + err))
})

// get by id
router.route('/:id').get((req, res) => {
    Post.findById(req.params.id)
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json('Error:' + err))
})

// update by id
router.route('/update/:id').put((req, res) => {
    const posts = new Post({
        _id: req.params.id,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        street: req.body.street,
    });
    Post.updateOne({ _id: req.params.id }, posts).then(
        () => {
            res.status(201).json({
                message: 'things is updated' + posts
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            })
        }
    )
})

// delete by id
router.route('/:id').delete((req, res) => {
    Post.findByIdAndDelete(req.params.id)
        .then(posts => res.json('user delete' + posts))
        .catch(err => res.status(400).json('Error:' + err))
})




module.exports = router