import { URL, template, fieldParty } from "./const";
import clearSuggestionList from "./clearSuggestionList";
import rendering from "./rendering.js";
import query from './options.js'

export default (q) => {
   clearSuggestionList();

   let   clone = template.content.cloneNode(true),
         list = clone.querySelector(".form-search-suggestion").cloneNode(false);

   fetch(URL, query(q))
      .then((response) => {
         if (!response.ok) {
            throw new Error(`HTTP ошибка, статус = ${response.status}`);
         }
         return response.json();
      })
      .then(json => rendering(clone, list, json));

   fieldParty.insertAdjacentElement('afterend', list)
}