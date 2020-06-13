findInString = (search, forVal) => search.toLowerCase().indexOf(forVal) >= 0;

const val = findInString('coward', 'coward');
console.log(val);

console.log('coward'.indexOf('w')>=0);