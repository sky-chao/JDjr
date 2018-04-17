<template>
  <div title="首页">
    <heador/>
    <hslider/>
    <Wealth/>
    <News/>
    <Safe/>
    <Has-car-money/>
    <User/>
    <Footor/>
    <Navbar/>
  </div>
</template>

<script > 
  import heador from "../public/header.vue";
  import hslider from "./hslider.vue";
  import Wealth from "./Wealth.vue";
  import News from "./news.vue";
  import Safe from "./safe.vue";
  import HasCarMoney from "./hasCarMoney.vue";
  import User from "./User.vue";
  import Footor from "../public/footer.vue";
  import Navbar from "../public/navbar.vue";
export default {
 
  data() {
    return {

    }
  },
  components: {
    heador,
    hslider,
    Wealth,
    News,
    Safe,
    HasCarMoney,
    User,
    Footor,
    Navbar,
  }
}
</script>

