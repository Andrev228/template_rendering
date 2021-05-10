import React from 'react';
import { initState, incrementScore } from './store/scoreSlice';
import store from './store';
import { renderElement } from './helpers/renderElement';
import People from './components/People.jsx';
import Person from './components/Person.jsx';

/*
  People and Person components are in current scope as they are
  defined as component reference in the predefined object.
  Otherwise I would access components by their names (in case of
  recieving the payload from server or json).

  The same for the incrementScore action.
*/

const componentPayload = [ {
  id: '298a1eb8-4e49-4d9c-b4bf-33aef86bd286',
  component: People,
  children: [{
    id: 'ea605595-d606-4751-b90c-40e8d2de9f0c',
    component: Person,
    properties: {
      firstName: {
        type: 'string',
        value: 'Andre', 
      },
      lastName: {
        type: 'string',
        value: 'Perry',
      },
      avatar: {
        type: 'string',
        value: 'https://gravatar.com/avatar/c805e04d43db32921aca0eb6a4df0fbd?s=400&d=robohash&r=x',
      },
      age: {
        type: 'stateReference',
        value: 'c191b3b4-3dcd-4315-a28d-f5174329d9db'
      },
      onClick: {
        type: 'function',
        value: incrementScore,
        arguments: [{
          type: 'stateReference',
          value: 'c191b3b4-3dcd-4315-a28d-f5174329d9db',
        }],
      }}
    }, {
      id: '94929e56-d5c5-45d4-b7c9-3fdaf9720342',
      component: Person,
      properties: {
      firstName: {
        type: 'string', value: 'Jeremie',
      },
      lastName: {
        type: 'string',
        value: 'Dasilva'
      },
      avatar: {
        type: 'string',
        value: 'https://gravatar.com/avatar/054052979324fe61bdfce4f7741a2c64?s=400&d=robohash&r=x',
      },
      age: {
        type: 'stateReference',
        value: 'b61f6d90-c8a8-40b6-84d6-c14a699bb46f'
      },
      onClick: {
        type: 'function',
        value: incrementScore,
        arguments: [{
          type: 'stateReference',
          value: 'b61f6d90-c8a8-40b6-84d6-c14a699bb46f',
        }]
      }},
    }, {
    id: '629332af-4b50-417e-a7a4-be1864ecb94a',
    component: Person,
    properties: {
      firstName: {
        type: 'string',
        value: 'Ivan',
      },
      lastName: {
        type: 'string',
        value: 'Moreno',
      },
      avatar: {
        type: 'string',
        value: 'https://gravatar.com/avatar/543c9c9041d36fab4dec68d545b2ffe2?s=400&d=robohash&r=x'
      },
      age: {
        type: 'stateReference',
        value: '882dc4fc-0431-497d-8355-0b4f349a08db',
      },
      onClick: {
        type: 'function',
        value: incrementScore,
        arguments: [{
          type: 'stateReference',
          value: '882dc4fc-0431-497d-8355-0b4f349a08db',
        }],
      }
    }
  }]
}];

const statePayload = {
  'c191b3b4-3dcd-4315-a28d-f5174329d9db': {
    name: 'andreScore',
    initialValue: 18,
  },
  'b61f6d90-c8a8-40b6-84d6-c14a699bb46f': {
    name: 'jeremieScore',
    initialValue: 39,
  },
  '882dc4fc-0431-497d-8355-0b4f349a08db': {
    name: 'ivanScore',
    initialValue: 26
  },
};

function createApp(reactAppPayload = componentPayload, reduxStorePayload = statePayload) {
  const initStateAction = initState(reduxStorePayload);
  store.dispatch(initStateAction);

  return reactAppPayload.map(renderElement);
}

function App() {
  return (
    <div className="App">
        {createApp(componentPayload, statePayload)}
    </div>
  );
}

export default App;
