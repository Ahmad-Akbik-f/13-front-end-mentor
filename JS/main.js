var day = document.querySelector(".cont__input .in input[placeholder='DD']")
var month = document.querySelector(".cont__input .in input[placeholder='MM']")
var year = document.querySelector(".cont__input .in input[placeholder='YYYY']")
var Dres = document.querySelector(".cont__result p span.days")
var Mres = document.querySelector(".cont__result p span.months")
var Yres = document.querySelector(".cont__result p span.years")
var btn = document.querySelector("button")
let triger1 = false;
let triger2 = false;
let triger3 = false;
let triger4 = false;
let numDay;
let numMon;
let numYear;
let date = new Date();

//

btn.onclick = ()=>{
    validation()
    if(triger1 && triger2 && triger3 && triger4){
        numYear = date.getFullYear() - year.value;
        if((date.getMonth() + 1) - month.value >= 0){
            numMon =((date.getMonth() + 1) - month.value);
            console.log('hi')
        }else{
            if(year.value != date.getFullYear()){
                numYear--;
                numMon = 12 - Math.abs((date.getMonth()+1) - month.value)
            }else{
                numMon = 12 - Math.abs((date.getMonth()+1) - month.value)
            }
        }
        if(date.getDate() - day.value > 0){
            numDay = (date.getDate() - day.value);
        }else{
            numMon--;
            numDay = 30 - Math.abs((date.getDate() - day.value))
        }
        Dres.textContent = numDay;
        Dres.classList.add("active")
        Mres.textContent = numMon;
        Mres.classList.add("active")
        Yres.textContent = numYear;
        Yres.classList.add("active")
    }else{
        Yres.classList.remove("active")
        Mres.classList.remove("active")
        Dres.classList.remove("active")
        Yres.textContent = "--";
        Mres.textContent = "--";
        Dres.textContent = "--";
    }
}

//Functions

function validation(){
    if((day.value <= 0 || day.value > 31 || Number.isNaN(Number.parseInt(day.value)))){
        if(day.value == ""){
            day.parentElement.classList.add("Error")
            day.parentElement.classList.remove("v")
            triger1 = false;
        }else{
            day.parentElement.classList.add("Error","v")
            triger1 = false;
        }
    }else{
        if(day.value == ""){
            day.parentElement.classList.add("Error")
            day.parentElement.classList.remove("v")
            triger1 = false;
        }else{
            day.parentElement.classList.remove("Error","v")
            triger1 = true;
        }
    }
    if((month.value <= 0 || month.value > 12 || Number.isNaN(Number.parseInt(month.value)))){
        if(month.value == ""){
            month.parentElement.classList.add("Error")
            month.parentElement.classList.remove("v")
            triger2 = false;
        }else{
            month.parentElement.classList.add("Error","v")
            triger2 = false;
        }
    }else{
        if(month.value == ""){
            month.parentElement.classList.add("Error")
            month.parentElement.classList.remove("v")
            triger2 = false;
        }else{
            month.parentElement.classList.remove("Error","v")
            triger2 = true;
        }
    }
    if((year.value > date.getFullYear() || year.value<=0 || Number.isNaN(Number.parseInt(year.value)))){
        if(year.value == ""){
            year.parentElement.classList.add("Error")
            year.parentElement.classList.remove("v")
            triger3 = false;
        }else{
            year.parentElement.classList.add("Error","v")
            triger3 = false;
        }
    }else{
        if(year.value == ""){
            year.parentElement.classList.add("Error")
            year.parentElement.classList.remove("v")
            triger3 = false;
        }else{
            year.parentElement.classList.remove("Error","v")
            triger3 = true;
        }
    }
    if(year.value == date.getFullYear()){
        if(Number.parseInt(month.value) >= (date.getMonth() + 1)){
            if(month.value == (date.getMonth() + 1)){
                if(Number.parseInt(day.value) > date.getDate()){
                    year.parentElement.classList.add("Error","v")
                    triger4 = false;
                }else{
                    year.parentElement.classList.remove("Error","v")
                    triger4 = true;
                }
            }else{
                year.parentElement.classList.add("Error","v")
                triger4 = false;
            }
        }else{
            year.parentElement.classList.remove("Error","v")
            triger4 = true;
        }
    }else{
        triger4 = true;
    }
}