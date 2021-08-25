/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
    }
    interface SpButton {
        "kind": string;
        "onButtonClick": any;
        "text": string;
    }
    interface SpHeaderBanner {
    }
    interface SpLayoutWrapper {
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLSpButtonElement extends Components.SpButton, HTMLStencilElement {
    }
    var HTMLSpButtonElement: {
        prototype: HTMLSpButtonElement;
        new (): HTMLSpButtonElement;
    };
    interface HTMLSpHeaderBannerElement extends Components.SpHeaderBanner, HTMLStencilElement {
    }
    var HTMLSpHeaderBannerElement: {
        prototype: HTMLSpHeaderBannerElement;
        new (): HTMLSpHeaderBannerElement;
    };
    interface HTMLSpLayoutWrapperElement extends Components.SpLayoutWrapper, HTMLStencilElement {
    }
    var HTMLSpLayoutWrapperElement: {
        prototype: HTMLSpLayoutWrapperElement;
        new (): HTMLSpLayoutWrapperElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "sp-button": HTMLSpButtonElement;
        "sp-header-banner": HTMLSpHeaderBannerElement;
        "sp-layout-wrapper": HTMLSpLayoutWrapperElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
    }
    interface SpButton {
        "kind"?: string;
        "onButtonClick"?: any;
        "text"?: string;
    }
    interface SpHeaderBanner {
    }
    interface SpLayoutWrapper {
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "sp-button": SpButton;
        "sp-header-banner": SpHeaderBanner;
        "sp-layout-wrapper": SpLayoutWrapper;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "sp-button": LocalJSX.SpButton & JSXBase.HTMLAttributes<HTMLSpButtonElement>;
            "sp-header-banner": LocalJSX.SpHeaderBanner & JSXBase.HTMLAttributes<HTMLSpHeaderBannerElement>;
            "sp-layout-wrapper": LocalJSX.SpLayoutWrapper & JSXBase.HTMLAttributes<HTMLSpLayoutWrapperElement>;
        }
    }
}
