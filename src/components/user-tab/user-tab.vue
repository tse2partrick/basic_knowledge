<template>
  <div class="user-tab" ref="userTab">
    <!-- 玩家角色背景组件 -->
    <player-background :bg="bg"></player-background>
    <player-char :char="char"></player-char>
    <div class="left-container">
      <player-info class="playerInfo" :name="playerName" :level="playerLevel" :vip-level="vipLevel" />
      <div class="activities">
        <div class="activity">
          <img width="100%" height="100%" src="~assets/treasures/treasure1.gif" alt="">
        </div>
      </div>
      <div class="message" ref="message">
        <div class="msg-box" ref="msgBox"></div>
        <div class="img-box" ref="imgBox">
          <div v-show="notReadMsg" class="not-read-msg">{{notReadMsg}}</div>
          <img class="msg-off" v-show="!msgOpen" src="~assets/routers/message-in.png" alt="" @click="toggleMsg" />
          <img class="msg-on" v-show="msgOpen" src="~assets/routers/message-out.png" alt="" @click="toggleMsg" />  
        </div>
      </div>
      <div class="role">
        <img width="100%" height="100%" src="~assets/routers/role12.png" alt="" />
      </div>
    </div>
    <div class="right-container">
      <div class="money-box">
        <div class="gold" ref="gold">
          <div class="gold-num">{{serialize(gold)}}</div>
          <img width="70%" height="70%" src="~assets/money/gold.png" alt="" />
        </div>
        <div class="diamond" ref="diamond">
          <div class="diamond-num">{{serialize(diamond)}}</div>
          <img width="70%" height="70%" src="~assets/money/diamond.png" alt="" />
        </div>
      </div>
      <div class="function-1-box">
        <div class="mission">
          <img src="~assets/routers/mission.png" width="100%" height="100%"  alt="" />
        </div>
        <div class="all-card">
          <img src="~assets/routers/all-card.png" width="100%" height="100%" alt="" />
        </div>
        <div class="rank">
          <img src="~assets/routers/rank.png" width="100%" height="100%" alt="" />
        </div>
        <div class="email">
          <img src="~assets/routers/email.png" width="100%" height="100%" alt="" />
        </div>
        <div class="sign-in">
          <img src="~assets/routers/sign-in.png" width="100%" height="100%" alt="" />
        </div>
      </div>
      <div class="function-2-box">
        <div class="my-card">
          <img src="~assets/routers/my-card.png" width="100%" height="100%" alt="" />
        </div>
        <div class="shop">
          <img src="~assets/routers/shop.png" width="100%" height="100%" alt="" />
        </div>
        <div class="fight">
          <img src="~assets/routers/fight.png" width="100%" height="100%" alt="" />
        </div>
        <div class="store">
          <img src="~assets/routers/store.png" width="100%" height="100%" alt="" />
        </div>
        <div class="skin-shop">
          <img src="~assets/routers/skin-shop.png" width="100%" height="100%" alt="" />
        </div>
        <div class="team">
          <img src="~assets/routers/team.png" width="100%" height="100%" alt="" />
        </div>
      </div>
      <div class="function-3-box">
        <div class="travel">
          <img src="~assets/routers/travel2.png" width="100%" height="100%" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {isMobile} from 'common/js/util'
  import PlayerBackground from 'base/player-background/player-background'
  import PlayerChar from 'base/player-char/player-char'
  import PlayerInfo from 'base/player-info/player-info'

  export default {
    data() {
      return {
        bg: 'space',
        char: 'youxi',
        vLevel: 10,
        msgOpen: false,
        notReadMsg: 20,
        playerName: '一根牙签',
        playerLevel: 100,
        vipLevel: 1,
        gold: 299999,
        diamond: 299999
      }
    },
    mounted() {
      this.resizePage()
      window.addEventListener('resize', this.resizePage)
      setTimeout(() => {
        this._initMsgPos()
        this._initMoneyPos()
      }, 20)
    },
    destroyed() {
      window.removeEventListener('resize', this.resizePage)
    },
    methods: {
      resizePage() {
        // 函数节流
        if (this.timer) {
          clearTimeout(this.timer)
        }

        // 竖屏自动转向横屏
        this.timer = setTimeout(() => {
          let width = document.body.clientWidth
          let height = document.body.clientHeight

          if (isMobile() && window.matchMedia('(orientation: portrait)').matches) {
            width = document.body.clientHeight
            height = document.body.clientWidth
            this.$refs.userTab.style.transform = 'rotate(90deg)'
            this.$refs.userTab.style.transformOrigin = `${height / 2}px ${height / 2}px`

            console.log('portrait')
          } else {
            this.$refs.userTab.style.transform = ''
            this.$refs.userTab.style.transformOrigin = ''
          }

          this.$refs.userTab.style.width = width + 'px'
          this.$refs.userTab.style.height = height + 'px'

          console.log('resize')
        }, 20)

        // 计算消息盒子的位置
        this._initMsgPos()

        // 计算钱币位置
        this._initMoneyPos()
      },
      toggleMsg() {
        if (this.notReadMsg) {
          this.notReadMsg = 0
        }
        this.msgOpen = !this.msgOpen

        if (this.msgOpen) {
          this.$refs.message.style.transform = 'translate3d(0, 0, 0)'
        } else {
          this.$refs.message.style.transform = `translate3d(-${this.$refs.msgBox.clientWidth}px, 0, 0)`
        }
      },
      serialize(num) {
        let ret
        num = num.toString()

        if (num.length > 8) {
          ret = (Number(num) / 100000000).toFixed(1)
          ret += '亿'
        } else if (num.length > 4) {
          ret = (Number(num) / 10000).toFixed(1)
          ret += '万'
        }

        return ret
      },
      _initMsgPos() {
        this.$refs.message.style.transform = `translate3d(-${this.$refs.msgBox.clientWidth}px, 0, 0)`
        this.$refs.imgBox.style.left = this.$refs.msgBox.clientWidth + 'px'
        this.$refs.imgBox.style.top = this.$refs.msgBox.clientHeight / 2 - this.$refs.imgBox.clientHeight / 2 + 'px'

        console.log(this.$refs.msgBox.clientHeight + ' - ' + this.$refs.imgBox.clientHeight)
      },
      _initMoneyPos() {
        // this.$refs.gold.style.right = this.$refs.gold.clientWidth + 'px'
      }
    },
    components: {
      PlayerBackground,
      PlayerChar,
      PlayerInfo
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  
  .user-tab
    position: relative
    width: 100%
    height: 100%
    overflow: hidden
    .left-container
      position: absolute
      top: 0
      left: 0
      width: 40%
      height: 100%
      .activities
        .activity
          width: 80px
          height: 80px
      .message
        position: absolute
        width: 100%
        height: 80%
        top: 10%
        z-index: 10
        transition: all 0.3s
        .msg-box
          position: absolute
          width: 80%
          height: 100%
          background: #ccc
        .img-box
          position: absolute
          z-index: 9
          .not-read-msg
            position: absolute
            display: inline-block
            background: red
            font-size: 20px
            font-weight: bold
            border-radius: 50%
            padding: 10px
            color: #FFF
            z-index: 10
          .msg-off
            position: relative
          .msg-on
            position: relative
      .role
        position: absolute
        bottom: 0
        left: 0
        width: 130px
    .right-container
      position: absolute
      top: 0
      right: 0
      width: 60%
      height: 100%
      .money-box
        position: relative
        width: 100%
        height: 80px
        .gold
          position: absolute
          display: inline-block
          top: 0
          right: 240px
          text-align: right
          .gold-num
            position: absolute
            display: inline-block
            color: #FFF
            right: 90px
            top: 27px
            font-size: 18px
          img
            vertical-align: top
        .diamond
          position: absolute
          display: inline-block
          right: 0
          top: 0
          text-align: right
          .diamond-num
            position: absolute
            display: inline-block
            color: #FFF
            right: 90px
            top: 27px
            font-size: 18px
          img
            vertical-align: top
      .function-1-box
        position: relative
        right: 20px
        top: -30px
        text-align: right
        .mission
          display: inline-block
          width: 70px
          height: 70px
        .all-card
          display: inline-block
          margin-left: -10px
          width: 70px
          height: 70px
        .rank
          display: inline-block
          margin-left: -10px
          width: 70px
          height: 70px
        .email
          display: inline-block
          margin-left: -10px
          width: 70px
          height: 70px
        .sign-in
          display: inline-block
          margin-left: -10px
          width: 70px
          height: 70px
      .function-2-box
        position: relative
        width: 100%
        height: 100%
        top: -40px
        .my-card
          position: absolute
          display: inline-block
          width: 140px
          left: 47%
        .shop
          position: absolute
          display: inline-block
          width: 140px
          left: 80%
        .fight
          position: absolute
          display: inline-block
          width: 200px
          left: 60%
          top: 7%
        .store
          position: absolute
          display: inline-block
          width: 140px
          left: 47%
          top: 24%
        .skin-shop
          position: absolute
          display: inline-block
          width: 140px
          left: 64%
          top: 37%
        .team
          position: absolute
          display: inline-block
          width: 140px
          left: 81%
          top: 24%
      .function-3-box
        position: absolute
        width: 100%
        height: 140px
        bottom: 0
        .travel
          position: absolute
          width: 130px
          top: 0
          right: 20px
</style>