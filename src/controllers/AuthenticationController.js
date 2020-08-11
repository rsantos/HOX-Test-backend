require("dotenv").config();

const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = {
    async store(request, response){
        const { email, password } = request.body

        const user = await User.findOne({"email": email}).select('+password')

        if(!user){
            return response.status(400).send({ error: 'User not found'})
        }else if(!await bcrypt.compare(password, user.password)){
            return response.status(400).send({ error: 'Wrong Password'})
        }

        user.password = undefined

        const token = jwt.sign({ id:user._id }, process.env.APP_AUTH_SECRET, { expiresIn: 86400 } )

        return response.send({user, token})
    }
}