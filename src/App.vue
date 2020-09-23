<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  methods: {
    setDataToLocalStorage () {
      localStorage.setItem('data', JSON.stringify(this.list))
    }
  },
  computed: {
    list () {
      return this.$store.getters.getList
    },
  },
  mounted () {
    window.addEventListener('beforeunload', this.setDataToLocalStorage)
  },
  beforeDestroy () {
    window.removeEventListener('beforeunload', this.setDataToLocalStorage)
  },
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
  outline: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
