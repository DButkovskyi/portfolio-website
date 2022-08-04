<template>
  <div v-for="(title, description, category, path) in posts" class = "blog-post-container">
      <div class = "blog-post-photo blog-post-section">
        <router-link :to="{path:title.path}" ><img class="round-img" src = "https://images.unsplash.com/photo-1655070834453-b29065fd7e63?ixlib=rb-1.2.1" alt = "photo"></router-link>
      </div>
      <div class = "blog-post-text blog-post-section">
        <h6> Category:{{title.category}} </h6>
        <router-link :to="{path:title.path}"><h3 class="center"> {{title.title}} </h3></router-link>
        <span> {{title.description}} </span>
        <router-link class = "readMore" :to="{path:title.path}">Read more</router-link>
      </div>
    </div>
  
  
</template>

<script>
export default {
  name: 'BlogList',
  data() {
    return {
      posts: [
        { 
          title: 'First website: prerequisites',
          category: 'Coding',
          description: 'How to get started with your first website',
          path: '/post2',
        },
        {
          title: 'Getting Started',
          category: 'Coding', 
          description: 'The story of me and my first website',
          path: '/post1'
        },
      ]
    }
  }
}
</script>
<style>
  /*blog page*/
@media (max-width: 480px) {
  .blog-post-container {height: 8rem;}
}
@media (min-width: 480px) {
    .blog-post-container {
      height: 13rem;
    }
.blog-post-text h3 {font-size: 180%;}
}
.blog-post-container {
  margin: 10px auto;
  padding: 20px 0;
  border-top: ridge 2px #f2c157;
  border-bottom: ridge 2px #f2c158;
  width: 65%;
  min-width: 370px;
  display:flex;
  justify-content: space-between;
}
.blog-post-photo {
  width: 80%;
  height: auto;
}
.blog-post-text {
  width: 100%;
  height: 100%;
  padding: auto 0;
  position: relative;
}
.blog-post-text span {
  display: block;
  text-align: center;
}

.round-img {
  height:100%;
  width:100%;
  object-fit: cover;
  border-radius: 20%;
}
.readMore {
  width:50%;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  position: absolute;
  margin: 0 auto;
  bottom: -10px;
  right: 0;
}
.readMore:hover{
  background: #fdedc3;
  color: black;
	transition: all .5s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}
.readMore:hover::after{
	height: calc(100% + 8px)
}

</style>