import { newE2EPage } from '@stencil/core/testing';

describe('sp-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sp-button></sp-button>');

    const element = await page.find('sp-button');
    expect(element).toHaveClass('hydrated');
  });
});
