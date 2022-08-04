<template>
  <div class="container">
	<div>
			<h1 class="center">Contact me</h1>
	</div>
	<div>
			<h4 class="center">Please contact me with any questions</h4>
	</div>
    <form action="https://formsubmit.co/danbutk@gmail.com" method="POST">
      <input type="hidden" name="_next" value="https://nice-website.baneste.repl.co/thankyou.html">
      <input type="hidden" name="_captcha" value="false">
      <div class="contact-container">
  			<div class="input-container">
  				<div class="styled-input">
  					<input name = "name" id="name" type="text" required />
  					<label>Name</label> 
  				</div>
  			</div>
  			<div class="input-container">
  				<div class="styled-input">
  					<input name ="email" id="email" type="email" required />
  					<label>Email</label> 
  				</div>
  			</div>
  			<div class="input-container">
  				<div class="styled-input">
  					<textarea name = "message" type = "message" id="message" required></textarea>
  					<label>Message</label>
  				</div>
  			</div>
  			<div class="input-container">
          <button class="submit-btn" type = "submit">Send </button>
  			</div>
	    </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
}
</script>

<style scoped>
  /*contact page*/
.input-container {
  display:flex;
  width: 100%;
  justify-content: center;
}

input,textarea {
  padding: 30px 0;
  width: 100%;
  font-size: 1rem;
  background-color: rgba(50, 19, 76, 0.4);
  color: white;
  border: 2px solid #32134c;
  border-radius: 4px;
}
.styled-input {
  float: left;
  margin: 1rem 0;
  position: relative;
  border-radius: 4px;
  min-width: 300px;
  width: 35%;
}
.styled-input label {
  color: white;
  padding: 1rem 30px;
  position: absolute;
  top: 10px;
  left: 0;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
  pointer-events: none;
}
textarea {
    min-height: 5em;
}
.submit-btn {
  font-size: 1.5em;
  padding: 10px 35px;
  border-radius: 20px;
  display: inline-block;
  background-color: #e18d46;
  border: none;
  color: #32134c;
  cursor: pointer;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.06),
              0 2px 10px 0 rgba(0,0,0,0.07);
  -webkit-transition: all 300ms ease;
  transition: all 300ms ease;
}

.submit-btn:hover {
    transform: translateY(1px);
    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.10),
              0 1px 1px 0 rgba(0,0,0,0.09);
}
input:focus ~ label, textarea:focus ~ label, input:valid ~ label, textarea:valid ~ label {
    font-size: 0.75em;
    color: #ffffff;
    top: -5px;
    -webkit-transition: all 0.225s ease;
    transition: all 0.225s ease;
}
</style>