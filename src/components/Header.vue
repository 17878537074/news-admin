<template>
  <div class="head">
        <div class="logo">
          <span class="iconfont iconnew" @click="$router.push('/')"></span>
        </div>
        <h2>黑马头条后台管理系统</h2>
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <div class="user-actions">
              <img src="../assets/hua.jpg" alt />
              <span>火星少年</span>
            </div>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-switch-button" @click.native="exit">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
  </div>
</template>

<script>
export default {
methods: {
    exit(){
        localStorage.removeItem("userInfo");      
          this.$message({
                message: "退出成功",
              });
              this.$router.replace("/login");  
    }
},
}
</script>

<style lang="less" scoped>
.head {
  background: white;
  line-height: 60px;
  box-shadow: 2px 2px 2px #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  h2 {
    color: #1ca8ee;
    flex: 1;
    display: flex;
    justify-content: center;
  }
  .logo {
    .iconnew {
      color: #1ca8ee;
      font-size: 85px;
      display: block;

      // transform: scale(2);
    }
  }
  .user-actions {
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
      vertical-align: middle;
    }
    span {
      margin: 0 5px;
      padding-left: 5px;
    }
  }
}

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
  display: flex;
  align-items: center;
  i {
    font-size: 16px;
  }
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>