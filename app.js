console.log("Holiday Countdown app is running");

const eventList = document.getElementById("event-list");

function addEvent(eventName, eventDate) {
    const li = document.createElement("li");
    li.textContent = `${eventName} - ${eventDate}`;
    eventList.appendChild(li);
}

// Для прикладу, додаємо подію
addEvent("Christmas", "December 25");
