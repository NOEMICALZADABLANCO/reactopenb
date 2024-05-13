import logo from './logo.svg';
// import Greeting from './componentes/pure/greeting';
// import GreetingF from './componentes/pure/GreetingF';
import TaskListComponent from './componentes/container/task_list';  
import Ejemplo1 from './hooks/Ejemplo1';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greeting name="Noemi"></Greeting> */}
        {/* <GreetingF name="Noemi Calzada"></GreetingF> */}
        {/* <TaskListComponent></TaskListComponent> */}
        <Ejemplo1></Ejemplo1>
      </header>
    </div>
  );
}
