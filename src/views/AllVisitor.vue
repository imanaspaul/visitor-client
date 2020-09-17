<template>
  <div class="vistiors">
    <Skeleton v-if="isLoading"/>
    <div v-else>
      <div class="row">
       <table class="table table-hover">
        <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First name</th>
              <th scope="col">Last name</th>
              <th scope="col">Phone number</th>
            </tr>
        </thead>
          <tbody>
            <tr v-for="(user, i) in allVisitor" :key="user.id" @click="UpdateData(entry)">
              <th scope="row">{{i +1}}</th>
              <td>{{user.first_name}} </td>
              <td>{{ user.last_name }}</td>
              <td>{{user.phone}}</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </h1>
  </div>
</template>

<script>
import Skeleton from '@/components/global/Skeleton.vue'
import { mapState } from 'vuex'


export default {
  name: 'AllVisitors',
  components: {
    Skeleton
  },
  computed: mapState([
    'allVisitor',
    'isLoading'
  ]),
  created(){
     this.$store.dispatch('getVisitors');
  }
}
</script>

<style lang="css">
tr:hover{
  cursor: pointer;
}
</style>