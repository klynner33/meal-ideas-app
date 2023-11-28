
  // const url = "https://www.themealdb.com/api/json/v1/1/random.php"

  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    
  })
  .catch(err => {
      console.log(`error ${err}`)
  });

  // const url = "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"

  fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    
  })
  .catch(err => {
      console.log(`error ${err}`)
  });
