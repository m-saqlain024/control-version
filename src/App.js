import './App.css';
import Navbar from './components/Navbar';
import Saqi from './components/Saqi';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <div>
      <Saqi/>
      <TodoApp/>
      <Navbar link1="home" link2="about" link3="blogs"/>
    </div>

    );
}

export default App;
