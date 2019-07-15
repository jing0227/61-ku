<template>
  <div id="homeLayout">
    <header>
      <i class="el-icon-back"></i>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </header>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>
<style lang="less" scoped>
#homeLayout {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  // background: url("http://wx.eduxdesign.com/web/assets/base/denglu.png") center /
  // cover no-repeat;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }

  .container {
    padding: 20px 200px;
  }
}
</style>
