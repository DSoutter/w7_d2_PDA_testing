import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should add 1 to 4 to make 5', () => {
    const button1 = container.find('#number1');
    const button4 = container.find('#number4');
    const buttonAdd = container.find('#operator_add');
    const buttonEqual = container.find('#operator-equals');
    button1.simulate('click');
    buttonAdd.simulate('click');
    button4.simulate('click');
    buttonEqual.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('5');
  })

  it('should subtract 4 from 7 to make 3', () => {
    const button7 = container.find('#number7');
    const button4 = container.find('#number4');
    const buttonSubtract = container.find('#operator-subtract');
    const buttonEqual = container.find('#operator-equals');
    button7.simulate('click');
    buttonSubtract.simulate('click');
    button4.simulate('click');
    buttonEqual.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should multiply 3 and 5 for 15',  () => {
    const button3 = container.find('#number3');
    const button5 = container.find('#number5');
    const buttonMultiply = container.find('#operator-multiply');
    const buttonEqual = container.find('#operator-equals');
    button3.simulate('click');
    buttonMultiply.simulate('click');
    button5.simulate('click');
    buttonEqual.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('15'); 
  })

  it('should divide 21 by 7 to get 3', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    const buttonDivide = container.find('#operator-divide');
    const buttonEqual = container.find('#operator-equals');
    button2.simulate('click');
    button1.simulate('click');
    buttonDivide.simulate('click');
    button7.simulate('click');
    buttonEqual.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3'); 
  })

  it('should concatenate 1, 4, 5 to get 145', () => {
    const button1 = container.find('#number1');
    const button4 = container.find('#number4');
    const button5 = container.find('#number5');
    button1.simulate('click');
    button4.simulate('click');
    button5.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('145'); 
  })

  it('should chain multiple operations together', () => {
    const button1 = container.find('#number1');
    const button4 = container.find('#number4');
    const button5 = container.find('#number5');
    const buttonAdd = container.find('#operator_add');
    const buttonSubtract = container.find('#operator-subtract');
    const buttonEqual = container.find('#operator-equals');

    button1.simulate('click');
    buttonAdd.simulate('click');
    button4.simulate('click');
    buttonEqual.simulate('click');
    buttonSubtract.simulate('click');
    button5.simulate('click');
    buttonEqual.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('0'); 
  })
})

//calculator.operatorClick() - chain multiple operations together
// calculator.clearClick() - clear the running total without affecting the calculation