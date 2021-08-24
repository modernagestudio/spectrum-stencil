import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true,
})
export class MyComponent {

  render() {
    return (
      <div class="component-wrapper">
        <sp-layout-wrapper>
          <sp-header-banner />
        </sp-layout-wrapper>
      </div>
    );
  }
}
