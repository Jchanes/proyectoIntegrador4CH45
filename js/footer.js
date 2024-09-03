//ponerel mismo footer en todos los elementos
document.getElementById(footer).innerHTML = document.getElementById('footer').innerHTML = fetch('footer.html')
.then(response => response.text())
.then(data => document.getElementById('footer').innerHTML = data);