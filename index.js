// const input = document.getElementById('input');

// function addingEventListener() { 
//     alert ('I was clicked');
// }

// input.addEventListener('click', addingEventListener);

// input.addEventListener('click', function addingEventListerner () {
//     alert('I was clicked')
// });
   
function addingEventListener () {
    const input = document.getElementById('input')
    input.addEventListener('click', function (){
    alert ('I was clicked')
    });
}
