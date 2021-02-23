import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';

function App() { //function定义的组件
  return (
    <div className="App">
      <header className="App-header">
        <div className="div1">我是div1</div>
        <Button type="primary">Primary Button</Button>
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{color:'#f40'}}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
