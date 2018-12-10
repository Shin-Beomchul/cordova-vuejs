
<template>
  <div>
    <tree
    class="item"
    :model="treeData">
    </tree>
  </div>

</template>

<script>

export default {
  name: 'OsstemGroup',

  data () {
    return {
      apiData: {name: 'ohAPI'},
      treeData: {
        name: 'My Tree',
        children: [
          {name: 'hello'},
          {name: 'wat'},
          {
            name: 'child folder',
            children: [
              {
                name: 'child folder',
                children: [
                  {name: 'hello'},
                  {name: 'wat'}
                ]
              },
              {name: 'hello'},
              {name: 'wat'},
              {
                name: 'child folder',
                children: [
                  {name: 'hello'},
                  {name: 'wat'}
                ]
              }
            ]
          }
        ]
      }

    }
  },
  methods: {
    loadSurfaceTree (com) {
      this.$http.get('http://192.168.22.94:10080/api/orginfo/' + com + '/stdproc', {
      })
        .then((result) => {
          console.log('source :: ')
          console.log(result.data)
          this.apiData = result.data
        })
    }
  },

  mounted () {
    this.loadSurfaceTree('OSSTEM')
  }
}
</script>

<style scoped>

</style>
