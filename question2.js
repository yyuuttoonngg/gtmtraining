const dataConcat = data => {
  const listConcat = {
    'id': [],
    'label': []
  };
  data.list.forEach(li => {
    listConcat.id.push(li.id);
    listConcat.label.push(li.label);
  });
  return {listConcat};
}

module.exports = dataConcat;