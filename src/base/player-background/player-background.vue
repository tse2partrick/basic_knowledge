<template>
  <div class="player-background" ref="playerBg">
    <img width="100%" height='100%' :src="getB">
  </div>
</template>

<script>
  
  import forest from '../../assets/bg/forest.jpg'
  import space from '../../assets/bg/space.jpg'
  import sacred from '../../assets/bg/sacred.jpg'

  export default {
    props: {
      bg: {
        type: String,
        default: ''
      }
    },
    computed: {
      getB() {
        let back
        switch (this.bg) {
          case 'forest': {
            back = forest
            break
          }
          case 'sacred': {
            back = sacred
            break
          }
          case 'space': {
            back = space
            break
          }
          default: {
            back = forest
            break
          }
        }

        return back
        // return `background-image: url(${back})`
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .player-background
    width: 100%
    height: 100%
</style>