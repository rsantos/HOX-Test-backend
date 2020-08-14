const jwt = require('jsonwebtoken')

module.exports = (request, response, next) => {
  const authHeader = request.headers.authorization
  if (!authHeader)
    return response.status(401).send({ error: 'No token provided' })

  const parts = authHeader.split(' ')
  if (!parts.length === 2) {
    return response.status(401).send({ error: 'Token error' })
  }

  const [scheme, token] = parts

  if (!/^Bearer$/i.test(scheme)) {
    return response.status(401).send({ error: 'Malformed token ' })
  }

  jwt.verify(token, process.env.APP_AUTH_SECRET, (err, decoded) => {
    if (err) return response.status(401).send({ error: 'Invalid token' })

    request.userId = decoded.id
    return next()
  })
}
