"use strict";
import { LitElement, html } from "lit-element";

class HTDate extends LitElement {
  render() {
    const { date } = this;
    return html`
    ${date}
`;
  }

  static get properties() {
    return {
      data: { type: Object },
      date: { type: String }
    };
  }

  set data(timestamp) {
    if (timestamp === undefined) return;
    if (timestamp.toDate === undefined) {
      let seconds = timestamp.seconds || timestamp._seconds;
      timestamp = new Date(+`${seconds}000`);
    } else {
      timestamp = timestamp.toDate();
    }
    this.date = timestamp.toLocaleString("ru", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }
}

customElements.define("ht-date", HTDate);
