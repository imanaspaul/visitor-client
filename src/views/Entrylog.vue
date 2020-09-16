<template>
  <div class="entry">
    <h1 v-if="isLoading">Loading</h1>
    <div v-else>
      <div class="row">
       <table class="table table-hover">
        <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Visitor Name</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Entry Time</th>
              <th scope="col">Checkut Time</th>
            </tr>
        </thead>
          <tbody>
            <tr v-for="(entry, i) in allEntry" :key="entry.id" @click="UpdateData(entry)">
              <th scope="row">{{i +1}}</th>
              <td>{{entry.user.first_name}} {{ entry.user.last_name }}</td>
              <td>{{entry.user.phone}}</td>
              <td>{{ entry.entry_time | date}}</td>
              <td>

                <div v-if="entry.checkout_time">
                  <img src="https://www.flaticon.com/svg/static/icons/svg/845/845646.svg" width="20" alt="">
                  {{entry.checkout_time  | date}}
                </div>
                <div v-else>
                  Currently IN
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </h1>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'


export default {
  name: 'Home',
  components: {
    
  },
  computed: mapState([
    'allEntry',
    'isLoading'
  ]),
  created(){
     this.$store.dispatch('getEntries');
  },
  methods:{
    UpdateData(entry){
      if(entry.checkout_time === null){
        if (confirm('Are you sure this person is checking out not?')) {
          const data = {
            entry_id : entry.id
          }
          this.$store.dispatch("updateEntry", data)
          // this.$store.dispatch('getEntries');
        }
      }
    }
  }
}
</script>

<style lang="css">
tr:hover{
  cursor: pointer;
}
</style>