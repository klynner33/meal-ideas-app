
  const url = "https://www.themealdb.com/api/json/v1/1/random.php"

  fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    document.querySelector('#meal-name').innerText = data.meals[0].strMeal;
    document.querySelector('#meal-category').innerText = data.meals[0].strCategory;
    document.querySelector('img').src = data.meals[0].strMealThumb;
  })
  .catch(err => {
      console.log(`error ${err}`)
  });

  // const url = "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"

  // fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")
  // .then(res => res.json()) // parse response as JSON
  // .then(data => {
  //   console.log(data)
    
  // })
  // .catch(err => {
  //     console.log(`error ${err}`)
  // });
