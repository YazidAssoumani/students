function researchStudent(event, value) {
    var inputEvent = event.inputType;    
    var letters = value;
    var url = 'students.php?';
    var data = 'prenom=' + letters;

    var xhr = new XMLHttpRequest();
    
    if (inputEvent == 'insertText') {
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("students").innerHTML = this.responseText;
            }
        };

        xhr.open("POST", url);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(data);
    }
}