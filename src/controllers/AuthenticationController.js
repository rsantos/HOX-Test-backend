require('dotenv').config()

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

module.exports = {
  async store (request, response) {
    const { email, password } = request.body

    const user = await User.findOne({ email: email }).select('+password')
    if (!user) {
      return response.status(400).send({ error: 'User not found' })
    }

    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword) {
      return response.status(400).send({ error: 'Wrong Password' })
    }

    user.password = undefined

    const token = jwt.sign({ id: user._id }, process.env.APP_AUTH_SECRET, {
      expiresIn: 86400
    })

    return response.send({ user, token })
  }
}
