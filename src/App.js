import './App.css';
import Navbar from './components/Navbar';
// import Pr from './Pr';
// import Form from './components/Form';
import Saqi from './components/Saqi';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <div>
      {/* <Form placeholder="enter some thing here"/> */}
      {/* <Pr/> */}
      <Saqi/>
      <TodoApp/>
      <Navbar/>
    </div>

    );
}

export default App;
