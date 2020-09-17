<template>
<div class="row">
    <div class="col-md-9 my-3">
        <input type="text" class="form-control" v-model="searchText" placeholder="Search by vistor's first name or phone number">
    </div>
    <div class="col-md-3 my-3">
        <button @click="search" class="btn btn-primary form-control">Search</button>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            searchText : null,
        }
    },
    methods : {
        search(){
            if(this.searchText !== null){
                this.$store.dispatch("filterData", this.searchText)
            }
        }
    }
}
</script>

<style>
</style>