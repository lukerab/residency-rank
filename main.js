function fetchCategory() {
  let categories = [];

  for(let i=0, i<8, i++){
    let cat = `cat${i}`;
    categories.push(document.getElementById(cat).value);
  }
}
