<template>
  <div class="my-card">
    <div class="up-box">
      <div class="left-box">
        <ul>
          <li class="cardItems" v-for="(item, index) in cardItems" :key="index">{{item.cName}}</li>
        </ul>
        <div class="page">{{currentPage}}/{{totalPage}}</div>
      </div>
      <div class="right-box" ref="rightBox">
        <div class="left-arrow" @click="onClickLeft" ref="leftArrow"></div>
        <div class="right-inner-box" ref="rightInnerBox">
          <div class="img-box">
            <img src="~assets/my-cards/g-bft.png" width="100%" height="90%" alt="" />
            <div class="card-num">3</div>
          </div>
          <div class="img-box">
            <img src="~assets/my-cards/g-cszsa.png" width="100%" height="90%" alt="" />
            <div class="card-num">3</div>
          </div>
          <div class="img-box">
            <img src="~assets/my-cards/g-cszsb.png" width="100%" height="90%" alt="" />
            <div class="card-num">2</div>
          </div>
          <div class="img-box">
            <img src="~assets/my-cards/g-cszsy.png" width="100%" height="90%" alt="" />
            <div class="card-num">1</div>
          </div>
          <div class="img-box">
            <img src="~assets/my-cards/g-hfzahqsgy.png" width="100%" height="90%" alt="" />
            <div class="card-num">1</div>
          </div>
          <div class="img-box">
            <img src="~assets/my-cards/g-hmssn.png" width="100%" height="90%" alt="" />
            <div class="card-num">2</div>
          </div>
          <div class="img-box">
            <img src="~assets/my-cards/g-hswjse.png" width="100%" height="90%" alt="" />
            <div class="card-num">3</div>
          </div>
          <div class="img-box">
            <img src="~assets/my-cards/g-jefem.png" width="100%" height="90%" alt="" />
            <div class="card-num">4</div>
          </div>
          <div class="img-box">
            <img src="~assets/my-cards/g-jljs.png" width="100%" height="90%" alt="" />
            <div class="card-num">3</div>
          </div>
          <div class="img-box">
            <img src="~assets/my-cards/g-lys.png" width="100%" height="90%" alt="" />
            <div class="card-num">6</div>
          </div>
          <div class="img-box">
            <img src="~assets/my-cards/g-lzq.png" width="100%" height="90%" alt="" />
            <div class="card-num">5</div>
          </div>
          <div class="img-box">
            <img src="~assets/my-cards/g-phjs.png" width="100%" height="90%" alt="" />
            <div class="card-num">3</div>
          </div>
          <div class="img-box">
           <img src="~assets/my-cards/g-qml.png" width="100%" height="90%" alt="" />
           <div class="card-num">2</div>
          </div>
          <div class="img-box">
            <img src="~assets/my-cards/g-ysdjb.png" width="100%" height="90%" alt="" />
            <div class="card-num">1</div>
          </div>
          <div class="img-box">
            <img src="~assets/my-cards/m-ddll.png" width="100%" height="90%" alt="" />
            <div class="card-num">2</div>
          </div>
          <div class="img-box">
            <img src="~assets/my-cards/m-dg.png" width="100%" height="90%" alt="" />
            <div class="card-num">3</div>
          </div>
          <div class="img-box">
            <img src="~assets/my-cards/m-gzdmz.png" width="100%" height="90%" alt="" />
            <div class="card-num">4</div>
          </div>
          <div class="img-box">
            <img src="~assets/my-cards/m-gzhfj.png" width="100%" height="90%" alt="" />
            <div class="card-num">5</div>
          </div>
          <div class="img-box">
            <img src="~assets/my-cards/m-hd.png" width="100%" height="90%" alt="" />
            <div class="card-num">6</div>
          </div>
          <div class="img-box">
            <img src="~assets/my-cards/m-hmss.png" width="100%" height="90%" alt="" />
            <div class="card-num">11</div>
          </div>
          <div class="img-box">
            <img src="~assets/my-cards/m-jf.png" width="100%" height="90%" alt="" />
            <div class="card-num">15</div>
          </div>
          <div class="img-box">
            <img src="~assets/my-cards/m-mfcq.png" width="100%" height="90%" alt="" />
            <div class="card-num">2</div>
          </div>
          <div class="img-box">
            <img src="~assets/my-cards/m-qyzh.png" width="100%" height="90%" alt="" />
            <div class="card-num">1</div>
          </div>
          <div class="img-box">
            <img src="~assets/my-cards/m-rh.png" width="100%" height="90%" alt="" />
            <div class="card-num">1</div>
          </div>
          <div class="img-box">
            <img src="~assets/my-cards/m-szmsx.png" width="100%" height="90%" alt="" />
            <div class="card-num">2</div>
          </div>
          <div class="img-box">
            <img src="~assets/my-cards/m-szss.png" width="100%" height="90%" alt="" />
            <div class="card-num">3</div>
          </div>
          <div class="img-box">
            <img src="~assets/my-cards/m-xf.png" width="100%" height="90%" alt="" />
            <div class="card-num">4</div>
          </div>
          <div class="img-box">
            <img src="~assets/my-cards/m-zz.png" width="100%" height="90%" alt="" />
            <div class="card-num">3</div>
          </div>
          <div class="img-box">
            <img src="~assets/my-cards/rh-dcws.png" width="100%" height="90%" alt="" />
            <div class="card-num">2</div>
          </div>
          <div class="img-box">
            <img src="~assets/my-cards/x-hw.png" width="100%" height="90%" alt="" />
            <div class="card-num">1</div>
          </div>
          <div class="img-box">
            <img src="~assets/my-cards/x-lmxzzf.png" width="100%" height="90%" alt="" />
            <div class="card-num">2</div>
          </div>
          <div class="img-box">
           <img src="~assets/my-cards/x-mfgrz.png" width="100%" height="90%" alt="" />
           <div class="card-num">3</div>
          </div>
          <div class="img-box">
            <img src="~assets/my-cards/x-mft.png" width="100%" height="90%" alt="" />
            <div class="card-num">4</div>
          </div>
          <div class="img-box">
            <img src="~assets/my-cards/x-mslm.png" width="100%" height="90%" alt="" />
            <div class="card-num">3</div>
          </div>
          <div class="img-box">
            <img src="~assets/my-cards/x-sf.png" width="100%" height="90%" alt="" />
            <div class="card-num">2</div>
          </div>
          <div class="blankImg" v-for="item in blankImgArr">
          </div>
        </div>
        <div class="right-arrow" @click="onClickRight" ref="rightArrow"></div>
      </div>
    </div>
    <div class="down-box">
      <div class="down-left" ref="downLeft">
        <div class="card-box" v-for="card in currentCardsArr">
          <img width="100%" height="100%" :src="card.cloneImg" alt="" />
          <div class="current-card-num">{{card.cardNum}}/3</div>
        </div>
      </div>
      <div class="down-right" ref="downRight"></div>
    </div>
  </div>
