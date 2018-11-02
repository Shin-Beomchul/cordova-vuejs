<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <button @click="toggleShowMore()"> 로그인 하기 </button>
    <h2>{{ subMsg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '로그인 페이지',
      subMsg: '로그인해 주세요.',
      showMore: false
    }
  },
  methods: {
    toggleShowMore () {
      this.subMsg = !this.showMore ? '로그인 토글On' : '로그인 Off'
      this.showMore = !this.showMore
    }
  }
}
</script>

<style scoped>
  div.hello { font-family: Arial, Tahoma, Verdana; font-size: 1em; line-height: 1.5em;  }
  button { margin-bottom: 10px; }
</style>
