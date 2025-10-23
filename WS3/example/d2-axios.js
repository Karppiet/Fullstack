const axios = require("axios");
(async () => {
  try {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    console.log(data);
  } catch (e) {
    console.error(e.message);
  }
})();