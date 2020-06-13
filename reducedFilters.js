let 
	  data = [ 
			  { name: 'myFile.txt', category: 'Files'}
			, { name: 'Backup', category: 'Folders'}
			, { name: 'Main Hard Drive', category: 'Disks'}
			, { name: 'Backup Hard Drive', category: 'Disks'}
			, { name: 'Thumb Drive', category: 'Disks'}
		]
  , filteredData = []
	, filters = []
	, nameFilterValue = 'Hard'.toLowerCase()
  , categoryFilterValue = 'Disks'.toLowerCase()
  , findInString = 
      (search, forVal) => search.toLowerCase().indexOf(forVal) >= 0
  ;

if (nameFilterValue) {
  filters.push(
    item => findInString(item.name, nameFilterValue)
  );
}
console.log(filters);
if (categoryFilterValue) {
  filters.push(
    item => findInString(item.category, categoryFilterValue)
  );
}
console.log(filters);
filteredData = (!filters.length) ? data // shortcut if no filters
  : filters.reduce(
      (results, filter) => results.filter(filter)
    , data
    );
console.log(filteredData);

// let resultsDiv = document.getElementById('results');
// if (resultsDiv) {
//   if (!filteredData.length) {
//     resultsDiv.innerHTML = 'No matching items!';
//   } else {
//     filteredData.forEach(item => {
//       let resultDiv = document.createElement('div');
//       resultDiv.innerHTML = 
//         `Category: ${item.category}, Name: ${item.name}`;
//       resultsDiv.appendChild(resultDiv);
//     });
//   }
// }