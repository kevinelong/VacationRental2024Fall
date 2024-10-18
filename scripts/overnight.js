document.addEventListener("DOMContentLoaded", () => {
    const overnightForm = document.getElementById("overnightForm");
    const when = document.getElementById("when");
    const output = document.getElementById("output");
    overnightForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const nights = Number(document.getElementById("nights").value);
        const room = document.querySelector('input[name="room"]:checked').value;
        const checkInDate = new Date(when.value);
        const month = checkInDate.getMonth();
        const isPeak = month >= 5 && month <= 7;
        let rate = 0;
        if(isPeak){   
            if("suite" === room){
                rate = 350
            }else{
                rate = 250
            }
        }else{
            if("suite" === room){
                rate = 210
            }else{
                rate = 150
            }
        }
        let subtotal = nights * rate;
        let tax = 0.12 * subtotal;
        let total = tax + subtotal;
        output.innerText = `SUBTOTAL: ${subtotal}\nTAX: ${tax}\nTOTAL: ${total}. `;
    });

});//end loaded

// 2
// Room Type
// Max Occupancy
// Jun
// -
// Aug
// Per Night
// Rest of Year Rates
// Per Night
// Queen
// 5 (inc rollaway)
// 250.00
// 150.00
// King
// 2
// 250.00
// 1
// 50
// .00
// 2
// -
// Bedroom Suite
// 6 (inc sleeper sofa)
// 350.00
// 210.00