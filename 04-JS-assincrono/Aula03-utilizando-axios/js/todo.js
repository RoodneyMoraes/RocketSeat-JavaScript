
// USANDO A BIBLIOTECA AXIOS PARA RETORNAR VALORES DA API
axios.get("https://api.github.com/users/roodneymoraes")
    .then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.warn(error);
});


