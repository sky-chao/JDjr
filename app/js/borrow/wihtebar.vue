<template lang="html">
  <Panel title="白条服务" :cname="$style.whitebars">
      <section :class="$style.secs">
          <div :class="$style.div1">
            <img src="https://m.jr.jd.com/vip/borrowMoney/widget/bannerAndCar/i/whiteCard.png" alt="">
          </div>
          <div :class="$style.div2">
            <img src="https://m.jr.jd.com/vip/borrowMoney/widget/bannerAndCar/i/whiteCircle.png" alt="">
            <p>小白信用</p>
            <p>登录查看</p>
         </div>
    </section>
    
  </Panel>
</template>

<script >
import Panel from "../core/panel.vue";
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
@import "../../css/element.scss";
.whitebars{
    >h4{
        text-align: left;
        
    }
    .secs{
        width: 100%;margin-bottom:30px;
        @include list(row);
        width: 100%;
        padding:0 2.5%;
        >.div1{
            width: 63%;
            >img{
                width: 100%;
                height:251px;
            }
        }
        >.div2{
            width: 32%;
            position: relative;
            >img{
                width: 100%;
            }
            >p{
                position: absolute;
                left:27%;
                text-align:center;
                font-size:24px;
                z-index:2;
            }
            >p:nth-child(2){
                color:#fff;
                top:35%;
            }
            >p:nth-child(3){
                color:#ae8339;
                top:65%;
            }
        }
    }
}

</style>
