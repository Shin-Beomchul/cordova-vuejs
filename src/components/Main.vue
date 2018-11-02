<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <button @click="toggleShowMore()">{{ showMore ? 'Hide' : 'Show' }} more info</button>
    <div v-show="showMore">
      Here is more information.
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      showMore: false
    }
  },
  methods: {
    toggleShowMore () {
      this.msg = !this.showMore ? '숨기기' : '보이기'
      this.showMore = !this.showMore
    }
  }
}
</script>

<style scoped>
  div.hello { font-family: Arial, Tahoma, Verdana; font-size: 1em; line-height: 1.5em;  }
  button { margin-bottom: 10px; }
</style>
