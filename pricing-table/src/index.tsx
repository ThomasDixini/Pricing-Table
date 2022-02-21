import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import { createServer, Model } from 'miragejs'

createServer({

  models: {
    plan: Model,
  },

  seeds(server) {
    server.db.loadData({
      plans: [{
        id: 1,
        name: "Thomás",
        email: "thomas@gmail.com",
        plan: "Free"

      },
    ]
    }) 
  },

  routes() {
    this.namespace = "api";


    this.get('/plans', () => {
      return this.schema.all('plan');
    })

    this.post('/plans', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('plan', data);
    })
  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

