<template>
  <div class="home">
    <img v-if="logged" class="webcam" :src="webcam" />
    <div v-else class="login">
      <Login @login="onlogin"></Login>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import Login from "./Login.vue";

export default {
  name: "Home",
  data: () => {
    return {
      logged: false,
      webcam: "http://146.115.89.169:8081",
      noticeHandler: null
    };
  },
  components: {
    Login
  },
  created() {},
  mounted() {
    // this.noticeHandler = setInterval(() => {

    // }, 500);

    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => (this.info = response));
  },
  methods: {
    onlogin(res) {
      this.logged = res;
    },
    clearnoticeHandler() {
      if (this.noticeHandler) {
        clearInterval(this.noticeHandler);
        this.noticeHandler = null;
      }
    },
    typewriter(text) {
      this.clearTypeHandler();

      let i = 1;
      this.typeHandler = setInterval(() => {
        if (i > text.length) {
          this.clearTypeHandler();
          return;
        }

        // this.slogan = text.substring(0, i);
        this.name = text.substring(0, i);

        i++;
      }, 100);
    },
    clearTypeHandler() {
      if (this.typeHandler) {
        clearInterval(this.typeHandler);
        this.typeHandler = null;
      }
    },
    clickMore() {
      this.$router.push("/Resume");
    },
    clickEmail() {
      window.open(
        "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=jinfanb@andrew.cmu.edu"
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.webcam {
  position: relative;
  width: 80%;
  height: auto;
}
.login {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
