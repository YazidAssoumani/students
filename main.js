var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("students").innerHTML = this.responseText;
    }
};

xhr.open("GET", "students.php");
xhr.send();