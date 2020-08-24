import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { Badge, BadgeProps, badgeColor, badgeBackground } from '../index';

const testonClick = jest.fn();
const testThemeFunc = (status: BadgeProps['status']) => {
  cleanup();
  let wrapper = render(<Badge status={status} value="111"></Badge>);
  const text = wrapper.getByText('111');
  expect(text).toHaveStyle(`color: ${badgeColor[status!]}`);
  expect(text).toHaveStyle(`background: ${badgeBackground[status!]}`);
};

describe('test Badge component', () => {
  it('should render default style', () => {
    let wrapper = render(<Badge value="111"></Badge>);
    expect(wrapper).toMatchSnapshot();
    const text = wrapper.getByText('111');
    expect(text).toHaveStyle(`color: ${badgeColor.neutral}`);
    expect(text).toHaveStyle(`background: ${badgeBackground.neutral}`);
  });
  it('should render correct  attr', () => {
    let wrapper = render(
      <Badge className="testclass" onClick={testonClick} value="attr"></Badge>
    );
    const text = wrapper.getByText('attr');
    expect(text.className.includes('testclass')).toBeTruthy();
    fireEvent.click(text);
    expect(testonClick).toHaveBeenCalled();
  });
  it('should rende correct theme', () => {
    testThemeFunc('positive');
    testThemeFunc('warning');
    testThemeFunc('negative');
    testThemeFunc('neutral');
    testThemeFunc('error');
  });
});
