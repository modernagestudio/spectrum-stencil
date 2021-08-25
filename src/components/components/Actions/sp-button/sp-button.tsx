import { Component, Prop, h} from '@stencil/core';

@Component({
  tag: 'sp-button',
  styleUrl: 'sp-button.scss',
  shadow: true,
})
export class SpButton {

  @Prop() text:string = "This is a button"
  @Prop() kind:string = "Primary";
  @Prop() onButtonClick;

  render() {
    return (
      <div onClick={this.onButtonClick} class={`btn ${this.kind === "primary" ? "btn-primary" : null}`}>
        { this.text || "Alan's Button" }
      </div>
    );
  }

}

