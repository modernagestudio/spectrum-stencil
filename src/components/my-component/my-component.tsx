import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true,
})
export class MyComponent {

  // @Listen('buttonClickActive')
  // buttonClickActiveHandler(){
  //   alert("Called")
  // }

  @State() showContent: boolean;



  render() {
    const Content = (
      <div class="reveal-section">
        <h1>The content</h1>
        <p>Ullamco laboris nisi ut aliquid ex ea commodi consequat. Paullum deliquit, ponderibus modulisque suis ratio utitur. Cum sociis natoque penatibus et magnis dis parturient. Quisque ut dolor gravida, placerat libero vel, euismod. Quo usque tandem abutere, Catilina, patientia nostra? Quid securi etiam tamquam eu fugiat nulla pariatur.
  Gallia est omnis divisa in partes tres, quarum. Curabitur blandit tempus ardua ridiculus sed magna. Donec sed odio operae, eu vulputate felis rhoncus. Unam incolunt Belgae, aliam Aquitani, tertiam. Cras mattis iudicium purus sit amet fermentum.</p>
      </div>
    )

    return (
      <div class="component-wrapper">
        <sp-layout-wrapper>
          <sp-header-banner />
        </sp-layout-wrapper>
        <sp-layout-wrapper>
          <div class="second-section">
            <h3>Conditional Rendering:</h3>
            <sp-button text={!this.showContent ? "Make Content Appear" : "Hide the content"} onButtonClick={()=>{this.showContent = !this.showContent}} />
            <div>
              {this.showContent ? Content : null}
            </div>
          </div>
        </sp-layout-wrapper>

      </div>
    );
  }
}
