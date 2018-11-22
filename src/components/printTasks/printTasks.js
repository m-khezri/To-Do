import $ from 'jquery';
// import apiKeys from '../../../db/apiKeys';
import tasksData from '../../helpers/tasksData';
import 'bootstrap';

const writeTasks = (todo) => {
  let newString = '';
  todo.forEach((tasks) => {
    newString += `
        <div class="mr-2 p-2 border shadow-sm rounded flex-item">
        <h6 class="text-secondary">${tasks.task}</h6>
        </div>`;
    $('#tasks-board').html(newString);
  });
};

export default writeTasks;
