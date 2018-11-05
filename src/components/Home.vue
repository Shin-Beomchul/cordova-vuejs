<template>
  <div class="hello">
    <v-card>
      <v-container
        fluid
        grid-list-md
      >
        <v-layout row wrap>
          <v-flex
            v-for="card in cards"
            v-bind="{ [`xs${card.flex}`]: true }"
            :key="card.title"
          >
            <v-card  ripple>
              <v-img
                :src="card.src"
                height="150px"
              >
                <v-container
                  fill-height
                  fluid
                  pa-2
                >
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline white--text" v-text="card.title"></span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-img>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>favorite</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>bookmark</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>share</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>

    <v-footer :fixed="fixed">
      <div>  Footer - @2018 godBeom.Ltd  {{ msg }}</div>
    </v-footer>

  </div>

</template>

<script>
export default {
  data () {
    return {

      cards: [
        { title: '홈 인테리어', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 6 },
        { title: '아웃도어', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
        { title: '여행', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 12 },
        { title: '루프탑', src: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', flex: 6 },
        { title: 'woman', src: 'https://cdn.vuetifyjs.com/images/lists/ali.png', flex: 6 }

      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
