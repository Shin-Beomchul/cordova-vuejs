
<template>
  <div id="app-container">
    <h1><input type="text" placeholder="Search" v-model="search"></h1>

    <ul>
      <li v-if='key > 0' v-for="(item,key) in directResults" :key="key" >
        <div v-for="(subItem, key) in item" :key="key" >
               {{subItem}}<br>
          </div>

      </li>
    </ul>
  </div>
</template>

<script>

import {Observable} from 'rxjs'
import 'rxjs/add/observable/fromEvent'
import 'rxjs/add/observable/from'
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
          this.directResults = result.data
          return Observable.from(result.data)
        })
    },

    fakeAPI (param) {
      return [{

        title: 'Apple',
        description: param + ' 는 놀라운 잠재력을 가지고 있습니다.'
      },
      {

        title: '파인애플',
        description: param + ' 는 놀라운 잠재력을 가지고 있습니다.'
      },
      {

        title: 'Rx-Wather',
        description: param + ' 는 놀라운 잠재력을 가지고 있습니다.'
      },
      {

        title: 'Rx-Wather',
        description: param + ' 는 놀라운 잠재력을 가지고 있습니다.'
      },
      {

        title: 'Rx-Wather',
        description: param + ' 는 놀라운 잠재력을 가지고 있습니다.'
      },
      {

        title: 'Rx-Wather',
        description: param + ' 는 놀라운 잠재력을 가지고 있습니다.'
      }
      ]
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
