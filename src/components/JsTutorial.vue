<!-- start ~ Data Types -->
<!--https://www.w3schools.com/js/js_datatypes.asp-->

<template>

  <v-card>
<h2> #1 html의 요소를 바꿀 수 있습니다.</h2>
    <div id="demo">JavaScript can change HTML content.</div>
    <button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>Click Me!</button>

<p></p><h2> #2 훝어보기 </h2>
    <div>전통적인 html구조에서 script구문은 head, body 태그 내에 배치</div>
    <div>외부스크립트 : java의 import느낌 = [script src="myScript.js" ] [/script] </div>
    <h4>외부스크립트 장점 </h4>
      <li>html과 코드를 구분</li>
      <li>html과 Js 유지 쉬움</li>
      <li>캐시 된 JavaScript 파일로 인해 페이지로드 속도</li>

    <h4>외부 참조 </h4>
      <li>원격지 [script src="https://www.w3schools.com/js/myScript1.js"] </li>
      <li>같은폴더 [script src="myScript1.js"] </li>
      <li>특정폴더 [script src="/js/myScript1.js"] </li>

<p></p><h2> #2 디스플레이 조작 </h2>
    <div>문자열은 ""이나 '' 둘다 지원</div>
    <div id="demo2">demo2 Div</div>

<p></p><h2> #3 함수 </h2>
    <li>함수의 객체 참조 유의 ()없으면 객체를 참조함</li>

<p></p><h2> #4 String+숫자 조합은 실행 순서대로 조합됨 </h2>
    <li>a = "text  + : " + 3 + 2   ==  text + : 32</li>
    <li>a =  3 + 2 + "text  + : "   == 5 text + :</li>
    <li> Js의 연산은 + 연산 제외하고 가능 "6" {/,-,*..} "3" == OK </li>

<p></p><h2> #4 NaN 관련 </h2>
    <li> NaN + 1 == NaN</li>
    <li> NaN + "1" == NaN1</li>
    <li>typeof NaN == "number"</li>

<p></p><h2> #5 arr유의사항 </h2>
    <li>  person = [] -> person["key"] = "value" person.lenth == 0 / persion[0] == undef</li>
    <li>  배열과 객체의 차이는 번호가 매겨진 색인사용, 명명된 색인 사용</li>
    <li>  w3c에서도 a = new array() 비추. a  = [] 추천</li>
    <li>  array는 object를 반환함.  ecma > 5 Array.isArray(arr) 로 확인</li>

    <p/><h5>Debug</h5>
    <textarea id="debug" rows="4"></textarea>

    </v-card>
</template>

<script>
export default {
  name: 'JsTutorial',

  created () {
    document.getElementById('demo2').innerHTML = 'created(can not)'
  },
  mounted () {
    document.getElementById('demo2').innerHTML += ' + mounted'
    this.변수()
  },

  methods: {
    debug (show) {
      document.getElementById('debug').innerHTML += show + '\n'
    },
    debugMark (mark, show) {
      document.getElementById('debug').innerHTML += mark + '$:  ' + show + '\n'
    },
    변수 () {
      var a, b, c
      a = 1
      b = 2
      c = 3
      this.debugMark('변수()', a + b + c)
    },

    sum (vars, a, b) {
      return a + b
    }
  }
}
</script>

<style scoped>
  textarea {
    color: #76ff03;
    background-color: black;
  }
</style>
