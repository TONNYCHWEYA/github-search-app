const form = document.getElementById("github-form")
form.addEventListener("submit", handleSubmit)
function handleSubmit(event){
  event.preventDefault()
  const inputValue = event.target.search.value
 
  getUser(inputValue)
}
function getUser(inputValue){
  fetch(`https://api.github.com/search/users?q=${inputValue}`)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    const usersArray = data.items
    usersArray.forEach(user => {
      createLi(user)
    })
  })
}


const ul = document.getElementById("user-list")
function createLi(user){
  
  const li = document.createElement("li")
  li.innerHTML =`
  <p>User_Name: ${user.login}</p>
  <p>Avatar_url: ${user.avatar_url}</p>
  <p>Profile link: ${user.html_url}</p>
  `
 li.addEventListener('click', (event) => {
   const githubName =user.login
   getRepo(githubName)
 })
  ul.appendChild(li)
  
}

function getRepo(githubName){
  fetch(`https://api.github.com/users/${githubName}/repos`)
  .then(res => res.json())
  .then(data => console.log(data))
}
