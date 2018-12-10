<template>
  <v-container fluid>
    <v-layout row wrap>

      <v-flex xs12>
        <v-card color="cyan darken-2" class="white--text">
          <v-layout>
            <v-flex xs5>
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                contain
                height="400px"
              ></v-img>
            </v-flex>
            <v-flex xs7>
              <v-card-title primary-title>
                <div>
                  <div class="headline">Watch</div>
                  <div>Watch는 바인딩된 데이터가 변경되면 호출합니다.</div>
                  <div>(2014)</div>
                </div>
              </v-card-title>

              <div>
                <v-layout row>
                  <v-card-actions>
                    <v-btn @click="updateWatch">값변경</v-btn>
                  </v-card-actions>
                  <v-card-actions>
                    <v-btn >호출</v-btn>
                  </v-card-actions>
                </v-layout>
              </div>

              <div >
                <p>원본 데이터: {{ watcgData }}</p>
                <p>계산 데이터: {{}}</p>
              </div>
            </v-flex>
          </v-layout>
          <v-divider light></v-divider>

        </v-card>
      </v-flex>

      <v-flex xs12>
        <v-card color="purple" class="white--text">
          <v-layout row>
            <v-flex xs7>
              <v-card-title primary-title>
                <div>
                  <div class="headline">Computed</div>
                  <div>Computed는 데이터가 변경 될때만 변경 결과를 계산하고 캐싱합니다.</div>
                </div>
              </v-card-title>

              <div>
                <v-layout row>
                  <v-card-actions>
                    <v-btn @click="updateComputed">값변경</v-btn>
                  </v-card-actions>
                  <v-card-actions>
                    <v-btn  @click="getComputedData">호출</v-btn>
                  </v-card-actions>
                </v-layout>
              </div>
              <div >
                <p>원본 데이터: {{ computedData }}</p>
                <p>계산 데이터: {{ computedDataCalc }}</p>
              </div>

            </v-flex>
            <v-flex xs5>
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
                height="400px"
                contain
              ></v-img>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>

      <v-flex xs12>
        <v-card color="blue-grey darken-2" class="white--text">
          <v-card-title primary-title>
            <div>
              <div class="headline">Rx-Js</div>
              <span>RxJS는 Vue의 Watch를 대신할 수 있습니다.</span>
            </div>
          </v-card-title>

          <v-flex xs5>
            <v-layout row>
              <v-card-actions>
                <v-btn >값변경</v-btn>
              </v-card-actions>
              <v-card-actions>
                <v-btn >호출</v-btn>
              </v-card-actions>
            </v-layout>
          </v-flex>

          <div id="example">
            <p>원본 데이터: {{ rxData }}</p>
            <p>계산 데이터: "{{   }}"</p>
          </div>
        </v-card>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
export default {
  name: 'WatchComputed',
  data: () => ({
    rxData: 1,
    watcgData: 1,
    computedData: 1
  }),

  watch: {
    watcgData: function () {
      alert('watchData 변경')
    }
  },
  // data가 변경 될 경우만 호출/연산/호출
  computed: {

    computedDataCalc: function () {
      alert('calcing...')
      return this.computedData + ' date: ' + Date.now()
    }
  },

  methods: {
    updateWatch () {
      this.watcgData += 3
    },
    updateComputed () {
      this.computedData += 3
    },
    getComputedData () {
      return this.computedDataCalc
    },
    updateRx () {
      this.rxData += 3
    }

  }
}
</script>

<style scoped>

</style>
