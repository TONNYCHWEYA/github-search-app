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
    const usersArray = data.items
    usersArray.forEach(user => {
      console.log(user)
    })
  })
}