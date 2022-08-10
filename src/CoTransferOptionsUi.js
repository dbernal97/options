import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import '@bbva-web-components/bbva-web-form-radio-button/bbva-web-form-radio-button';
import '@bbva-web-components/bbva-web-link/bbva-web-link';
import '@bbva-web-components/bbva-web-button-default/bbva-web-button-default';
import '@bbva-web-components/bbva-web-divider/bbva-web-divider';
import styles from './CoTransferOptionsUi-styles.js';
import '@bbva-web-components/bbva-web-template-modal/bbva-web-template-modal';
import '@bbva-web-components/bbva-web-button-multistep-back/bbva-web-button-multistep-back.js';
import '@bbva-web-components/bbva-web-header-multistep/bbva-web-header-multistep.js';
import '@bbva-web-components/bbva-web-progress-multistep-bar/bbva-web-progress-multistep-bar.js';
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<co-transfer-options-ui></co-transfer-options-ui>
```

##styling-doc

@customElement co-transfer-options-ui
*/
export class CoTransferOptionsUi extends LitElement {
  static get is() {
    return 'co-transfer-options-ui';
  }

  // Declare properties
  static get properties() {
    return {
      name: { type: String, },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.name = 'Cells';
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('co-transfer-options-ui-shared-styles')
    ];
  }

  _comisionSection(){
    return html`
      <div id="comision">
        <table>
          <tr>
            <td>Comision:</td>
            <td>Sin costo 😉</td>
          </tr>
        </table>
      </div>
    `
  }

  _modalSection(){
    return html`
    <bbva-web-template-modal size="s" heading="Modal title" description="Subtitle" button="Button Active" link="Type Link" secondary-link="Download" secondary-link-icon="bbva:download" veil-close="">
    
    <bbva-web-button-default id="continue-btn">Entendido</bbva-web-button-default>
    </bbva-web-template-modal>
    `
  }

  _showModal(){
    return html`
      <script type="module">
        const modal = document.querySelector('bbva-web-template-modal');
        const btn = document.querySelector('.btn');
        btn.addEventListener('click', () => {
          modal.open();
        });
      </script>
    `
  }

  _optionsSection(){
    return html`
        <div class="transfer-option-list">
          <p id="num-screen">2 de 3</p>
          <h2>Para transferir, elige una de estas opciones</h2>
          <p>Tienes estas alternativas disponibles para realizar tu transferencia</p>
          <div class="card-option">
            <bbva-web-form-radio-button name="options" value="1"></bbva-web-form-radio-button>
            <p class="title-option">Envía por BBVA</p>
            <p>Este contacto también tiene cuenta en BBVA. 
            Envío directo y sin necesidad de aceptar la transferencia, no afecta tu cupo Transfiya.</p>
          </div>
          <div class="card-option">
            <bbva-web-form-radio-button name="options" value="1"></bbva-web-form-radio-button>
            <p class="title-option">Envía por TransfiYa</p>
            <p>Envía a otros bancos un monto que no supere $1.250.000, hasta en 15 transacciones diarias. El destinatario deberá aceptar la transferencia en las próximas 24 horas.</p>
            <bbva-web-link href="https://www.bbva.es" class="btn" click="${this._showModal()}">¿Qué es TransfiYa?</bbva-web-link>
          </div>  
          <bbva-web-button-default id="continue-btn">Continuar</bbva-web-button-default>
        </div>`
  }

  _summarySection(){
    return html`
      <div class="transfer-summary">
        <p class="title-summary">RESUMEN DE LA TRANSFERENCIA</p>
        <bbva-web-divider></bbva-web-divider>
        <section>
          <table class="values-table">
            <tr>
              <td class="title-summary">VALOR A TRANSFERIR</td>
              <td><bbva-web-link href="#" target="_blank">Editar</bbva-web-link></td>
            </tr>
          </table>
          <p class="amount-change">$250.000,00</p>

          <p class="title-summary">PRODUCTO DESTINO</p>
          <p>Número de celular</p>
          <p>301 513 4333</p>
          
          <bbva-web-divider></bbva-web-divider>
          <br>
          <p class="title-summary">CUENTA DE ORIGEN</p>
          <table class="values-table">
            <tr>
              <td class="title-summary">Ahorros</td>

              <td class="amount-change">$650.000,00</td>
            </tr>
            <tr>
              <td>*1234</td>
              <td class="text-lgh-big">Disponible</td>
            </tr>
          </table>
          <p class="text-lgh">Cuenta exenta de GMF</p>
          <bbva-web-divider></bbva-web-divider>

          <p class="title-summary">TIPO DE TRANSFERENCIA</p>
          <p class="text-lgh-big">A celulares</p>
        </section>
        ${this._comisionSection()}
      </div>
    `
  }

  _headerSection(){
    return html`
    <div class="header">
        <div class="zone">
          <bbva-web-header-multistep block-title="Transfiere y recibe" id="header-title" closeLabel="Salir">
          </bbva-web-header-multistep>
          <bbva-web-progress-multistep-bar current="3" max="5"></bbva-web-progress-multistep-bar>
          <section>
            <bbva-web-button-multistep-back text="Anterior"></bbva-web-button-multistep-back>
          </section>
        </div>
      </div>
    `
  }

  // Define a template
  render() {
    return html`
      ${this._headerSection()}
      <div class="main-container">
        ${this._optionsSection()}
        ${this._summarySection()}
      </div>
    `;
  }
}
