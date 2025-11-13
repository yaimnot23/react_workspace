import './App.css';
import Hello from './components/Hello';
import HelloProps from './components/HelloProps';
import Counter from './components/Counter';


function App() {
  return (
    <div className="App">
      <h1>Hello React World</h1>
      <Hello />
      <Hello />
      <Hello />
      <Hello />
      <HelloProps name="react" color="red"/>
      <hr />
      <Counter />
    </div>
)}

export default App;
