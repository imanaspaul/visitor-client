<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
         <router-link class="navbar-brand" to="/">Visitors Entry</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Add Entry</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/all-entry">All Entry</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/all-visitors">All Visitors</router-link>
                    </li>
                </ul>
            </div>
    </div>    
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>