document.addEventListener('DOMContentLoaded', function() {
    fetch('header.html')
        .then(response => response.text())
        .then(header => {
            document.getElementById('header-placeholder').innerHTML = header;
        })
        .catch(error => console.error('Error loading header:', error));

    fetch('footer.html')
        .then(response => response.text())
        .then(footer => {
            document.getElementById('footer-placeholder').innerHTML = footer;
        })
        .catch(error => console.error('Error loading footer:', error));
});
