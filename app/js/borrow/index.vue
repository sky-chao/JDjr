<template>
  <div title="借钱" :class="$style.container">
    <Banner/>
    <Aslider/>
    <Navbar/>
  </div>
</template>

<script > 
import Banner from "../borrow/banner.vue";
import Aslider from "../borrow/Aslider.vue";
import Navbar from "../public/navbar.vue";
export default {
  components: {
    Navbar,
    Banner,
    Aslider,
  }
}
</script>
<style lang="scss" module>
.container{
    width: 100%;
    height: 1000px;
    background:url(https://m.jr.jd.com/vip/borrowMoney/css/i/bj.png) 0 115px  no-repeat;
    background-size: cover;
}
</style>


