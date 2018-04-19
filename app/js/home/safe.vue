<template lang="html">
  <Panel title="保险保障" :cname="$style.panel">
      <Slider :options="options" :items="items" cname="sl"/>
      <img :class="$style.prod" src="//img12.360buyimg.com/jrpmobile/jfs/t15583/348/2209539372/42536/6bae28a8/5a953b19Nd7e46726.jpg?width=750&height=200" alt="">
  </Panel>
</template>

<script >
import Panel from "../core/panel.vue";
import Slider from "../core/slider.vue";
export default {
  data() {
    return {
      options: {
        slidesPerView: 2.3,
        spaceBetween: 30,
        freeMode: true
      },
      items: [
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t12355/171/849656870/29064/92c9bc12/5a153643N04efba6e.jpg?width=210&height=260",
          href: "home"
        },
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t9697/338/291348712/12737/27e1204/59cb6304Naef85042.jpg?width=210&height=260",
          href: "home"
        },
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t10360/347/311063647/10881/14a5cd40/59cb632fNcac82571.jpg?width=210&height=260",
          href: "home"
        },
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t13927/226/2090083878/14208/2746192a/5a31dde6Nbba7f26c.png?width=210&height=260",
          href: "home"
        },
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t9703/119/296348375/11253/b9bc3ce7/59cb637dNf25b0dff.jpg?width=210&height=260",
          href: "home"
        }
      ]
    };
  },
  components: {
    Panel,
    Slider
  }
};
</script>
<style  lang="scss" >
.sl .swiper-container {
  padding: 0 24px;
  .swiper-wrapper {
    .swiper-slide {
      img {
        width: 100%;
        display: block;
      }
    }
  }
}
</style>
<style  lang="scss" module>
.panel {
  .prod {
    width: 100%;
    box-sizing: border-box;
    padding: 25px 0;
  }
}
</style>
