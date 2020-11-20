function validateBook() {
    var isbn = document.getElementById("isbnId").value;
    var title = document.getElementById("titleId").value;
    var copies = document.getElementById("copiesId").value;
    var publisher = document.getElementById("publisherId").value;
    var author = document.getElementById("authorId").value;

    if(!isValidIsbn(isbn)) {
        document.getElementById("isbnlab").innerHTML = "Enter valid isbn number";
        document.getElementById("isbnlab").style.color="red";
        return false;
    }

    if(!isValidTitle(title)) {
        document.getElementById("titlelab").innerHTML = "Enter valid title";
        document.getElementById("titlelab").style.color="red";
        return false;
    }

    if(!isValidCopies(copies)) {
        document.getElementById("copieslab").innerHTML = "Enter valid number";
        document.getElementById("copieslab").style.color="red";
        return false;
    }

    if(!isValidName(author)) {
        document.getElementById("publisherlab").innerHTML = "Enter valid publisher name";
        document.getElementById("publisherlab").style.color="red";
        return false;
    }

    if(!isValidName(author)) {
        document.getElementById("authorlab").innerHTML = "Enter valid author name";
        document.getElementById("authorlab").style.color="red";
        return false;
    }

    return true;
}

function isValidIsbn(isbn) {
    return (isbn.length>=5 & isbn.length<=15)?true:false;
}

function isValidTitle(title) {
    return (title.length>5)?true:false;
}

function isValidCopies(copies) {
    return (copies <= 0)?false:true;
}

function isValidName(name) {
    return (name.length>=3)?true:false;
}
