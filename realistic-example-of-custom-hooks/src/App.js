import React, { useEffect, useState } from 'react';
import Usehttp from './hooks/Use-http';
import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';

function App() {
  const [tasks, setTasks] = useState([]);

  const  { isLoading, error, sendRequest: fetchTasks } = Usehttp();
  useEffect(() => {
    const transformTasks = (tasksObj) => {
      const loadedTasks = [];
      for (const taskKey in tasksObj) {
        loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
      };
      setTasks(loadedTasks);
    };
    fetchTasks({url:'https://example-of-custom-hooks-default-rtdb.firebaseio.com/tasks/-N9bI0lCOLcOICNlcDlJ/text/tasks.json'},
    transformTasks
    );
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    let transformedTask ;
    console.log("TASK ",task);
    for (const taskKey in task) {
      transformedTask=  { id: taskKey, text: task.text.name };
    };
    setTasks((prevTasks) => prevTasks.concat(transformedTask));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
