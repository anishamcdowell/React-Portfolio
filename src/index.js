import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    {/* <ProjectContext.Provider>
    </ProjectContext.Provider> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);