<template>
  <div class="container">
    <el-form ref="formName" :model="form" label-width="80px" :rules="rules" class="form">
      <h2>登录</h2>
      <el-form-item label="账号:" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码:" prop="password">
        <el-input v-model="form.password" type="password" @keydown.enter.native="onSubmit"></el-input>
      </el-form-item>
      <el-form-item class="submit">
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <el-button class="regist">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        //   required必填选项  message错误时的提示 trigger什么时候触发
        username: [
          {
            required: true,
            message: "请输入正确的账号",
            trigger: "blur"
          },
          { min: 11, max: 11, message: "手机号码格式错误!", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入正确的密码", trigger: "blur" },
          { min: 3, max: 12, message: "密码长度3-12位", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    onSubmit() {
      //   console.log("submit!");
      if (this.form.username == "" || this.form.password == "") {
        this.$alert("用户名或者密码不能为空，请重新登录", "错误", {
          confirmButtonText: "确定"
        });
      }
      this.$refs.formName.validate(valid => {
        if (valid) {
          //   提交表单验证
          this.$axios({
            url: "/login",
            method: "post",
            data: this.form
          })
            .then(res => {
              console.log(res);
              const { data } = res.data;
              if (data.user.role.type !== "admin") {
                this.$message({
                  message: "非管理人员不可登录",
                  type: "warning"
                });
                return;
              }
              const userStr = JSON.stringify(data);
              localStorage.setItem("userInfo", userStr);
              this.$message({
                message: "登录成功",
                type: "success"
              });
              this.$router.push("/");
            })
           
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .form {
    width: 500px;
    border: 1px solid #eee;
    border-radius: 20px;
    padding-right: 35px;
    h2 {
      text-align: center;
      padding: 20px 0;
    }
    .submit {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .regist {
        margin-left: 70px;
      }
    }
  }
}
</style>