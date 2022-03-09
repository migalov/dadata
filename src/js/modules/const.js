const URL = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party",
      TOKEN = "aa084f293d61df62f88761a9cc219271468fe748";

const template = document.querySelector("template#suggestion-list"),
      form = document.querySelector(".form-search"),
      fieldParty = form.querySelector("[name=party]"),
      fieldNameShortCompany = form.querySelector("[name=name_short]"),
      fieldNamFullCompany = form.querySelector("[name=name_full]"),
      fieldInnKpp = form.querySelector("[name=inn_kpp]"),
      fieldAdress = form.querySelector("[name=adress]"),
      buttonFormClear = form.querySelector(".form-search__clear");

export {
   URL, TOKEN,
   template,
   form, fieldParty, fieldNameShortCompany, fieldNamFullCompany, fieldInnKpp, fieldAdress, buttonFormClear
};