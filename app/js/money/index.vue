<template>
  <div title="首页">
    <heador/>
    <Aslider/>
    <Bslider/>
    <Footor/>
    <Navbar/>
  </div>
</template>

<script > 
  import heador from "../public/header.vue";
  import Aslider from "../money/aslider.vue";
  import Bslider from "../money/bslider.vue";
  import Footor from "../public/footer.vue";
  import Navbar from "../public/navbar.vue";
export default {
 
  data() {
    return {

    }
  },
  components: {
    heador,
    Aslider,
    Bslider,
    Footor,
    Navbar,
  }
}
</script>

