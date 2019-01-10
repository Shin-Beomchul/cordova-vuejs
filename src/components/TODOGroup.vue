
<template>
  <v-container fluid>
    <v-list>
      <treeNode
        class="item"
        :model=tree>
      </treeNode>

      <v-dialog
        v-model="dialog"
        hide-overlay
        persistent
        width="300"
      >
        <v-card
          color="primary"
          dark
        >
          <v-card-text>
            조직도 가져오는중..
            <v-progress-linear
              indeterminate
              color="white"
              class="mb-0"
            ></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-list>
  </v-container>
</template>

<script>

export default {
  name: 'OsstemGroup',

  data () {
    return {
      tree: {},
      dialog: true
    }
  },
  created () {
    this.loadGnb('OSSTEM')
  },
  methods: {
    buildMyTree (resp) {
      let tree = {}
      tree.name = {orgName: '오스템임플란트(주)'}
      tree.children = this.buildHierarchy(resp)
      this.tree = tree
    },

    buildHierarchy (resp) {
      let orgInfoList = resp.orgInfoList
      let orgMemberInfoList = resp.orgMemberInfoList
      var roots = [], children = {}

      // find Root
      for (var i = 0, len = orgInfoList.length; i < len; ++i) {
        let orginfo = orgInfoList[i]
        var upperCd = orginfo.orgUpperCd // 부모가 있냐
        var target = upperCd === '0000' ? roots //  id가 0000이면 target은 최상위 root
          : (children[upperCd] || (children[upperCd] = []))
        target.push({ name: orginfo })
      }

      // 재귀 적으로 트리를 만드는 함수
      var findChildren = function (parent) {
        if (children[parent.name.orgCd]) { // 자식이 있으면
          parent.children = children[parent.name.orgCd]
          for (var i = 0, len = parent.children.length; i < len; ++i) {
            findChildren(parent.children[i])
          }
        } else {
          let endNodeChilds = orgMemberInfoList.filter(e => e.orgCd === parent.name.orgCd)
          for (var ie = 0, lenE = endNodeChilds.length; ie < lenE; ++ie) {
            endNodeChilds[ie].isEndNode = true
          }

          endNodeChilds.sort(function (a, b) {
            if (a.jikgubCd > b.jikgubCd) {
              return 1
            }
            if (a.jikgubCd < b.jikgubCd) {
              return -1
            }
            // a must be equal to b
            return 0
          })
          parent.children = endNodeChilds
        }
      }

      // root 탐색 시작.
      for (var i = 0, len = roots.length; i < len; ++i) {
        findChildren(roots[i])
      }

      return roots
    },
    async loadGnb () {
      await this.$http.get('http://13.209.102.254:10080/api/orginfo/member/nodes/OSSTEM/0000', {})
        .then((result) => {
          this.dialog = false
          this.buildMyTree(result.data)

        })
    }
  }
}
</script>

<style scoped>

</style>
