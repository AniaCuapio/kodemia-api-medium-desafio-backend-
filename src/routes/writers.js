const express = require('express')
const writers = require('../usecases/writers')
const router = express.Router()
const auth = require('../middleware/auth')

router.get('/', auth, async (request, response) => {
  try {
    const allWriters = await writers.getAll()
    response.json({
      success: true,
      data: {
        writers: allWriters,
      },
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message,
    })
  }
})

router.get('/:id', auth, async (request, response) => {
  try {
    const id = request.params.id
    const writerById = await writers.getById(id)
    response.json({
      success: true,
      data: {
        writer: writerById
      },
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message,
    })
  }
})



router.post('/', auth, async (request, response) => {
  try {
    const newWritersData = request.body
    const newWriter = await writers.create(newWritersData)
    response.json({
      success: true,
      data: {
        newWriter,
      },
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message,
    })
  }
})

router.delete('/:id', auth, async (request, response) => {
  try {
    const id = request.params.id
    const remove = await writers.remove(id)
    response.json({
      success: true,
      message: 'writer deleted',
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message,
    })
  }
})

router.patch('/:id', auth, async (request, response) => {
  try {
    const id = request.params.id
    const newWriterData = request.body
    const refresh = await writers.update(id, newWriterData)
    response.json({
      success: true,
      data: {
        refresh
      },
      message: 'refresh good',
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message,
    })
  }
})

module.exports = router
