fetch('addresses.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('address1').value = data.btc;
        document.getElementById('address2').value = data.ltc;
        document.getElementById('address3').value = data.eth;
    })
    .catch(error => console.error('Error fetching addresses:', error));