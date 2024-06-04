/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const pronouns = ["my", "the", "our"];
  const adjs = ["fuzzy", "obsolete", "wretched"];
  const nouns = ["coder", "racoon", "cat"];

  const domains = [];

  for (const p of pronouns) {
    for (const a of adjs) {
      for (const n of nouns) {
        const d = p + a + n + ".com";
        domains.push(d);
      }
    }
  }

  console.log(domains);
  const listItems = domains.join("<br />");
  document.querySelector("div").innerHTML = listItems;
};
