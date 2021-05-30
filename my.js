let good = document.getElementById("good");
let cheap = document.getElementById("cheap");
let fast = document.getElementById("fast");

function uncheckfast(){
    if(fast.checked == true && good.checked == true){
        document.getElementById("cheap").checked = false;
    }
}

function uncheckcheap(){
    if(cheap.checked == true && fast.checked == true){
        document.getElementById("good").checked = false;
    }
}

function uncheckgood(){
    if(good.checked == true && cheap.checked == true){
        document.getElementById("fast").checked = false;
    }
}