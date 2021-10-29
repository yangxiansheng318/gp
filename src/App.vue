<template>
  <div>
    <div class="wrapper">
      <div class="position">
        <span class="iconfont position__icon">&#xe619;</span>
        北京理工大学国防科技园2号楼10层
        <span class="iconfont position__notice">&#xe601;</span>
      </div>
    </div>
    <div class="docker">
      <div class="docker__item docker__item--active">
        <div class="iconfont">&#xe600;</div>
        <div class="docker__item__title">首页</div>
      </div>
      <div class="docker__item">
        <div class="iconfont">&#xe61d;</div>
        <div class="docker__item__title">购物车</div>
      </div>
      <div class="docker__item">
        <div class="iconfont">&#xe64b;</div>
        <div class="docker__item__title">订单</div>
      </div>
      <div class="docker__item">
        <div class="iconfont">&#xe78b;</div>
        <div class="docker__item__title">我的</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import './style/viriables.scss';
@import './style/mixins.scss';
.wrapper {
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  padding: 0 .18rem;
  background: skyblue;
}
.position {
  position: relative;
  padding: .16rem .24rem .16rem 0;
  line-height: .22rem;
  font-size: .16rem;
  @include ellipsis;
  color: $content-fontcolor;
  .position__icon {
    position: relative;
    top: .01rem;
    font-size: .2rem;
  }
  .position__notice {
    position: absolute;
    right: 0;
    top: .17rem;
    font-size: .2rem;
  }
}
.docker {
  display: flex;
  position: absolute;
  box-sizing: border-box;
  padding: 0 .18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: .01rem solid #F1F1F1;
  color: $content-fontcolor;
  &__item {
    flex: 1;
    text-align: center;
    .iconfont {
      font-size: .18rem;
      margin: .07rem 0 .02rem 0;
    }
    &--active {
      color: #1FA4FC;
    }
    &__title {
      font-size: .2rem;
      // 横纵缩放 50%
      transform: scale(.5 , .5);
      // 中心点
      transform-origin: center top;
    }
  }
}
</style>
