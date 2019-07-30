<template>
    <header>
        <nav class="nav">
            <a href="/" class="nav__brand">PIZZA</a>
            <ul class="nav__list">
                <li class="nav__item">
                    <router-link :to="{ name: 'Home' }" class="nav__link">Home</router-link>
                </li>
                <li class="nav__item">
                    <router-link :to="{ name: 'Menu' }" class="nav__link">Menu</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style scoped lang="sass">
.nav
    display: flex
    justify-content: flex-start
    align-items: center
    border-top: .2rem solid rgb(10, 10, 10)

    margin: 2rem
    padding: 0 .2rem 

    &__brand
        text-decoration: none
        font-weight: 900
        text-transform: uppercase
        font-size: 1.2rem
        color: rgb(10, 10, 10)

    &__list
        display: flex

    &__item
        list-style: none
        margin-right: 2rem
        text-transform: lowercase

    &__link
        text-decoration: none
        font-weight: 500
        color: rgb(10, 10, 10)

</style>
