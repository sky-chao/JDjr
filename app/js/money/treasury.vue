<template lang="html">
  <Panel title="小金库" :cname="$style.treas">
      <section :class="$style.ceremony">
          <p :class="$style.p1">4.6640<span>%</span></p>
          <p :class="$style.p2">七日年化收益</p>
          <p :class="$style.p3">支付/缴费/优质理财/大额理财</p>
          <div :class="$style.btn">开启送礼包</div>
      </section>
      <h5 :class="$style.title2">稳健灵活 定期理财</h5>
      <swiper class="cslider" :options="options">
          <swiper-slide v-for="item in items"  class="Spitems">
                <a :href="item.href">
                  <h6 class="p1">{{item.title}}</h6>
                  <span class="p2">{{item.type}}</span>
                  <p class="p3"><span>{{item.num}}</span><span class="span2">%</span></p>
                  <p class="p4">{{item.data}}</p>               
                </a>
          </swiper-slide>
      </swiper>

  </Panel>
</template>

<script >
import Panel from "../core/panel.vue";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  data() {
    return {
        options:{
            slidesPerView: 2.6,
            spaceBetween: 13,
        },
        items:[{
            title:"年年盈",
            type:"金融专享",
            num:"5.80",
            data:"近七日年化收益率",
            href:"money"
        },{
            title:"周期盈",
            type:"理财优选",
            num:"5.04",
            data:"近七日年化收益率",
            href:"money"
        },{
            title:"双年盈",
            type:"2年可赎回",
            num:"6.00",
            data:"历史年化投资回报率",
            href:"money"
        },{
            title:"随享盈",
            type:"质押贷款",
            num:"5.50",
            data:"历史年化结算利率",
            href:"money"
        }]
    }
  },
  components: {
      Panel,
      swiper,
      swiperSlide,
  }
}
</script>
<style lang="scss">
    .cslider{
        width: 100%;
        box-sizing: border-box;
        padding-bottom:35px;
        padding-left:30px;
        padding-right:30px;
        .Spitems{
            a{
                text-decoration:none;
                display: block;
                height:260px;
                padding:0 30px;
                border:1px solid #ddd;
                border-radius:5px;
                box-shadow: 0 0 0.625rem 0.03125rem rgba(101,118,155,.15);
                .p1{
                    font-size: 30px;
                    font-weight: bold;
                    height:46px;
                    line-height:46px;
                    margin:19px 0 5px;
                    color:#333;
                }
                .p2{
                    color:#fff;
                    border-radius:30px;
                    font-size:24px;
                    font-weight: bold;
                    background-color:rgb(53,115,255);
                }
                .p3{
                    span{
                        color:#ff281e;
                        height:30px;
                        font-size:40px; 
                        line-height:60px;
                        font-family: DIN-Bold;
                        font-weight: bold;
                    }
                    .span2{
                        font-size: 20px;
                    }
                }
                .p4{
                    font-family: PingFangSC-Semibold;
                    color:#999;
                    font-size:24px;
                    line-height:28px;
                }
            }
        }
    }

</style>

<style  lang="scss" module>
.treas{
    >h4{
        text-align: left;
        font-size:35px;
        font-weight: bold;
        position: relative;
        &:after{
            content:"更多理财产品>";
            display: block;
            position:absolute;
            z-index:98;
            top:0;
            right:34px;
            font-size:26px;
            color:#666;
        }
    }
    .ceremony{
        width: 580px;
        overflow: hidden;
        height:200px;
        margin:0 30px;
        padding-left:28px;
        box-sizing:border-box;
        background: url(//m.jr.jd.com/spe/qyy/hzq/445b538c873a5bffc189ad117298eec4.png) no-repeat 50%;
        background-size: cover;
        position: relative;
        border-radius:4px;
        p{
            color:#fff;
        }
        .p1{
            padding-top:24px;
            font-size: 55px;
            font-weight: bold;
            font-family: DIN-Bold;
            line-height:50px;
            span{
                font-size: 20px;
            }

        }
        .p2{
            font-size: 24px;
            font-weight: bold;
            line-height:55px;
            
        }
        .p3{
            font-size: 24px;
            font-weight: bold;
            line-height:30px;
            color:rgba(255,255,255,0.5);
        }
        .btn{
            width: 336px;
            height: 200px;
            position: absolute;
            top:0px;
            right:0px;
            font-size: 24px;
            background:url(https://m.jr.jd.com/spe/qyy/hzq/ac3595803ef2dfd8530f13be01cbdead.png) no-repeat;
            background-size:cover;
            text-align: center;
            line-height: 200px;
            color:#fff;
        }
       
    }
    .title2{
        font-size:28px;
        padding:30px;
    }

}
</style>
