import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sp-button',
  styleUrl: 'sp-button.scss',
  shadow: true,
})
export class SpButton {

  @Prop() text:string;

  @Prop() kind:string;

  render() {
    return (
      <a href="https://alanbrown.design" target="_blank" class={this.kind === "primary" ? "btn-primary" : "btn"}>
        { this.text || "Alan's Button" }
      </a>
    );
  }

}
