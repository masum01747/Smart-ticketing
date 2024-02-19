
function play(){
    
    showElementById('ticketSeat');
    hideElementById('pBahan');


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
        e.target.disabled = true;
        const  targetPlace = document.getElementById('selectedPlace');
        document.getElementById('economy').style.display = 'none'
        const div = document.createElement('div')
        const p = document.createElement('P');
        p.innerText = seatNumber
        const p2 = document.createElement('P');
        p2.innerText = 'Economy'
        const p3 = document.createElement('P');
        p3.innerText = parseInt('550');
        div.appendChild(p);
        div.appendChild(p2);
        div.appendChild(p3);
        targetPlace.appendChild(div);
        // if(selectedPlace<4){
        //     count=count+1
        // }
        // else{
        //     alert('Please select only 4 seats');
        // }
        /*const targetPlace = document.getElementById('selectedPlace');
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
        targetPlace.appendChild(li);*/
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

 const btnApply = document.getElementById('btnApply');
 btnApply.addEventListener('click',function(){
    let couponinput = document.getElementById('couponinput').value;
    if(couponinput === "NEW15"|| couponinput === "Couple 20"){
        document.getElementById('couponinput').classList.add('hidden')
        btnApply.classList.add('hidden')
        
    }
    else{
        alert('Invaluid coupon')
    }
       
 })

// btnApply.addEventListener('click',function(){
//     let couponinput = document.getElementById('couponinput').value;
//     if(couponinput === "NEW15")|| couponinput === "Couple 20"){

//     }
// }
function setInnerTex(id,value){
    document.getElementById(id).innerText = value; 
}