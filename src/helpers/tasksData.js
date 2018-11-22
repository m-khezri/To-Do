import axios from 'axios';
import apiKeys from '../../db/apiKeys';

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
