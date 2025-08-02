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

  // access the html elements 
  function loadParticipations() {
    let participations = localStorage.getItem("participations");
    const tableBody = document.querySelector("#participationTable tbody");
    tableBody.innerHTML = "";
    if (!participations) return;

    let events = participations.split("|");

    // foreach loop for store all participating events
    events.forEach((eventName, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${eventName}</td>
        <td><button onclick="deleteEvent(${index})">Not-Patricipate</button></td>
      `;
      tableBody.appendChild(row);
    });
  }

  // delete the participation when click the not participation button
  function deleteEvent(index) {
    let participations = localStorage.getItem("participations");
    if (!participations) return;
    let events = participations.split("|");
    events.splice(index, 1);
    if (events.length > 0) {
      localStorage.setItem("participations", events.join("|"));
    } else {
      localStorage.removeItem("participations");
    }
    loadParticipations();
  }

  window.onload = loadParticipations;