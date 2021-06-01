let good = document.getElementById("good");
let cheap = document.getElementById("cheap");
let fast = document.getElementById("fast");

function uncheckcheap(){
    if(fast.checked == true && good.checked == true){
        cheap.checked = false;
    }
}

function uncheckgood(){
    if(cheap.checked == true && fast.checked == true){
        good.checked = false;
    }
}

function uncheckfast(){
    if(good.checked == true && cheap.checked == true){
        fast.checked = false;
    }
}
