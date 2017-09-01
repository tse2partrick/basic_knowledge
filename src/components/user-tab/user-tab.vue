<template>
  <div class="user-tab" ref="userTab">
    <!-- 玩家角色背景组件 -->
    <player-background :bg="bg"></player-background>
    <player-char :char="char"></player-char>
    <div class="left-container">
      <div class="player-info">
        <div class="avatar-box">
          <div class="vip-box">
            <span class="vip">VIP&nbsp;&nbsp;{{vLevel}}</span>
          </div>
          <div class="avatar">
            <div class="virid-bevel">
            <div class="black-bevel">
               <img class="avatar-img" width="100%" height="100%" :src="getAvatar" alt="" /> 
            </div>
            </div>
          </div>
        </div>
        <div class="name-box">
          <div class="black-right-arrow">
            <div class="name-right-arrow">
              <div class="name">
                <div class="nickname">一根牙签一枝桠</div>
                <div class="level">100</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right-container"></div>
  </div>
</template>

<script>
  import {isMobile} from 'common/js/util'
  import PlayerBackground from 'base/player-background/player-background'
  import PlayerChar from 'base/player-char/player-char'
  import youxi1 from '../../assets/avatar/youxi1.png'

  export default {
    data() {
      return {
        bg: 'space',
        char: 'youxi',
        vLevel: 1
      }
    },
    mounted() {
      this.resizePage()
      window.addEventListener('resize', this.resizePage)
    },
    destroyed() {
      window.removeEventListener('resize', this.resizePage)
    },
    computed: {
      getAvatar() {
        return youxi1
      }
    },
    methods: {
      resizePage() {
        // 函数节流
        if (this.timer) {
          clearTimeout(this.timer)
        }

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
      }
    },
    components: {
      PlayerBackground,
      PlayerChar
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
      .player-info
        .avatar-box
          position: relative
          display: inline-block
          left: 10px
          top: 10px
          width: 100px
          height: 100px
          bevel-square(10px, #999)
          z-index: 2
          .vip-box
            position: absolute
            display: flex
            width: 100px
            height: 20px
            vip-square(15px, red)
            z-index: 10
            .vip
              margin: auto
              margin-left: 15px
              font-size: 18px
              font-weight: bold
              color: yellow
          .avatar
            position: absolute
            display: flex
            width: 84px
            height: 84px
            top: 8px
            left: 8px
            z-index: 9
            bevel-square(5px, #000)
            .virid-bevel
              display: flex
              width: 75px
              height: 75px
              margin: auto
              bevel-square(4px, $color-virid)
              .black-bevel
                display: flex
                width: 72px
                height: 72px
                margin: auto
                bevel-square(4px, #000)
                .avatar-img
                  position: relative
                  width: 90%
                  height: 90%
                  top: 7px
                  left: 4px
        .name-box
          position: absolute
          display: flex
          vertical-align: top
          top: 10px
          left: 95px
          width: 240px
          height: 60px
          right-arrow(10px, #aaa)
          z-index: 1
          .black-right-arrow
            display: flex
            margin: auto
            width: 240px
            height: 55px
            right-arrow(10px, #000)
          &:before
            position: absolute
            content: ''
            width: 8px
            height: 50px
            left: 18px
            transform: rotate(25deg)
            background: #3366CC
          &:after
            position: absolute
            content: ''
            width: 120px
            height: 10px
            left: -5px
            vip-square(10px, #ddd)
          .name-right-arrow
            display: flex
            margin: auto  
            width: 235px
            height: 50px
            right-arrow(10px, $color-nickname-bg)
            color: #FFF
            &:before
              position: absolute
              content: ''
              width: 30px
              height: 2px
              top: 20px
              right: 0
              background: linear-gradient(135deg, transparent 5px, #222 0) top left
              transform: rotate(45deg)
            &:after
              position: absolute
              content: ''
              width: 30px
              height: 3px
              top: 38px
              right: 1px
              background: linear-gradient(45deg, transparent 5px, #222 0) bottom left
              transform: rotate(-45deg)
            .name
              display: flex
              width: 80%
              height: 80%
              font-size: 18px
              margin: auto
              .nickname
                display: inline-block
                margin: auto
                font-size: 20px
              &:before
                position: absolute
                content: ''
                width: 150px
                height: 3px
                bottom: 8px
                left: 0
                background: linear-gradient(to right, $color-virid, $color-nickname-bg)
              .level
                display: inline-block
                margin: auto
                border: 2px solid $color-virid
                border-radius: 5px
                padding: 5px 2px
    .right-container
      position: absolute
      top: 0
      right: 0
      width: 60%
      height: 100%
</style>