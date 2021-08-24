import { newSpecPage } from '@stencil/core/testing';
import { SpLayoutWrapper } from '../sp-layout-wrapper';

describe('sp-layout-wrapper', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SpLayoutWrapper],
      html: `<sp-layout-wrapper></sp-layout-wrapper>`,
    });
    expect(page.root).toEqualHtml(`
      <sp-layout-wrapper>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sp-layout-wrapper>
    `);
  });
});
