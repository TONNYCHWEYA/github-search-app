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
  <img src="${user.avatar_url}"> 
  <a href="${user.html_url}">Profile link</a>
  `
 li.addEventListener('click', (event) => {
   const githubName =user.login
   getRepo(githubName)
 })
  ul.appendChild(li)
  
}

const ulRepo = document.getElementById("repos-list")
function getRepo(githubName){
  fetch(`https://api.github.com/users/${githubName}/repos`)
  .then(res => res.json())
  .then(data => {
   
    data.forEach(repo => {
      const li = document.createElement("li")
      li.innerHTML=`
      <h2>Repo Name: ${repo.full_name}</h2>
      <a href="${repo.html_url}">To the Repo</a><br>
      <a href="${repo.clone_url}">Clone the repo</a><br>
      <a href="${repo.fork_url}">Fork the repo</a>
      `
      ulRepo.appendChild(li)
      
    })
  })
}
