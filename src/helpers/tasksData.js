import axios from 'axios';
import apiKeys from '../../db/apiKeys';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllTasks = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/tasks.json`)
    .then((results) => {
      const tasksObject = results.data;
      const tasksArray = [];
      if (tasksObject != null) {
        Object.keys(tasksObject).forEach((taskId) => {
          const newTask = tasksObject[taskId];
          newTask.id = taskId;
          tasksArray.push(newTask);
        });
      }
      resolve(tasksArray);
    })
    .catch((error) => {
      reject(error);
    });
});


export default getAllTasks;
