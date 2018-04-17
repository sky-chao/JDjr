<template lang="html">
  <Panel title="公司信息" :cname="$style.information">
      <ul :class="$style.info">
          <li>
              <a v-for="item in items" :href="item.href">
                  <img :src="item.src"></img>
                  <p>{{item.title}}</p>
              </a>
          </li>
          <li>Copyright © 2004-2018 京东JD.com 版权所有</li>
          <li>投资有风险，购买需谨慎</li>
          <li>京东金融平台服务协议</li>
          <li>京东金融隐私政策</li>
      </ul>
  </Panel>
</template>

<script >
import Panel from "../core/panel.vue"
export default {
  data() {
    return {
        items:[{
            src:"//img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108",
            href:"home",
            title:"客户端"
        },{
            src:"//img12.360buyimg.com/jrpmobile/jfs/t2824/256/2966087355/831/188bfa25/577cf3dcN18aadbf2.png?width=108&height=108",
            href:"home",
            title:"触屏版"
        },{
            src:"//img12.360buyimg.com/jrpmobile/jfs/t2920/282/1283157010/1040/23f1430b/577cf3e5N53f740b8.png?width=108&height=108",
            href:"home",
            title:"电脑版"
        }]
    }
  },
  components: {
      Panel,
  }
}
</script>

<style  lang="scss" module>
@import "../../css/element.scss";
.information {
    margin-bottom:120px;
    >h4{
        display:none;
    }
    .info{
      @include flex;width:100%;
        background: #F5F5F5;
       li{
            width: 100%;
            padding:24px 32px;
            box-sizing:border-box;
            line-height:48px;
            text-align: center;
            color: #999;
            font-size: 24px;
            border-top:1px solid #ddd;
            &:first-child{
                @include list(row);
                border-top:0;
                justify-content:space-around;
                >a{
                    display:block;    
                    text-decoration:none;
                    color:#999;
                    font-size:26px;
                    img{
                        width:90px;
                    }
                }
            }
       }
    }

}
</style>
