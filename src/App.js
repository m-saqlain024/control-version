import './App.css';
import UseReducer from './components/UseReducer';
import Navbar from './components/Navbar';
// import PureImpure from './components/PureImpure';
import ReactHook from './components/ReactHook';
import CustomHook from './components/CustomHook';
// import Pr from './Pr';
// import Form from './components/Form';
// import Saqi from './components/Saqi';
// import TodoApp from './components/TodoApp';

function App() {
  return (
    <div>
      {/* <Form placeholder="enter some thing here"/> */}
      {/* <Pr/> */}
      {/* <Saqi /> */}
      {/* <TodoApp /> */}
      <Navbar link1='home' link2='about' link3='blogs' />
      {/* <PureImpure/> */}
      <ReactHook/>
      <UseReducer/>
      <CustomHook/>
    </div>

    );
}

export default App;
