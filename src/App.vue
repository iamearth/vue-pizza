<template>
  <div id="app">
    <TheHeader />
    <router-view/>
    <!-- <TheFooter /> -->
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'

export default {
  name: 'app',
  components: {
   TheHeader,
   TheFooter
 }
}
</script>

<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color:rgb(10,10,10);
}
</style>
