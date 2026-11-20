
class XCenter extends HTMLElement {
    connectedCallback() {
        this.style.display = "block";
        this.style.textAlign = "center";
        this.style.padding = "20px";
        this.style.margin = "20px";
        this.style.backgroundColor = "#f0e6ff";
        this.style.border = "2px solid #411884";
        this.style.borderRadius = "10px";
    }
}

customElements.define("x-center", XCenter);
