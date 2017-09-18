<template>
  <div class="roles">
    <Menu1 title="选择角色" ref="menu1" @backClick="onBackClick">
      <div class="buttons" slot="button">
        <div class="avatar" :class="{active: activeRole === 'youxi'}">
          <img @click="onActiveRole('youxi')" width="100%" height="100%" src="~assets/roles/youxi/1.png" alt="" />
        </div>
        <div class="avatar" :class="{active: activeRole === 'haima'}">
          <img @click="onActiveRole('haima')" width="100%" height="100%" src="~assets/roles/haima/1.png" alt="" />
        </div>
        <div class="avatar" :class="{active: activeRole === 'chengzhinei'}">
          <img @click="onActiveRole('chengzhinei')" width="100%" height="100%" src="~assets/roles/chengzhinei/1.png" alt="" />
        </div>
        <div class="avatar" :class="{active: activeRole === 'moliangliao'}">
          <img @click="onActiveRole('moliangliao')" width="100%" height="100%" src="~assets/roles/moliangliao/1.png" alt="" />
        </div>
      </div>
      <div class="button-2" slot="button-2">
        <div class="role-name">
          <span>{{getRoleName}}</span>
        </div>
        <div class="btn-ensure">
          <span>选择</span>
        </div>
      </div>
      <div class="content" slot="content">
        <div class="role-bg" v-show="activeRole === 'youxi'">
          <img width="100%" height="100%" src="~assets/roles/youxi/2.png" alt="" />
        </div>
        <div class="role-bg" v-show="activeRole === 'haima'">
          <img width="100%" height="100%" src="~assets/roles/haima/2.png" alt="" />
        </div>
        <div class="role-bg" v-show="activeRole === 'chengzhinei'">
          <img width="100%" height="100%" src="~assets/roles/chengzhinei/2.png" alt="" />
        </div>
        <div class="role-bg" v-show="activeRole === 'moliangliao'">
          <img width="100%" height="100%" src="~assets/roles/moliangliao/2.png" alt="" />
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
        roles: [
          {pName: 'youxi', cName: '武藤游戏'},
          {pName: 'haima', cName: '海马濑人'},
          {pName: 'chengzhinei', cName: '城之内克也'},
         /* {pName: 'yixisi'},
          {pName: 'kongquewu'},
          {pName: 'pajiasuosi'},
          {pName: 'lixide'}, */
          {pName: 'moliangliao', cName: '膜良了'}
          /* {pName: 'malike'},
          {pName: 'wantengliang'},
          {pName: 'shidai'},
          {pName: 'wanzhangmu'},
          {pName: 'dazi'}, */
        ],
        activeRole: 'youxi'
      }
    },
    mounted() {
      this._initBg()
    },
    computed: {
      getRoleName() {
        let ret = this.roles.find((i) => {
          return i.pName === this.activeRole
        })

        return ret.cName
      }
    },
    methods: {
      onActiveRole(roleName) {
        this.activeRole = roleName
      },
      onBackClick() {
        this.$router.go(-1)
      },
      _initBg() {
        let menu1Left = this.$refs.menu1.$el.children[1].children[0]
        let menu1Right = this.$refs.menu1.$el.children[1].children[1]

        menu1Left.style.background = 'rgba(0, 0, 0, 0.7)'
        menu1Right.style.position = 'absolute'
        menu1Right.style.left = 0
        menu1Right.style.marginLeft = 0
      }
    },
    components: {
      Menu1
    }
  }
</script>

<style lang="stylus" scoped>
  .roles
    .buttons
      position: relative
      display: flex
      flex-wrap: wrap
      justify-content: center
      .avatar
        display: inline-block
        width: 45%
        margin: auto
        box-sizing: border-box
        padding: 5px
        border: 2px solid #ccc
        margin: 5px
        border-radius: 5px
        img
          cursor: pointer
      .active
        border: 2px solid #1ff848
    .button-2
      position: absolute
      bottom: 0
      width: 100%
      .role-name
        display: flex
        width: 170px
        height: 60px
        background: #0b73f4
        margin-left: 50%
        transform: translateX(-50%)
        border-radius: 5px
        box-sizing: border-box
        span
          display: block
          margin: auto
          font-size: 20px
      .btn-ensure
        display: flex
        width: 80px
        height: 50px
        background: green
        margin-left: 50%
        transform: translateX(-50%)
        border-radius: 5px
        box-sizing: border-box
        margin-top: 10px
        margin-bottom: 10px
        cursor: pointer
        span
          margin: auto
          font-size: 20px
</style>