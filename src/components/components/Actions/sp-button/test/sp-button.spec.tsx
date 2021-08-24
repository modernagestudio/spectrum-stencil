import { newSpecPage } from '@stencil/core/testing';
import { SpButton } from '../sp-button';

describe('sp-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SpButton],
      html: `<sp-button></sp-button>`,
    });
    expect(page.root).toEqualHtml(`
      <sp-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sp-button>
    `);
  });
});
