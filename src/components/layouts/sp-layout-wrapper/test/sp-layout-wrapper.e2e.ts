import { newE2EPage } from '@stencil/core/testing';

describe('sp-layout-wrapper', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sp-layout-wrapper></sp-layout-wrapper>');

    const element = await page.find('sp-layout-wrapper');
    expect(element).toHaveClass('hydrated');
  });
});
