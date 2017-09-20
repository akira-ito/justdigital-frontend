import axios from 'axios'

export function random() {
    return axios.get(`http://gateway.marvel.com:80/v1/public/characters?apikey=9117641b1a0d3a4e2f3c0e930acc5118`)
    	.then(data => data.data)
}