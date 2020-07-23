
const express = require('express')
const {request, response} = require('express')
const router = express.Router()
const writer = require('../usecases/writers')

router.post('/sign-up', async (request, response) => {
    try {
        const signUpWriter = await writer.signUp(request.body)
        response.json({ 
            success: true,
            data: {
                writer: signUpWriter
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            error: error.message
        })
    }
})

router.post('/sign-in', async (request, response) => {
    try {
        const {email, password} = request.body
        const token = await writer.login(email, password)
        response.json({ 
            success: true,
            data: {
                token
            }
        })
    } catch (error) {
        response.status(401)
        response.json({
            success: false,
            error: error.message
        })
    }
})

module.exports = router

