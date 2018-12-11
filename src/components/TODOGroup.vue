
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

      treeData: {
        isOpen: true,
        name: 'My Tree',
        children: [
          {name: 'hello'},
          {name: 'wat'},
          {
            isOpen: true,
            name: 'child folder',
            children: [
              { isOpen: true,
                name: 'child folder',
                children: [
                  {name: 'hello'},
                  {name: 'wat'}
                ]
              },
              {name: 'hello'},
              {name: 'wat'},
              {
                isOpen: true,
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
    loadGnb () {
      this.$http.get('http://192.168.22.94:10080/api/orginfo/member/nodes/OSSTEM/0000', {
      })
        .then((result) => {
          console.log('source :: ')
          console.log(result.data)
          this.apiData = result.data
        })
    },

    // let nextGroupOrCdGroup = this.groupBy(nextGroups, org => org.orgCd)
    groupBy (list, keyGetter) {
      const map = new Map()
      list.forEach((item) => {
        const key = keyGetter(item)
        const collection = map.get(key)
        if (!collection) {
          map.set(key, [item])
        } else {
          collection.push(item)
        }
      })
      return map
    },

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
    this.loadGnb('OSSTEM')
  }
}
</script>

<style scoped>

</style>
