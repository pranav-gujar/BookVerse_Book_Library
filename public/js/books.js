//search book
function searchBooks() {
    const searchInput = document.getElementById('searchBar').value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const title = card.querySelector('h2').textContent.toLowerCase();
        if (title.includes(searchInput)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

//borrow & Unborrow
function borrowBook(bookId) {
    fetch(`/books/borrow/${bookId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            const borrowedStatus = document.getElementById(`borrowed-status-${bookId}`);
            borrowedStatus.textContent = 'Yes';

            const borrowButton = document.getElementById(`borrow-button-${bookId}`);
            const unborrowButton = document.getElementById(`unborrow-button-${bookId}`);

            borrowButton.disabled = true;
            unborrowButton.disabled = false;
        } else {
            alert('Failed to borrow the book.');
        }
    })
    .catch(error => console.error('Error:', error));
}

function unborrowBook(bookId) {
    fetch(`/books/unborrow/${bookId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            const borrowedStatus = document.getElementById(`borrowed-status-${bookId}`);
            borrowedStatus.textContent = 'No';

            const borrowButton = document.getElementById(`borrow-button-${bookId}`);
            const unborrowButton = document.getElementById(`unborrow-button-${bookId}`);

            borrowButton.disabled = false;
            unborrowButton.disabled = true;
        } else {
            alert('Failed to unborrow the book.');
        }
    })
    .catch(error => console.error('Error:', error));
}
