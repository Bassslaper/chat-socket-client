export const state = () => ({
  user: {}
})

export const mutations = {
  setUser (state, data) {
    state.user = data
  }
}

export const actions = {
  SOCKET_newMessage (ctx, data) {
    console.log('Message recieved: ', data)
  }
}
