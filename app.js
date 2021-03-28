const theInput = document.querySelector('#text-input');
const oldText = document.querySelector('#oldText')
theInput.addEventListener('submit', function(e){
     e.preventDefault();
    const saveInput = theInput.elements.myText.value;
    oldText.value = '';
    const change = document.querySelector('#change');
    change.innerText = saveInput;
});


 