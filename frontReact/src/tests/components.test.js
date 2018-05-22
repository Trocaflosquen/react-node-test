import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter as Router } from 'react-router-dom'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import ClientForm from '../components/ClientForm'
import ClientsListContainer from '../containers/ClientsListContainer'
import { clientDataMock, clientArrayMock } from './mocks'

test('ClientForm should be rendered correctly with client data given', () => { 
    const component = renderer.create(
        <ClientForm client={clientDataMock}/>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('ClientsListContainer should print a list of clients', () => { 
    const middlewares = []
    const mockStore = configureStore(middlewares)
    const initialState = {}
    const store = mockStore({clients: clientArrayMock})
    
    const component = renderer.create(
        <Provider store={store}>
            <Router>
                <ClientsListContainer />
            </Router>
        </Provider>    ,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});