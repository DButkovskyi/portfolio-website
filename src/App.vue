<template>
  <nav class = "navMenu">
    <ul class="menu">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
      <li><router-link to="/blog">Blog</router-link></li>
    </ul>
  </nav>
<router-view/>
</template>
<script>
    
</script>
<style>
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
  * {
  margin: 0;
  padding: 0;
}
html, body {
  height: 100%;
  width: 100%;
  background-image: url(assets/back.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  font-size: 16px;
  color: white;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent;
}

@media (min-width: 0px) {
  p { font-size: 1rem; }
}
@media (min-width: 480px) {
  p { font-size: calc(1.25rem); }
}
@media (min-width: 1200px){
  p { font-size: 1.5rem; }
}

.center {
  text-align: center;
}
.round-img {
  height:100%;
  width:100%;
  object-fit: cover;
  border-radius: 20%;
}
a {
  text-decoration: none;
  color: white;
}

  
  /*navigation manu*/
  .navMenu {
    font-weight: bold;
  }
  .navMenu ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    margin-bottom:3%;
  }
  @media (min-width: 480px) {
    .navMenu li {
      padding: 0px 20px;
    }
    .navMenu li a {
      display: block;
      font-size: 1.5rem;
      color: #f3ac3a;
      text-align: center;
      padding: 14px 10px;
      text-decoration: none;
      position: relative;
    }
    .navMenu li a::after{
      content: "";
      background: #f6eaea;
    	mix-blend-mode: multiply;
      width: calc(100% + 20px);
      height: 0;
      position: absolute;
      bottom: -1px;
      left: -10px;
    	transition: all .3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }
    .navMenu li a:hover::after{
  	  height: calc(100% + 8px)
    }
  }
  @media (max-width: 480px) {
    .navMenu li {
      padding: 0px 10px;
    }
    .navMenu li a {
      display: block;
      font-size: 1rem;
      color: #f3ac3a;
      text-align: center;
      padding: 14px 10px;
      text-decoration: none;
    }
    .navMenu li a:hover {
      background: #72177e;
      mix-blend-mode: overlay;
      opacity: 50%;
    }
  }
</style>
    