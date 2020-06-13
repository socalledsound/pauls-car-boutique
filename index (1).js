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
        display: 'inline'
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
        display: 'inline'
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
        display: 'inline'
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
        display: 'inline'
    }
];

const target = document.querySelector('#card-div');
console.log(target);
const divs = data.map(item=>makeCard(item));
console.log(divs);
data.forEach(item=>console.log(item.msrp.substring(1)));
const expensive = data.filter(item => parseInt(item.msrp.substring(1)) > 50,000);
// console.log(expensive.map(item=>item.id));
divs.forEach(div=>{
    div.style.display = 'none';
})
const choices = expensive.map(item=>item.id);
console.log(choices);
choices.map(choice=>{divs[choice].style.display='inline'});




function makeCard(obj){
    //make elements
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




// <div class="card mb-3 option-1">
// <div class="row no-gutters">
//     <div class="col-md-4">
//         <img src="es-fsport-card1.jpg" width="200px" class="card-img" alt="responsive image">
//     </div>
//     <div class="col-md-8">
//         <div class="card-body">
//             <h5 class="card-title">2020 Lexus ES 350 F Sport</h5> <h5>MSRP: $50,000</h5>
//             <p class="card-text">Engine: 3.5L V6<br>
//                 Transmission: 10 Speed Auto<br>
//                 Stock#: 10101<br>
//                 Color: Ultrasonic Blue Mica<br>
//                 Drivetrain: FWD
//             </p>
//         </div>
//     </div>
// </div>
// </div>    
// <div class="card mb-3 option-2">        
// <div class="row no-gutters">    
//     <div class="col-md-4 ">
//         <img src="es-350-card-white.jpg" width="200px" class="card-img" alt="responsive image">
//     </div>
//     <div class="col-md-8">
//         <div class="card-body">
//             <h5 class="card-title">2020 Lexus ES350</h5> <h5>MSRP: $43,789</h5>
//             <p class="card-text">Engine: 3.5L V6<br>
//                 Transmission: 10 Speed Auto<br>
//                 Stock#: 10102<br>
//                 color: Eminent White Pearl<br>
//                 Drivetrain: FWD
//             </p>
//         </div>
//     </div>
// </div>
// </div>
// <div class="card mb-3 option-3">    
// <div class="row no-gutters">    
//     <div class="col-md-4 ">
//         <img src="es-card-luxury.webp" width="200px" class="card-img" alt="responsive image">
//     </div>
//     <div class="col-md-8">
//         <div class="card-body">
//             <h5 class="card-title">2020 Lexus ES350 Luxury</h5> <h5>MSRP: $51,223 </h5>
//             <p class="card-text">Engine: 3.5L V6<br>
//                 Transmission: 10 Speed Auto<br>
//                 Stock#: 10103<br>
//                 color: Nebula Grey Pearl<br>
//                 Drivetrain: FWD
//             </p>
//         </div>
//     </div>
// </div>
// </div>``