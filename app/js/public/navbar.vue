<template lang="html">
  <ul title="导航" :class="$style.navs">
        <li>
          <router-link :to="{ name: 'home'}">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t3541/110/627394787/2190/5d02d39c/580f1dfdNcf72af31.png?width=66&height=66" >
            <p>首页</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'money'}">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t3811/55/345433999/2930/116d3dd1/580f1e25N028a1f2c.png?width=66&height=66">
            <p>理财</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'borrow'}">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t3343/179/621044750/1484/5af6b11a/580f50e4N005181d0.png?width=66&height=66" >
            <p>白条</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'home'}">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t3340/68/639059082/2591/800e2d6b/580f51cdN4caf20b2.png?width=66&height=66">
            <p>我的</p>
          </router-link>
        </li>
  </ul>
</template>

<script >
export default {
  data() {
    return {
        items:[{
            src:"//img12.360buyimg.com/jrpmobile/jfs/t3541/110/627394787/2190/5d02d39c/580f1dfdNcf72af31.png?width=66&height=66",
            title:"首页",
            href:"home"
        },{
            src:"//img12.360buyimg.com/jrpmobile/jfs/t3811/55/345433999/2930/116d3dd1/580f1e25N028a1f2c.png?width=66&height=66",
            title:"理财",
            href:"home"
        },{
            src:"//img12.360buyimg.com/jrpmobile/jfs/t3343/179/621044750/1484/5af6b11a/580f50e4N005181d0.png?width=66&height=66",
            title:"白条",
            href:"home"
        },{
            src:"//img12.360buyimg.com/jrpmobile/jfs/t3340/68/639059082/2591/800e2d6b/580f51cdN4caf20b2.png?width=66&height=66",
            title:"我的",
            href:"home"
        }]
    }
  }
}
</script>

<style  lang="scss" module>
@import "../../css/element.scss";
.navs {
    background-color: #fff;
    width:100%;
    position:fixed;
    z-index: 101;
    bottom:0;
    @include list(row);
    justify-content:space-around;
    padding-bottom:12px;
    li{
        text-align: center;

        a{
          text-decoration: none;
        }
        img{
          width: 44px;
          height: 44px;
          display: inline-block;
          margin: 12px auto 6px;
        }
        p{
          font-size: 22px;
          color: #656565;
        }
    }
}
</style>
