<template>
  <div>
      <h2>每日一文</h2>
      <div
        v-for="(item ,index) in daliy"
        :key="index"
      >
        <p>{{ item.id }}</p>
        <p style="line-height:22px"><span>{{ item.textContent }}</span></p>
        <p style="float:right;margin-right:40px">
          <span>{{ item.imgAuther }}</span>
        </p>
        <img :src="item.imgUrl" style="width:100%">
      </div>
  </div>
</template>

<script>
export default {
  name: 'Daliy',
  data () {
    return {
      msg: '123',
      daliy: null
    }
  },

  created () {
    this.getDaliy(),
    document.title = 'Daliy'
  },

  methods: {
    getDaliy () {
      axios.get('http://192.168.10.101:8081/youone-default').then(

        res => (this.daliy = res.data.content, console.log(this.daliy))
      )
    }
  }

}
</script>

<style scoped>

</style>
