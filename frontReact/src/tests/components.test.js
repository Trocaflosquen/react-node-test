import React from 'react'
import renderer from 'react-test-renderer'
import ClientForm from '../components/ClientForm'
import { clientDataMock } from './mocks'

test('Link changes the class when hovered', () => { 
    const component = renderer.create(
        <ClientForm client={clientDataMock}/>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });