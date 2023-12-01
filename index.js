
  const url = "https://www.themealdb.com/api/json/v1/1/random.php"

  fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    console.log(Object.values(data.meals[0]));
    document.querySelector('#meal-name').innerText = data.meals[0].strMeal;
    document.querySelector('#meal-category').innerText = data.meals[0].strCategory;
    document.querySelector('img').src = data.meals[0].strMealThumb;
    document.querySelector('a').href = data.meals[0].strSource;
    
    let mealsArr = Object.values(data.meals[0])
    for(let i = 29; i <= 48; i++) {
      const li = document.createElement('li');
      li.textContent = mealsArr[i];
      document.querySelector('#measurements').appendChild(li);
    }
    for(let i = 9; i <= 28; i++) {
      const li = document.createElement('li');
      li.textContent = mealsArr[i];
      document.querySelector('#ingredients').appendChild(li);
    }

    document.querySelector('#directions').innerText = data.meals[0].strInstructions

  })
  .catch(err => {
      console.log(`error ${err}`)
  });

  // data.subclasses.forEach(obj => {
  //   console.log(obj.name)
  //   const li = document.createElement('li');
  //   li.textContent = obj.name;
  //   document.querySelector('ul').appendChild(li);
  // })

  // const url = "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"

  // fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")
  // .then(res => res.json()) // parse response as JSON
  // .then(data => {
  //   console.log(data)
    
  // })
  // .catch(err => {
  //     console.log(`error ${err}`)
  // });
