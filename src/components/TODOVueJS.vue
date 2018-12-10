<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card>
        <!--header-->
        <div id="myDIV" class="header">
          <h2>My To Do List</h2>
          <input type="text" id="myInput" placeholder="Title...">
          <!--add-->
          <span @click="newElement" class="addBtn">Add</span>
        </div>
        <!--list-->
        <ul>
          <li @click="toggleState($event)" v-for="(str, index) in todoList" v-bind:key="index">
            {{str}}
            <span @click.stop="deleteItem(index)" class = "closeTodo" >x</span>
          </li>
        </ul>
      </v-card>
    </v-flex>
  </v-layout>

</template>

<script>
export default {
  name: 'TODOVueJS',
  data: () => ({
    todoList: ['Hit the gym',
      'Pay bills',
      'Meet George',
      'Buy eggs', 'Read a book', 'Organize office']
  }),

  methods: {
    newElement () {
      let addItem = document.getElementById('myInput').value
      if (addItem === '') {
        alert('값을 입력하세요.')
      } else {
        this.todoList.push(addItem)
      }
    },
    deleteItem (index) { if (index > -1) this.todoList.splice(index, 1) },
    toggleState: (event) => { event.target.classList.toggle('checked') }
  }
}
</script>

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
    background-color: #00e676;
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
