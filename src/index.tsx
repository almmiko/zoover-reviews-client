import { configure } from 'mobx';
import { Provider as MobxProvider } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import App from './App';
import stores from './stores';

configure({ enforceActions: 'observed' });

ReactDOM.render(
  <MobxProvider {...stores}>
    <App />
  </MobxProvider>,
  document.getElementById('root'),
);
