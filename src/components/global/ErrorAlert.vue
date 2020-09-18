<template>
    <div class="alert alert-warning" role="alert">
        {{errorMsg}}
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: mapState([
    'errorMsg'
  ]),
}
</script>