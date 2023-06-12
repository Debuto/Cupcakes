window.onload = function() {
  document.getElementById("myBtn").addEventListener("click", function keyDown() { 
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white'; 
  });
  document.getElementById("myBtn").addEventListener("dblclick", function keyDown() { 
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black'; 
  });
}
