var tableOfColors=['red','green','blue','brown','aqua','yellow','pink','white','black','purple']

var randomElement = function(array){
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}


var s=0
function changrColor(){
    var color=$('input')[0].value
    if (s===3) {
        document.getElementById("button").disabled = true;
        swal("", "YO KID YOU LOSE PLAY AGAIN", "error");
    } else if ((color===randomElement(tableOfColors))&& (s<=3)){  
        $('.container').css('background-color',color)
        document.getElementById('colorName').innerText=color+" and you guess it in the "+(s+1)+" try"
        swal("", "YOU KID YOU WIN", "success");    
    } else if(s<3) {
        s=s+1 
        // alert('TRY AGAIN') 
        swal("", "Try Again !!", "warning");
    }
}