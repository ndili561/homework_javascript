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

  
  var btn2 = document.getElementsByTagName('blockquote')
  btn2.onclick = handleDelete;
  var form = document.getElementById('quote-list')
  form.onsubmit = function(event){
    console.log('1')
    event.preventDefault()
  }
 


}

function getquotes(){
  var element  = document.getElementById('main');
  return element;
}

function allquotes(){
  var arr = [];
  var a = document.getElementsByTagName('blockquote')
  arr.push(a)
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
  var blockquote = document.createElement('blockquote');
  var cite = document.createElement('cite')
  blockquote.innerText = quoteInput + '. '
  cite.innerText=authorInput;
  var ul = document.getElementById('quote-list');
  ul.appendChild(li);
  li.appendChild(blockquote);
  blockquote.appendChild(cite);
  allquotes();
}

function handleDelete(){
  console.log('1')
  var parent = document.getElementById('blockquote')
  var child = document.getElementById('cite')
  parent.removeChild(child)
}





