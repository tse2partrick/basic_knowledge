<template>
  <div class="activities">
    <Menu1 title="活动" @backClick="onBackClick">
      <div class="button" slot="button" v-for="(button, index) in aButtons" :class="{active: currentIndex === index}" @click="onClickBtn(index)">
        <div class="name-box">
          <div class="name">{{button.cName}}</div>
        </div>
      </div>
      <div class="content" slot="content">
        <div class="sclb" v-show="currentIndex === 0">
          <div class="sc">
            <img width="100%" height="100%" src="~assets/activities/sclb/sclb.png" alt="" />
          </div>
        </div>
        <div class="czlh" v-show="currentIndex === 1">
          <div class="cz">
            <img width="100%" height="100%" src="~assets/activities/czlh/czlh.png" alt="" />
            <div class="btn-buy-1"></div>
          </div>
        </div>
        <div class="jpyk" v-show="currentIndex === 2">
          <div class="jp">
            <img width="100%" height="100%" src="~assets/activities/jpyk/jpyk.png" alt="" />
          </div>
        </div>
        <div class="czjj" v-show="currentIndex === 3">
          <div class="cz">
            <img width="100%" height="100%" src="~assets/activities/jpyk/jpyk.png" alt="" />
          </div>
        </div>
        <div class="yqlb" v-show="currentIndex === 4">
          <div class="yq">
            <img width="100%" height="100%" src="~assets/activities/wdyq/wdyq.png" alt="" />
          </div>
        </div>
        <div class="yjfk" v-show="currentIndex === 5">
          <div class="yj">
            <img width="100%" height="100%" src="~assets/activities/yjfk/yjfk.png" alt="" />
          </div>
        </div>
      </div>
    </Menu1>
  </div>
</template>

<script>
  import Menu1 from 'base/menu-1/menu-1'

  export default {
    data() {
      return {
        aButtons: [
          {cName: '首充礼包', pName: 'sclb'},
          {cName: '超值礼盒', pName: 'czlh'},
          {cName: '精品月卡', pName: 'jpyk'},
          {cName: '成长基金', pName: 'czjj'},
          {cName: '邀请礼包', pName: 'yqlb'},
          {cName: '意见反馈', pName: 'yjfk'}
        ],
        currentIndex: 0
      }
    },
    methods: {
      onClickBtn(index) {
        this.currentIndex = index
      },
      onBackClick() {
        this.$router.go(-1)
      }
    },
    components: {
      Menu1
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  
  .activities
    color: #FFF
    display: flex
    height: 100%
    .button
      display: flex
      margin: auto
      width: 80%
      height: 70px
      margin-top: 10px
      margin-bottom: 10px
      background: #3c8898
      bevel-square(7px, #3c8898)
      cursor: pointer
      font-size: 18px
      .name-box
        display: flex
        margin: auto
        width: 87%
        height: 87%
        background: linear-gradient(to right, #6e8185, #eee, #6e8185)
        bevel-square(7px, #507c85)
        .name
          margin: auto
          text-shadow: 1px 1px 5px #000
      &:hover
        .name-box
          background: #1a9bff
          bevel-square(7px, #1a9bff)
    .active
      .name-box
        background: #1a9bff
        bevel-square(7px, #1a9bff)
    .content
      position: absolute
      left: 0
      top: 0
      width: 100%
      height: 100%
      background: yellow
      .sclb, .czlh, .jpyk, .czjj, .yqlb, .yjfk
        position: relative
        display: flex
        width: 100%
        height: 100%
        .sc, .cz, .jp, .cz, .yq, .yj
          margin: auto
          width: 100%
          height: 100%
</style>