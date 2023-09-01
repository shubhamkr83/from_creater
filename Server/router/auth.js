const express = require('express');
const app = express();
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



require('../db/conn');
const User = require('../model/userSchema');
const Form = require('../model/formlist');

app.get('/', (req, res) => {
    res.send(`Hello world from the server router js`);
});


//---------------- Register ----------------

router.post('/register', async (req, res) => {

    const { name, email, gender, password, cPassword } = req.body;

    if (!name || !email || !gender || !password || !cPassword) {
        return res.status(422).json({ error: "Plz fill the fields properly" });
    }

    try {
        const userExists = await User.findOne({ email: email });

        if (userExists) {

            return res.status(422).json({ error: "Email already exists" });

        } else if (password !== cPassword) {

            return res.status(422).json({ error: "password are not matching" });

        } else {

            const user = new User({ name, email, gender, password, cPassword });

            //------ here password hashing is implemented (see userSchema.js file) -------

            await user.save();

            res.status(201).json({ message: "user registered successfully" });

        }

    } catch (err) {
        console.log(err);
    }

});

//---------------- login ----------------

router.post('/login', async (req, res) => {
    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Plz fill the data" });
        }

        const userLogin = await User.findOne({ email: email });

        const isMatch = await bcrypt.compare(password, userLogin.password);


        //---------------- adding token function ----------------
        const token = await userLogin.generateAuthToken();
        console.log("token part" + token);


        //---------------- adding login token to cookies ----------------
        res.cookie("jwt", token, {
            expires: new Date(Date.now() + 25892000000),
            httpOnly: true,
            // secure: true
        });

        if (!isMatch) {
            res.status(400).json({ error: "Invalid login detail" });
        } else {
            res.json({ message: "user login successfully" });
        }

        console.log(userLogin);

    } catch (err) {
        console.log(err);
    }
})

// get form data
router.get('./:id', async (req, res) => {
    try {
        const form = await Form.findById(req.params.id);
        res.send({ form });

    } catch (err) {
        console.log(err);
    }
})

// create form data
router.post('./create', async (req, res) => {

    const { name, description, category, status } = req.body;

    try {
        if (!name || !description || !category || !status) {
            return res.status(422).json({ error: "Plz fill the fields properly" });
        } else {

            const form = new Form({ name, description, category, status });
            await form.save();
            res.status(201).json({ message: "form created successfully" });
        }
    } catch (err) {
        console.log(err);
    }
})

// UPDATE form data
router.put('/:id', async (req, res) => {
    try {
        await Students.findByIdAndUpdate(req.params.id, req.body);
        res.send({ message: 'The form was updated' });
    } catch (err) {
        res.status(400).send({ error: err });
    }
});

// delete form data
router.delete('./:id', async (req, res) => {
    try {
        await Form.deleteOne({ id: req.params.id });
        return res.redirect('/createform');
    } catch (err) {
        console.log("Error", err);
        return;
    }

});


module.exports = router;