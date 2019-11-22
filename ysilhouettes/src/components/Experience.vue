<template>
  <el-row>
    <div>工作经历</div>
    <el-col :span="10" style="margin:14px;padding:0;">
      <a href="https://www.baidu.com">
      <el-card :body-style="{padding:'0px'}" shadow="hover">
        <img src="../assets/bg.jpg" style="height:160px;width:100%;" />
        <div style="padding:14px;font-size:14px;line-height:28px;">
          <div>
            <span>
              <b>苏宁金融</b>
            </span>
          </div>
          <div>
            <span>开始日期：</span>2017/03&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>结束日期：</span>至今
          </div>
          <div></div>
        </div>
      </el-card>
      </a>
    </el-col>

    <el-col :span="32" style="margin:14px;">
      <a href="https://www.baidu.com">
      <el-card :body-style="{padding:'0px'}" shadow="hover">
        <img src="../assets/bg.jpg" style="height:160px;width:100%;" />
        <div style="padding:14px;font-size:14px;line-height:28px;">
          <div>
            <span>
              <b>南京市民卡</b>
            </span>
          </div>
          <div>
            <span>开始日期：</span>2016/03&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>结束日期：</span>2017/03
          </div>
          <div></div>
        </div>
      </el-card>
      </a>
    </el-col>
  </el-row>
</template>

<style scoped>
a{
  text-decoration: none;
}
</style>

<script>
export default {
  name: "Experience",
  data() {
    return {};
  },
  methods: {}
};
</script>