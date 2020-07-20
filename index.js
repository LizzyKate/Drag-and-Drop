window.onload = () => {

    // GET ALL THE PLAYERS - DRAGGABLE AND DROP ZONES

    const draggable = document.querySelector('#draggable');
    const dropzones = document.querySelectorAll('.dropzone');

    // DRAG START - HIGHLIGHT DROP ZONES WITH CSS CLASS

    draggable.addEventListener("dragstart", function(){
        for(let i = 0; i < dropzones.length; i++){
            dropzones[i].classList.add("active");
            console.log("I have Started")
        }
    })

    // DRAG END - REMOVE ALL ADDED ACTIVE & OVER CSS CLASS
 

    draggable.addEventListener("dragend", () => {
        for(let i = 0; i< dropzones.length; i++){
            dropzones[i].classList.remove("active");
            dropzones[i].classList.remove("active");
            dropzones[i].classList.remove("over");
            console.log("I have ended");
        }
    })

    // DRAG - AS YOU ARE DRAGGING
  draggable.addEventListener("drag", function () {
    // DO SOMETHING... IF YOU WANT
    console.log("I am moving")
  });

  for (let i = 0; i <dropzones.length; i++){
       
    // DRAG ENTER - HIGHLIGHT THIS ZONE

    dropzones[i].addEventListener("dragenter", () => {
        dropzones[i].classList.add("over");
        console.log("I have Entered")
    })

    // DRAG LEAVE - REMOVE HIGHLIGHT ON THIS ZONE

    dropzones[i].addEventListener("dragleave", () => {
        dropzones[i].classList.remove("over");
        console.log("I left")
    })

    // DRAG OVER - PREVENT THE DEFAULT "DROP", SO WE CAN DO OUR OWN

    dropzones[i].addEventListener("dragover", function (evt) {
        evt.preventDefault();
        console.log("I am preventing")
      });

      dropzones[i].addEventListener("drop", function (evt) {
        evt.preventDefault();
        // Will move the draggable element only if dropped into a different box
        if (evt.target != draggable.parentNode && evt.target != draggable) {
          draggable.parentNode.removeChild(draggable);
          evt.target.appendChild(draggable);
          console.log("I was added")
        }
      });
      
  }
}