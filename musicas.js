'use strict'

async function getMusicas(){
    const url = 'http://localhost:8080/v1/controle-musicas/musica'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}

async function getMusicaById(id){
    const url = `http://localhost:8080/v1/controle-musicas/musica/${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}

async function inserirMusica(musica){
    const url = 'http://localhost:8080/v1/controle-musicas/musica'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(musica)
    }

    const response = await fetch(url, options)
    return response.status
}

async function atualizarMusica(id, musica){
    const url = `http://localhost:8080/v1/controle-musicas/musica/${id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(musica)
    }

    const response = await fetch(url, options)
    return response.status
}

async function deletarMusica(id){
    const url = `http://localhost:8080/v1/controle-musicas/musica/${id}`
    const options = {
        method: 'DELETE'
    }

    const response = await fetch(url, options)
    return response.status
}

const novaMusica = {
    "nome": "TESTE",
    "duracao": "03:31",
    "data_lancamento": "2017-07-20",
    "link": "http://linkmusicaa.mp3",
    "foto_capa": "http://capamuusica.jpg",
    "letra": "teste na API2"
}