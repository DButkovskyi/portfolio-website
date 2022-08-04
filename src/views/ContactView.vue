<template>
  <div class="contact">
    <ContactForm/>
    <SocialList class="social"/>
      
  </div>
</template>

<script>
// @ is an alias to /src
import SocialList from "/src/components/SocialList.vue"
import ContactForm from "/src/components/ContactForm.vue"
export default {
  name: 'ContactView',
  components: {
    SocialList,
    ContactForm
  }
}
</script>

<style>
  
</style>