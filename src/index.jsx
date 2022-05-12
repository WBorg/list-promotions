import React from 'react';
import App from './App';
import './index.css';

// reactjs 18.0.0
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);



// reactjs 17.0.2

// import ReactDOM from 'react-dom';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

