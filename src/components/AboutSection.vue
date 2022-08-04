<template>
  <div class="center-part">
    <div class = "about-text about-column">
      <span> My name is Daniel and I believe in computers. Three years ago, when I was 19 and just moved to the US from Ukraine, I was trying to find myself, particularly, I was trying to find out what I want to do for life and while going through different options I noticed one thing: computers, they are everywhere. I understood the true power of computers: they can do everything, and I realized that to be able to do everything sounds fun. That's how I started my developer's journey.<br><br>
      I have started by learning HTML/CSS and JavaScript on the internet, but the more I learn, the more I want to keep learning. So, two years ago I decided to get a degree in Computer Science. Right now I am halfway through with plans to graduate in 2024.<br>What is the purpose of the website? Not sure to be honest, but I will definitely be working on it!</span>
    </div>
    <div class = "about-picture about-column">
      <img class="round-img" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1" alt="me :)">
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutSection',
}
</script>
<style>
    /*about page*/
.center-part {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  border-radius: 20%;
  padding: min(40px, 3%);
  
}
.about-column {
  margin: auto;
  text-align: center;
  
}
@media (min-width: 0) {
  .center-part {flex-direction: column; }
  .about-column {width: 80%;
                min-width: 350px;}
}
@media (min-width: 800px) {
  .center-part {flex-direction: row; }
  .about-column {width: 40%;}
}
@media (min-width: 0px){
  about-column span {font-size:1 rem}
}
@media (min-width: 480px){
  .about-column span { font-size: 1.5rem; }
}
@media (min-width: 1200px){
  .about-column span { font-size: 1.75rem; }
}
</style>