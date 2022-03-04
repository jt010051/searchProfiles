const result = document.getElementById('result');

const filter = document.getElementById('filter');
const listItems =[]
getData()
async function getData(){
const {results} = await fetch('https://randomuser.me/api?results=50');
const data = await res.json();
//clear results
results.innerHTML='';

results.forEach(user=>{

    console.log(user)
})
}