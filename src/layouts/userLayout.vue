<template>
  <div id="userLayout">
    <div class="container">
      <router-view />
    </div>
  </div>
</template>
<style lang="less" scoped>
#userLayout {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: url("http://wx.eduxdesign.com/web/assets/base/denglu.png") center /
    cover no-repeat;
}
</style>
