<template>
  <div>
    <!--parent-->
    <v-list-group
      v-if="isFolder"
      @click="toggle">

      <v-list-tile
        ripple
        slot="activator">
        <v-list-tile-content>
          <v-list-tile-title  ripple
            :class="{bold: isFolder}">
            <v-icon color="yellow lighten-1">{{ 'folder' }}</v-icon>
            {{ model.name.orgName }}
            <!--<span v-if="isFolder">[{{isOpen ? '-' : '+'}}]</span>-->

          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list-group>

    <!--childs-->
    <ul v-show="isOpen" v-if="isFolder">

      <!-- childs Node -->
      <treeNode
        class="item"
        v-for="model in model.children"
        :model="model">
      </treeNode>

      <!--End Node-->
      <v-list-tile
        v-if="model.isEndNode"
        class="item"
        v-for="model in model.children"
        :model="model">
        <v-card
          hover
          ripple
          class="text-xs-center"
          width="170"
          height="30" >

            <v-icon small color="purple darken-2">dialpad</v-icon>
            {{model.name}}

        </v-card>
      </v-list-tile>
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
      dialog: false,
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
    }
  }
}
</script>

<style scoped>
  body {
    font-family: Menlo, Consolas, monospace;
    color: #444;
  }
  .bold {
    font-weight: bold;
  }

  /*ul {*/
    /*padding-left: 1em;*/
    /*line-height: 1.5em;*/
    /*list-style-type: dot;*/
  /*}*/
</style>
