// Notification popup functionality
function toggleNotification() {
    const popup = document.getElementById('notificationPopup');
    popup.classList.toggle('show');
}

// Close notification when clicking outside
function closeNotification(event) {
    const popup = document.getElementById('notificationPopup');
    const notifyBtn = document.getElementById('notifyBtn');
    
    if (!popup.contains(event.target) && !notifyBtn.contains(event.target)) {
        popup.classList.remove('show');
    }
}

document.getElementById('notifyBtn').addEventListener('click', function (e) {
    e.stopPropagation(); // Prevent it from triggering document click
    toggleNotification();
});

document.addEventListener('click', closeNotification);

// Show scroll button when scrolled down
window.onscroll = function () {
    const btn = document.getElementById("scrollUpBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}