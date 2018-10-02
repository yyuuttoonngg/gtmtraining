const updateTotal = data => {
  if(isNaN(data.total)){
    return 'data type error';
  }
  let totalNumber = Number(data.total);
  for(let i = 0; i < data.items.length; i ++){
    if(isNaN(data.items[i].value)){
      return 'data type error';
    }
    totalNumber += Number(data.items[i].value);
  }
  data.total = totalNumber.toFixed(2);
  return data;
}

module.exports = updateTotal;