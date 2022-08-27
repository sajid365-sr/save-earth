

let tk = document.querySelectorAll('.tkAmount>button>h2');
let input = document.getElementById('donateInput');

for(let keys of tk){
    keys.addEventListener('click',function(){
        let amntValue = keys.innerText;
     input.value = amntValue;
    
        
        })
}

let btn = document.getElementById('secondBtn');

btn.addEventListener('click',function(){
    window.open('https://sajid365-sr.github.io/developer-portfolio/','payment','top=100,left=400,height=400px,width=500px');
})