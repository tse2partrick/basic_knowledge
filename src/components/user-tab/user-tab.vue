<template>
  <div class="user-tab" ref="userTab">
    <!-- 玩家角色背景组件 -->
    <player-background :bg="bg"></player-background>
    <player-char :char="char"></player-char>
    <div class="left-container">
      <player-info class="playerInfo" :name="playerName" :level="playerLevel" :vip-level="vipLevel" @openPlayerInfo="onOpenPlayerInfo" />
      <div class="activities" ref="activities">
        <div class="activity">
          <img width="100%" height="100%" src="~assets/treasures/treasure1.gif" alt="" @click="onActivitiesOpen">
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
      <div class="role" ref="role">
        <img width="100%" height="100%" src="~assets/routers/role1.png" alt="" @click="onRolesOpen" />
      </div>
    </div>
    <div class="right-container">
      <div class="money-box">
        <div class="gold" ref="gold">
          <div class="gold-num">{{serialize(gold)}}</div>
          <img width="70%" height="100%" src="~assets/money/gold.png" alt="" />
        </div>
        <div class="diamond" ref="diamond">
          <div class="diamond-num">{{serialize(diamond)}}</div>
          <img width="70%" height="100%" src="~assets/money/diamond.png" alt="" />
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
        <div class="my-card" @click="goMyCard">
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
    <div class="filterMode" v-show="playerInfoOpen" @click="onDownPlayerInfo">
    </div>
    <div class="menu" ref="menu">
      <div class="role-setting">
        <div class="player-info">
          <PlayerInfo class="menu-player-info" :name="playerName" :level="playerLevel" :vip-level="vipLevel" />
          <div class="id">
            <span>ID</span>{{id}}
          </div>
          <div class="v-button">VIP 特权</div>
        </div>
        <div class="role-info">
          <div class="role-name">武藤游戏</div>
          <div class="level-box">
            <div class="level">{{playerLevel}}</div>
            <div class="exp-box">
              <div class="exp" ref="exp"></div>
              <div class="exp-num">{{gotExp}}/{{nextExp}}</div>
            </div>
          </div>
          <div class="basic-setting">
            <div class="change-button nickname">修改昵称</div>
            <div class="change-button avatar">修改头像</div>
            <div class="change-button avatar-box">修改头像框</div>
            <div class="change-button card-behind">修改卡背</div>
          </div>
        </div>
      </div>
      <div class="game-setting">
        <div class="music-box">
          <span class="">音乐</span>
          <div class="change-button voice">{{voiceOpen ? '开' : '关'}}</div>
          <span>音效</span>
          <div class="change-button music">{{musicOpen ? '开' : '关'}}</div>
        </div>
        <div class="change-button help">帮助</div>
        <div class="change-server">
          <span class="server-name">{{server}}</span>
          <div class="change-button">切换服务器</div>
        </div>
      </div>
      <div class="gift-change">
        <div class="v-button">礼包兑换</div>
      </div>
      <div class="close-button" @click="onDownPlayerInfo">x</div>
    </div>
  </div>
</template>

