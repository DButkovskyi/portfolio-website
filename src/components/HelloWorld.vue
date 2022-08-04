<template>
  <div class="hello">
    <div id="mainPage">
      <p class = "greeting">Hi<br>I'm Dan</p>
    </div>
      <div class = "shortAbout">
      <p>Rising developer and CS student in Maryland</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .greeting, .shortAbout {
  display: flex;
  width:100%;
  justify-content: center;
  text-align: center;
}
  .greeting {
  font-size: 3rem;
}
 #mainPage {
  padding-top: 5%;
}
</style>
