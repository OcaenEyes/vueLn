<template>
  <div>
    <el-page-header @back="goBack" title="返回文章列表" content="新建文章"></el-page-header>
    <el-card style="width:80%;margin-left:10%;margin-top:40px;padding-top:40px">
      <el-form ref="form" :moedl="form" label-width="80px">
        <el-form-item label="文章标题">
          <el-input v-model="form.title" placeholder="输入文章标题"></el-input>
        </el-form-item>
        <el-form-item label="文章详情">
          <div id="toolbar-container"></div>
          <el-main id="editor" style="height:400px;border:1px solid #f4f4f4" v-model="form.content"></el-main>
        </el-form-item>

        <el-form-item label="文章类型">
          <el-select
            v-model="form.blogTypes.name"
            placeholder="输入文章类型"
            style="width:100%;float:left"
            filterable
            default-first-option
            multiple
            allow-create
          ></el-select>
        </el-form-item>
        <el-form-item label="文章标签">
          <el-select
            v-model="form.blogTags.name"
            filterable
            default-first-option
            multiple
            allow-create
            placeholder="输入文章标签"
            style="width:100%;float:left"
          ></el-select>
        </el-form-item>
        <el-form-item>
          <el-button @click="onSubmit">保存</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editor: null,
      form: {
        title: "",
        content: "",
        blogTypes: [{ name: "" }],
        blogTags: [{ name: "" }]
      }
    };
  },
  mounted() {
    this.initCKEditor();
  },
  created() {},
  methods: {
    onSubmit() {
      console.log(this.form);
    },
    goBack() {
      this.$router.go(-1);
    },
    initCKEditor() {
      console.log(this.CKEditor);
      this.$CKEditor
        .create(document.querySelector("#editor"), {
          language: "zh-cn"
        })
        .then(editor => {
          const toolbarContainer = document.querySelector("#toolbar-container");
          toolbarContainer.appendChild(editor.ui.view.toolbar.element);
          this.editor = editor;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
</style>