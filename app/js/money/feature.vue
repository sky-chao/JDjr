<template lang="html">
  <Panel title="特色推荐" :cname="$style.feate">
      <ul>
          <li v-for="item in prods">
              <img :src="item.src" :alt="item.title">
              <p :class="$style.pf1" >{{item.title}}</p>
              <p :class="$style.pf2" >
                  <span>¥</span>
                  <span>{{item.money}}</span>
                  <span>起</span>
              </p>
              <article>
                  <div :class="$style.wrapper">
                      <div :class="$style.inner" :style="{width: item.progress >100 ? 100+'%' : item.progress +'%'}"/>
                  </div>
                  <p>{{ item.progress }}%</p>
              </article>
          </li>
      </ul>
  </Panel>
</template>

<script >
import Panel from "../core/panel.vue";
export default {
  data() {
    return {
      prods: [
        {
          src:
            "//img30.360buyimg.com/cf/jfs/t19768/38/914556013/104950/7e2b2979/5ab07916N976655ad.jpg",
          title: "乾坤·无极 龙鳞纹天目建盏",
          money: "168.00",
          progress: "50"
        },
        {
          src:
            "//img30.360buyimg.com/cf/jfs/t17164/320/1265551327/108617/43b9bb7b/5ac344b2N7d4dc4d3.jpg",
          title: "A9-988全铜全自动云锁",
          money: "1499.00",
          progress: "139"
        },
        {
          src:
            "//img30.360buyimg.com/cf/jfs/t19432/62/1317415683/139403/3d0f66e/5ac57e5eNa05ad21e.jpg",
          title: "专业级碳纤维矶钓鱼竿",
          money: "39.00",
          progress: "159"
        },
        {
          src:
            "//img30.360buyimg.com/cf/jfs/t18010/292/965423408/150027/9746c569/5ab498cfN2a1b0141.jpg",
          title: "万彩大师手作矿石釉旧瓷盏",
          money: "68.00",
          progress: "439"
        },
        {
          src:
            "//img30.360buyimg.com/cf/jfs/t19768/38/914556013/104950/7e2b2979/5ab07916N976655ad.jpg",
          title: "乾坤·无极 龙鳞纹天目建盏",
          money: "168.00",
          progress: "50"
        },
        {
          src:
            "//img30.360buyimg.com/cf/jfs/t17164/320/1265551327/108617/43b9bb7b/5ac344b2N7d4dc4d3.jpg",
          title: "A9-988全铜全自动云锁",
          money: "1499.00",
          progress: "139"
        },
        {
          src:
            "//img30.360buyimg.com/cf/jfs/t19432/62/1317415683/139403/3d0f66e/5ac57e5eNa05ad21e.jpg",
          title: "专业级碳纤维矶钓鱼竿",
          money: "39.00",
          progress: "159"
        },
        {
          src:
            "//img30.360buyimg.com/cf/jfs/t18010/292/965423408/150027/9746c569/5ab498cfN2a1b0141.jpg",
          title: "万彩大师手作矿石釉旧瓷盏",
          money: "68.00",
          progress: "439"
        }
      ]
    };
  },
  components: {
    Panel
  }
};
</script>

<style  lang="scss" module>
@import "../../css/element.scss";
.feate {
  background-color: rgb(243, 245, 247);
  > h4 {
    text-align: left;
    font-weight: bold;
    background-color: #fff;
  }
  > ul {
    position: relative;
    @include list(row);
    &:after{
      content:"";
      display: block;
      width: 8px;
      height: 1730px;
      background-color: rgb(243, 245, 247);
      position: absolute;
      top:0;
      left:50%;
      margin-left:-4px;
    }
    >li:nth-child(2n+1){
      padding-right:4px;
    }
    >li:nth-child(2n+2){
      padding-left:4px;
    }
    > li {
      width: 50%;
      box-sizing:border-box;
      margin-bottom:8px;
      padding-bottom:30px;
      background-color: #fff;
      > img {
        width: 228px;
        height: 228px;
        padding: 0 44px;
        padding-top:44px;
      }
      > p {
        padding-left: 30px;
        font-size: 30px;
        line-height: 50px;
      }
      .pf1 {
        color: #000;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .pf2 {
        span {
          color: #ff9a1c;
          font-weight: bold;
          font-size: 28px;
        }
        span:nth-child(3),
        span:nth-child(1) {
          font-size: 18px;
        }
        span:nth-child(2),
        span:nth-child(3) {
          margin-left: -4px;
        }
        span:nth-child(3) {
          color: #999;
        }
      }
      > article {
         padding-left: 30px;
        .wrapper {
          float:left;
          width: 180px;
          height: 10px;
          border-radius: 6px;
          background-color: #ccc;
          position: relative;
          .inner {
            height: 10px;
            border-radius: 6px;
            position: absolute;
            top: 0;
            left: 0;
            background-image: linear-gradient(270deg, #f55 1%, #ff9c31);
          }
        }
        > p {
          float:left;
          font-size: 24px;
          margin-top:-12px;
          margin-left:10px;
          color: #999;
        }
      }
    }
  }
}
</style>
