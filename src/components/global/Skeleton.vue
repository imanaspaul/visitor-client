<template>
      <table class="table table-hover">
        <thead>
            <tr>
              <th scope="col"><div class="text-three"></div></th>
              <th scope="col"><div class="text-two"></div></th>
              <th scope="col"><div class="text-one"></div></th>
              <th scope="col"><div class="text-two"></div></th>
              <th scope="col"><div class="text-one"></div></th>
            </tr>
        </thead>
          <tbody>
            <tr v-for="(row, i) in 14" :key="i">
              <th scope="row"><div class="text-three"></div></th>
              <td><div class="text-one"></div></td>
              <td><div class="text-two"></div></td>
              <td><div class="text-one"></div></td>
              <td>
                <div class="text-two"></div>
              </td>
            </tr>
          </tbody>
        </table>
</template>

<script>
export default {
    name: "Skeleton"
}
</script>
<style>
.text-one{
    width: 50px;
    height: 20px;
    background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px);
    background-size: 600px;
    animation: shine-lines 1.6s infinite linear;
}
.text-two{
    width: 90px;
    height: 20px;
    background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px);
    background-size: 600px;
    animation: shine-lines 1.6s infinite linear;
}
.text-three{
    width: 10px;
    height: 20px;
    background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px);
    background-size: 600px;
    animation: shine-lines 1.6s infinite linear;
}
@keyframes shine-lines {
  0% {
    background-position: -100px;
  }
  40%, 100% {
    background-position: 140px;
  }
}
</style>