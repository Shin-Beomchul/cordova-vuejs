
<template>
  <div>
    <tree
      class="item"
      :model=tree>
    </tree>
  </div>

</template>

<script>

export default {
  name: 'OsstemGroup',

  data () {
    return {
      tree: {},
      treeData2: [

        {

          name: 'My Tree',
          children: [
            {

              name: 'child folder',
              children: [
                {name: 'hello'},
                {name: 'wat'}
              ]
            },
            {

              name: 'child folder',
              children: [
                {name: 'hello'},
                {name: 'wat'}
              ]
            },
            {

              name: 'child folder',
              children: [
                {name: 'hello'},
                {name: 'wat'}
              ]
            }
          ]
        },
        {

          name: 'My Tree',
          children: [
            {

              name: 'child folder',
              children: [
                {name: 'hello'},
                {name: 'wat'}
              ]
            },
            {

              name: 'child folder',
              children: [
                {name: 'hello'},
                {name: 'wat'}
              ]
            },
            {

              name: 'child folder',
              children: [
                {name: 'hello'},
                {name: 'wat'}
              ]
            }
          ]
        }],
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
    buildMyTree (resp) {
      let tree = {}

      tree.name = { id: '2',
        isOpen: true,
        orgName: '오스템임플란트(주)',
        orgUpperCd: '2'}

      tree.children = this.buildHierarchy(resp)
      this.tree = tree
    },

    buildHierarchy (resp) {
      let orgInfoList = resp.orgInfoList
      let orgMemberInfoList = resp.orgMemberInfoList
      var roots = [], children = {}, tree = {}

      // 최상위 노드를 찾고 부모를 기반으로 자식을 해시합니다.
      for (var i = 0, len = orgInfoList.length; i < len; ++i) {
        var orginfo = orgInfoList[i]
        var upperCd = orginfo.orgUpperCd // 부모가 있냐
        var target = upperCd === '0000' ? roots //  id가 0000이면 target은 최상위 root
          : (children[upperCd] || (children[upperCd] = []))
        target.push({ name: orginfo })
      }

      // 재귀 적으로 트리를 만드는 함수
      var findChildren = function (parent) {
        if (children[parent.name.orgCd]) { // 자식이 있으면
          parent.children = children[parent.name.orgCd]
          console.log(parent.name.orgName + '++++')
          for (var i = 0, len = parent.children.length; i < len; ++i) {
            findChildren(parent.children[i])
          }
        } else {
          console.log(parent.name.orgName + 'end + ')

          let endNodeChilds = orgMemberInfoList.filter(e => e.orgCd === parent.name.orgCd)

          for (var ie = 0, lenE = endNodeChilds.length; ie < lenE; ++ie) {
            endNodeChilds[ie].isEndNode = true
          }
          parent.children = endNodeChilds

          console.log(parent.children)
        }
      }

      // root 탐색 시작.
      for (var i = 0, len = roots.length; i < len; ++i) {
        findChildren(roots[i])
      }

      return roots
    },
    loadGnb () {
      this.$http.get('http://13.209.102.254:10080/api/orginfo/member/nodes/OSSTEM/0000', {
      })
        .then((result) => {
          console.log('source :: ')
          console.log(result.data)

          this.buildMyTree(result.data)
        })
    },

    makeTreeSet2 (orgCd, orgInfoList, orgMemberInfoList) {
      var resultTreeData = {}

      resultTreeData.name = 'osstem조직'
      resultTreeData.isOpen = true

      resultTreeData.children = []

      let parent = this.findByGroupUpperCd(orgCd, orgInfoList)
      for (let pGroup of parent) {
        var treeItem = {}
        var children = []
        treeItem.name = pGroup.orgName
        treeItem.orgCd = pGroup.orgCd
        treeItem.isOpen = false
        console.log(pGroup.orgName + ' ' + pGroup.orgCd + ' [+]')

        let childItems = this.findByGroupUpperCd(pGroup.orgCd, orgInfoList)
        if (childItems.length > 0) {
          for (const child of childItems) {
            children.push({
              isOpen: true,
              name: child.orgName + '[+]',
              orgCd: child.orgCd
            })
            treeItem.children = children
            console.log('     =>' + child.orgName + ' ' + child.orgCd + '[+]')
          }
        } else {
          let users = this.findByUserUpperCd(pGroup.orgCd, orgMemberInfoList)
          for (let user of users) {
            children.push({
              isOpen: true,
              name: user.name + '[ c]'
            })
            treeItem.children = children
            console.log(user.name)
          }
        }
        resultTreeData.children.push(treeItem)
      }

      console.log(resultTreeData)
      this.tree = resultTreeData
    },

    makeTreeSet (orgCd, orgInfoList, orgMemberInfoList) {
      let parent = this.findByGroupUpperCd(orgCd, orgInfoList)
      for (let pGroup of parent) {
        console.log(pGroup.orgName + ' ' + pGroup.orgCd + ' [+]')

        let childItems = this.findByGroupUpperCd(pGroup.orgCd, orgInfoList)
        if (childItems.length > 0) {
          for (const child of childItems) {
            console.log(child.orgName + ' ' + child.orgCd + '[ c]')
            this.makeTreeSet(child.orgCd, orgInfoList, orgMemberInfoList)
          }
        } else {
          let users = this.findByUserUpperCd(pGroup.orgCd, orgMemberInfoList)
          for (let user of users) {
            console.log(user.name)
            this.makeTreeSet(user.orgCd, orgInfoList, orgMemberInfoList)
          }
        }
      }
    },
    findByGroupUpperCd (orgCd, orgInfoList) {
      return orgInfoList.filter(e => e.orgUpperCd === orgCd)
    },
    findByUserUpperCd (orgCd, orgMemberInfoList) {
      return orgMemberInfoList.filter(e => e.orgCd === orgCd)
    },
    findByGroupOrgLevel (orgLevel, orgInfoList) {
      return orgInfoList.filter(e => e.orgLevel === orgLevel)
    },
    findByGroupOrgCd (orgLevel, orgInfoList) {
      return orgInfoList.filter(e => e.orgUpperCd === orgLevel)
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
