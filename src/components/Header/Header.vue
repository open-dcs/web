<template lang="pug">
header#nav
  b-navbar(toggleable="md" type="dark" variant="dark")
    .container
      b-nav-toggle(target="nav_collapse")
      b-navbar-brand(to="/") OpenDCS
      b-collapse#nav_collapse(is-nav)
        b-nav(is-nav-bar)
          b-nav-item(to="/") Home
          b-nav-item(to="/documentation") Documentation
        b-nav.ml-auto(v-if="isConnected === false" is-nav-bar)
          b-nav-item-dropdown(right)
            template(slot="button-content")
              em System
            b-dropdown-item(to="/connect") Connect
        b-nav.ml-auto(v-else is-nav-bar)
          b-nav-item-dropdown(right)
            template(slot="button-content")
              em System
            b-dropdown-item(to="/configure") Configure
</template>

<script>
export default {
  props: {
    isConnected: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="stylus" scoped>
#nav
  margin-top -60px
</style>
