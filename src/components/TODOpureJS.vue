<template>
  <v-layout row wrap>
      <v-flex xs12>
          <v-card>
            <!--header-->
            <div id='myDIV' class='header'>
              <h2>My To Do List</h2>
              <v-textarea
                box
                name="input-7-4"
                label="Box textarea"
                value="VueJS에서 전통적인 방법으로 dom에 직접 추가하거나 변경하게 되면 css나 기타 동작에 문제가 생길 수 있습니다.
Vue는 컴파일 과정을 거쳐 VirtualDom내에서 동작하는데 직접적으로 dom을 조작하면 vue의 규격에서 벗어나게 됩니다."
              ></v-textarea>
              <input type='text' id='myInput' placeholder='Title...'>

              <!--add-->
              <span @click='newElement()' class='addBtn'>Add</span>
            </div>
            <!--list-->
            <ul id='myUL'>
              <li>Hit the gym</li>
              <li class='checked'>Pay bills</li>
              <li>Meet George</li>
              <li>Buy eggs</li>
              <li>Read a book</li>
              <li>Organize office</li>
            </ul>
          </v-card>
      </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'TODOpureJS',

  mounted () {
    var myNodelist = document.getElementById('myUL').getElementsByTagName('li')
    var i
    for (i = 0; i < myNodelist.length; i++) {
      var span = document.createElement('SPAN')
      var txt = document.createTextNode('\u00D7')
      span.className = 'closeTodo'
      span.appendChild(txt)
      myNodelist[i].appendChild(span)
    }

    // Click on a close button to hide the current list item
    var close = document.getElementsByClassName('closeTodo')
    var j
    for (j = 0; j < close.length; j++) {
      close[j].onclick = function () {
        var div = this.parentElement
        div.style.display = 'none'
      }
    }

    // Add a 'checked' symbol when clicking on a list item
    var list = document.querySelector('ul')
    list.addEventListener('click', function (ev) {
      if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked')
      }
    }, false)
  },
  methods: {
    newElement () {
      var li = document.createElement('li')
      var inputValue = document.getElementById('myInput').value
      var t = document.createTextNode(inputValue)
      li.appendChild(t)
      if (inputValue === '') {
        alert('You must write something!')
      } else {
        document.getElementById('myUL').appendChild(li)
      }
      document.getElementById('myInput').value = ''

      var span = document.createElement('SPAN')
      var txt = document.createTextNode('\u00D7')
      span.className = 'closeTodo'
      span.appendChild(txt)
      li.appendChild(span)

      for (var i = 0; i < close.length; i++) {
        close[i].onclick = function () {
          var div = this.parentElement
          div.style.display = 'none'
        }
      }
    }
  }

}
</script>

<!-- scoped 적용 시 css동적 적용 안되나 전역 스코프 설정 시 됨. css 영역의 문제 같음. -->
<style scoped >
  /* Include the padding and border in an element's total width and height */
  * {
    box-sizing: border-box;
  }

  /* Remove margins and padding from the list */
  ul {
    margin: 0;
    padding: 0;
  }

  /* Style the list items */
  ul li {
    cursor: pointer;
    position: relative;
    padding: 12px 8px 12px 40px;
    background: #eee;
    font-size: 18px;
    transition: 0.2s;

    /* make the list items unselectable */
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Set all odd list items to a different color (zebra-stripes) */
  ul li:nth-child(odd) {
    background: #f9f9f9;
  }

  /* Darker background-color on hover */
  ul li:hover {
    background: #ddd;
  }

  /* When clicked on, add a background color and strike out text */
  ul li.checked {
    background: #888;
    color: #fff;
    text-decoration: line-through;
  }

  /* Add a 'checked' mark when clicked on */
  ul li.checked::before {
    content: '';
    position: absolute;
    border-color: #fff;
    border-style: solid;
    border-width: 0 2px 2px 0;
    top: 10px;
    left: 16px;
    transform: rotate(45deg);
    height: 15px;
    width: 7px;
  }

  /* Style the close button */
  .closeTodo {
    position: absolute;
    right: 0;
    top: 0;
    padding: 12px 16px 12px 16px;
  }

  .closeTodo:hover {
    background-color: #f44336;
    color: white;
  }

  /* Style the header */
  .header {
    background-color: #f44336;
    padding: 30px 40px;
    color: white;
    text-align: center;
  }

  /* Clear floats after the header */
  .header:after {
    content: '';
    display: table;
    clear: both;
  }

  /* Style the input */
  input {
    margin: 0;
    border: none;
    border-radius: 0;
    width: 75%;
    padding: 10px;
    float: left;
    font-size: 16px;
  }

  /* Style the 'Add' button */
  .addBtn {
    padding: 10px;
    width: 25%;
    background: #d9d9d9;
    color: #555;
    float: left;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 0;
  }

  .addBtn:hover {
    background-color: #bbb;
  }
</style>
