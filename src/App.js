import logo from './logo.svg';
import './App.css';
import {MsgBox,RedMsgBox} from './func-props'
import {Calculator} from './calculator'


function App() {
  return (
    <div className="App container">
      <MsgBox  text="Hello React" color="green" bgColor="#ccc" fontSize="18pt" border="solid 1px #dddd"/>
      <RedMsgBox  text="Hello React" bgColor="#ccc" fontSize="18pt" border="solid 1px #dddd"/>
      <Calculator/>
    </div>

  );
}

export default App;
