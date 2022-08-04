<template>
  <div class="socalList">
        <div class="icon github">
          <div class="tooltip">Github</div>
          <a href="https://github.com/DButkovskyi" target="_blank" data-title="resume"><span><i class="fa fa-github"></i></span></a>
        </div>
        <div class="icon linkedin">
          <div class="tooltip">Linkedin</div>
          <a href="https://www.linkedin.com/in/danyil-daniel-butkovskyi-37469719a?trk=public_profile_browsemap" data-title="resume" target="_blank"><span><i class="fa fa-linkedin"></i></span></a>
        </div>
        <div class="icon resume">
          <div class="tooltip">Resume</div>
          <a href="resume.pdf" data-title="resume" target="_blank"><span><i class="fa fa-file-text"></i></span></a>
        </div>
  </div>
</template>

<script>
export default {
  name: 'SocialList',
}
</script>

<style scoped>
    /*socail media nice links*/
  a {
  text-decoration: none;
  color: white;
  }
  .socalList{
    display:inline-flex;
    padding-top: 50px;
    justify-content: center;
    width: 100%;
    
  }
  .socalList .icon{
    margin:20px;
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    position: relative;
    z-index:2;
  }
  .socalList .icon span{
    position:relative;
    z-index:2;
    height: 60px;
    width: 60px;
    display:block;
    background: #55236a;
    box-shadow: 0 10px 10px rgba(0,0,0,0.1);
    border-radius:50%;
    text-align:center;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  .socalList .icon span i{
    font-size:25px;
    line-height:60px;
  }
  .socalList .icon .tooltip{
    position:absolute;
    top:0px;
    background: #fff;
    box-shadow: 0 10px 10px rgba(0,0,0,0.1);
    font-size: 20px;
    padding: 10px 18px;
    border-radius: 25px;
    color:white;
    opacity:0;
    pointer-events: none;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  .socalList .icon:hover .tooltip{
    opacity:1;
    pointer-events: auto;
    top:-70px;
  }
  .socalList .icon .tooltip:before{
    position:absolute;
    content:"";
    height:15px;
    width:15px;
    bottom:-8px;
    left:50%;
    transform: translateX(-50%) rotate(45deg);
  }
  .socalList .icon:hover span,
  .socalList .icon:hover .tooltip{
    text-shadow: 0px -1px 0px rgba(0,0,0,0.4);
  }
  .socalList .icon:hover span{
    color: #fff;
  }
  .socalList .github:hover span,
  .socalList .github:hover .tooltip,
  .socalList .github:hover .tooltip:before{
    background:#171515 ;
  }
  .socalList .linkedin:hover span,
  .socalList .linkedin:hover .tooltip,
  .socalList .linkedin:hover .tooltip:before{
    background:#0072b1 ;
  }
  .socalList .resume:hover span,
  .socalList .resume:hover .tooltip,
  .socalList .resume:hover .tooltip:before{
    background:#43d5f9;
  }
</style>