<template>
  <div class="test">
    <Menu1 title="活动" ref="menu1" @backClick="onBackClick">
    </Menu1>
  </div>
</template>

<script>
  import Menu1 from 'base/menu-1/menu-1'

  export default {
    components: {
      Menu1
    }
  }
</script>

<style lang="stylus" scoped>
</style>