
<template>
  <v-container fluid>
    <v-text-field
      solo-inverted
      flat
      label="Search"
      v-model="search"
    ></v-text-field>
  <v-card>
    <v-list v-if="directResults.length >0">
      <template v-for="(item, index) in directResults">
        <v-list-tile v-bind:key="index"
          ripple
          @click="toggle(index)">
            <v-list-tile-content  height="150px">
              <v-list-tile-title v-html="item[0]"></v-list-tile-title>
              <v-list-tile-sub-title v-html="item[1]"></v-list-tile-sub-title>
            </v-list-tile-content>
        </v-list-tile>

        <v-divider
          v-if="index + 1 < directResults.length"
          :key="index"
        ></v-divider>
      </template>
    </v-list>
  </v-card>
  </v-container>
</template>

<script>

import {Observable} from 'rxjs'
import 'rxjs/add/observable/from'
import 'rxjs/add/observable/zip'
import 'rxjs/add/operator/toArray'
import 'rxjs/add/operator/map'

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
          console.log('source :: ')
          console.log(result.data)

          var keywordObserable = Observable.from(result.data[1])
          var snipObserable = Observable.from(result.data[2])
          var uriObserable = Observable.from(result.data[3])
          const zipedOb = Observable.zip(keywordObserable, snipObserable, uriObserable)
          zipedOb
            .toArray()
            .subscribe(arr => {
              console.log('가공완료')
              console.log(arr)
              this.directResults = arr
            })
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
  #form {
    margin-bottom: 20px;
  }
  .location {
    float: left;
    padding: 10px;
    margin-right: 20px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  .location p {
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
  }
  .zip { font-size: 2em; }
  .temp { font-size: 4em; }
</style>
