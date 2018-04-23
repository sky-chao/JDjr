<template lang="html">
  <Panel title="精品活动" :cname="$style.boutiques">
      <section :class="$style.bouti">
          <ul :class="$style.listsUl">
              <li><img src="https://img12.360buyimg.com/jrpmobile/jfs/t17374/350/576442826/54240/a9918a9/5a97d2c0N021cf2e0.png?width=376&height=264" alt=""></li>
              <li><img src="https://img12.360buyimg.com/jrpmobile/jfs/t18127/359/1409581291/64672/bf6f1441/5ac9786bN5954f61a.png?width=376&height=264" alt=""></li>
          </ul>
          <div><img src="https://img12.360buyimg.com/jrpmobile/jfs/t16675/365/91110617/54621/c0042c09/5a5c87faNd161d42e.png?width=730&height=264" alt=""></div>
      </section>
  </Panel>
</template>

<script >
import Panel from "../core/panel.vue";
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
.boutiques{
    margin-bottom:450px;
    >h4{
        text-align:left;
    }
   
    .bouti{
        width: 100%;
        .listsUl{
            width: 100%;
            @include list(row);
            flex-wrap:nowrap;
            >li{
                width: 50%;
                >img{
                    width: 100%;
                }
                &:nth-child(2){
                    >img{
                         margin-left:-15px;
                    }
                }
            }
        }
        >div{
            width: 98%;
            margin-left:8px;
            img{
                width: 100%;

            }
        }
    }
}
</style>
