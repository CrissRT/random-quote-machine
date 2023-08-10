import './App.css';
import QuoteBox from './QuoteBox.js';
import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          backgroundColor: "#1abc9c",
          count : 0,
        };

        this.changeColor = this.changeColor.bind(this);
    }
    
    changeColor() {
      const colors = ['#27ae60', '#2ECC40', '#0074D9', '#FF851B', '#1abc9c', '#3D9970', '#B10DC9', '#FF4136', '#f1c40f', '#F012BE'];
  
      let { count } = this.state;
      count = (count + 1) % colors.length;
  
      this.setState({
          count,
          backgroundColor: colors[count]
      });
  }
  

  render() {
    return (
        <div className="App" style={{ backgroundColor: this.state.backgroundColor }}>
            <header>
              <h1 className='h1 text-center mb-5'>Random Quote Machine</h1>
            </header>

            <div id='main-content'>
              <QuoteBox changeColor={this.changeColor} backgroundColor={this.state.backgroundColor}/>
            </div>

            <footer className='mt-3 text-dark container'>
            <div className='row'>
              <div className="col text-center">
                <p id='project-author'>Made by RTCriss</p>
              </div>
            </div>

            <div className='row'>
              <div className="col text-center">
              <a
                  className="button"
                  id="github-button"
                  title="Author Github"
                  target="_blank"
                  rel="noopener noreferrer"
                  href='https://github.com/CrissRT'
                  style={{color: "black"}}
                >
                  <i className="bi bi-github" />
                </a>
              </div>
            </div>
                

            </footer>
        </div>
    );
  } 
}

export default App;
