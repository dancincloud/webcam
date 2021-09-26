<template>
  <!-- <div class="nav"> -->
  <div
    class="nav-fixed"
    :class="showNav ? 'showNav' : 'hideNav'"
    :style="outstyle"
  >
    <button class="icon" @click="clickHome()">
      [ Autonomous Home Surveillance Robot ]
    </button>

    <button class="icon">
      {{ showTime }}
    </button>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  name: "navigation",
  props: {
    outstyle: {
      type: String,
      default: ""
    }
  },
  data: () => {
    return {
      showNav: true,
      offset: 0,
      timer: null,
      showTime: ""
    };
  },
  mounted() {
    this.showTime = this.getNowFormatDate();
    this.noticeHandler = setInterval(() => {
      this.showTime = this.getNowFormatDate();
    }, 1000);

    window.addEventListener("scroll", this.scrollListener, true);

    this.timer = setInterval(() => {
      this.offset = this.scrollTop();
    }, 100);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollListener);

    clearInterval(this.timer);
    this.timer = null;
  },
  computed: {
    active() {
      return this.$route.name;
    }
  },
  methods: {
    getNowFormatDate() {
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }

      var hh = date.getHours();
      if (hh >= 0 && hh <= 9) {
        hh = "0" + hh;
      }
      var mm = date.getMinutes();
      if (mm >= 0 && mm <= 9) {
        mm = "0" + mm;
      }
      var ss = date.getSeconds();
      if (ss >= 0 && ss <= 9) {
        ss = "0" + ss;
      }

      var currentdate = `${month}/${strDate}/${year} ${hh}:${mm}:${ss}`;
      return currentdate;
    },
    scrollListener() {
      var scroll = this.scrollTop() - this.offset;
      if (!this.showNav && scroll < 0) {
        this.showNav = true;
        //添加你想要的事件
      } else if (this.showNav && scroll > 0) {
        //添加你想要的事件
        this.showNav = false;
      }
    },
    clickHome() {
      this.$router.push("/");
    },
    clickItem(name) {
      this.$router.push(name);
    },
    scrollTop() {
      return (
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav {
  position: relative;
  width: 100%;
  height: 83px;
}

.nav-fixed {
  z-index: 999;
  // position: fixed;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 83px;
  box-sizing: border-box;
  padding: 0 90px 0 121px;
  // background-color: #ffffff;
  background: hsla(0, 0%, 100%, 0.5);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .icon {
    color: #101010;
    font-size: 24px;
    font-family: "VT323", monospace;
  }

  .links {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    &-item {
      width: 97px;
      color: #7e7e7e;
      font-size: 16px;
      font-family: "Nunito", sans-serif;

      &--active {
        color: #826feb;
        font-weight: bold;
      }
    }
  }
}

.showNav {
  animation: 500ms ease-in-out 0s normal forwards 1 running fadeInDown;
}

.hideNav {
  animation: 500ms ease-in-out 0s normal forwards 1 running fadeOutUp;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate(0, -100%);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes fadeOutUp {
  from {
    opacity: 1;
    transform: none;
  }
  to {
    opacity: 0;
    transform: translate(0, -100%);
  }
}
</style>
