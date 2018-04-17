<template>
  <div title="首页">
    <heador/>
    
    <Footor/>
    <Navbar/>
  </div>
</template>

<script > 
  import heador from "../public/header.vue";
  import Footor from "../public/footer.vue";
  import Navbar from "../public/navbar.vue";
export default {
 
  data() {
    return {

    }
  },
  components: {
    heador,
    
    Footor,
    Navbar,
  }
}
</script>

