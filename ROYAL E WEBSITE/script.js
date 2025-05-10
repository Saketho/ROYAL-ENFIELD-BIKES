// Function to handle bike uploads
document.getElementById('bikeForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const bikeName = document.getElementById('bikeName').value;
  const bikePrice = document.getElementById('bikePrice').value;
  const bikeYear = document.getElementById('bikeYear').value;
  const bikeImage = document.getElementById('bikeImage').files[0];

  const reader = new FileReader();
  reader.onloadend = function() {
    const bikeList = document.getElementById('bikeList');

    const bikeDiv = document.createElement('div');
    bikeDiv.classList.add('bike-item');

    const bikeImageElement = document.createElement('img');
    bikeImageElement.src = reader.result;
    bikeImageElement.alt = bikeName;

    const bikeNameElement = document.createElement('h3');
    bikeNameElement.textContent = bikeName;

    const bikePriceElement = document.createElement('p');
    bikePriceElement.textContent = `Price: ₹${bikePrice}`;

    const bikeYearElement = document.createElement('p');
    bikeYearElement.textContent = `Year: ${bikeYear}`;

    const button = document.createElement('button');
    button.textContent = 'Contact Seller';

    bikeDiv.appendChild(bikeImageElement);
    bikeDiv.appendChild(bikeNameElement);
    bikeDiv.appendChild(bikePriceElement);
    bikeDiv.appendChild(bikeYearElement);
    bikeDiv.appendChild(button);

    bikeList.appendChild(bikeDiv);
  };

  reader.readAsDataURL(bikeImage);
});
// Function to handle bike uploads
document.getElementById('bikeForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const bikeName = document.getElementById('bikeName').value;
  const bikePrice = document.getElementById('bikePrice').value;
  const bikeYear = document.getElementById('bikeYear').value;
  const bikeImage = document.getElementById('bikeImage').files[0];

  const reader = new FileReader();
  reader.onloadend = function() {
    const bikeList = document.getElementById('bikeList');

    const bikeDiv = document.createElement('div');
    bikeDiv.classList.add('bike-item');

    const bikeImageElement = document.createElement('img');
    bikeImageElement.src = reader.result;
    bikeImageElement.alt = bikeName;

    const bikeNameElement = document.createElement('h3');
    bikeNameElement.textContent = bikeName;

    const bikePriceElement = document.createElement('p');
    bikePriceElement.textContent = `Price: ₹${bikePrice}`;

    const bikeYearElement = document.createElement('p');
    bikeYearElement.textContent = `Year: ${bikeYear}`;

    const button = document.createElement('button');
    button.textContent = 'Contact Seller';

    bikeDiv.appendChild(bikeImageElement);
    bikeDiv.appendChild(bikeNameElement);
    bikeDiv.appendChild(bikePriceElement);
    bikeDiv.appendChild(bikeYearElement);
    bikeDiv.appendChild(button);

    bikeList.appendChild(bikeDiv);
  };

  reader.readAsDataURL(bikeImage);
});
