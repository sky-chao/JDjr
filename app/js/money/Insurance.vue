<template lang="html">
  <Panel title="保险保障" :cname="$style.crowd">
      <section :class="$style.sec">
          <div>
              <p>100万</p>
              <p>账户安全险</p>
              <p>免费领取</p>
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
          <img src="https://img12.360buyimg.com/jrpmobile/jfs/t18631/176/1296661704/41624/f193c3f6/5ac2e521N06980907.png?width=750&height=200">
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
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t8881/304/1359242815/2540/5ef07179/59b90050N62f41061.png?width=56&height=56",
          href: "money",
          title: "车险"
        },
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t9040/57/2313007861/3024/82c36c44/59ca556eNb605e901.png?width=56&height=56",
          href: "money",
          title: "人寿"
        },
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t9283/283/1383600733/3117/82a51164/59b900cfNe88db318.png?width=56&height=56",
          href: "money",
          title: "意外"
        },
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t8929/33/1393593833/1749/1e115bd7/59b900e6N73c7b311.png?width=56&height=56",
          href: "money",
          title: "财产"
        },
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t8902/275/1411242449/2807/a2cc902a/59b90111N4e88098c.png?width=56&height=56",
          href: "money",
          title: "健康"
        },
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t8962/170/1384497943/2594/aa2a2ad9/59b9011bNf3b01bea.png?width=56&height=56",
          href: "money",
          title: "旅行"
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
.crowd {
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
      > p:nth-child(1) {
        font-size: 50px;
        color: #1bd5c7;
        text-align: center;
        margin-top: 60px;
      }
      > p:nth-child(2) {
        font-size: 22px;
        font-weight: bold;
        color: #000;
        text-align: center;
        margin-top: 18px;
      }
      > p:nth-child(3) {
        font-size: 22px;
        margin: 0 30px;
        font-weight: bold;
        line-height: 25px;
        border-radius: 30px;
        color: #fff;
        text-align: center;
        margin-top: 30px;
        padding: 12px 30px;
        background-color: #1bd5c7;
      }
      span {
        position: absolute;
        top: 0;
        left: 0;
        font-weight: bold;
        font-size: 20px;
        background: #000;
        padding: 4px 14px;
        color: #fff;
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
    > img {
      width: 630px;
      height: 160px;
      display: block;
      margin-left: -25px;
      margin-top: 10px;
    }
  }
}
</style>
