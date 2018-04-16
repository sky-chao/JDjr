<template>
  <div title="首页">
    <heador/>
    <hslider/>
    <Wealth/>
    <News/>
    <Safe/>
  </div>
</template>

<script > 
  import heador from "../public/header.vue";
  import hslider from "./hslider.vue";
  import Wealth from "./Wealth.vue";
  import News from "./news.vue";
  import Safe from "./safe.vue";
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
  }
}
</script>

