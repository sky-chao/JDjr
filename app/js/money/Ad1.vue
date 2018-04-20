<template lang="html">
  <Panel title="" :cname="$style.adone">
      <img src="https://img12.360buyimg.com/jrpmobile/jfs/t19237/141/1673000913/25057/47029e68/5ad569f7Nd55fa798.jpg?width=750&height=200" alt="">
  </Panel>
</template>

<script >
import Panel from "../core/panel.vue";
export default {
  components: {
      Panel,
  }
}
</script>

<style  lang="scss" module>
.adone{
    >h4{
        display: none;
    }
    >img{
        width: 100%;
    }
    padding-bottom:34px;

}
</style>
