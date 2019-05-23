import fetch from 'node-fetch';

// fetch('https://api.github.com/users/github')
//   .then(response => response.json())
//   .then(myJson => 
//     fetch(myJson["followers_url"])
//       .then(response => response.json())
//       .then(myJson => console.log(myJson))
//   )
  
fetch('https://api.github.com/users/github')
  .then(response => response.json())
  .then(myJson => fetch(myJson["followers_url"]))
  .then(response => response.json())
  .then(myJson => console.log(myJson))

