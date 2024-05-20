const btn = document.querySelector('.read-more-btn')

const text = document.querySelector('.read-more')

const cardHolder = document.querySelector('.article-container')

cardHolder.addEventListener('click', e => {
    const current = e.target;
    const isReadMoreBtn = current.className.includes('read-more-btn')

    if(!isReadMoreBtn)
        return;

    const currentText = e.target.parentNode.querySelector('.read-more')

    currentText.classList.toggle('read-more--open')
    current.textContent = current.textContent.includes('Read more...') ? 'Read less...' : 'Read more...';
})

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var submit = document.getElementById("myBtn");

// Ketika pengguna mengklik tombol submit, tampilkan modal dan hentikan event default
submit.addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah pengiriman form
    modal.style.display = "block"; // Tampilkan modal
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

