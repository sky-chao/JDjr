<template lang="html">
  <Panel title="有车有钱" :cname="$style.boemo">
      <section :class="$style.sec">
          <img src="https://img12.360buyimg.com/jrpmobile/jfs/t19240/256/1797533931/20714/33347659/5ad95c30N97d8f50b.png?width=375&height=233" alt="">
          <img src="https://img12.360buyimg.com/jrpmobile/jfs/t14215/140/1757206721/24186/81b4e53c/5a56c877Nee6cfc4d.jpg?width=375&height=233" alt="">
      </section>
      <ul>
           <li v-for="item in items">
                <a :href="item.href">
                    <img :src="item.src" :alt="item.title">
                    <p>{{item.title}}</p>
                </a>
            </li>
      </ul>
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
            "//img12.360buyimg.com/jrpmobile/jfs/t12799/50/704102454/5247/19eac80a/5a4f2622Nc4aca701.png?width=90&height=90",
          href: "borrow",
          title: "旅游"
        },
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t16033/196/1306232362/4705/4c678227/5a4f265bN66ef5ae8.png?width=90&height=90",
          href: "borrow",
          title: "医美"
        },
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t13051/63/2559290659/4702/e4068917/5a4f2693N937f1905.png?width=88&height=88",
          href: "borrow",
          title: "房抵贷"
        },
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t15133/16/1440686097/5786/1b038e03/5a4f26bfN03ed1f66.png?width=90&height=90",
          href: "borrow",
          title: "驾校"
        },
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t14896/125/1435676873/3668/a8b392f7/5a4f26edN6cdfda66.png?width=88&height=88",
          href: "borrow",
          title: "分期用"
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
.boemo {
  > h4 {
    text-align: left;
  }
  .sec {
    @include list(row);
    > img {
      width: 50%;
      display: block;
    }
  }
  > ul {
    width: 100%;
    @include list(row);
    > li {
      width: 20%;
      > a {
        display: block;
        text-decoration: none;
        font-size: 24px;
        color: #000;
        text-align: center;
        img {
          width: 77px;
          height: 77px;
          margin-top: 40px;
        }
        p {
          padding: 14px 22px 35px;
          text-align: center;
        }
      }
    }
  }
}
</style>
