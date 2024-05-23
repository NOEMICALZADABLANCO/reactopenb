import React, {useEffect, useState} from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/forms/task';
import TaskForms from '../pure/forms/taskForms';

const TaskListComponent = () => {

  const defaultTask1 = new Task ('Example1', 'Description1', true, LEVELS.NORMAL);
  const defaultTask2 = new Task ('Example2', 'Description2', false, LEVELS.URGENT);
  const defaultTask3 = new Task ('Example3', 'Description3', false, LEVELS.BLOCKING);

  const [task, setTask] = useState([defaultTask1, defaultTask2, defaultTask3]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Task State has been modified');
    setLoading(false);
    return () => {
      console.log('TaskList component is going to unmount...')
    }
  }, [task])


    const changeState = (id) => {
      console.log("TODO: ")
    }

  return (
    <div>
        <div className='col-12'>
          <div className="card" >
            <div className='card-header p-3'>
              <h5>
              Your task:
              </h5>
            </div>

            <div className='card-body' data-mdb-perfect-scrollbar='true' style={{position: 'relative', height: '400px'}}>
              <table>
                <thead>
                  <tr>
                    <th scope='col'>Title</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Priority</th>
                    <th scope='col'>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {task.map((task, index) => {
                    return(
                      <TaskComponent 
                      key={index}
                      task={task}></TaskComponent>
                    )
                    }
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <TaskForms></TaskForms>
        </div>
    </div>
  )
}

export default TaskListComponent;




