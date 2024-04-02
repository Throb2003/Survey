document.addEventListener("DOMContentLoaded", function() {
  const requestForm = document.getElementById("requestForm");
  const statusList = document.getElementById("statusList");

  requestForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const item = document.getElementById("item").value;
    const quantity = document.getElementById("quantity").value;
    const destination = document.getElementById("destination").value;

    const statusItem = document.createElement("li");
    statusItem.textContent = `Request for ${quantity} ${item}(s) to ${destination} submitted`;
    statusList.appendChild(statusItem);

    // Additional logic to handle submission (e.g., sending data to server, processing, etc.)
    // This is just a placeholder for demonstration purposes
    setTimeout(function() {
      statusItem.textContent = `Transport for ${quantity} ${item}(s) to ${destination} in progress`;
    }, 2000);
  });
});
