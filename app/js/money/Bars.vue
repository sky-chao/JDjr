<template lang="html">
  <Panel title="白条" :cname="$style.bars">
      <section :class="$style.sec">
          <div>
              <canvas id="circle" height="132px" width="132px"></canvas>
              <p :class="$style.wite">小白信用分</p>
              <p :class="$style.Btnc">登录查看</p>
          </div>
          <ul>
              <li v-for="item in items">
                  <a :href="item.href">
                    <img :src="item.src" :alt="item.title">
                    <p>{{item.title}}</p>
                </a>
              </li>
          </ul>
      </section>
  </Panel>
</template>

<script >
import Panel from "../core/panel.vue";

export default {
  data() {
    return {
      items: [
        {
          src:"//img12.360buyimg.com/jrpmobile/jfs/t8803/130/802395570/1891/103bedf1/59af980eN987fd5c2.png?width=56&height=56",
          href: "money",
          title: "白条"
        },
        {
          src:"//img12.360buyimg.com/jrpmobile/jfs/t9373/154/878445473/2758/410dc92d/59b901f5Nc93edaac.png?width=56&height=56",
          href: "money",
          title: "还款"
        },
        {
          src:"//img12.360buyimg.com/jrpmobile/jfs/t9391/169/1385525558/2762/2d29f1d5/59b90214N4f745107.png?width=56&height=56",
          href: "money",
          title: "1元抢券"
        },
        {
          src:"//img12.360buyimg.com/jrpmobile/jfs/t7246/167/3036813324/1578/d4ae001e/59b90228Nd61b6465.png?width=56&height=56",
          href: "money",
          title: "小白卡"
        },
        {
          src:"//img12.360buyimg.com/jrpmobile/jfs/t8422/203/1374629409/2823/430e740d/59b90230N09140aba.png?width=56&height=56",
          href: "money",
          title: "金条"
        },
        {
          src:"//img12.360buyimg.com/jrpmobile/jfs/t7618/313/3082994165/3330/e1692006/59b90247Nac3c9ebe.png?width=56&height=56",
          href: "money",
          title: "校园"
        }
      ]
    };
  },
  components: {
    Panel,
  }
};
</script>

<style  lang="scss" module>
@import "../../css/element.scss";
.bars {
  > h4 {
    text-align: left;
    font-size: 35px;
    font-weight: bold;
    position: relative;
  }
  .sec {
    width: 100%;
    box-sizing: border-box;
    padding: 0 30px;
    @include list(row);
    > div {
      position: relative;
      width: 212px;
      height: 260px;
      border: 1px solid #ddd;
      margin-right: 10px;
      box-shadow: 0 0 0.625rem 0.03125rem rgba(101, 118, 155, 0.15);
     .wite {
        font-size: 22px;
        font-weight: bold;
        color: #d4b575;
        text-align: center;
        margin-top: 18px;
      }
      .Btnc {
        font-size: 22px;
        margin: 0 30px;
        font-weight: bold;
        line-height: 25px;
        border-radius: 30px;
        color: #fff;
        text-align: center;
        margin-top: 30px;
        padding: 12px 30px;
        background-color: #d4b575;
      }
    }
    > ul {
      width: 354px;
      height: 260px;
      border: 1px solid #ddd;
      box-shadow: 0 0 0.625rem 0.03125rem rgba(101, 118, 155, 0.15);
      @include list(row);
      > li {
        width: 33.333%;
        height: 130px;
        > a {
          display: block;
          text-decoration: none;
          font-size: 24px;
          color: #000;
          img {
            width: 56px;
            height: 56px;
            margin-top: 20px;
            padding-left: 30px;
          }
          p {
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
    
  }
}
</style>
