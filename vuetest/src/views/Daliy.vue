<template>
  <div>
    <h2>每日一文</h2>
    <div v-for="(item ,index) in daliy" :key="index">
      <p>{{item.id}}</p>
      <span>{{item.textContent}}</span>
      <span>{{item.imgAuther}}</span>
      <img :src="item.imgUrl" />

    </div>
    <img>
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
    this.getDaliy()
  },

  methods: {
    getDaliy () {
      axios.get('http://localhost:8081/youone-default').then(

        res => (this.daliy = res.data.content, console.log(this.daliy))
      )
    }
  }

}
</script>

<style scoped>

</style>
