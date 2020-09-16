<template>
  <div id="app">
    <NavBar/>
   <div class="container">
      <div class="my-4">
         <SuccessAlert v-if="isSuccess"/>
        <ErrorAlert v-if="isError"/>
      </div>
      <router-view/>
   </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NavBar from '@/components/global/NavBar.vue'

export default {
  components : {
    NavBar,
    SuccessAlert: () => import('@/components/global/SuucessAlert'),
    ErrorAlert: () => import('@/components/global/ErrorAlert'),
  },
  computed: mapState([
      'isSuccess',
      'isError'
  ]),
}
</script>

<style>

</style>
