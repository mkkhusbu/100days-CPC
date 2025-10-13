const inputText = document.querySelector('#framework');
const btnAdd = document.querySelector('.btnAdd')
const btnRemove = document.querySelector('.btnRemove');
const list = document.querySelector("#list");

btnAdd.addEventListener('click',(e) => {
  e.preventDefault();
  if(inputText.value == ""){
    alert("Please write your work in input area");
  }
  let option = new Option(inputText.value,inputText.value);
  list.add(option)
  inputText.value="";
})

btnRemove.addEventListener('click',(e)=>{
  e.preventDefault();
  let lister = [];
  let index = list.options.length;

  for(let i=0;i<index;i++){
    lister[i] = list.options[i].selected;
  }
  while(index--){
    if(lister[index]) {
      list.remove(index)
    }
  }
}) 