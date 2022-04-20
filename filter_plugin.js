let pointer_select_categories = document.querySelector(".select-category");
// console.log(pointer_categories);
pointer_select_categories.addEventListener("click", ()=>{
    pointer_select_categories.classList.toggle("active");
})

let pointer_categories = document.querySelectorAll(".list-categories>ul>li");
for (let index = 0; index < pointer_categories.length; index++) {
    pointer_categories[index].addEventListener("click", ()=>{
        let select_cat = document.querySelector(".select-category>p");
        select_cat.innerHTML = pointer_categories[index].textContent;
    })
    
}
