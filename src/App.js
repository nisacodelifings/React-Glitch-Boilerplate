import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://res.cloudinary.com/codelifings/image/upload/v1595830005/IMG_20200727_072252_sxoee1.jpg" className="App-logo" alt="logo" />
          <div class="typewriter"><br></br>
          <h2>Hello, There..</h2>
          <p>
             <code><span class="ok">I'm Nisa, React developer</span> <br></br>
               <span class="hehe">Expertise : CSS3 and Javascript</span> <br></br>
            </code>
          </p></div>
          <h2>I've been Work for..</h2>
          <p>
            <img class="img" src="https://res.cloudinary.com/codelifings/image/upload/v1595832917/icopln_ltwiqk.png"></img>
            <img class="img ppn" src="https://res.cloudinary.com/codelifings/image/upload/v1595833359/favicon_azzc2x.png"></img>
            <img class="img ppa" src="https://res.cloudinary.com/codelifings/image/upload/v1595834349/Tak_berjudul3_20200727141815_xep8zf.png"></img>
          </p>
          <h2>Portfolio</h2>
          <p>
            <a class="App-link hey yey" href="https://github.com/nisacodelifings">Codepen</a>
            <a class="App-link hey" href="https://codepen.io/nisacodelifings">Github</a>
          </p>
          <h2>nscdlg@gmail.com</h2>
        </header>      
      </div>
    );
  }
}

export default App;
