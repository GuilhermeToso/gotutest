import { render } from '@testing-library/react';

import MyMessage from './my-message';

describe('MyMessage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyMessage />);
    expect(baseElement).toBeTruthy();
  });
});
