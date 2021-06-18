//alert("hej")

document.addEventListener("DOMContentLoaded",() => {
 
    let a ;
    let b ;
    let c ;
    let d ;
    let e ;

   // let summa = a + b;

    //console.log(summa);



        document.querySelector("#summera")?.addEventListener("click",() => {

            a = (document.querySelector("#a") as HTMLInputElement).value;
            b = (document.querySelector("#b") as HTMLInputElement).value;
            c = (document.querySelector("#c") as HTMLInputElement).value;
            d = (document.querySelector("#d") as HTMLInputElement).value;
            e = (document.querySelector("#e") as HTMLInputElement).value;

            let summa = (parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d)) / parseInt(e);
            
            let svar = (document.querySelector("#summa")as HTMLElement).textContent = summa.toString();

        }
        );



});