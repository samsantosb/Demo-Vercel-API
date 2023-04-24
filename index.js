const express = require('express')
const axios = require('axios').default
const app = express()

app.get('/gatos', async (req, res) => {
    try {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search')
        const imageUrl = response.data[0].url
        res.json({ imageUrl })
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: 'Erro ao buscar imagem de gato' })
    }
})

app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000')
})

