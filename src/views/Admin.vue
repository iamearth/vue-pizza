<template>
    <main class="admin">
        <h1>Admin</h1>
        <section>
            <!-- new pizza component -->
            <AdminNewPizza />
        </section>

        <section class="menu">
            <h2>Menu</h2>
            <table class="table">
                <h3 class="table__heading">Item</h3>
                <h3 class="table__heading">Remove from menu</h3>
            </table>
            <div>
                <span>Margherita</span>
                <span><button class="btn">remove</button></span>
            </div>
        </section>

        <section class="current-orders">
            <h2 class="current-orders__heading">Current Orders</h2>
            <div class="table">
                <div class="table__header">
                    <h3 class="table__heading">Order Number</h3>
                    <h3 class="table__heading">Item</h3>
                    <h3 class="table__heading">Size</h3>
                    <h3 class="table__heading">Quantity</h3>
                    <h3 class="table__heading">Price</h3>
                </div>
                <div class="table__body">
                    <span>1</span>
                    <span>Margherita</span>
                    <span>9"</span>
                    <span>1</span>
                    <span>$6.95</span>
                </div>
            </div>

        </section>
    </main>
</template>

<script>
import AdminNewPizza  from  '@/components/AdminNewPizza'
export default {
  name: 'Admin',
  components: {
      AdminNewPizza
  }
}
</script>

<style scoped lang="sass">
.admin
    margin: 6rem 2rem
    display: grid
    grid-template-columns: 60% 48%
    grid-template-rows: 

.menu
    border-top: .2rem solid rgb(10, 10, 10)
    max-width: 30%

.table
    border-top: .01rem solid rgb(100,100,100) 
    display: flex
    justify-content: space-between

.current-orders
    border-top: .2rem solid rgb(10, 10, 10)
    margin: 6rem 0

    &__heading
        margin: .8rem 0

.table
    display: flex
    flex-direction: column
    max-width: 60rem

    &__header
        display: flex
        justify-content: space-between

    &__body
        display: flex
        justify-content: space-between


</style>
