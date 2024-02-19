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
const allBtn = document.getElementsByClassName('add-btn');
for(const btn of allBtn){
    btn.addEventListener('click',function(e){
        count=count+1
        const seatNumber = e.target.innerText



        setInnerTex('seat',count)
    })
}

function setInnerTex(id,value){
    document.getElementById(id).innerText = value; 
}