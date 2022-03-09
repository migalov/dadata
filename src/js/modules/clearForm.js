import { form } from "./const"

export default () => {
   form.querySelectorAll("input[type=text]").forEach(element => element.value = "")
}