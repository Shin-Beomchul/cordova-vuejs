<template>
  <div>
    <!--parent-->
    <div
      :class="{bold: isFolder}"
      @click="toggle">
      {{model.name}}
      <span v-if="isFolder">[{{model.isOpen ? '-' : '+'}}]</span>
    </div>
    <!--childs-->
    <ul v-show="model.isOpen" v-if="isFolder">
        <tree
        class="item"
        v-for="model in model.children"
        :model="model">
      </tree>

      <!--<li class="add" @click="addChild">+</li>-->
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
      open: true
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
        alert('group ' + this.model.name)
        this.model.isOpen = !this.model.isOpen
      }else{
        alert('just ' + this.model.name)
      }
    },
    addChild: function () {
      this.model.children.push({
        name: 'new stuff'
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
