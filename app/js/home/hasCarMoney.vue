<template lang="html">
  <panel title="有车有钱" :cname="$style.hcamy">
      <section :class="$style.pro">
          <img v-for="item in producs" :src="item.src" :href="item.href"></img>
      </section>
      <section :class="$style.entry">
          <a v-for="item in items" :href="item.href">
              <img :src="item.src" :alt="item.title">
              <p>{{item.title}}</p>
          </a>
      </section>
  </panel>
</template>

<script >
import Panel from "../core/panel.vue";
export default {
  data() {
    return {
        producs:[{
            src:"//img12.360buyimg.com/jrpmobile/jfs/t18913/125/1245872730/32248/a8bc4ea2/5ac180b5N008bdabb.png?width=375&height=233",
            href:"home"
        },{ src:"//img12.360buyimg.com/jrpmobile/jfs/t14215/140/1757206721/24186/81b4e53c/5a56c877Nee6cfc4d.jpg?width=375&height=233",
            href:"home"}],
        items:[{
            src:"//img12.360buyimg.com/jrpmobile/jfs/t12799/50/704102454/5247/19eac80a/5a4f2622Nc4aca701.png?width=90&height=90",
            title:"旅游",
            href:"home"
        },{
            src:"//img12.360buyimg.com/jrpmobile/jfs/t16033/196/1306232362/4705/4c678227/5a4f265bN66ef5ae8.png?width=90&height=90",
            title:"医美",
            href:"home"
        },{
            src:"//img12.360buyimg.com/jrpmobile/jfs/t13051/63/2559290659/4702/e4068917/5a4f2693N937f1905.png?width=88&height=88",
            title:"房抵贷",
            href:"home"
        },{
            src:"//img12.360buyimg.com/jrpmobile/jfs/t15133/16/1440686097/5786/1b038e03/5a4f26bfN03ed1f66.png?width=90&height=90",
            title:"驾校",
            href:"home"
        },{
            src:"//img12.360buyimg.com/jrpmobile/jfs/t14896/125/1435676873/3668/a8b392f7/5a4f26edN6cdfda66.png?width=88&height=88",
            title:"分期用",
            href:"home"
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
.hcamy {
    .pro {
        width: 100%;
        img{
            width: 50%;
        }
    }
    .entry{
        width: 100%;
        margin-top:80px;
        padding-bottom:10px;
        @include list(row);
        justify-content:space-around;
        a{
            text-align:center;
            text-decoration:none;
            img{
                width: 90px;
            }
            p{
                font-size:26px;
                color:#666;
                margin-top:13px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;

            }
        }
    }
}
</style>
