<template>
  <div class="blog">
    <div class="center-part-blog">
      <BlogList/>
    </div>
    <SocialList class="social"/>
  </div>
</template>

<script>
// @ is an alias to /src
import SocialList from "/src/components/SocialList.vue"
import BlogList from "/src/components/BlogList.vue"
export default {
  name: 'BlogView',
  components: {
    SocialList,
    BlogList,
  }
}
</script>

<style>
  .center-part-blog {
  width: 80%;
  max-width: 1400px;
  min-width: 390px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
</style>