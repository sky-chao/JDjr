<template lang="html">
  <Panel title="-众筹新品-" :class="$style.Panel">
      <section :class="$style.content">
          <span>更多尖货></span>
          <slider :options="options" cname="op" :items="items"/>
      </section>
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
            "//img12.360buyimg.com/jrpmobile/jfs/t19063/263/1067257870/16513/d7360e92/5ab85da9N8af17d57.jpg?width=335&height=421",
          href: "home"
        },
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t12637/325/2370404484/14164/523e69a7/5ab85dd5Ndaf12da2.jpg?width=335&height=421",
          href: "home"
        },
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t17317/55/1066024964/35575/444c5252/5ab85ddeNaa593024.jpg?width=335&height=421",
          href: "home"
        },
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t16600/39/1049384083/42815/1727a973/5ab85debN56037cfc.jpg?width=335&height=421",
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
.op {
  .swiper-container {
    box-sizing: border-box;
    padding: 0 24px;
    padding-bottom: 40px;
    .swiper-slide {
      a {
        display: inline-block;
        width: 100%;
        img {
          width: 100%;
          display: block;
          height: 314px;
          border: 1px solid #fafafa;
        }
      }
    }
  }
}
</style>
<style  lang="scss" module>
.Panel {
  position: relative;
  .content {
    span {
      font-size: 24px;
      position: absolute;
      top: 40px;
      right: 25px;
    }
  }
}
</style>

