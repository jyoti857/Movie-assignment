// // import React from 'react';
import * as React from 'react';
import { View, Text } from 'react-native';
import * as renderer from 'react-test-renderer';
import Home from 'Home'
import CustomCard from '../src/Components/Card';
import Details from '../src/Details';

describe('<Card />', () => {
  // it('Movie title props', () => {
  //   expect(1).toBe(1);
  //   // const tree = renderer.create(function(){return <View><Text>eowpwe</Text></View>})
  //   const tree = renderer.create(<Home />)
  //   const testInstance = tree.root;
  //   console.log("test instance --->", testInstance)
  //   expect(testInstance.findAllByType(CustomCard).props.movieTitle).toBe('Query')
  //   console.log("tree --->", tree)
  //   // expect(tree).toMatchSnapshot();
  // })
  // it('Year props', () => {
  //   expect(1).toBe(1);
  //   const tree = renderer.create(<Home />)
  //   const testInstance = tree.root;
  //   console.log("test instance --->", testInstance)
  //   expect(testInstance.findAllByType(CustomCard).props.year).toBe('2012')
  //   console.log("tree --->", tree)
  // })
  it('Movie type props', () => {
    const tree = renderer.create(<Home />)
    const testInstance = tree.root;
    console.log("test instance --->", testInstance)
    // expect(testInstance.findAllByType(CustomCard).props.type).toBe('movie')
    console.log("tree --->", tree)
    expect(tree.toJSON()).toMatchSnapshot();
  })
  it('Card component', () => {
    const tree = renderer.create(<CustomCard />)
    const testInstance = tree.root;
    console.log("test instance --->", testInstance)
    // expect(testInstance.findAllByType(CustomCard).props.type).toBe('movie')
    console.log("tree --->", tree)
    expect(tree.toJSON()).toMatchSnapshot();
  })
  it('Details component', () => {
    const tree = renderer.create(<Details />)
    const testInstance = tree.root;
    console.log("test instance --->", testInstance)
    // expect(testInstance.findAllByType(CustomCard).props.type).toBe('movie')
    console.log("tree --->", tree)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})