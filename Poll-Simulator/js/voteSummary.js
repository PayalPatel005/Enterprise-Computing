$(document).ready(function() {
    Object.keys(localStorage).forEach(function(key) {
        if (/^name/.test(key)) {
            var name = localStorage.getItem(key);

            let count = localStorage.getItem("voteDetails["+name+"]");
            if(count==null) count=0;

            var namediv = $('<div> '+ name +' : '+ count +'</div>');
            namediv.appendTo('#votingSummary');
        }
    });
    if($("#votingSummary").text()=='') {
        $("#votingSummary").text("No records found");
    }
});