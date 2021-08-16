
function WriteBlog(){
   var getTitle =  document.getElementById("title-form").value
   var getContent =  document.getElementById("content-form").value
   var div = document.createElement("div");
   var para = document.createElement("p");
   var title = document.createElement("h2");
   text = document.createTextNode(getContent);
   text2 = document.createTextNode(getTitle);
   para.appendChild(text)
   para.classList.add("huh")
   title.appendChild(text2)
   title.classList.add("duh")
   div.appendChild(title)
   div.appendChild(para)
   console.log(getTitle)
   var divhuh = document.getElementById("blogs-js")
   divhuh.appendChild(div)
}