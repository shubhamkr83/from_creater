const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    cPassword: {
        type: String,
        required: true,
    },
    tokens: [{
        token: {
            type: String,
            required: true,
        }
    }]
})

//---------------- hashing password ----------------
userSchema.pre("save", async function (next) {

    if (this.isModified("password")) {

        this.password = await bcrypt.hash(this.password, 12);
        this.cPassword = await bcrypt.hash(this.cPassword, 12);
    }
    next();
});


//---------------- generating token ----------------
userSchema.methods.generateAuthToken = async function () {
    try {
        const token = jwt.sign({ _id: this._id.toString() }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (err) {
        res.send("the error occurred" + err);
    }
}


// ----------- Collection creation --------------
const User = new mongoose.model("USER", userSchema);

module.exports = User;