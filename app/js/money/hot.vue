<template lang="html">
  <Panel title="热销保险" :cname="$style.crowd">
      <section :class="$style.sec">
          <swiper class="dslider" :options="options">
              <swiper-slide v-for="item in aditems"  class="Spwitems">
                    <a :href="item.href">
                      <img :src="item.src"/>             
                    </a>
              </swiper-slide>
          </swiper>
      </section>
  </Panel>
</template>

<script >
import Panel from "../core/panel.vue";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      aditems: [
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t9697/338/291348712/12737/27e1204/59cb6304Naef85042.jpg?width=210&height=260",
          href: "money"
        },
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t10360/347/311063647/10881/14a5cd40/59cb632fNcac82571.jpg?width=210&height=260",
          href: "money"
        },
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t13927/226/2090083878/14208/2746192a/5a31dde6Nbba7f26c.png?width=210&height=260",
          href: "money"
        },
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t9703/119/296348375/11253/b9bc3ce7/59cb637dNf25b0dff.jpg?width=210&height=260",
          href: "money"
        }
      ],
      options: {
        slidesPerView: 2.9,
        spaceBetween: 12
      }
    };
  },
  components: {
    Panel,
    swiper,
    swiperSlide
  }
};
</script>
<style lang="scss">
  .dslider {
    width: 100%;
    padding:0 30px 40px;
    .Spwitems {
      width: 100%;
      a{
        width: 100%;
        text-decoration: none;
        display: block;
        height: 260px;
        img {
          display: block;
        }
      }
    }
  }
</style>
<style  lang="scss" module>
.crowd{
    margin-top:-20px;
    >h4{
        text-align:left;
        font-size:30px;
    }
}
</style>
