import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'sp-header-banner',
  styleUrl: 'sp-header-banner.scss',
  shadow: true,
})
export class SpHeaderBanner {
  @State() open: boolean = false;

  render() {
    return (
      <div class="header-banner">
        {/* {this.open ? "On" : "Off"} */}
        <h1><span class="heading-bold">Stencil.js</span>  |  Props, State and basic Events</h1>
        <sp-button text="This is a Primary Button" kind="primary" />
        <sp-button text="Secondary Button" kind="secondary" />
      </div>
    );
  }

}
