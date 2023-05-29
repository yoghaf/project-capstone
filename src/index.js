import ReactDOM from 'react-dom/client';
import App from './scripts/views/app';

import reportWebVitals from './reportWebVitals';
import './index.css';

const app = new App({
  content: ReactDOM.createRoot(document.getElementById('root')),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
