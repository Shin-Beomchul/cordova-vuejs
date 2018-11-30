<!-- start ~ Data Types -->
<!--https://www.w3schools.com/js/js_datatypes.asp-->

<template>

  <Div>
    <h2> #1 html의 요소를 바꿀 수 있습니다.</h2>
    <p id="demo">JavaScript can change HTML content.</p>
    <button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>Click Me!</button>

    <h2> #2 </h2>
  </Div>
</template>

<script>
export default {
  name: 'JsTutorial'
}
</script>

<style scoped>

</style>
