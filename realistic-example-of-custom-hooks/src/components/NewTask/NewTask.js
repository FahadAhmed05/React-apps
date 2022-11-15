import React from 'react';
import useHttp from '../../hooks/Use-http';
import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
   const {isLoading, error, sendRequest: sendTaskRequest} = useHttp();
   const createTask = (taskData, taskText) => {
    console.log(taskData,taskText);
    const generatedId = taskText.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: {name: taskData}  };
      props.onAddTask(createdTask);
   };
  const enterTaskHandler = async (taskText) => {
    console.log(taskText)

    sendTaskRequest({
      url:  'https://example-of-custom-hooks-default-rtdb.firebaseio.com/tasks/-N9bI0lCOLcOICNlcDlJ/text/tasks.json',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: { text: taskText }
    },  createTask.bind(null,taskText)

    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
