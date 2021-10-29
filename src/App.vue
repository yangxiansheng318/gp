<template>
  <div>
    <div class="wrapper">
      <!-- 地址区域 -->
      <div class="position">
        <span class="iconfont position__icon">&#xe619;</span>
        北京理工大学国防科技园2号楼10层
        <span class="iconfont position__notice">&#xe601;</span>
      </div>
      <!-- 搜索框 -->
      <div class="search">
        <span class="iconfont">&#xe65c;</span>
        <input class="search__input" type="text" placeholder="请输入要搜索的商品"/>
      </div>
      <!-- banner -->
      <div class="banner">
        <img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" alt="">
      </div>
      <!-- 图标列表区域 -->
      <div class="icons">
        <div class="icons__item">
          <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/超市.png" alt="">
          <p class="icons__item__desc">超市便利</p>
        </div>
        <div class="icons__item">
          <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/超市.png" alt="">
          <p class="icons__item__desc">超市便利</p>
        </div>
        <div class="icons__item">
          <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/超市.png" alt="">
          <p class="icons__item__desc">超市便利</p>
        </div>
        <div class="icons__item">
          <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/超市.png" alt="">
          <p class="icons__item__desc">超市便利</p>
        </div>
        <div class="icons__item">
          <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/超市.png" alt="">
          <p class="icons__item__desc">超市便利</p>
        </div>
        <div class="icons__item">
          <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/超市.png" alt="">
          <p class="icons__item__desc">超市便利</p>
        </div>
        <div class="icons__item">
          <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/超市.png" alt="">
          <p class="icons__item__desc">超市便利</p>
        </div>
        <div class="icons__item">
          <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/超市.png" alt="">
          <p class="icons__item__desc">超市便利</p>
        </div>
        <div class="icons__item">
          <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/超市.png" alt="">
          <p class="icons__item__desc">超市便利</p>
        </div>
        <div class="icons__item">
          <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/超市.png" alt="">
          <p class="icons__item__desc">超市便利</p>
        </div>
      </div>
      <div class="gap">
      </div>
    </div>
    <!-- 底部导航栏区域 -->
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
.search {
  position: relative;
  width: 100%;
  margin-bottom: .12rem;
  .iconfont {
    display: inline-block;
    position: absolute;
    top: .06rem;
    font-size: .18rem;
    padding: 0 .08rem 0 .16rem;
  }
  &__input {
    width: 100%;
    box-sizing: border-box;
    border: 0;
    background: #F5F5F5;
    border-radius: .16rem;
    line-height: .32rem;
    font-size: .14rem;
    padding: .01rem .2rem 0 .42rem;
    color: #666;
  }
}
.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  &__img {
    width: 100%;
  }
}
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: .16rem;
  &__item {
    width: 20%;
    &__img {
      display: block;
      width: .4rem;
      height: .4rem;
      margin: 0 auto;
    }
    &__desc {
      text-align: center;
      margin: .06rem 0 .16rem 0;
      color: $content-fontcolor;
    }
  }
}
.gap {
  height: .1rem;
  background: $content-bgColor;
  margin: 0 -.18rem;
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
  border-top: .01rem solid $content-bgColor;
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
