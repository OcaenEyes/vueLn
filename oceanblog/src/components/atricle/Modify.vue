<template>
  <div>
    <el-page-header @back="goBack" title="返回文章列表" content="修改文章" style="margin-top:20px"></el-page-header>
    <el-card style="width:80%;margin-left:10%;margin-top:40px;padding-top:40px">
      <el-form ref="form" :moedl="form" label-width="80px">
        <el-form-item label="文章标题">
          <el-input v-model="form.title" placeholder="输入文章标题"></el-input>
        </el-form-item>
        <el-form-item label="文章简介">
          <el-input v-model="form.intro" placeholder="输入文章简介"></el-input>
        </el-form-item>
        <el-form-item label="上传封面">
          <el-upload
            action="http://localhost:8080/fileUpload"
            list-type="picture-card"
            :auto-upload="true"
            style="float:left;with:60%"
            :on-success="handleSucess"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file">
              <img class="el-upload-list__item-thumbnail" :src="fileUrl" alt />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(fileUrl)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleDownload(fileUrl)"
                >
                  <i class="el-icon-download"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(fileUrl)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </el-form-item>
        <el-form-item label="文章封面">
          <el-input v-model="form.thumbPic" placeholder></el-input>
        </el-form-item>
        <el-form-item label="文章详情">
          <div id="toolbar-container"></div>
          <el-main id="editor" style="height:400px;border:1px solid #f4f4f4" v-model="form.content"></el-main>
        </el-form-item>

        <el-form-item label="文章类型">
          <el-select
            v-model="form.blogTypes"
            placeholder="输入文章类型"
            style="width:100%;float:left"
            filterable
            default-first-option
            multiple
            allow-create
          >
            <el-option
              v-for="item in typeoption"
              :key="item.id"
              :label="item.name"
              :value="item.name"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="文章标签">
          <el-select
            v-model="form.blogTags"
            filterable
            default-first-option
            multiple
            allow-create
            placeholder="输入文章标签"
            style="width:100%;float:left"
          >
            <el-option v-for="item in tagoption" :key="item.id" :label="item.name" :value="item.name"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否推荐">
          <el-select style="float:left" v-model="form.recommend" placeholder="请选择">
            <el-option
              v-for="item in rcoptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="small" @click="updateArticleById">更新</el-button>
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
      fileUrl: "",
      form: {
        id: "",
        title: "",
        content: "",
        intro: "",
        thumbPic: "",
        recommend: "",
        createTime: "",
        updateTime: "",
        views: "",
        blogTypes: [],
        blogTags: []
      },
      rcoptions: [
        { value: true, label: "是" },
        { value: false, label: "否" }
      ],
      tagoption: [],
      typeoption: [],
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false
    };
  },
  mounted() {
    this.initCKEditor();
    this.getArticleById(this.$route.query.articleId);
  },
  created() {
    this.getTypes();
    this.getTags();
  },
  methods: {
    updateArticleById() {
      const _this = this;
      this.form.content = this.editor.getData();
      this.axios
        .post("updateBlog", _this.form)
        .then(function(res) {
          // console.log(res);
          if (res.status == 200) {
            _this.$notify({
              title: "通知",
              message: "恭喜你，更新成功",
              type: "success"
            });
            _this.$router.go(-1);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },

    getArticleById(id) {
      const _this = this;
      this.axios
        .get("/getBlog", {
          params: {
            id: id
          }
        })
        .then(function(res) {
          _this.form.id = res.data.id;
          _this.form.title = res.data.title;
          _this.form.intro = res.data.intro;
          _this.form.thumbPic = res.data.thumbPic;
          _this.fileUrl = res.data.thumbPic;
          _this.form.recommend = res.data.recommend;
          _this.form.createTime = res.data.createTime;
          _this.form.updateTime = res.data.updateTime;
          _this.form.views = res.data.views;
          _this.editor.setData(res.data.content);
          //   _this.editor.isReadOnly = true;
          let types = res.data.blogTypes;
          types.forEach(type => {
            // console.log(type.name);
            _this.form.blogTypes.push(type.name);
          });
          let tags = res.data.blogTags;
          tags.forEach(tag => {
            // console.log(tag.name);
            _this.form.blogTags.push(tag.name);
          });
        })
        .catch(error => console.log(error));
    },

    goBack() {
      this.$router.go(-1);
    },
    initCKEditor() {
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
    },
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    },
    handleSucess(res) {
      this.fileUrl = "http://localhost:8080" + res;
      // console.log(this.fileUrl);
      // console.log(res);
      this.form.thumbPic = this.fileUrl;
    },
    getTypes() {
      const _this = this;
      this.axios
        .get("/type")
        .then(function(res) {
          _this.typeoption = res.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    getTags() {
      const _this = this;
      this.axios
        .get("/tag")
        .then(function(res) {
          _this.tagoption = res.data;
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