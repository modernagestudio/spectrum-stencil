import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sp-header-banner',
  styleUrl: 'sp-header-banner.scss',
  shadow: true,
})
export class SpHeaderBanner {

  render() {
    return (
      <Host>
        <h1>This is my first attempt at <span class="heading-bold">Stencil.JS</span></h1>
        <sp-button text="This is a Primary Button" kind="primary" />
        <sp-button text="Secondary Button" kind="secondary" />
        <sp-button text="No 'Kind' Prop" />
      </Host>
    );
  }

}
