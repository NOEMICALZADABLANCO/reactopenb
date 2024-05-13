import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {

    const defaultTask = new Task ('Example', 'Default description', false, LEVELS.NORMAL);

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



export default TaskListComponent

