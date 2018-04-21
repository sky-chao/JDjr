<template lang="html">
  <slider :items="items" :cname="$style.advones">
  </slider>
</template>

<script >
import slider from "../core/slider.vue";
export default {
  data() {
    return {
      items: [
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t16957/57/1786274764/21494/b0332c46/5ad6ab16N9c20b581.png?width=690&height=154",
          href: "borrow"
        },
        {
          src: "//img12.360buyimg.com/jrpmobile/jfs/t19357/145/1792958376/16450/5fe18407/5ad6ab21Nf38ac0e4.png?width=690&height=154",
          href: "borrow"
        },
        {
          src: "//img12.360buyimg.com/jrpmobile/jfs/t17215/232/1711154198/48561/ae45dcc1/5ad6ab2fN669ba310.png?width=690&height=154",
          href: "borrow"
        },{
          src: "//img12.360buyimg.com/jrpmobile/jfs/t16612/138/1709287691/14455/ed098b39/5ad6aaedN1fc10c0f.png?width=690&height=154",
          href: "borrow"
        }
      ]
    };
  },
  components: {
    slider,
  }
};
</script>

<style  lang="scss" module>
.advones{
    width: 100%;
    padding: 0 30px ;
    box-sizing: border-box;
    img{
        width: 100%;
    }
}
</style>
