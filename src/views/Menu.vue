<template>
  <main class="menu">
    <section class="table">
        <div class="table__header">
            <span class="table__heading">Size</span>
            <span class="table__heading">Price</span>
            <span class="table__heading">Add to Basket</span>
        </div>
        <div v-for="(menuItem, index) in getMenuItems" 
              :key="index"
              class="table__body">
            
          <div class="table__item">
            <h3 class="table__name">{{ menuItem.name }}</h3>
            <div v-for="(option, index) in menuItem.options" 
                :key="index"
                class="table__option">
              <span class="">{{ option.size }}</span>
              <span>${{ option.price }}</span>
              <span><button type="button" 
                            class="btn btn-add"
                            @click="addToBasket( menuItem, option )">
                            Add
                            </button></span>
            </div>
          </div>
        </div>
    </section>

    <!-------- shopping basket  ------------------------------>
    <section class="basket">
        <div class="basket__header">
            <span class="basket__heading basket__heading--quantity">Quantity</span>
            <span class="basket__heading">Item</span>
            <span class="basket__heading">Total</span>
        </div>

        <div v-if="basket.length > 0">
          <div v-for="(item, index) in basket" 
              :key="index" 
              class="basket__body">
              <div class="basket__row">
                <span><button class="btn btn-small"
                              @click="decreaseQuantity(item)">-</button></span>
                <span>{{ item.quantity }}</span>
                <span><button class="btn btn-small"
                              @click="increaseQuantity(item)">+</button></span>
                <span>{{ item.name }} {{ item.size }}</span>
                <span>${{ item.price * item.quantity }}</span>
              </div>
          </div>
        </div>
        <div v-else>
          <p>{{ basketText }}</p>
        </div>
        
      <p>Order Total</p>
      <button class="btn btn-block">Place Order</button>      
    </section>
  </main>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      basket: [],
      basketText: 'Your cart is empty',
      getMenuItems: {
        1: {
          'name': 'Margherita',
          'description': 'A delicious tomato based pizza topped with mozzarella',
          'options': [{
            'size': 9,
            'price': 6.95
          }, {
            'size': 12,
            'price': 10.95
          }]
        },
        2: {
          'name': 'Pepperoni',
          'description': 'A delicious tomato based pizza topped with mozzarella and pepperoni',
          'options': [{
            'size': 9,
            'price': 7.95
          }, {
            'size': 12,
            'price': 12.95
          }]
        },
        3: {
          'name': 'Ham and Pineapple',
          'description': 'A delicious tomato based pizza topped with mozzarella, ham and pineapple',
          'options': [{
            'size': 9,
            'price': 7.95
          }, {
            'size': 12,
            'price': 12.95
          }]
        }        
      }
    }
  },
  methods: {
    addToBasket( menuItem, option ) {
      this.basket.push({
        name: menuItem.name,
        price: option.price,
        size: option.size,
        quantity: 1
      })
    },
    increaseQuantity(item) {
      item.quantity++
    },
    decreaseQuantity(item) {
      item.quantity--
      if(item.quantity === 0) {
        this.removeFromBasket(item)
      }
    },
    removeFromBasket(item) {
      this.basket.splice(this.basket.indexOf(item), 1)
    }
  }
}
</script>

<style scoped lang="sass">
.menu
  display: flex
  justify-content: space-between
  margin: 4rem 2rem


.table
  display: inline-block
  width: 100%
  max-width: 54%

  &__header
    display: flex
    justify-content: flex-end
    align-items: center
    border-top: .1rem solid rgb(10, 10, 10)
    padding: .4rem 0

  &__heading
    font-weight: 700
    margin-left: 1rem

  &__item
    display: flex
    flex-direction: row
    align-items: center

  &__name
    display: block
    font-size: 1.2rem
    font-weight: 700

  &__option
    align-self: flex-end

.basket
  display: flex
  flex-direction: column
  width: 100%
  max-width: 38%

  &__header
    width: 100%
    display: flex
    justify-content: flex-end
    align-items: center
    border-top: .1rem solid rgb(10, 10, 10)
    padding: .4rem 0

  &__heading
    font-weight: 700
    margin-left: 1rem    

    &--quantity
      margin-left: 0
      justify-self: flex-start


.btn
  background: red
  border: none
  border-radius: .2rem
  color: white
  font-weight: 500
  cursor: pointer

  &::hover

</style>

