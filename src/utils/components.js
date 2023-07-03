class FlagIcon extends HTMLElement {
    constructor() {
        super()

        this.attachShadow( {mode: "open"} )

        const span = document.createElement('span')
        span.innerText = 'Oh yeah boy'
        this.shadowRoot.appendChild(span)
                
    }
}

customElements.define('flag-icon', FlagIcon)