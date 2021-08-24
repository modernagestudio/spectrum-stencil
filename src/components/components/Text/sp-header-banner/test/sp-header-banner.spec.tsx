import { newSpecPage } from '@stencil/core/testing';
import { SpHeaderBanner } from '../sp-header-banner';

describe('sp-header-banner', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SpHeaderBanner],
      html: `<sp-header-banner></sp-header-banner>`,
    });
    expect(page.root).toEqualHtml(`
      <sp-header-banner>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sp-header-banner>
    `);
  });
});
