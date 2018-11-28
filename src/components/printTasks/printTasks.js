import $ from 'jquery';
import taskData from '../../helpers/tasksData';

const listTasks = (tasks) => {
  let domString = '';
  tasks.forEach((todo) => {
    domString += `
          <div class="w-100 mx-auto p-0 mt-2 border-bottom">
              <div class="d-flex justify-content-between">
                <h6 class="p-1 w-75">${todo.task}</h6>
                <label><input class="mr-2" type="checkbox"> Completed</label>
                <button type="submit" class=" btn btn-light"><i class="fas fa-edit" style="font-size: 24px";></i></button>
                <button type="submit" class=" btn btn-light"><i class="fas fa-trash-alt" style="font-size: 24px";></i></button>
              </div>
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
