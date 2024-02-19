// function play(){
//     const pBahan= document.getElementById('pBahan');
//     pBahan.classList.add('hidden');
//     const ticket =document.getElementById('ticketSeat');
//     ticket.classList.remove('hidden')
// }
function play(){
    hideElementById('pBahan');
    showElementById('ticketSeat');
//     addBackGroundColorById('aOne')
//     addBackGroundColorById('aTwo')
//     addBackGroundColorById('aThree')
//     addBackGroundColorById('aFour')
}

    // addBackGroundColorById('aOne')
    // addBackGroundColorById('aTwo')
    // addBackGroundColorById('aThree')
    // addBackGroundColorById('aFour')





// const aOne = document.getElementById('aOne');
// aOne.addEventListener = ('click', function(){
//     aOne.style.backgroundColor='Red'
// })
// function greenColor(){
//     document.getElementById('bTwo').style.backgroundColor = 'Green'
// let totalSeat = 40
//  let remainningSeat = document.getElementById('totalSeat').innerText = totalSeat-1
// //    totalSeat -= totalSeat

//  const currentSeat  = document.getElementById('seat');
//  const currentSeatText = currentSeat.innerText;
//  const currentSeatelement =parseInt(currentSeatText);
//  const newSeat = currentSeatelement+1;
//  currentSeat.innerText = newSeat
// // seat.innerText ='1'

 

// }
// // function greenColor(){
// //     document.getElementById('bOne').style.backgroundColor = 'Green'
// // let totalSeat = 40
// //  let remainningSeat = document.getElementById('totalSeat').innerText = totalSeat-1
// // //    totalSeat -= totalSeat
// // let seat=0
// //  let addingSeat = document.getElementById('seat').innerText = seat+1
// // // seat.innerText ='1'

 

// // }
let count = 0;
let totalSeat = 40;

const allBtn = document.getElementsByClassName('add-btn');
for(const btn of allBtn){
    btn.addEventListener('click',function(e){
        count=count+1;
        totalSeat = parseInt(totalSeat)-1;
        const seatNumber = e.target.innerText
        e.target.style.backgroundColor='Green'
        e.target.disable = true;
        const targetPlace = document.getElementById('selectedPlace');
        const li = document.createElement('li');
        const p = document.createElement('P');
        p.innerText = seatNumber
        const p2 = document.createElement('P');
        p2.innerText = 'Economy'
        const p3 = document.createElement('P');
        p3.innerText = parseInt('550');
        li.appendChild(p);
        li.appendChild(p2);
        li.appendChild(p3);
        targetPlace.appendChild(li);
        const totalCost = document.getElementById('totalCost').innerText ;
        const convertedTotalcost = parseInt(totalCost);
        const convertedinitisl = parseInt(550)
        const sum = convertedTotalcost +parseInt('550')
        //  document.getElementById('totalCost').innerText = sum;
        const grandTotal = document.getElementById('grandValu').innerText;
        const grandConverted = parseInt(grandTotal);
        const sum2 = grandConverted+parseInt('550');
        document.getElementById('grandValu').innerText = sum2;


        setInnerTex('totalSeat',totalSeat)

        setInnerTex('totalCost',sum)
        setInnerTex('seat',count)
    })
}

function setInnerTex(id,value){
    document.getElementById(id).innerText = value; 
}