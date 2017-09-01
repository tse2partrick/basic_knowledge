<template>
  <div id="app" @touchmove.prevent>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted() {
    this._setRem()

    window.addEventListener('resize', this._setRem)
  },
  destroyed() {
    window.removeEventListener('resize', this._setRem)
  },
  methods: {
    _setRem() {
      if (this.timer) {
        clearTimeout(this.timer)
      }

      this.timer = setTimeout(() => {
        let fontSize = 100
        let normalWidth = 667

        let newFontSize = fontSize / normalWidth * document.body.clientWidth

        document.getElementsByTagName('html')[0].style.fontSize = newFontSize + 'px'
      }, 20)
    }
  }
}
</script>

<style>
#app {
}
</style>
