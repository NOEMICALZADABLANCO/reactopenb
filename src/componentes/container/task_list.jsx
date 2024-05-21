import React, {useEffect, useState} from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

export 
const TaskListComponent = () => {

  const defaultTask = new Task ('Example', 'Default description', false, LEVELS.NORMAL);

  const [task, setTask] = useState([defaultTask]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Task State has been modified');
    setLoading(false);
    return () => {
      console.log('TaskList component is going to unmount...')
    }
  }, [tasks])


    const changeState = (id) => {
      console.log("TODO: ")
    }

  return (
    <div>
        <div>
            Your task:
        </div>
      <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  )
}





