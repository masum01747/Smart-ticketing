
function play(){
    hideElementById('pBahan');
    showElementById('ticketSeat');
}


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