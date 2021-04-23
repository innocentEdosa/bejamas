const handleQuery = (promise, key) => {
    return promise
      .then(data => {
        return data
      })
      .catch(error => {
        console.log(error, key)
      })
  }


  export default handleQuery;
