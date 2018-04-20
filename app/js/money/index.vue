<template>
  <div title="首页">
    <heador/>
    <Aslider/>
    <Bslider/>
    <Treasury/>
    <Crowdfunding/>
    <Insurance/>
    <Hot/>
    <Ad1/>
    <Bars/>
    <Footor/>
    <Navbar/>
  </div>
</template>

<script > 
  import heador from "../public/header.vue";
  import Aslider from "../money/aslider.vue";
  import Bslider from "../money/bslider.vue";
  import Treasury from "../money/treasury.vue";
  import Crowdfunding from "../money/Crowdfunding.vue";
  import Insurance from "../money/Insurance.vue";
  import Hot from "../money/hot.vue";
  import Ad1 from "../money/Ad1.vue";
  import Bars from "../money/Bars.vue";
  import Footor from "../public/footer.vue";
  import Navbar from "../public/navbar.vue";
export default {
  components: {
    heador,
    Aslider,
    Bslider,
    Footor,
    Navbar,
    Treasury,
    Crowdfunding,
    Insurance,
    Hot,
    Ad1,
    Bars,
  }
}
</script>

