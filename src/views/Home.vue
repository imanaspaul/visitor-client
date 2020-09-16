<template>
  <div class="home">
    <AddEntryForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import AddEntryForm from '@/components/AddEntryForm.vue'
export default {
  name: 'Home',
  components: {
    AddEntryForm
  }
}
</script>
