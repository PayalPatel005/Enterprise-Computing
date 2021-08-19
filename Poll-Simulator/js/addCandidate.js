$(document).ready(function() {

    //localStorage.clear();
    class Candidates {
        static count=1;
    }

    $("#submit").click(function(e){
        e.preventDefault();
        localStorage.setItem("name["+Candidates.count+"]",$("#cname").val());
        Candidates.count++;
        alert("Candidate added successfully.");
        $("#cname").val("");        
    });    
});