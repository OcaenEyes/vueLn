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
          <el-main id="editor" style="height:400px;border:1px solid #f4f4f4" v-model="form.content">
            <p>这是一个编辑器</p>
          </el-main>
        </el-form-item>

        <el-form-item label="文章类型">
          <el-select
            v-model="form.type"
            placeholder="输入文章类型"
            style="width:100%;float:left"
            filterable
            default-first-option
            multiple
            allow-create
          >
            <el-option></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="文章标签">
          <el-select
            v-model="form.tag"
            filterable
            default-first-option
            multiple
            allow-create
            placeholder="输入文章标签"
            style="width:100%;float:left"
          >
            <el-option></el-option>
          </el-select>
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
        type: [],
        tag: []
      }
    };
  },
  mounted() {
    this.initCKEditor();
  },
  created() {},
  methods: {
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