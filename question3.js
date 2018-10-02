const makeHtml = data => {
  let ul = [];
  for(let i = 0 ; i < data.length; i++){
    let li = `<li id="${data[i].id}">${data[i].label}</li>`;
    if(!data[i].items){
      ul.push(li);     
    } else {     
      ul.push(li + makeHtml(data[i].items));
    }
  }
  return `<ul>${ul.join("")}</ul>`;
}

module.exports = makeHtml;