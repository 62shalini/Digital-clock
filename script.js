function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById('digital-clock').textContent = timeString;
}

setInterval(updateClock, 1000); // Update the clock every second
updateClock(); // Update the clock immediately