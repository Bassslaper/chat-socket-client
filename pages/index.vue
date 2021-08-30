<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-btn
        @click="sendMessage"
      >
        NEW MESSAGE
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  sockets: {
    connect () {
      console.log('Conection on client is Done')
    }
  },
  methods: {
    sendMessage () {
      this.$socket.emit('createMessage', {
        text: 'FROM CLIENT'
      })
    }
  }

}
</script>

<style lang='scss' scoped>

</style>
