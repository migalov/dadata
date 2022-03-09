import { fieldParty, buttonFormClear } from "./modules/const.js";
import clearForm from "./modules/clearForm.js";
import createSuggestionList from './modules/createSuggestionList';

buttonFormClear.addEventListener("click", clearForm)
fieldParty.addEventListener("input", createSuggestionList);