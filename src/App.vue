<template>
  <div id="app">
    <nav-bar/>
    <div>
      <router-view />
    </div>
  </div>
</template>


<script>
import NavBar from './components/NavBar.vue'

export default {
  components: {
    NavBar,
  },
  irparaInicio(){
			this.$router.push('/')
		}
}

</script>

<style>


</style>
