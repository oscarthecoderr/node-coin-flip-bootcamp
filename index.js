// did the user choose heads or tails?
// whatever the user selected, send to server through node.
// server will make a random selection against the user selection
// if server selected heads and lands on heads, user loses
// if server selected heads and lands on tails, user wins
// display who won.


console.log('javascript')
let buttons = document.querySelectorAll('.flip') 
buttons.forEach(button => button.addEventListener('click', startGame))

function startGame(e){
 const guess = e.target.innerText //e is the click, target is targeting each button.
 console.log(guess)
 
 fetch(`/api?userguess=${guess}`)
 .then(res => res.json())
 .then((data)=>{
  console.log(data)
 })
}