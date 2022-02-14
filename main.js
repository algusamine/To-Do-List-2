document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let inputrValue = document.querySelector("input").value;
  if (inputrValue === ""){
  } else {
    document.querySelector("input").value = "";
    let li = document.createElement("li");
    li.className = 'none';
    li.textContent = inputrValue;

    let checkSquare = document.createElement("button");
    checkSquare.innerHTML = '<i class="fas fa-check-square"></i>';
    checkSquare.className = 'check-square'

    let trashAlt = document.createElement("button");
    trashAlt.innerHTML = '<i class="fas fa-trash-alt"></i>';
    trashAlt.className = 'trash-alt';

    li.append(trashAlt, checkSquare);
    let ul = document.querySelector("ul");
    ul.append(li);

    trashAlt.addEventListener("click", () => {
      li.remove();
    });
    //check box toggle 
    checkSquare.addEventListener('click', e =>{
      checkSquare.classList.toggle('check-square-toggle');
      li.classList.toggle('li-line-through');
      trashAlt.classList.toggle('trash-background-gray');
    })
    //Clear all
    document.querySelector(".clear-all").addEventListener("click", () => {
      ul.remove();
    });
  }
});
