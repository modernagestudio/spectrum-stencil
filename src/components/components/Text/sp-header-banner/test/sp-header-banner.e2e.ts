import { newE2EPage } from '@stencil/core/testing';

describe('sp-header-banner', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sp-header-banner></sp-header-banner>');

    const element = await page.find('sp-header-banner');
    expect(element).toHaveClass('hydrated');
  });
});
