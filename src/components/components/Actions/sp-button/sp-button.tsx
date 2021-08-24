import { Component, h } from '@stencil/core';

@Component({
  tag: 'sp-button',
  styleUrl: 'sp-button.scss',
  shadow: true,
})
export class SpButton {

  render() {
    return (
      <a href="https://alanbrown.design" target="_blank">
        Alans Button!
      </a>
    );
  }

}
