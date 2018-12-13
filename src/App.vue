<template>
  <v-app>

    <!--toolbar -->
      <v-toolbar
        color="teal lighten-3"
        app
        :clipped-left="clipped"
      >

        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <router-link to="/">
        <v-toolbar-title v-text="title">  </v-toolbar-title>
        </router-link>
        <v-spacer></v-spacer>
        <router-link to="/Login">로그인(Routing)</router-link>

      </v-toolbar>

    <!--Content -->
    <v-content >
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
          <v-expansion-panel-content v-for="(parentItem, i) in items" :key="i" ripple expand="true">

            <!--parent-->
            <div slot="header">
              <div>{{parentItem.title}}</div>
            </div>

            <v-list v-if="parentItem.childItem">
              <!--child-->
              <template v-for="(item, i) in parentItem.childItem">
                <router-link :to="item.routePath" v-bind:key="item">
                  <v-divider v-if="item.divider" :key="i"></v-divider>
                  <v-list-tile  class="grey lighten-3" v-else :key="item.title">
                    <v-list-tile-action>
                      <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  </v-list-tile>
                </router-link>
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
      items: [
        // JS turtorial
        {
          icon: 'bubble_chart',
          title: 'JS - Tutorial',
          divider: false,
          // JS - Sub
          childItem: [{
            icon: 'bubble_chart',
            title: '1.basic',
            routePath: 'jsBasic'
          }]
        },
        // RX
        {
          icon: 'bubble_chart',
          title: 'RxJs - Tutorial',
          divider: false,
          // Rx - sub
          childItem: [{
            icon: 'bubble_chart',
            title: 'RxWiki-Scaffolding',
            routePath: 'rx'
          },
          {
            icon: 'bubble_chart',
            title: 'RxWiki-Zip',
            routePath: 'rxZip'
          }]
        },
        // Vue
        {
          icon: 'bubble_chart',
          title: 'Vue - Tutorial',
          divider: false,
          // Vue - sub
          childItem: [{
            icon: 'bubble_chart',
            title: 'WatchComputed',
            routePath: 'wc'
          },
          { icon: 'bubble_chart',
            title: 'todoPureJS',
            routePath: 'todoPure'
          },
          { icon: 'bubble_chart',
            title: 'todoVueJS',
            routePath: 'todoVue'
          },
          { icon: 'bubble_chart',
            title: 'todoGroup',
            routePath: 'todoGroup'
          }
          ]
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'BeomApp'
    }
  },
  name: 'App'
}
</script>

<style scoped>

</style>
