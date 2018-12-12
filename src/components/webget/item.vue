<template>
  <div>
    <!--parent-->
    <div
      :class="{bold: isFolder}"
      @click="toggle">
      {{model.name.orgName}}
      <span v-if="isFolder">[{{isOpen ? '-' : '+'}}]</span>
    </div>

    <!--childs-->
    <ul v-show="isOpen" v-if="isFolder">
      <tree
        class="item"
        v-for="model in model.children"
        :model="model">
      </tree>

      <!--End Node-->
      <div
        class="item"
        v-for="model in model.children"
        :model="model">
        <div v-if="model.isEndNode">{{model.name}}</div>
      </div>
      <!--<li class="add" @click="addChild">+</li>-->
      <!--<li class="add" @click="addChildGroup">+g+</li>-->
    </ul>
  </div>
</template>

<script>
export default {
  name: 'item',
  props: {
    model: Object
  },
  data: function () {
    return {
      isOpen: false
    }
  },

  computed: {
    isFolder: function () {
      return this.model.children &&
        this.model.children.length
    }
  },
  methods: {

    toggle: function () {
      if (this.isFolder) {
        this.isOpen = !this.isOpen
      }
    },
    addChild: function () {
      console.log(this.model)
      this.model.children.push({
        orgCd: 'O000000691',
        isOpen: true,
        orgName: 'root',
        orgUpperCd: 'O000000547'
      })
    },
    addChildGroup: function () {
      this.model.children.push({
        isOpen: false,
        name: 'child folder',
        children: [
          {
            isOpen: false,
            name: 'child folder',
            children: [
              {name: 'hello'},
              {name: 'wat'}
            ]
          },
          {name: 'hello'},
          {name: 'wat'},
          {
            isOpen: false,
            name: 'child folder',
            children: [
              {name: 'hello'},
              {name: 'wat'}
            ]
          }
        ]
      })
    },

    togglesave: function () {
      if (this.isFolder) {
        this.model.name.isOpen = !this.model.name.isOpen
      }

      console.log(this.model.name.name + ' : ' + this.model.name.orgCd)

      if (this.model.children === undefined) {
        this.model.children = []
        this.model.children.push({
          isOpen: true,
          name: 'new stuff + [ c]'
        })
        console.log('없음 child 추가 api call')
      } else {
        // group Click
      }
    },
  }
}
</script>

<style scoped>
  body {
    font-family: Menlo, Consolas, monospace;
    color: #444;
  }
  .item {
    cursor: pointer;
  }
  .bold {
    font-weight: bold;
  }
  ul {
    padding-left: 1em;
    line-height: 1.5em;
    list-style-type: dot;
  }
</style>
