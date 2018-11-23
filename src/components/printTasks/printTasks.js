import $ from 'jquery';
import taskData from '../../helpers/tasksData';

const loadTasks = (todoArray) => {

  let domString = '';
  todoArray.forEach((todo) => {
    domString += `
          <div>
                <p>${todo.task}</p>
          </div>
      `;
    $('#tasks-board').html(domString);
  });
};

const listTasks = () = {
  tasksData.getAllTasks()
    .then((todoArray) => {
      printTasks(todoArray);
    })
    .catch((error) => {
      console.error('error in getting tasks', error);
    });
};



export default listTasks;