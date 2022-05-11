import React from 'react';
import ReactDOM from 'react-dom/client';
import { TaskApp } from './TaskApp';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TaskApp />
  </React.StrictMode>
);

