/* eslint-disable no-unused-vars */
import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`:host {
  display: block;
  box-sizing: border-box;
}

:host([hidden]), [hidden] {
  display: none !important;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.header #header-title {
  background-color: #072146;
}
.header section {
  text-align: center;
}

.main-container {
  padding: 2px;
}
.main-container .transfer-option-list #num-screen {
  color: #666666;
  font-style: italic;
  font-weight: bold;
}
.main-container .transfer-option-list .card-option {
  background-color: #F4F4F4;
  padding: 5px;
  margin: 10px 5px 10px 5px;
  border-radius: 5px;
  box-shadow: 0 0.5px 3px 0.2px #c5c5c5;
}
.main-container .transfer-option-list .card-option .title-option {
  color: #121212;
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 32px;
}
.main-container .transfer-option-list #continue-btn {
  margin-top: 20px;
}
.main-container .transfer-summary {
  margin-top: 10px;
  background-color: #F4F4F4;
  padding: 5px;
}
.main-container .transfer-summary .title-summary {
  color: #121212;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 24px;
}
.main-container .transfer-summary .amount-change {
  color: #121212;
  font-size: 25px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 24px;
}
.main-container .transfer-summary .values-table {
  margin-top: 10px;
  width: 100%;
}
.main-container .transfer-summary .values-table tr td {
  text-align: right;
}
.main-container .transfer-summary .values-table tr td:first-child {
  text-align: left;
}
.main-container .transfer-summary .text-lgh, .main-container .transfer-summary .text-lgh-big {
  color: #666666;
}
.main-container .transfer-summary .text-lgh {
  font-size: 12px;
}
.main-container #comision {
  background-color: #D9EFE0;
  height: 70px;
  margin-top: 20px;
  padding-top: 5px;
}
.main-container #comision table {
  padding: 5x;
  width: 100%;
}
.main-container #comision table tr td {
  color: #388D4F;
  font-style: italic;
  text-align: right;
}
.main-container #comision table tr td:first-child {
  text-align: left;
}

@media screen and (min-width: 800px) {
  .main-container {
    width: 100%;
    padding: 0px 100px;
    display: flex;
  }
  .main-container .transfer-option-list {
    width: 52%;
  }
  .main-container .transfer-option-list #num-screen {
    color: #666666;
  }
  .main-container .transfer-option-list .card-option {
    margin: 15px 0;
  }
  .main-container .transfer-option-list button {
    margin-top: 20px;
  }
  .main-container .transfer-summary {
    margin-top: 70px;
    width: 350px;
    margin-left: 80px;
    height: auto;
  }
}
`;