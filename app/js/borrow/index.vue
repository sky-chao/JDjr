<template>
  <div title="借钱" :class="$style.container">
    <Banner/>
    <Aslider/>
    <Navbar/>
    <Havecar/>
    <Wihtebar/>
    <Boutique/>
  </div>
</template>

<script > 
import Banner from "../borrow/banner.vue";
import Aslider from "../borrow/Aslider.vue";
import Navbar from "../public/navbar.vue";
import Havecar from "../borrow/havecar.vue";
import Wihtebar from "../borrow/wihtebar.vue";
import Boutique from "../borrow/Boutique.vue";
export default {
  components: {
    Navbar,
    Banner,
    Aslider,
    Havecar,
    Wihtebar,
    Boutique,
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


