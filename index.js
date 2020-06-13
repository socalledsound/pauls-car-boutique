window.onload = function(){

const data = [
    {
        id:0,
        // img:'es-fsport-card1.jpg',
        img:'bg-img.jpg',
        title:'2020 Lexus ES 350 F Sport',
        msrp:'$50,000',
        ptext1:'Engine: 3.5L V6',
        ptext2:'Transmission: 10 Speed Auto',
        ptext3:'Stock#: 10101',
        ptext4:'Color: Ultrasonic Blue Mica',
        ptext5:'Drivetrain: FWD',
        display: 'inline',
        make: 'es-f-sport',
    },
    {
        id:1,
        // img:'es-350-card-white.jpg',
        img:'bg-img.jpg',
        title:'2020 ES 350',
        msrp:'$43,789',
        ptext1:'Engine: 3.5L V6',
        ptext2:'Transmission: 10 Speed Auto',
        ptext3:'Stock#: 10102',
        ptext4:'Color: Eminent White Pearl',
        ptext5:'Drivetrain: FWD',
        display: 'inline',
        make:'unknown',
    },
    {
        id:2,
        // img:'es-card-luxury.webp',
        img:'bg-img.jpg',
        title:'2020 ES 350 Luxury',
        msrp:'$51,223',
        ptext1:'Engine: 3.5L V6',
        ptext2:'Transmission: 10 Speed Auto',
        ptext3:'Stock#: 10103',
        ptext4:'Color: Nebula Grey Pearl',
        ptext5:'Drivetrain: FWD', 
        display: 'inline',
        make:'unknown'
    },
    {
        id:3,
        // img:'es-hybrid-card.jpg',
        img:'bg-img.jpg',
        title:'2020 ES 300 Hybrid',
        msrp:'$46,950',
        ptext1:'Engine: 2.5L 4L',
        ptext2:'Transmission: CVT',
        ptext3:'Stock#: 10104',
        ptext4:'Color: Silver Lining Metallic',
        ptext5:'Drivetrain: FWD',  
        display: 'inline',
        make:'unknown'
    }
];


function makeCard(obj){
    //make elements
    const target = document.querySelector('#card-div');
    const enclosingDiv = document.createElement('div');
    const rowDiv = document.createElement('div');
    const imageDiv = document.createElement('div');
    const textDiv = document.createElement('div');
    const cardBody = document.createElement('div');
    const header1 = document.createElement('h5');
    const header2 = document.createElement('h5');
    const para1 = document.createElement('p');
    const img  =document.createElement('img');
    //add classes
    enclosingDiv.className = `card mb-3 option-${obj.id}`;
    rowDiv.className = 'row no-gutters';
    imageDiv.className = 'col-md-4';
    textDiv.className = 'col-md-8';
    cardBody.className = 'card-body';
    header1.className = 'card-title';
    para1.className = 'card-text';
    img.className = 'card-img';
    //add data
    header1.innerText = obj.title;
    header2.innerText = obj.msrp;
    img.src=obj.img;
    para1.innerText = obj.ptext1;
    enclosingDiv.style.display = obj.display;
    enclosingDiv.id = obj.id;
    //
    //add elements to DOM
    cardBody.appendChild(header1);
    cardBody.appendChild(header2);
    cardBody.appendChild(para1);
    textDiv.appendChild(cardBody);
    imageDiv.appendChild(img);
    rowDiv.appendChild(imageDiv);
    rowDiv.appendChild(textDiv);
    enclosingDiv.appendChild(rowDiv);
    target.appendChild(enclosingDiv);

    return enclosingDiv
}

const divs = data.map(item=>makeCard(item));
const inputs = Array.prototype.slice.call(document.body.querySelectorAll('select'));
const filters = {
    'make': filterMake,
    'model': filterModel,
    'engine': filterEngine,
    'price': filterPrice,
};
const filterArray = [filterMake, filterModel, filterEngine, filterPrice];

// console.log(inputs);

// const values = inputs.map(input=>input.value)
// console.log(values);



const listeners = inputs.map(input=>input.addEventListener('change',(e)=>{
    // console.log(e.target.value);
    // console.log(e.target.dataset.filter);
    hideDivs();
    const values = inputs.map(input=>input.value);
    // console.log(values);
    const filterArrWithInputs = values.reduce((acc, value)=>{
        console.log(value);
        console.log(acc);
        // return acc(value)
    }, filterArray)
    // console.log(filterArrWithInputs);
    // const filters = values.map((value,i)=>{return filterArray[i]});
    // console.log(filters);
    // const filteredData = filterArray.reduce(
    //     (results, filter)=>{
    //         console.log(results);
    //         console.log(values);
    //         console.log(filter);
    //         return results.filter(filter)
    //     }
    //     , values
    // );
    // console.log(filteredData);
    if(e.target.value === 'all'){
        showAll();
    } else {
        filters[e.target.dataset.filter](e.target.value);
    }
    // filters[e.target.dataset.filter](e.target.value);

}))

function showAll(){
    divs.forEach(div=>{
        div.style.display = 'inline';
    })
}


function hideDivs(){
    divs.forEach(div=>{
        div.style.display = 'none';
    })
}


function filterMake(val){
    const choice = data.filter(item => item.make === val)
    .map(item=>item.id)
    .map(choice=>{divs[choice].style.display='inline'});
}

function filterModel(val){
    const choice = data.filter(item => item.model === val)
    .map(item=>item.id)
    .map(choice=>{divs[choice].style.display='inline'});
}

function filterEngine(val){
    const choice = data.filter(item => item.engine === val)
    .map(item=>item.id)
    .map(choice=>{divs[choice].style.display='inline'});
}

function filterPrice(val){
    // console.log(val);

    const choice = data.filter(item => parseInt(item.msrp.substring(1)) > parseInt(val))
    .map(item=>item.id)
    .map(choice=>{divs[choice].style.display='inline'});
}




};

// const choice = data.filter(item => parseInt(item.msrp.substring(1)) > 50,000)
//                 .map(item=>item.id)
//                 .map(choice=>{divs[choice].style.display='inline'});