import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import ListView from './list-view';
import 'element-internals-polyfill';

test('renders ListView component', () => {
  const wrapper = render(<ListView />);
  expect(wrapper).toBeTruthy();
});