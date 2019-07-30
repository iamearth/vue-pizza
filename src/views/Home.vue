<template>
  <div class="home">
    <div class="home__container">
      <h1 class="home__heading">Welcome to Pizza Planet</h1>
      <h2 class="home__subheading">Feeling Hungry?</h2>
      <button class="btn btn-success">Let's order!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="sass">
.home
  background: url('../assets/img/pizza.jpg')
  background-position: center
  background-size: cover

  height: 18rem
  padding: 6rem
  margin: 2rem

  &__container
    background: rgba(0, 0, 0, 0.6)
    border-radius: .4rem
    max-width: 30rem
    color: white
    margin: 0 auto

    display: flex
    flex-direction: column
    padding: 2rem .4rem

  &__heading
    margin: .2rem

  &__subheading

</style>

