export const state = () => ({
    image: ''
})

export const mutations = {
    addImage(state, payload) {
        state.image = payload
    }
}

export const actions = {
    async getNewImage({commit}) {
        const image = await fetch(`https://dog.ceo/api/breeds/image/random`)
        const newImage = await image.json()
        commit('addImage', newImage.message)
    }
}

export const getters = {
    showImage: s => s.image
}