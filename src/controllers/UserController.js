const User = require('../models/User')

module.exports={
    async index(request, response) {
        
        try{
            const { userId } = request.query

            if(userId){
                const users = await User.findById({ "_id": userId})
                return response.json(users)
            }else{
                const users = await User.find()
                return response.json(users)
            }

        } catch (err) {
            return response.status(400).send({ error: 'Search failed'})
        }
    },
    
    async store(request, response){

        const { name, email, password } = request.body

        try{

            if(await User.findOne({ "email": email }))
                return response.status(400).send({ error: 'Email already exists'})

            const user = await User.create({
                name,
                email,
                password
            })

            user.password = undefined

            return response.json(user);

        } catch (err) {
            return response.status(400).send({ error: 'Registration failed'})
        }
    }
}