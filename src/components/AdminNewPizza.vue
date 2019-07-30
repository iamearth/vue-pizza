<template>
    <section class="new-pizza">
        <form  @click.prevent="addMenuItem">
            <h2>Add New Pizza</h2>
            <div class="form-group">
                <label for="name">Name</label>
                <input name="name" type="text" v-model="newPizza.name">
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <textarea v-model="newPizza.description" name="description" type="text" rows="5"></textarea>
            </div>

            <p>Option 1:</p>
            <div class="form-group">
                <label for="size">Size (")</label>
                <input type="text" v-model="newPizza.options[0].size">
            </div>
            <div class="form-group">
                <label for="size">Price</label>
                <input type="text" v-model="newPizza.options[0].price">
            </div>

            <p>Option 2:</p>
            <div class="form-group">
                <label for="size">Size(")</label>
                <input name="size" type="text" v-model="newPizza.options[1].size">
            </div>
            <div class="form-group">            
                <label for="price">Price</label>
                <input type="text" v-model="newPizza.options[1].price">
            </div>

            <div class="form-group">
                <button type="submit">Add</button>
            </div>
        </form>
    </section>

</template>

<script>
export default {
  name: 'AdminNewPizza',
  data() {
    return {
      newPizza: {
          name: 'Margherita',
          description: 'A delicious tomato based pizza topped with mozzarella',
          options: [{
              size: 9,
              price: 6.95
              }, {
              size: 12,
              price: 10.95
          }]
        }
      }
    },
  methods: {
    addMenuItem() {
        console.log(this.newPizza)
    }
  }  
}
</script>

<style scoped lang="sass">
.new-pizza
    border-top: .2rem solid rgb(10, 10, 10)
    max-width: 46%
</style>
