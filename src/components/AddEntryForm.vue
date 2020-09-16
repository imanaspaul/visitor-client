<template>
  <div class="row py-5">
      <div class="col-md-6 offset-md-3">
          <div class="card">
              <div class="card-body">
                  <div class="text-center py-3">
                      <h2>Add Visitor Entry</h2>
                  </div>
                  <div class="row my-4">
                      <div class="col-md-6">
                          <input type="text" class="form-control" v-model="fisrt_name" placeholder="First Name">
                      </div>
                      <div class="col-md-6">
                        <input type="text" class="form-control" v-model="last_name" placeholder="Last Name">
                      </div>
                  </div>
                  <input type="number" class="form-control" v-model="phone" placeholder="Phone Number">
                  <button class="form-control btn btn-primary my-4" @click="submitEntry">Add Entry</button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>


export default {
    name: "addEntryForm",
    data(){
        return {
            fisrt_name: null,
            last_name: null,
            phone: null
        }
    },
    methods :{
        submitEntry(){
            const data = {
               first_name :  this.fisrt_name,
               last_name: this.last_name,
               phone: this.phone
            }
            this.$store.dispatch("addEntry", data)
        }
    }
}
</script>

<style>

</style>