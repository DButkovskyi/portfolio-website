<template>
  <div class = "post-container">
    <h1 class="center">Getting Started</h1>
    <article class="episode">
    <div class="episode__number">00</div>
    <div class="episode__content">
      <div class="title">I finally get here</div>
      <div class="story">
        <p>Hi, my name is Daniel and this is the first post on my very own website. It was created mostly for myself to see what I can do.I had to learn multiple skills to complete it and I am glad I did it. I have learned Adobe Illustrator to create the background image, Adobe Photoshop to edit photos I will post in future, some writing skills,and I had to recap my HTML/CSS knowledge since I mostly studied Java. Also I finally started learning AWS, I used AWS to deploy this website. I have learned a lot during this little project and I will try to help other beginners with their studying journey. </p>
      </div>
    </div>
  </article>
  <article class="episode">
    <div class="episode__number">01</div>
    <div class="episode__content">
      <div class="title">What's next?</div>
      <div class="story">
        <p>To be honest I am not quite sure about what the blog will be about. The only thing I know for sure is that I will create a complete guide on how to create and deploy your first website for beginners. While developing I noticed one thing: there are almost no guides that explain everything from the first design and first HTML tag to deployment. Other guides often have not enough information, so you have to search different source, and while searching is a crucial skill for developers, I want to try make this part easier for rising developers.<br>
    Also, as a person who just developed and deployed its first website I know questions that may arise during the development, so I will try my best to answer them right away.<br>
        </p>
      </div>
    </div>
  </article>
</div>
  <SocialList class="social"/>
</template>

<script>
  import SocialList from "/src/components/SocialList.vue"
  export default {
  name: 'post1',
  components: {
    SocialList,
  },
}
</script>

<style scoped>
  /*post page*/
.post-container {
  margin: 0 auto;
  width: 80%;
  min-width: 370px;
  background: rgba(0, 0, 0, 0.2);
  border: 5px solid rgba(0,0,0,.07);
  border-radius: 2px;
  padding: 5vh 2vw;
}
.post-img {
  max-width: 100%;
  width: auto;
}
.post-text {
  width:80%;
  color: black;
  margin: 0 auto;
  padding: 3rem 0;
}

.story ul {
  margin-left: 20px;
}

.story p {
  margin: 0 0 13px 0;
}
.title {
  font-size: 1.5rem;
}

.story a {
  color: #fff;
}

.episode {
  display: grid;
  grid-template-columns: 1fr 5fr;
  position: relative;
}

.episode__number {
  font-size: 5vw;
  font-weight: 600;
  padding: 10px 0;
  position: sticky;
  top: 0;
  text-align: center;
  height: calc(5vw + 20px);
  transition: all 0.2s ease-in;
}

.episode__content {
  border-top: 2px solid #fff;
  display: grid;
  grid-template-columns: 1fr 7fr;
  grid-gap: 10px;
  padding: 15px 0;
}

.episode__content .title {
  font-weight: 600
}

.episode__content .story {
  line-height: 26px;
}

@media (max-width: 600px) {
  .episode__content {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 576px) {
  .episode__content .story {
    font-size: 15px;
  }
}
</style>