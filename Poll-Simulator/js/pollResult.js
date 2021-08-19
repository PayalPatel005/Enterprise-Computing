$(document).ready(function() {
    let max=0;
    let winner = '', losser='';
    Object.keys(localStorage).forEach(function(key) {
        if (/^voteDetails/.test(key)) {
            
            let count = localStorage.getItem(key);
            key = key.split("[");
            key = key[1].split("]");
            if(count==null) count=0;
            if(count>max) {
                winner = $('<div> Won: '+ key[0] +' ('+ count +')</div>');
                max = count;
            }
        }
    });
    
    let secondMax = 0;
    Object.keys(localStorage).forEach(function(key) {
        if (/^voteDetails/.test(key)) {
            
            let count = localStorage.getItem(key);
            key = key.split("[");
            key = key[1].split("]");
            if(count==null) count=0;
            if(count<max && count>secondMax) {
                losser = $('<div> Lost: '+ key[0] +' ('+ count +')</div>');
                secondMax = count;
            }
        }
    });

    if(localStorage.length>0) {
        winner.appendTo('#pollResult');
        losser.appendTo('#pollResult');
    }
   
    if($("#pollResult").text()=='') {
        $("#pollResult").text("No records found");
    }
});