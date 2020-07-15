class TickerTape extends HTMLElement {
    constructor() {
      super(); 
      this._shadowRoot = this.attachShadow({ mode: 'open' });
  
      // Make a new div element
      this._el = document.createElement('div')
  
      // Add this element to the shadow root
      this._shadowRoot.appendChild(this._el)
  
      // Make a the text element from HTML
      this._el.innerHTML = this.innerHTML
      this._el.style.color = '#f5806e'
      this._el.style.fontSize = '24px'
      this._el.style.margin = '20px'
    }
  
    // Lifecycle method called when this component is appended to the DOM
    connectedCallback() {
      this._timer = setInterval(() => {
        if (this._el.style.marginLeft == "") {
          this._el.style.marginLeft = "10px";
        } else if (parseInt(this._el.style.marginLeft) >= (screen.width-600)) {
          this._el.style.marginLeft = (parseInt(this._el.style.marginLeft) - 1440) + "px";
        } else {
          this._el.style.marginLeft = (parseInt(this._el.style.marginLeft) + 300) + "px";
        }   
      }, 1000)  
    }
  
  
  }
  
  customElements.define('ticker-tape', TickerTape);