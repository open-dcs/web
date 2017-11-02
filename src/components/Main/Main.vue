<template lang="pug">
b-container
  b-jumbotron.layout(header="OpenDCS" lead="Web Frontend to OpenDCS")
    img(src="../../assets/logo.png")
    p {{ msg }} https://open-dcs.github.io
    ul
      li(v-for="item in items") {{ item.name }}
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      items: [],
      msg: 'For more information visit'
    }
  },
  methods: {
    // XXX This is just to test a call to another service using vue-resource
    getItems: function () {
      this.$http.get('http://localhost:3003/api/images').then(response => {
        this.items = response.data
      }, response => {
        // error callback
      })
    }
  },
  mounted: function () {
    this.getItems()
  }
}
</script>

<style lang="stylus" scoped>
.layout
  margin 40px 0px

h1, h2
  font-weight normal

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
