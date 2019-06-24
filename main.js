class ProfileCard extends HTMLElement {
  constructor() {
    super();
    this.firstName = "Sunny";
    this.lastName = "Vakil";
    this.fullName = "Sunny Vakil";
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
    <style>

    :host {
        padding: 3px;
        background: #f5f5f1;
        text-align: center;
        width: 25%;
        box-sizing: border-box;
        display:inline-block;
      }
    h1{
        color: #221f1f;
    }

    img{
        border-radius : 50%;
    }
    
    </style>
      <h1>${this.fullName}</h1>
      <img src="http://source.unsplash.com/random/100x100" alt="" >
      `;
  }
}

customElements.define("profile-card", ProfileCard);
// Without a shadow dom

// class MyComponent extends HTMLElement {
//   connectedCallback() {
//     this.innerHTML = `<h1>Hello world</h1>`;
//   }
// }

// customElements.define("my-component", MyComponent);