<script>
  import {isMobile} from 'common/js/util'
  import PlayerBackground from 'base/player-background/player-background'
  import PlayerChar from 'base/player-char/player-char'
  import PlayerInfo from 'base/player-info/player-info'

  import jsonp from 'common/js/jsonp'
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
        diamond: 299999,
        playerInfoOpen: false,
        voiceOpen: true,
        musicOpen: true,
        id: 65536,
        gotExp: 3000,
        nextExp: 5000,
        server: '173区 光影刺客'
      }
    },
    mounted() {
      this.resizePage()
      // window.addEventListener('resize', this.resizePage)
      setTimeout(() => {
        this._initMsgPos()
        this._initMoneyPos()
      }, 20)

      let d = jsonp('http://localhost:8081')
      console.log(d)
    },
    destroyed() {
      // window.removeEventListener('resize', this.resizePage)
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
          this.$refs.activities.style.zIndex = 1
          this.$refs.role.style.zIndex = 1
        } else {
          this.$refs.message.style.transform = `translate3d(-${this.$refs.msgBox.clientWidth}px, 0, 0)`
          setTimeout(() => {
            this.$refs.activities.style.zIndex = 10
            this.$refs.role.style.zIndex = 10
          }, 300)
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
      onOpenPlayerInfo() {
        this.playerInfoOpen = true
        this.$refs.menu.style.animation = 'menuOpen 0.7s forwards'
        this.$refs.exp.style.width = this.gotExp / this.nextExp * 100 + '%'
      },
      onDownPlayerInfo() {
        this.playerInfoOpen = false
        this.$refs.menu.style.animation = 'menuDown 0.7s forwards'
      },
      clickOnMenu() {

      },
      onActivitiesOpen() {
        this.$router.push({
          path: '/activities'
        })
      },
      onRolesOpen() {
        this.$router.push({
          path: '/roles'
        })
      },
      goMyCard() {
        this.$router.push({
          path: '/my-card'
        })
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
      .playerInfo
        position: relative
        z-index: 11
      .activities
        position: relative
        z-index: 10
        .activity
          width: 80px
          height: 80px
          img
            cursor: pointer
      .message
        position: absolute
        width: 100%
        height: 80%
        top: 10%
        z-index: 9
        transition: all 0.3s
        .msg-box
          position: absolute
          width: 80%
          height: 100%
          background: #ccc
        .img-box
          position: absolute
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
        z-index: 10
        img
          cursor: pointer
    .right-container
      position: absolute
      top: 0
      right: 0
      width: 60%
      height: 100%
      .money-box
        position: relative
        width: 100%
        height: 70px
        margin-bottom: 10px
        z-index: 1000
        .gold
          position: absolute
          display: inline-block
          top: 0
          right: 240px
          height: 70px
          text-align: right
          font-size: 0
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
          height: 100%
          text-align: right
          font-size: 0
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
    .filterMode
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      background: rgba(33, 33, 33, 0.7)
      z-index: 100
      transition: 0.3s
    .menu
      position: absolute
      top: 50%
      left: 50%
      transform: translateX(-50%) translateY(-50%) translate3d(0, 150%, 0)
      width: 80%
      height: 70%
      background: $color-board
      transition: 0.3s
      z-index: 101
      font-size: 18px
      border-radius: 5px
      padding: 10px
      color: #FFF
      .role-setting
        padding-bottom: 20px
        border-bottom: 1px solid #222
        .player-info
          .menu-player-info
            transform: scale(1)
          .id
            position: absolute
            display: inline-block
            left: 50%
            top: 35px
            font-size: 20px
            span
              color: #ffb503
              margin-right: 5px
          .v-button
            v-button()
            position: absolute
            width: 100px
            right: 30px
            top: 35px
            &:hover
              color: red
              background: yellow
        .role-info
          margin-top: 50px
          margin-left: 10px
          margin-right: 10px
          .role-name
            display: inline-block
            margin-right: 30px
          .level-box
            display: inline-block
            .level
              display: inline-block
              border: 1px solid blue
            .exp-box
              position: relative
              display: inline-block
              border: 1px solid #ccc
              width: 200px
              text-align: center
              .exp
                position: absolute
                display: inline-block
                color: green
                top: 0
                left: 0
                height: 100%
                background: blue
                z-index: 9
              .exp-num
                position: relative
                display: inline-block
                z-index: 10
          .basic-setting
            display: inline-block
            margin-left: 5px
            .change-button
              change-button()
              width: 100px
              &:hover
                color: green
                background: #FFF
      .game-setting
        border-top: 1px solid #ccc
        border-bottom: 1px solid #222
        padding: 0 10px
        padding-bottom: 30px
        .music-box
          display: inline-block
          margin-top: 20px
          span
            color: orange
          .change-button
            change-button()
            width: 50px
            &:hover
              color: green
              background: #FFF
        .help
          change-button()
          width: 100px
          margin-left: 152px
          &:hover
              color: green
              background: #FFF
        .change-server
          margin-top: 20px
          span
            font-size: 14px
          .change-button
            change-button()
            width: 130px
            margin-top: 20px
            &:hover
              color: green
              background: #FFF
      .gift-change
        position: relative
        border-top: 1px solid #ccc
        text-align: right
        .v-button
          v-button()
          width: 100px
          margin: 30px 30px 0 0
          &:hover
            color: red
            background: yellow
      .close-button
        close-button()
        &:hover
          color: red
          background: #FFF
  img
    cursor: pointer
  @keyframes menuOpen
    0% {transform: translate3d(-50%, 150%, 0)}
    60% {transform: translate3d(-50%, -70%, 0)}
    100% {transform: translate3d(-50%, -50%, 0)}
  @keyframes menuDown
    0% {transform: translate3d(-50%, -50%, 0)}
    40% {transform: translate3d(-50%, -70%, 0)}
    100% {transform: translate3d(-50%, 150%, 0)}
</style>