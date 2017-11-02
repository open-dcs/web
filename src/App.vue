<template lang="pug">
div#app.main
  v-header
  v-content
  v-footer
</template>

<script>
import Header from '@/components/Header'
import Content from '@/components/Content'
import Footer from '@/components/Footer'

export default {
  name: 'app',
  components: {
    'v-header': Header,
    'v-content': Content,
    'v-footer': Footer
  }
}
</script>

<style lang="stylus" scoped>
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
