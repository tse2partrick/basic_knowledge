<template>
  <div class="menu-1" ref="menu">
    <div class="top" ref="top">
      <div class="back-button" @click="backClick">
        <i class="icon-back">←</i>
      </div>
      <div class="title">{{title}}</div>
    </div>
    <div class="container" ref="container">
      <div class="left">
        <slot name="button"></slot>
        <slot name="button-2"></slot>
      </div>
      <div class="right">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: '标题'
      }
    },
    mounted() {
      setTimeout(() => {
        this._initContainerHeight()
      }, 20)
    },
    methods: {
      backClick() {
        this.$emit('backClick')
      },
      _initContainerHeight() {
        this.$refs.container.style.height = this.$refs.menu.clientHeight - 70 + 'px'
      }
    }
  }
</script>

<style lang="stylus">
  @import "~common/stylus/variable"
  .menu-1
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: #000
    z-index: 200
    color: #FFF
    font-family: 'Microsoft Yahei'
    overflow: hidden
    .top
      position: relative
      width: 100%
      height: 70px
      background: $color-menu1-background
      .back-button
        position: relative
        display: inline-block
        width: 100px
        height: 100%
        background: linear-gradient(#3c8898, #66ddf6)
        vertical-align: top
        cursor: pointer
        .icon-back
          position: absolute
          font-size: 40px
          top: 50%
          left: 50%
          transform: translate3d(-50%, -50%, 0)
      .title
        display: inline-block
        font-size: 28px
        font-weight: bold
        vertical-align: top
        transform: translate3d(0, 100%, 0)
    .container
      width: 100%
      height: 100%
      .left
        position: relative
        width: 23%
        height: 100%
        background: #222
        float: left
        z-index: 10
      .right
        position: relative
        margin-left: 23%
        height: 100%
        z-index: 9
</style>