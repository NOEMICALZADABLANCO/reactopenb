import logo from './logo.svg';
import './App.css';
// import Greeting from './componentes/pure/greeting';
// import GreetingF from './componentes/pure/GreetingF';
import TaskListComponent from './componentes/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './componentes/pure/forms/greetingStyled';

export default function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greeting name="Noemi"></Greeting> */}
        {/* <GreetingF name="Noemi Calzada"></GreetingF> */}
        {/* <GreetingStyled name="Martín"></GreetingStyled> */}
        {/* {<Ejemplo4 nombre="Noemí">
          <h3>
            Contenido del props.children</h3>
            </Ejemplo4>} */}
            <TaskListComponent></TaskListComponent>
      {/* </header> */}
    </div>
  );
}
