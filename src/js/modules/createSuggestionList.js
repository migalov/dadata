import updateSuggestionList from "./updateSuggestionList";
import clearSuggestionList from "./clearSuggestionList";
import clearForm from "./clearForm";

export default (element) => {
   let value = element.target.value;
   value.length > 1 ? updateSuggestionList(element.target.value) : "";
   value.length == 0 ? (clearSuggestionList(),clearForm()) : "";
}