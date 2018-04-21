<template lang="html">
  <Panel title="借钱" :cname="$style.bbner">
      <section :class="$style.sec">
          <div>
              <img src="https://m.jr.jd.com/vip/borrowMoney/widget/jdGold/i/goldCard.png" alt="">
              <p>最高可借</p>
              <p>300,000</p>
              <p>立即登录</p>
          </div>
      </section>
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
.bbner{
    margin-top:0 !important;
    background-color:transparent!important;
    margin-bottom:0px !important;
    >h4{
        position: relative;
       
        &:after,&:before{
            content:"";
            width: 80px;
            height: 80px;
            display: block;
            position: absolute;
            top:18px;
        }
        &:after{
            background:url(https://st.360buyimg.com/common/commonH_B/images/2015/jd-sprites.png?v=12) -42px 0px no-repeat;
            left:30px;
            width: 40px;
            height: 40px;
            top:35px;
        }
        &:before{
            background:url(https://st.360buyimg.com/common/commonH_B/images/headerImg/shortcut-nav.png?v=12) center center no-repeat;
            right:8px;
        }
    }
    .sec{
        div{
            position: relative;
            padding:55px 30px 0px ;
            img{
                width: 100%;
                display: block;
            }
            p{
                position: absolute;
                left:95px;
                color:#fff;
                font-weight: bold;
            }
            p:nth-child(2){
                font-size: 28px;
                top:120px;
            }
            p:nth-child(3){
                left:120px;
                font-size: 48px;
                top:180px;
                &:after{
                    content:"¥";
                    font-size:26px;
                    font-weight: bold;
                    position: absolute;
                    top:18px;
                    left:-20px;
                }
            }
            p:nth-child(4){
                font-size: 24px;
                top:255px;
                width: 180px;
                height: 58px;
                text-align: center;
                line-height:58px;
                background:url(https://m.jr.jd.com/vip/borrowMoney/widget/jdGold/i/btnBj.png) 0 0 no-repeat;
                background-size:cover;
            }
        }
    }
}
</style>
