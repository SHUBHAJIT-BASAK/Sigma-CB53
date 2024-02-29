// Dummy data for demonstration
let donations = [
    { id: 1, foodName: "Apples", quantity: 10 },
    { id: 2, foodName: "Bread", quantity: 5 },
    { id: 3, foodName: "Pasta", quantity: 3 }
  ];
  
  // Function to display donations table
  function displayDonations() {
    const table = document.createElement('table');
    const headers = ['ID', 'Food Item', 'Quantity'];
  
    // Create table header
    let headerRow = table.insertRow();
    headers.forEach(headerText => {
      let th = document.createElement('th');
      let text = document.createTextNode(headerText);
      th.appendChild(text);
      headerRow.appendChild(th);
    });
  
    // Create table rows
    donations.forEach(donation => {
      let row = table.insertRow();
      Object.values(donation).forEach(value => {
        let cell = row.insertCell();
        let text = document.createTextNode(value);
        cell.appendChild(text);
      });
    });
  
    // Clear previous table content
    document.getElementById('donation-table').innerHTML = '';
    document.getElementById('donation-table').appendChild(table);
  }
  
  // Function to handle form submission
  document.getElementById('donation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const foodName = document.getElementById('foodName').value;
    const quantity = document.getElementById('quantity').value;
  
    // Add new donation to the list
    donations.push({
      id: donations.length + 1,
      foodName: foodName,
      quantity: quantity
    });
  
    // Display updated donations
    displayDonations();
  
    // Clear form fields
    document.getElementById('foodName').value = '';
    document.getElementById('quantity').value = '';
  });
  
  // Initial display of donations
  displayDonations();
  