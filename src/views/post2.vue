<template>
  <div class = "post-container">
    <h1 class="center">Your own website: prerequisites</h1>
    <article class="episode">
    <div class="episode__number">00</div>
    <div class="episode__content">
      <div class="title">Who is it for?</div>
      <div class="story">
        <p>I am creating this guide for people who want to start learning web development and have some fun. Our final goal is to create a simple STATIC website, so if you already have experience creating websites I would recommend you to skip this guide. You also will not find tons of text about how to code, instead I will provide you with a simple step by step guide and some useful links if you need to learn more.
        <br>This guide will walk you through all the instructions for technologies that will be needed for developing and deployment, so completion will provide you with a perfect knowledge base for your next, more advanced projects.So, what will we use?
        </p>
      </div>
    </div>
  </article>
    <article class="episode">
    <div class="episode__number">01</div>
    <div class="episode__content">
      <div class="title">Code Editor</div>
      <div class="story">
        <p>First of all we will need a code editor.<br>
          I personally like Visual Studio Code and would recommend it for couple reasons:</p>
          <ul>
            <li>It's free</li>
            <li>Easy to setup</li>
            <li>Customisation: there are many extensions you can install</li>
          </ul>
        <p>You also can search and try different options to find a perfect fit for you.</p>
      </div>
    </div>
  </article>
    <article class="episode">
    <div class="episode__number">02</div>
    <div class="episode__content">
      <div class="title">HTML/CSS</div>
      <div class="story">
        <p>HTML/CSS are the main tools we will be using for development, so I would recommend start by learning basics, freecodecamp might be the best place to start, just remember: you don't have to complete the whole course, as soon as you understand HTML tags, paddings/margins and CSS selectors you can start working on the website, doing is the best way to learn. I will help you to create a structure of the website and provide you with required instructions and helpful links.</p>
      </div>
    </div>
  </article>
    <article class="episode">
    <div class="episode__number">03</div>
    <div class="episode__content">
      <div class="title">Deploying</div>
      <div class="story">
        <p>After stage two you should have your files ready for launch and for our last step we will be using Amazon Web Services, (AWS) to launch it, so you will need an AWS account(it's free), the only paid thing will be domain name.</p>
      </div>
    </div>
  </article>
</div>
</template>

<script>
  import SocialList from "/src/components/SocialList.vue"
  export default {
  name: 'post2',
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