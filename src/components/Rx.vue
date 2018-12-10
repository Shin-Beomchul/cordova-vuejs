
<template>
  <v-container fluid>
  <v-card>
   <input type="text" placeholder="Search" v-model="search">

    <ul>
      <li v-if='key > 0' v-for="(item,key) in directResults" :key="key" >
        <div v-for="(subItem, key) in item" :key="key" >
               {{subItem}}<br>
          </div>

      </li>
    </ul>
  </v-card>
  </v-container>
</template>

<script>
import 'rxjs/add/operator/pluck'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/debounce'
import 'rxjs/add/operator/distinctUntilChanged'

export default {
  name: 'Rx',
  data: () => ({
    search: '',
    directResults: []
  }),
  methods: {
    getWikiAPI (term) {
      this.$http.get('https://ko.wikipedia.org/w/api.php', {
        params: {
          action: 'opensearch',
          origin: '*',
          search: term
        }
      })
        .then((result) => {
          this.directResults = result.data
        })
    }
  },
  subscriptions () {
    return {
      results: this.$watchAsObservable('search')
        .pluck('newValue')
        .filter(text => text.length >= 2)
        .distinctUntilChanged()
        .map(watchInput => this.getWikiAPI(watchInput))

    }
  }

}
</script>

<style scoped>
</style>
