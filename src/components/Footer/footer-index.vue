<template>
  <footer class="footer">
    <div class="left">
      <p class="footer_thanks">Thanks For</p>
      <p class="footer_info">服务器证书等信息</p>
      <p class="footer_version">
        <span>version</span>
        <span>1.0.0</span>
      </p>
      <p>建站时间: <time datetime="2022-04-22">2022-04-22</time></p>
      <p>其他信息</p>
    </div>

    <div class="right">
      <div class="footer_contact mousePointer">
        <div title="我的QQ" class="qq">
          <img src="@/assets/img/footer/qq_code.png" class="QRcode" alt="" />
          <img
            src="@/assets/img/footer/qq_icon.svg"
            class="right_icon"
            alt=""
          />
        </div>
        <div title="我的微信" class="weChat">
          <img
            src="@/assets/img/footer/weChat_code.jpg"
            alt=""
            class="QRcode"
          />
          <img
            src="@/assets/img/footer/wexin_icon.svg"
            class="right_icon"
            alt=""
          />
        </div>
        <el-tooltip effect="light" content="Github" placement="top">
          <div title="我的Github" class="github">
            <a href="https://github.com/ChenXander" target="_blank">
              <img
                src="@/assets/img/footer/github_icon.svg"
                class="right_icon"
                alt=""
              />
            </a>
          </div>
        </el-tooltip>
      </div>
      <p title="我的">联系邮箱: ChenXander@163.com</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'footer-index',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;

  padding: 25px 0;

  width: 100%;

  p {
    margin-bottom: 10px;
    font-size: 14px;
    color: #333;
  }

  .left,
  .right {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  /* 底部左侧 */
  .left {
    .footer_thanks {
      color: #26c6da;
      font-size: 20px;
    }
    .footer_version {
      display: flex;

      color: #fff;
      span {
        padding: 5px 10px;
        &:first-child {
          background-color: #ff9800;
          border-bottom-left-radius: 5px;
          border-top-left-radius: 5px;
        }
        &:last-child {
          background-color: #26c6da;
          border-bottom-right-radius: 5px;
          border-top-right-radius: 5px;
        }
      }
    }
  }

  /* 底部右侧 */
  .right {
    .footer_contact {
      display: flex;
      margin-bottom: 10px;
      & > div {
        margin-right: 20px;
      }

      .qq,
      .weChat {
        position: relative;

        .QRcode {
          position: absolute;
          width: 63px;
          left: -14px;
          top: -30px;

          transition: all 0.5s;
          opacity: 0;

          border: 1px #f0eeee solid;
        }
        &:hover {
          .QRcode {
            opacity: 1;
            top: -70px;
          }
        }
      }
      .github {
        margin-right: 0;
      }
      .right_icon {
        width: 30px;
      }
    }
  }
}
</style>
