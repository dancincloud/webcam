<template>
  <div class="app-login">
    <Alert v-if="error.length > 0" type="error">{{ error }}</Alert>
    <!-- <div class="logo"><img src="@/assets/images/logo.png" alt="" /></div> -->
    <div class="main">
      <h4 class="title">Sign In</h4>
      <form class="form">
        <div class="account-wrap">
          <svg-icon class-name="account-icon" icon-class="account" />
          <input
            class="acct-input input"
            type="text"
            placeholder="Username"
            v-model="username"
          />
        </div>
        <div class="password-wrap">
          <svg-icon class-name="password-icon" icon-class="password" />
          <input
            class="pwd-input input"
            type="password"
            placeholder="Password"
            v-model="password"
          />
        </div>
        <div class="btn-wrap">
          <button @click.prevent="handleLogin(username, password)">
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
// import { login } from "@/api/user";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      error: ""
    };
  },
  methods: {
    handleLogin(username, password) {
      console.log(username + " " + password);
      if (password == "UltrahackHomeRobot") {
        this.$emit("login", true);
      } else {
        this.error = "invalid username or password";
      }
      //   login({ username, password })
      //     .then((response) => {
      //       console.log(response);
      //       const { code } = response;
      //       if (code === 0) {
      //         this.$router.push({ path: "/home" });
      //       }
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });
    }
  }
};
</script>

<style lang="scss" scoped>
.app-login {
  width: 100%;
  height: 100%;
  background-color: #f1f1f1;
  position: relative;
  .dian-icon {
    margin: 0 10px;
  }
  .logo {
    position: absolute;
    top: 30px;
    margin-left: 10px;
    img {
      width: 180px;
    }
  }
  .main {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -200px;
    margin-top: -310px;
    width: 400px;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    .title {
      margin: 0 auto 50px;
      padding: 10px;
      font-weight: 400;
      color: #969696;
      text-align: center;
      font-size: 18px;
      a {
        padding: 10px;
        color: #969696;
      }
      .active {
        font-weight: 700;
        color: #ea6f5a;
        border-bottom: 2px solid #ea6f5a;
      }
    }
    .input {
      width: 100%;
      height: 50px;
      margin-bottom: 0;
      padding: 4px 12px 4px 35px;
      border: 1px solid #c8c8c8;
      border-radius: 0 0 4px 4px;
      background-color: hsla(0, 0%, 71%, 0.1);
      vertical-align: middle;
    }
    .acct-input {
      border-bottom: none;
      border-radius: 4px 4px 0 0;
    }
    .left {
      float: left;
    }
    .right {
      float: right;
    }
    .remember {
      margin: 15px 0;
    }

    span {
      margin-left: 5px;
      font-size: 15px;
      color: #969696;
      vertical-align: middle;
    }
    .btn-wrap {
      margin: 20px 0 0 0;
      width: 100%;
      button {
        background: #3194d0;
        margin-top: 20px;
        width: 100%;
        padding: 9px 18px;
        font-size: 18px;
        border: none;
        border-radius: 25px;
        color: #fff;
        cursor: pointer;
        outline: none;
        display: block;
        clear: both;
        &:hover {
          background: #187cb7;
        }
      }
    }
    .more-sign {
      margin-top: 50px;
      margin-bottom: 10px;
      .more-title {
        position: relative;
        margin: 0 0 15px;
        color: #b5b5b5;
        text-align: center;
        .line {
          display: inline-block;
          width: 70px;
        }
        .txt {
          font-size: 12px;
          display: inline-block;
          margin: 0 12px 0 15px;
        }
      }
      .icon-wrap {
        display: flex;
        justify-content: center;
      }
      .more-icon {
        font-size: 28px;
        margin: 0 15px;
      }
    }
    .account-wrap,
    .password-wrap {
      width: 100%;
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .account-icon,
    .password-icon {
      position: absolute;
      font-size: 20px;
      top: 13px;
      left: 8px;
    }
  }

  .form {
    position: relative;
    padding: 0 0 40px 0;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
