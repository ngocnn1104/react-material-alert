import React from 'react';
import { render } from '@testing-library/react';
import MaterialAlert from './index';

describe('MaterialAlert', () => {
  const { container, findAllByText } = render(
    <MaterialAlert text='This is alert' type='success' />
  );

  it('renders the alert component', async () => {
    expect(container.getElementsByClassName('material-alert').length).toBe(1);
    expect(container.getElementsByClassName('success-icon').length).toBe(1);

    const alertText = await findAllByText(/This is alert/);
    expect(alertText.length).toBeTruthy();
  });
});
