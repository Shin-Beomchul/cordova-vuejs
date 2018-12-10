<template>
  <div>
    <!--parent-->
    <div
      :class="{bold: isFolder}"
      @click="toggle">
      {{model.name}}
      <span v-if="isFolder">[{{open ? '-' : '+'}}]</span>
    </div>
    <!--childs-->
    <ul v-show="open" v-if="isFolder">
      <tree
        class="item"
        v-for="model in model.children"
        :model="model">
      </tree>
      <li class="add" @click="addChild">+</li>
      <li class="add" @click="addChildGroup">+g+</li>
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
      open: false // 외부로 뺄것.
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
        this.open = !this.open
      }
    },
    changeType: function () {
      // if (!this.isFolder) {
      //   Vue.set(this.model, 'children', [])
      //   this.addChild()
      //   this.open = true
      // }
    },
    addChild: function () {
      this.model.children.push({
        name: 'new stuff'
      })
    },
    addChildGroup: function () {
      this.model.children.push({
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
      })
    }
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
