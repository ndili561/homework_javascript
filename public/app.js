window.onload = main;

function main(){
  getquotes();
  allquotes();
  var btn = document.getElementById('add-button');
  btn.onclick = handleclick;
  var form = document.getElementById('quote-form');
  form.onsubmit = function(event){
    event.preventDefault();
  }



  
  var btn2 = document.getElementById('quote-form')
  btn2.onclick = handleDelete();
  form.onsubmit = function(event){
    event.preventDefault()
  }
 


}

function getquotes(){
  var element  = document.getElementById('main');
  return element;
}

function allquotes(quote){
  var arr = [];
  arr.push(getquotes())
  arr.push(quote);
  console.log(arr);
}

function handleclick(){
  var quote = document.getElementById('quote-text-input');
  var author = document.getElementById('author-text-input');
  var quoteInput = quote.value;
  var authorInput = author.value;
  quote.value= '';
  author.value='';
  appendquote(quoteInput,authorInput)
}

function appendquote(quoteInput,authorInput){
  var li  = document.createElement('li');
  quoteInput.className = 'blockquote';
  authorInput.className = 'author';
  li.innerText = quoteInput + '. ' + authorInput;
  var ul = document.getElementById('quote-list');
  var quote = ul.appendChild(li);
  allquotes(quote);
}

function handleDelete(){
  console.log('fjnan');
}

