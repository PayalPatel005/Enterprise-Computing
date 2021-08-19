$(document).ready(function() {
    Object.keys(localStorage).forEach(function(key) {
        if (/^name/.test(key)) {
            var name = localStorage.getItem(key);
            var radioBtn = $('<input type="radio" name="cname" value='+name+' class="cname" /> '+ name +'<br/>');
            radioBtn.appendTo('#candidateList');
        }
    });

    $("#submit").click(function(e){
        e.preventDefault();

        if(localStorage.getItem("student["+$("#sid").val()+"]")) {
            alert("Id: " + $("#sid").val() + ", you have already voted!");
        } else {

            localStorage.setItem("student["+$("#sid").val()+"]",$("#sid").val());
            let voteFor = $('input[name="cname"]:checked').val();
            let count = localStorage.getItem("voteDetails["+voteFor+"]");

            if(count==null) count=0;

            localStorage.setItem("voteDetails["+voteFor+"]", ++count);
            alert("Id: " + $("#sid").val() + ", Your vote has been added successfully.");
        }
        $("#sid").val("");
        $('input[name="cname"]').prop('checked', false);
    });  
});