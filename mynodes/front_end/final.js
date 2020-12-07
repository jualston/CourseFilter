var updateView = async(button) =>{
if (button.dataset.querytype == 'by_name'){
let queryvalue = document.querySelector('#nameQuery').value;
api = `http://localhost:3000/api/by_name/${queryvalue}`;
}
else if (button.dataset.querytype== 'by_title'){
let queryvalue = document.querySelector('#queryByTitle').value;
api = `http://localhost:3000/api/by_title/${queryvalue}`;

}
else if (button.dataset.querytype== 'by_level'){
let queryvalue = document.querySelector('#queryByLevel').value;
api = `http://localhost:3000/api/by_level/${queryvalue}`;

}
else if (button.dataset.querytype== 'by_course_code'){
let queryvalue = document.querySelector('#queryByCode').value;
api = `http://localhost:3000/api/by_course_code/${queryvalue}`;

}
else if (button.dataset.querytype== 'by_combo'){

let queryvalue = document.querySelector('#queryByCombo').value;

let le = document.querySelector('#ugraduate').value;

console.log(le);

api = `http://localhost:3000/api/combined_query/${queryvalue}/${le}`;

}

const data = await fetch(api);
const model = await data.json();
render_view(model);
console.log(model);
}




var render_view= (model)=>{
var source = document.querySelector("#show_results").innerHTML
var template = Handlebars.compile(source)
var html = template(model);
document.querySelector("#results").innerHTML = html;
}




var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');

  e.target.classList.add('animate');

  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },6000);
};

var classname = document.getElementsByClassName("button");

for (var i = 0; i < classname.length; i++) {
  classname[i].addEventListener('click', animateButton, false);
}
