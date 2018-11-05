<template>
  <v-app>

    <!--toolbar -->
      <v-toolbar
        app
        :clipped-left="clipped"
      >
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title v-text="title"></v-toolbar-title>
        <v-spacer></v-spacer>

      </v-toolbar>

      <!--Content -->
      <v-content>
        <router-view/>
      </v-content>

    <!--GNB -->
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >

      <v-img :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
        <v-layout pa-2 column fill-height class="lightbox white--text">
          <v-spacer></v-spacer>
          <v-flex shrink>
            <div class="subheading">BeomChul.Shin</div>
            <div class="body-1">sbc0830g@gmail.com</div>
          </v-flex>
        </v-layout>
      </v-img>

      <v-list>
        <v-expansion-panel>
          <v-expansion-panel-content v-for="(item, i) in items"
                                     :key="i" ripple expand="true">
            <div slot="header">
              <div>{{item.title}}</div>
            </div>
            <v-list>
              <template v-for="(item, i) in items">
                <v-divider v-if="item.divider" :key="i"></v-divider>
                <v-list-tile  class="grey lighten-3" v-else :key="item.title">
                  <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile>
              </template>
            </v-list>
          </v-expansion-panel-content>
        </v-expansion-panel>

      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Home'
      },
      {
        icon: 'bubble_chart',
        title: '동영상'
      },
      {
        icon: 'bubble_chart',
        title: '포럼'
      },
      {
        icon: 'bubble_chart',
        title: '자유게시판'
      },
      {
        icon: 'bubble_chart',
        title: 'Q&A'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'God'
    }
  },
  name: 'App'
}
</script>
