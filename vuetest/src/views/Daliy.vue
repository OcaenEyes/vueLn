<template>
  <div>
    每日一文
    <!-- <div
      v-for="(item ,index)in daliy"
      :key="index"
    >
      <p>{{ item.id }}</p>
    </div> -->
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
