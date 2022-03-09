import { TOKEN } from "./const.js"

export default (query) => {
   return {
      method: "POST",
      mode: "cors",
      headers: {
         "Content-Type": "application/json",
         "Accept": "application/json",
         "Authorization": "Token " + TOKEN
      },
      body: JSON.stringify({ query: query })
   } 
}