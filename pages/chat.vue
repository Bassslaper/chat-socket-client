<template>
  <div class="d-flex justify-space-around align-center">
    <h1>CHAT</h1>
    <span>{{ user.name }}</span>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  middleware: ['chat'],
  head () {
    return {
      title: `Комната ${this.user.room}`
    }
  },
  computed: mapState(['user'])

}
</script>

<style lang='scss' scoped>

</style>
