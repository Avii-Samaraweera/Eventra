
// all keyword are store insde arrays
// search key word for gaming event
const e1Keywords = ['gaming', 'esports', 'tournament', 'competitive', 'gamezone', 'championship'];

// search keyword for hackathon event
const e2Keywords = ['coding', 'hackathon', 'programming', 'developers', 'code', 'clash', 'tech'];

// search keywords for cleaing event
const e3Keywords = ['environment', 'cleaning', 'green', 'cleanup', 'eco', 'community', 'nature'];

// search keywords for music event
const e4Keywords = ['music', 'live', 'bands', 'dj', 'rhythm', 'beats', 'concert', 'show'];

// search keywords for opera event
const e5Keywords = ['opera', 'classical', 'theatre', 'stars', 'music', 'performance', 'cultural'];

// search keywords for protest event
const e6Keywords = ['protest', 'social', 'justice', 'change', 'voices', 'awareness', 'unity', 'peaceful'];

// Search function
function performSearch() {
    const searchTerm = document.getElementById('search').value.toLowerCase(); //get the value in search bar
    const noResults = document.getElementById('noResults');

    // when serach hie all events by id
    document.getElementById('e1').style.display = 'none';
    document.getElementById('e2').style.display = 'none';
    document.getElementById('e3').style.display = 'none';
    document.getElementById('e4').style.display = 'none';
    document.getElementById('e5').style.display = 'none';
    document.getElementById('e6').style.display = 'none';

    let foundAny = false;

    // Check each event's keywords

    // show gamig event for key words
    if (e1Keywords.some(keyword => keyword.includes(searchTerm))) {
        document.getElementById('e1').style.display = 'block';
        foundAny = true;
    }

    // show hackathon event for keywords
    if (e2Keywords.some(keyword => keyword.includes(searchTerm))) {
        document.getElementById('e2').style.display = 'block';
        foundAny = true;
    }

    // show cleaning event for keywords
    if (e3Keywords.some(keyword => keyword.includes(searchTerm))) {
        document.getElementById('e3').style.display = 'block';
        foundAny = true;
    }

    // show music event for keywords
    if (e4Keywords.some(keyword => keyword.includes(searchTerm))) {
        document.getElementById('e4').style.display = 'block';
        foundAny = true;
    }

    // show pera event for keywords
    if (e5Keywords.some(keyword => keyword.includes(searchTerm))) {
        document.getElementById('e5').style.display = 'block';
        foundAny = true;
    }

    // show protest event for keywords
    if (e6Keywords.some(keyword => keyword.includes(searchTerm))) {
        document.getElementById('e6').style.display = 'block';
        foundAny = true;
    }

    // show the related event when search, if not show no events
    if (!foundAny && searchTerm.trim() !== '') {
        noResults.style.display = 'block';
    } else {
        noResults.style.display = 'none';
    }
}

//function to show all events
function showAllEvents() {
    document.getElementById('e1').style.display = 'block';
    document.getElementById('e2').style.display = 'block';
    document.getElementById('e3').style.display = 'block';
    document.getElementById('e4').style.display = 'block';
    document.getElementById('e5').style.display = 'block';
    document.getElementById('e6').style.display = 'block';
    document.getElementById('noResults').style.display = 'none';
}

// Refresh function
function refreshEvents() {
    document.getElementById('search').value = '';
    showAllEvents();
}


document.getElementById('searchbtn').addEventListener('click', performSearch); // assigend search function, when click search button search work
document.getElementById('refreshbtn').addEventListener('click', refreshEvents); // assigned show all event function, when click refresh, show all events


// Notification popup functionality
function toggleNotification() {
    const popup = document.getElementById('notificationPopup');
    popup.classList.toggle('show');
}

function closeNotification(event) {
    const popup = document.getElementById('notificationPopup');
    const notifyBtn = document.getElementById('notifyBtn');

    if (!popup.contains(event.target) && !notifyBtn.contains(event.target)) {
        popup.classList.remove('show');
    }
}

document.getElementById('notifyBtn').addEventListener('click', function (e) {
    e.stopPropagation();
    toggleNotification();
});

document.addEventListener('click', closeNotification);

// Scroll functionality
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

// Participation function
function participate(eventName, e) {
    e.preventDefault();
    let participations = localStorage.getItem("participations");
    if (!participations) {
        participations = eventName;
    } else {
        participations += "|" + eventName;
    }
    localStorage.setItem("participations", participations);
    alert("Participation recorded!");
    window.location.href = "account.html"; // Go to account page when click participate button
}