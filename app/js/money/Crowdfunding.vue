<template lang="html">
  <Panel title="京东众筹" :cname="$style.crowd">
      <section :class="$style.sec">
          <div>
              <p>5折抢</p>
              <p>智能门锁</p>
              <p>立即抢购</p>
              <span>今日推荐</span>
          </div>
          <ul>
              <li v-for="item in items">
                  <a :href="item.href">
                    <img :src="item.src" :alt="item.title">
                    <p>{{item.title}}</p>
                </a>
              </li>
          </ul>
          <img src="https://img12.360buyimg.com/jrpmobile/jfs/t17557/268/1745067789/52958/4fb44a40/5ad5bbf5N6b27ccf0.jpg?width=750&height=200">
      </section>
  </Panel>
</template>

<script >
import Panel from "../core/panel.vue";
export default {
  data() {
    return {
        items:[{
            src:"//img12.360buyimg.com/jrpmobile/jfs/t9739/355/2223965438/3092/b3cc4062/59f2fef3Nc2363e64.png?width=56&height=56",
            href:"money",
            title:"京东出众"
        },{
            src:"//img12.360buyimg.com/jrpmobile/jfs/t10882/187/2325566882/2968/e64c911c/59f2ff2cNd85eb522.png?width=56&height=56",
            href:"money",
            title:"手机优惠"
        },{
            src:"//img12.360buyimg.com/jrpmobile/jfs/t11674/229/560588342/2307/d88f9fd7/59f2ff5eNcac8d195.png?width=56&height=56",
            href:"money",
            title:"领神券"
        },{
            src:"//img12.360buyimg.com/jrpmobile/jfs/t10018/213/2260133396/2902/107476f0/59f2ff70N35c5d0bb.png?width=56&height=56",
            href:"money",
            title:"智能首发"
        },{
            src:"//img12.360buyimg.com/jrpmobile/jfs/t7552/255/3352153359/2695/fc610922/59f2ff88N95232a40.png?width=56&height=56",
            href:"money",
            title:"舌尖美味"
        },{
            src:"//img12.360buyimg.com/jrpmobile/jfs/t9523/348/2258037555/2792/9e8e1a80/59f2ff9fNf9648450.png?width=56&height=56",
            href:"money",
            title:"轻时尚"
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
.crowd{
    >h4{
        text-align: left;
        font-size: 35px;
        font-weight: bold;
         position: relative;
        &:after{
            content:"好生活 享品质>";
            display: block;
            position:absolute;
            z-index:98;
            top:0;
            right:34px;
            font-size:26px;
            color:#666;
        }
    }
    .sec{
        width: 100%;
        box-sizing:border-box;
        padding:0 30px;
        @include list(row);
        >div{
            position: relative;
            width: 212px;
            height:260px;
            border:1px solid #ddd;
            margin-right:10px;
            box-shadow:0 0 0.625rem 0.03125rem rgba(101,118,155,.15);
            >p:nth-child(1){
                font-size:50px;
                color:#1bd5c7;
                text-align:center;
                margin-top:60px;
            }
            >p:nth-child(2){
                font-size:22px;
                font-weight: bold;
                color:#000;
                text-align:center;
                margin-top:18px;
            }
            >p:nth-child(3){
                font-size:22px;
                margin:0 30px;
                font-weight: bold;
                line-height:25px;
                border-radius:30px;
                color:#fff;
                text-align:center;
                margin-top:30px;
                padding:12px 30px;
                background-color: #1bd5c7;
            }
            span{
                position: absolute;
                top:0;
                left: 0;
                font-weight: bold;
                font-size: 20px;
                background: #000;
                padding:4px 14px;
                color:#fff;
            }
        }
        >ul{
            width: 354px;
            height:260px;
            border:1px solid #ddd;
            box-shadow:0 0 0.625rem 0.03125rem rgba(101,118,155,.15);
            @include list(row);
            >li{
                width:33.333%;
                height:130px;
                >a{
                    display: block;
                    text-decoration:none;
                    font-size:24px;
                    color:#000;
                    img{
                        width: 56px;
                        height: 56px;margin-top:20px;
                        padding-left:30px;
                    }
                    p{
                        padding:0 22px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
            }
        }
        >img{
            width: 630px;
            height:160px;
            display: block;
            margin-left:-25px;
            margin-top:10px;
            margin-bottom:40px;
        }
    }
}
</style>
