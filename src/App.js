import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import EventHandeler from './events/EventHandeler';
import UserState3 from './hooks/UserState3';
import UserState2 from './hooks/UserState2';
import FormData from './forms/FormData';
import Childs from './state_lefting/Childs';
import Todo from './components/Todo';
import NewTodo from './components/NewTodo';

function App() {
  const data = "I am form Parent";

  const  handelChildData = (childData) =>{
    console.log(childData);
  }
  
  const handelNewData = (newTodo)=>{
    console.log(newTodo);
  }

  return (
    <div>
      <NewTodo onhandelNewData = {handelNewData} />
      <Todo title="Learn titledsdsad"/>
      <Childs data={data} onChildData = {handelChildData}/>
    </div>
  );
}

export default App;
