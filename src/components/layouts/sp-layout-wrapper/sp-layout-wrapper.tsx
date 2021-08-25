import { Component, h } from '@stencil/core';

@Component({
  tag: 'sp-layout-wrapper',
  styleUrl: 'sp-layout-wrapper.scss',
  shadow: true,
})
export class SpLayoutWrapper {

  render() {
    return (
      <div class="layout-wrapper">
        <slot />
      </div>
    );
  }

}
