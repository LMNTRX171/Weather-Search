import axios from 'axios'

export default function({store}) {
    return axios.get(`https://dog.ceo/api/breeds/image/random`)
        .then((response) => {
            store.commit('addImage', response.data.message)
        })
}