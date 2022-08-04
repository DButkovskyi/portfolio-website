<template>
  <div class="about">
    <h1 class = "greeting">Danyil Butkovskyi</h1>
    <AboutSection/>
    <SocialList class="social"/>
  </div>
</template>

<script>
// @ is an alias to /src
import SocialList from "/src/components/SocialList.vue"
import AboutSection from "/src/components/AboutSection.vue"
export default {
  name: 'AboutView',
  components: {
    SocialList,
    AboutSection
  }
}
</script>

<style scoped>
  .greeting {
  display: flex;
  width:100%;
  justify-content: center;
  text-align: center;
  font-size: 3rem;
}

</style>