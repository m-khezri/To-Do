import axios from 'axios';
import $ from 'jquery';
import apiKeys from '../../../db/apiKeys';
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

const baseUrl = apiKeys.firebaseKeys.databaseURL;
const loadTasks = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/todo.json`)
    .then((result) => {
      const taskObject = result.data;
      const taskArray = [];
      if (taskObject != null) {
        Object.keys(taskObject).forEach((taskId) => {
          const newTask = taskObject[taskId];
          newTask.id = taskId;
          taskArray.push(newTask);
        });
      }
      resolve(taskArray);
    }).catch((err) => {
      reject(err);
    });
});

const getTasks = () => {
  loadTasks().then((data) => {
    writeTasks(data);
  }).catch((error) => {
    console.error(error);
  });
};


const bindWriteTasks = () => {
  loadTasks();
  getTasks();
};

export default bindWriteTasks;
