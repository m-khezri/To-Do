import $ from 'jquery';
import taskData from '../../helpers/tasksData';

const listTasks = (tasks) => {
  let domString = '';
  tasks.forEach((todo) => {
    domString += `
          <div>
                <p>${todo.task}</p>
          </div>`;
  });
  $('#tasks-board').html(domString);
};


const getTasks = () => {
  taskData().then((data) => {
    listTasks(data);
  }).catch((error) => {
    console.error(error);
  });
};


export default getTasks;
