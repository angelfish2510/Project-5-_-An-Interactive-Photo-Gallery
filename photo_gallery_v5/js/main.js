function searchPics() {
    let input = document.getElementById("searchBar").value;
    input = input.toLowerCase();

    let gallery = document.getElementsByTagName('a');

    for ( i = 0; i < gallery.length; i++) {
        let caption = gallery[i].getAttribute('data-caption');
        caption = caption.toLowerCase();

        if (caption.includes(input)) {
            gallery[i].style.display = "";
        } else {
            gallery[i].style.display = "none";
        }
    }
}


// let test = prompt("This is a test");
