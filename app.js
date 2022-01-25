const quote = document.getElementById('quote')
const author = document.getElementById('author')
const btn = document.getElementById('btn')
const url = 'https://api.quotable.io/random'

async function getData(){
    const req = await fetch('https://api.quotable.io/random')
    const res = await req.json()
    if(req.ok){
        quote.textContent = res.content;
        author.textContent = `- ${res.author}`;
    }
}
getData()
btn.addEventListener("click",getData);