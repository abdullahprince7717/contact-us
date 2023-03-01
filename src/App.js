import React from 'react';
import helloImg from './hello.png';
import Background from './Frame.svg';
import sideImg from './Rectangle.svg';
import { Input } from 'antd';
import './App.css';


const App = () => {
  const { TextArea } = Input;
  return (
    <div class="main">
      <div class='left-col'>

        <div class='hello-img' >
          <img src={helloImg}></img>
          <p class='hello-text'>Hello</p>
        </div>
        <div>
          <p class = 'bold'>abc@email.com</p>
          <p class = 'bold'>232-324-2343</p>
          <p>dadsad sdfds 234324</p>
        </div>
        <div class='background-img' style={{backgroundImage: `url(${Background})` }}>
          <img class='side-img' src={sideImg}></img>
        </div>

      </div>

      <div class='right-col'>
        <form>
          <p class = 'bold'>Full Name</p>
          <Input class='input' type="text" name="name" />

          <p class = 'bold'>Email Address</p>
          <Input class='input' type="text" name="email" />


          <p class = 'bold'>Phone Number</p>
          <Input class='input' type="text" name="phone" />


          <p class = 'bold'>Message</p>
          <TextArea class='text-area' type="text" name="name" rows={4} />

        </form>
        <button class='send-btn' type="submit" >
            Send Message
          </button>

        <div class = 'end-text'>
          <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply</p>
        </div>
      </div>
    </div>
  );
}

export default App;
