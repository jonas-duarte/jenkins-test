const axios = require("axios")

console.log("-------------running----------")

axios.get("https://raw.githubusercontent.com/jonas-duarte/jenkins-test/master/package.json")
    .then(({ data }) => console.log(data))