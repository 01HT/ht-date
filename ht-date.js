"use strict";
import { LitElement, html } from "@polymer/lit-element";

class HTDate extends LitElement {
  render() {
    const { date } = this;
    return html`
    ${date}
`;
  }

  static get is() {
    return "ht-date";
  }

  static get properties() {
    return {
      data: { type: String },
      date: { type: String }
    };
  }

  set data(timestamp) {
    if (timestamp === undefined) return;
    this.date = timestamp.toDate().toLocaleString("ru", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }
}

customElements.define(HTDate.is, HTDate);
