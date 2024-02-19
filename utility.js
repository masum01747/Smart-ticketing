function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')

    
}
function addBackGroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-green-800');
    // adding seat
    const currentSeat  = document.getElementById('seat');
 const currentSeatText = currentSeat.innerText;
 const currentSeatelement =parseInt(currentSeatText);
 const newSeat = currentSeatelement+1;
 currentSeat.innerText = newSeat
//  seat adjustment
const currentSeatcapacity = document.getElementById('totalSeat');
const currentseattext = currentSeatcapacity.innerText;
const currentTotalSeat = parseInt(currentseattext);
const newTotalSrat = currentTotalSeat -1;
currentSeatcapacity.innerText = newTotalSrat

}