<template>
  <div class="login">
    <div class="container">
      <div class="logo">
        <img src="@/assets/img/logo.png" alt="logo" />
      </div>
      <div class="wrapper">
        <input
          v-model="phone"
          type="number"
          placeholder="请输入您的手机号"
          class="phone"
        />
      </div>
      <div class="wrapper">
        <input
          v-model="vcode"
          type="number"
          placeholder="请输入验证码"
          class="phone"
        />
        <el-button class="btn-code" type="primary" size="mini">
          {{ tip }}
        </el-button>
      </div>
    </div>

    <el-button class="btn-login" type="primary">登录</el-button>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      phone: null,
      vcode: "",
      tip: "获取验证码"
    };
  }
};
</script>
<style lang="less" scoped>
.login {
  background-image: url(http://wx.eduxdesign.com/web/assets/denglu.png);
  background-size: 100%;
  width: 560px;
  height: 650px;
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);

  .logo {
    text-align: left;
    img {
      width: 215px;
      height: 62px;
      margin-top: 105px;
      margin-left: 85px;
    }
  }

  .wrapper {
    display: flex;
    justify-content: center;
    padding: 0 80px;
    position: relative;

    input {
      height: auto;
      background: transparent;
      border-radius: 0;
      border: none;
      border-bottom: 1px solid #cddef8;
      outline: none;
      padding: 20px 0;
      box-sizing: content-box;
      font-size: 22px;
      color: #fff;
      margin-top: 40px;
      width: 100%;
      &:focus {
        border-color: #fff;
      }
      &::placeholder {
        color: #fff;
      }
    }

    .btn-code {
      border: 1px solid #cddef8;
      border-radius: 17px;
      background-color: transparent;
      width: 100px;
      height: 34px;
      position: absolute;
      right: 80px;
      bottom: 14px;
    }
  }

  .btn-login {
    background: url("~@/assets/img/changanniu.png") center / contain no-repeat;
    background-color: transparent;
    background-size: 100% 100%;
    border: 0;
    font-size: 18px;
    width: 233px;
    height: 56px;
    margin-top: 90px;
  }
}
</style>
