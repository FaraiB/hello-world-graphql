const consulta = '{ helloWorld }'

const options ={
    method: 'POST',
    headers: {
        'Content-Type': 'application/JSON'
    },
    body: JSON.stringify({
        query: consulta
    })
}

const createHelloWorld = (string) => {
    const body = document.querySelector
    ('body')

    body.innerHTML = string
}
fetch('http://localhost:4000/graphql', options)
    .then(resposta => resposta.json())
    .then(dados => createHelloWorld(dados.data.helloWorld))