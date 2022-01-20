// search bar

// const searchBar = document.forms['search-photos'].querySelector('input');
// searchBar.addEventListener('keyup',function(e){
//   const term = e.target.value.toLowerCase();
//   const pics = list.getElementsByTagName('a', 'img');
// //   need to use caption for "tagname"
//   Array.from(pics).forEach(function(photo){
//       const caption = pictures.firstElementChild.textContent;
//     //   in example the above is title of book - data-caption for me?
//       if(caption.toLowerCase().indexOf(term) != -1){
//     //   if index is -1 that means it was not found in any caption
//         pictures.style.display = 'block';
//        } else {
//         pictures.style.display = 'none';   
//        }
//   })
// })

// $(document).ready(function() {
//     $('#search-photos').keyup(function() {
//         $(this).attr('size', $(this).val().length)
//     });
// });

let gallery2 = document.getElementsByClassName("gallery");

let Pic = document.getElementsByClassName("search");

function searchPics() {
    let input = document.getElementById("searchBar").value;
    input = input.toLowerCase();
    // let picture = document.getElementsByClassName("search");

    for ( i = 0; i < Pic.length; i++) {
        if (!Pic[i].innerHTML.toLowerCase().includes(input)) {
            Pic[i].getElementsByClassName.display="none";
        }
        else {
            Pic[i].style.display="flex";
        }
    }
}

// let PicsFound = document.getElementsByClassName("search");

// function searchPics() {
//         let input = document.getElementById("searchBar").value;
//         input = input.toLowerCase();

//         let PicsFound = document.getElementsByClassName("search");
//         // let PicturesFound = document.getElementsByTagName("IMG", "a");
          
//         for (i = 0; i < PicsFound.length; i++) { 
//             if (!PicsFound[i].innerHTML.toLowerCase().includes(input)) {
//                 PicsFound[i].style.display="none";
//             }
//             else {
//                 PicsFound[i].style.display="flex";                 
//             }
//         }
//     }
    

let test = prompt("This is a test");