</template>

<script>
  // import {addClass} from 'common/js/util'
  export default {
    data() {
      return {
        cardItems: [
          {cName: '怪兽卡'},
          {cName: '魔法卡'},
          {cName: '陷阱卡'},
          {cName: '融合卡'}
        ],
        cardsArr: [],
        currentPage: 1,
        totalPage: '',
        blankImgArr: [],
        currentCardsArr: []
      }
    },
    mounted() {
      setTimeout(() => {
        this.initPic()
        this.toggleCards()
      }, 20)

      window.addEventListener('resize', () => {
        // this._initPic()
      })
    },
    methods: {
      onClickLeft() {
        this.currentPage -= 1
        this.toggleCards()
      },
      onClickRight() {
        this.currentPage += 1
        this.toggleCards()
      },
      toggleCards() {
        this.cardsArr.forEach((i) => {
          i.forEach((item) => {
            if (item) {
              if (Number(item.getAttribute('data-group')) !== this.currentPage) {
                item.style.display = 'none'
              } else {
                item.style.display = ''
              }
            }
          })
        })

        this.currentPage <= 1 ? this.$refs.leftArrow.style.visibility = 'hidden' : this.$refs.leftArrow.style.visibility = ''

        this.currentPage >= this.totalPage ? this.$refs.rightArrow.style.visibility = 'hidden' : this.$refs.rightArrow.style.visibility = ''
      },
      // 图片适配，分页显示
      initPic() {
        let rightInnerBox = this.$refs.rightInnerBox
        let cards = rightInnerBox.children

        let everyPageShow = (rightInnerBox.clientWidth / cards[0].clientWidth | 0) * 2

        // 添加显示分组
        for (let i = 0, length = Math.ceil(rightInnerBox.children.length / everyPageShow); i < length; i++) {
          this.cardsArr.push([])
        }

        // 得到总页数
        this.totalPage = this.cardsArr.length

        // 将卡牌加进每个显示分组 && 设置每个卡牌的点击监听事件
        for (let i = 0, length = cards.length; i < length; i++) {
          let group = i / everyPageShow | 0

          this.cardsArr[group].push(cards[i])

          cards[i].setAttribute('data-group', group + 1)

          cards[i].addEventListener('click', (e) => {
            let cloneImg = e.target.cloneNode()
            cloneImg = e.target.getAttribute('src')
            let cardNum = 0
            let index = this.currentCardsArr.findIndex((i) => {
              return i.cloneImg === cloneImg
            })
            let obj

            // index >= 0，已经有此卡存在，在不满3张的情况下卡数增加1
            if (index >= 0) {
              if (this.currentCardsArr[index].cardNum < 3) {
                this.currentCardsArr[index].cardNum += 1
              }
            } else {
              // 新添加的卡
              cardNum = 1
              obj = {
                cloneImg,
                cardNum
              }

              this.currentCardsArr.push(obj)
            }

            console.log(this.currentCardsArr)
            // 直接添加
            // this.$refs.downLeft.appendChild(cloneImg)
          })
        }

        // 如果最后一页不满，补满使其规则显示 （有数据版本）
        /* let lastCardsArr = this.cardsArr[this.cardsArr.length - 1]
        if (lastCardsArr.length < everyPageShow) {
          for (let i = lastCardsArr.length; i < everyPageShow; i++) {
            lastCardsArr.push('')
          }
        } */

        // （无数据版本）
        let lastCardsArr = this.cardsArr[this.cardsArr.length - 1]
        if (lastCardsArr.length < everyPageShow) {
          for (let i = lastCardsArr.length; i < everyPageShow; i++) {
            this.blankImgArr.push('')
          }
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .my-card
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: red
    .up-box
      position: absolute
      width: 100%
      top: 0
      left: 0
      bottom: 180px
      background: yellow
      .left-box
        position: absolute
        width: 130px
        height: 100%
        background: #CCC
        .cardItems
          font-size: 23px
          background: red
          text-align: center
          padding: 30px 0
        .page
          font-size: 18px
      .right-box
        display: flex
        height: 100%
        margin-left: 130px
        background: pink
        .left-arrow
          float: left
          width: 5%
          height: 50px
          background: red
          position: relative
          top: 50%
          transform: translateY(-50%)
        .right-arrow
          float: right
          width: 5%
          height: 50px
          background: red
          position: relative
          top: 50%
          transform: translateY(-50%)
        .right-inner-box
          display: flex
          flex-wrap: wrap
          justify-content: center
          width: 90%
          height: 100%
          background: yellow
          .img-box
            position: relative
            width: 125px
            height: 205px
            padding: 5px
            box-sizing: border-box
            background: #CCC
            .card-num
              position: absolute
              width: 100%
              height: 10%
              background: red
              left: 0
              bottom: 0
              font-size: 18px
              text-align: center
              color: #FFF
          .blankImg
            width: 0
            height: 0
            padding: 0
            border: none
    .down-box
      position: absolute
      width: 100%
      height: 180px
      bottom: 0
      background: blue
      overflow: hidden
      .down-left
        height: 100%
        .card-box
          position: relative
          display: inline-block
          width: 105px
          height: 175px
          padding: 5px
          box-sizing: border-box
          img
            height: 90%
          .current-card-num
            position: absolute
            left: 0
            bottom: 0
            width: 100%
            height: 10%
            background: #000
            font-size: 12px
            color: #FFF
            text-align: center
</style>