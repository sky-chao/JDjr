<template lang="html">
  <Panel title="-理财精选-" :cname="$style.lcjx" >
      <article :class="$style.content">
          <dl :class="$style.item">
              <dt>定期理财<span>90天可质押</span></dt>
              <dt>5.50%</dt>
              <dt>历史年化结算利率</dt>
          </dl>
          <dl :class="$style.item">
              <dt>定期理财<span>90天可质押</span></dt>
              <dt>5.50%</dt>
              <dt>历史年化结算利率</dt>
          </dl>
           <dl :class="$style.item">
              <dt>定期理财<span>90天可质押</span></dt>
              <dt>5.50%</dt>
              <dt>历史年化结算利率</dt>
          </dl>
           <dl :class="$style.item">
              <dt>定期理财<span>90天可质押</span></dt>
              <dt>5.50%</dt>
              <dt>历史年化结算利率</dt>
          </dl>

      </article>
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
@import "../../css/element.scss";
$fontSize: 24px;
.lcjx .content{
    @include list(row);
    width:100%;
    position:relative;
    &:after{
        content:"";
        display:block;
        width:100%;
        height:1px;
        background-color: #eee;
        position:absolute;
        top:50%;

    }
    .item {
        width:50%;
        box-sizing:border-box;
        padding:30px 28px 60px 30px;
         dt:nth-child(1){
             position:relative;
            font-size:30px;
            line-height:75px;
            color:#333;
            span{
                display: block;
                border:1px solid red;
                color:red;
                padding:4px;
                font-size:$fontSize;
                line-height:26px;
                position:absolute;
                top:16px;
                left:$fontSize*5.2;
                // right:-12px;
            }
        }
         dt:nth-child(2){
            font-size:44px;
            line-height:55px;
            color:#FF5155;

        }
         dt:nth-child(3){
            font-size:24px;
            color:#999;
        }
         dt:nth-child(2n){
             position:relative;
           &:after{
               content:"";
                display:block;
                width:1px;
                height:138px;
                background-color: #eee;
                position:absolute;
                top:-45px;
                left:-33px;
           }

        }
        
    }
    
   
}
</style>
