
<template>
  <div>
    <tree
    class="item"
    :model="apiData">
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
          console.log(result.data)

          var tree = {}
          var children = []
          for (let data of result.data) {
            children.push({
              name: data.orgName
            })
          }

          tree.isOpen = true
          tree.name = com
          tree.children = children
          console.log(tree)
          this.apiData = tree
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
