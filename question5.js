var CSSSelector = 'input[type="email"]';

document.querySelector('.btn').addEventListener("click",handleClick);
function handleClick(){
  var input = document.querySelector('input[type="email"]').value;
  console.log(input)
}