<template>
  <div class="footer">
    <div class="footer-block">
      <div class="feedback">
        <div class="feedback-desc">
          WHAT or HOW you would like<br />
          us to improve?
        </div>
        <button class="feedback-button" @click="feedback()">
          Give feedback
        </button>
      </div>

      <div class="right">
        <div class="right-line">
          <button class="founder" @click="clickGitHub()">©</button>
          <button
            class="founder"
            @click="
              clickLinkedin('https://www.linkedin.com/in/sara-jinfan-bai/')
            "
          >
            Reeva Mishra
          </button>
          |
          <button
            class="founder"
            @click="clickLinkedin('https://www.linkedin.com/in/jennyyao/')"
          >
            PV
          </button>
        </div>
        <div class="right-line">
          <button class="founder" @click="clickGitHub()">©</button>
          <button
            class="founder"
            @click="
              clickLinkedin('https://www.linkedin.com/in/joseph-yuanhao-li/')
            "
          >
            Joseph Yuanhao Li
          </button>
          |
          <button
            class="founder"
            @click="clickLinkedin('https://www.linkedin.com/in/mattsklee/')"
          >
            Uthara Keerthan Ramamoorthy
          </button>
        </div>
      </div>
    </div>

    <div class="footer-block">
      <img class="cover" src="/img/components/footer/cover.png" />
      <div class="intro">
        <!-- <img class="intro-icon" src="/img/common/logo.png" /> -->
        <div class="intro-text">
          Home safety and health surveillance
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "web-footer",
  data: () => {
    return {
      medias: [
        {
          name: "email",
          icon: "/assets/icons/media_email.png",
          url:
            "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=jinfanb@andrew.cmu.edu"
        },
        {
          name: "linkedin",
          icon: "/assets/icons/media_linkedin.png",
          url: "https://www.linkedin.com/in/sara-jinfan-bai/"
        },
        {
          name: "ins",
          icon: "/assets/icons/media_ins.png",
          url: "https://www.instagram.com/sarainthesoda/"
        }
      ],
      active: 0
    };
  },
  methods: {
    openWeb(url) {
      window.open(url);
    },
    clickGitHub() {
      window.open("https://github.com/dancincloud");
    },
    clickLinkedin() {
      // window.open(url);
    },
    feedback() {
      window.open(
        "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=josephl.b612@gmail.com"
      );
    }
  }
};
</script>

<style scoped lang="scss">
.footer {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 109px 250px 62px 86px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #c4c4c4;

  &-block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  .feedback {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    &-desc {
      font-family: Noto Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      text-align: left;
      line-height: 49px;
      color: #303030;
    }

    &-button {
      margin: 57px 0 0 0;
      width: 273px;
      height: 66px;
      background-color: #cf7872;
      border-radius: 20px;
      font-family: Nunito Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      color: #ffffff;
    }
  }

  .right {
    margin: 178px 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    &-line {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      font-family: Nunito Sans;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      text-align: left;
      color: #303030;

      .founder {
        font-family: Nunito Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        text-align: left;
        color: #303030;

        &:hover {
          color: #cf7872;
        }
      }
    }
  }

  .cover {
    width: 361px;
    height: 282px;
  }

  .intro {
    margin: 89px 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    &-icon {
      width: 200px;
      height: 81px;
    }

    &-text {
      margin: 13px 0 0 0;
      font-family: Nunito Sans;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 40px;
      color: #303030;
    }
  }
}
</style>
