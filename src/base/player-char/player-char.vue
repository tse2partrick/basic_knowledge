<template>
  <div class="player-char">
    <img width="100%" height="100%" :src="getC" alt="" />
  </div>
</template>

<script>
  import youxi from '../../assets/char/youxi.png'

  export default {
    props: {
      char: {
        type: String,
        default: ''
      }
    },
    computed: {
      getC() {
        let pChar

        switch (this.char) {
          case 'youxi': {
            pChar = youxi
            break
          }
          default: {
            pChar = youxi
            break
          }
        }

        return pChar
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .player-char
    position: absolute
    top: 0
    width: 50%
    height: 100%
</style>