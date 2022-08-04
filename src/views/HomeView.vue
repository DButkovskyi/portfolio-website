<template>
  <div class="home">
    <div class="hello">
    <div id="mainPage">
      <p class = "greeting">Hi<br>I'm Dan</p>
    </div>
      <div class = "shortAbout">
      <p>Rising developer and CS student in Maryland</p>
    </div>
  </div>
    <SocialList class="social"/>
  </div>
</template>

<script>
// @ is an alias to /src
import SocialList from "/src/components/SocialList.vue"
export default {
  name: 'HomeView',
  components: {
    SocialList,
  },
}
</script>

<style>
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

