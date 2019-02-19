function researchStudent(event, val) {
    var inputEvent = event.inputType;
    
    var letter = val;

    var xhr = new XMLHttpRequest();
    
    if (inputEvent == 'insertText') {
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("students").innerHTML = this.responseText;
            }
        };

        var url = 'students.php?prenom=' + letter;
    
        xhr.open("GET", url);
        xhr.send();
    }    
}