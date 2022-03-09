import { fieldParty, fieldNameShortCompany, fieldNamFullCompany, fieldInnKpp, fieldAdress } from './const.js';

export default (parent, child, json) => {
   json.suggestions.forEach(suggestion => {
      let   item = parent.querySelector(".form-search-suggestion__item").cloneNode(false);
            item.textContent = suggestion.value;

            child.appendChild(item);
            item.addEventListener("click", () => {

               let   data = suggestion.data,
                     party = suggestion.value,
                     companyShortName = data.name.short_with_opf,
                     companyFullName = data.name.full_with_opf,
                     innKpp = `${data.inn} / ${data.kpp}`,
                     adress = data.address.data.qc == "0" ? `${data.address.data.postal_code} ${data.address.value}` : data.address.data.source;

               fieldParty.value = party;
               fieldNameShortCompany.value = companyShortName;
               fieldNamFullCompany.value = companyFullName;
               fieldInnKpp.value = innKpp;
               fieldAdress.value = adress;

               child.remove();
            })
   })
}
