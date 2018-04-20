<template lang="html">
  <Panel title="股票" :cname="$style.stocks">
      <dl>
          <dt :class="$style.Receive">
              <img  :class="$style.img1" src="https://img12.360buyimg.com/jrpmobile/jfs/t8767/137/977390432/7475/e5acd251/59ba3a31Ncbd06cac.jpg?width=335&height=200" alt="">
              <img  :class="$style.img2" src="https://img30.360buyimg.com/jr_image/jfs/t5848/216/253631918/136369/1894b4a7/591e5567Ncfb35e99.jpg" alt="">
              <p :class="$style.pt1" ><span>325.37</span><span>%</span></p>
              <p :class="$style.pt2" >累计收益排行榜</p>
              <p :class="$style.pt3" ><span>牛人</span><span>zangyn</span></p>
              <img  :class="$style.img3" src="https://m.jr.jd.com/spe/qyy/hzq/src/static/images/go_btn.png" alt="">
          </dt>
          <dt :class="$style.adv">
              <img  :class="$style.img1" src="https://img12.360buyimg.com/jrpmobile/jfs/t15661/192/2386880166/5534/2d3f9dfd/5aa7310bN2f099f7a.jpg?width=335&height=200" alt=""> 
              <p :class="$style.pt1" >股票全新升级</p>
              <p :class="$style.pt2" >想赚钱来这里</p>
              <p :class="$style.pt3" ><span>立即前往</span></p>
              <img  :class="$style.img3" src="https://m.jr.jd.com/spe/qyy/hzq/src/static/images/go_btn.png" alt="">
          </dt>
      </dl>
  </Panel>
</template>

<script >
import Panel from "../core/panel.vue";
export default {
  data() {
    return {};
  },
  components: {
    Panel
  }
};
</script>

<style  lang="scss" module>
@import "../../css/element.scss";
.stocks {
  > h4 {
    text-align: left;
    font-weight: bold;
  }
  > dl {
    width: 100%;
    padding: 0 30px 50px;
    box-sizing: border-box;
    @include list(row);
    dt{
      width: 50%;
      position: relative;
      box-sizing: border-box;
      padding-right: 8px;
      height: 200px;
      .img1 {
        width: 100%;
        height: 200px;
        border-radius:6px;
      }
      .img2 {
        display: block;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        position: absolute;
        top: 20px;
        left: 20px;
      }
      .img3 {
        display: block;
        width: 50px;
        height: 50px;
        position: absolute;
        top: 120px;
        right: 20px;
      }
      .pt1 {
        font-family: DIN-Bold;
        font-size: 35px;
        position: absolute;
        height: 50px;
        line-height: 40px;
        top: 25px;
        left: 130px;
        color: #fff;
        font-weight: bold;
      }
      .pt2 {
        font-family: DIN-Bold;
        font-size: 24px;
        position: absolute;
        height: 40px;
        line-height: 30px;
        top: 70px;
        left: 130px;
        color: #fff;
        font-weight: bold;
      }
      .pt3 {
        span {
          font-size: 24px;
          position: absolute;
          height: 40px;
          line-height: 40px;
          top: 125px;
          padding: 0 9px;
          color: #fff;
          font-weight: bold;
        }
        span:nth-child(1) {
          left: 50px;
          background-color: red;
        }
        span:nth-child(2) {
          left: 110px;
        }
      }
    }
    .adv{
       padding-left: 8px;
       padding-right: 0;
       .pt1,.pt2{
           left:40px;
       }
       .pt3{
           span:nth-child(1){
               left:100px;
               background-color:transparent;
           }
       }
    }
  }
}
</style>
