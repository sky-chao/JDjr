<template lang="html">
  <Panel title="" :cname="$style.call">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t2842/350/3035567089/14791/5f6ff93d/577cf395N31e76288.png?width=1125&height=252" alt="">
  </Panel>
</template>

<script >
import Panel from "../core/panel.vue"
export default {
  data() {
    return {

    }
  },
  components: {
      Panel,
  }
}
</script>

<style  lang="scss" module>
.call {
    >h4{
        display: none;
    }
    img{
        width:100%;
    }
}
</style>
