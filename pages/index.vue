<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8>
      <v-card min-width="400">
        <v-card-title>
          NUXT CHAT
        </v-card-title>
        <v-card-text>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              v-model="name"
              :counter="16"
              :rules="nameRules"
              label="Ваше имя"
              required
            />

            <v-text-field
              v-model="room"
              :rules="roomRules"
              label="Введите комнату"
              required
            />

            <v-btn
              :disabled="!valid"
              color="primary"
              class="mr-4"
              @click="submit"
            >
              Войти
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  layout: 'empty',
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Введите имя',
      v => (v && v.length <= 16) || 'Имя не должно превышать 16 символов'
    ],
    room: '',
    roomRules: [
      v => !!v || 'Введите комнату'
    ]
  }),
  head: {
    title: 'Вход в NUXT CHAT'
  },
  sockets: {
    connect () {
      console.log('Conection on client is Done')
    }
  },

  methods: {
    ...mapMutations({
      setUser: 'setUser'
    }),
    submit () {
      if (this.$refs.form.validate()) {
        const user = {
          name: this.name,
          room: this.room
        }

        this.setUser(user)

        this.$router.push('/chat')
      }
    }

  }

}
</script>

<style lang='scss' scoped>

</style>
