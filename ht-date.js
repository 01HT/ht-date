"use strict";
import { LitElement, html } from "@polymer/lit-element";

class HTDate extends LitElement {
  _render({ date }) {
    return html`
    ${date}
`;
  }

  static get is() {
    return "ht-date";
  }

  static get properties() {
    return {
      data: String,
      date: String
    };
  }

  set data(timestamp) {
    this.date = timestamp.toDate().toLocaleString("ru", {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}

customElements.define(HTDate.is, HTDate);
