// Pizza Modal Open Function
function openPizzaOrder(name, img, price) {
  document.getElementById('pizzaModal').style.display = 'flex';
  document.getElementById('pizzaImg').src = img;
  document.getElementById('pizzaTitle').innerText = name;
  document.getElementById('pizzaFoodName').value = name;
  document.getElementById('pizzaPrice').value = price;
}

// General Modal Open Function
function openGeneralOrder(name, img, price) {
  document.getElementById('generalModal').style.display = 'flex';
  document.getElementById('generalImg').src = img;
  document.getElementById('generalTitle').innerText = name;
  document.getElementById('generalFoodName').value = name;
  document.getElementById('generalPrice').value = price;
}

// Modify the click event for menu items
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    const category = item.getAttribute('data-category');
    const name = item.querySelector('h3').innerText;
    const img = item.querySelector('img').src;
    const price = item.querySelector('p').innerText.replace('৳', '');

    if (category === 'pizza') {
      openPizzaOrder(name, img, price);
    } else {
      openGeneralOrder(name, img, price);
    }
  });
});

// Close the Pizza Modal
document.querySelector('.close').addEventListener('click', () => {
  document.getElementById('pizzaModal').style.display = 'none';
});

// Close the General Modal
document.querySelector('.close-general').addEventListener('click', () => {
  document.getElementById('generalModal').style.display = 'none';
});

// Close the modals if clicked outside of them
window.addEventListener('click', (e) => {
  if (e.target.id === 'pizzaModal') {
    document.getElementById('pizzaModal').style.display = 'none';
  }
  if (e.target.id === 'generalModal') {
    document.getElementById('generalModal').style.display = 'none';
  }
});



// Submit pizza order function
function submitPizzaOrder(event) {
    event.preventDefault(); // Prevent form reload

    const food = document.getElementById('pizzaFoodName').value;
    const price = document.getElementById('pizzaPrice').value;
    const size = document.querySelector('#pizzaModal input[name="size"]:checked')?.value;
    const quantity = document.querySelector('#pizzaModal input[name="quantity"]').value;

    if (!size) {
        alert("সাইজ বেছে নিন");
        return;
    }

    const url = `/order-page/index.html?name=${encodeURIComponent(food)}&price=${encodeURIComponent(price)}&size=${encodeURIComponent(size)}&quantity=${encodeURIComponent(quantity)}`;
    window.location.href = url;
}



// Submit General Order Function
function submitGeneralOrder(event) {
  event.preventDefault();  // Prevent the form from submitting and causing a page reload

  const food = document.getElementById('generalFoodName').value;
  const price = document.getElementById('generalPrice').value;
  const quantity = document.querySelector('#generalModal input[name="quantity"]').value;

  // Redirect to order page with food details
  const url = `/order-page/index.html?name=${encodeURIComponent(food)}&price=${encodeURIComponent(price)}&quantity=${encodeURIComponent(quantity)}`;
  window.location.href = url;  // This will redirect to the order page with selected details
}

// Optional: Dark mode toggle functionality (if applicable)
const darkModeToggle = document.getElementById('darkModeToggle');
if (darkModeToggle) {
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
}

// Filter menu items (Optional)
const filterButtons = document.querySelectorAll('.filter-bar button');
const menuItemsList = document.querySelectorAll('.menu-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filterValue = button.getAttribute('data-filter');

    menuItemsList.forEach(item => {
      if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
        item.style.display = 'block';  // Show item
      } else {
        item.style.display = 'none';  // Hide item
      }
    });
  });
});

// Function to dynamically change pizza price based on selected size
function changePizzaPrice() {
  const foodName = document.getElementById('pizzaFoodName').value; // Get pizza name
  const size = document.querySelector('#pizzaModal input[name="size"]:checked')?.value; // Get selected size

  if (foodName && size) {
    const price = pizzaPrices[foodName][size]; // Get price from pizzaPrices object
    document.getElementById('pizzaPrice').value = price; // Update hidden price field
  }
}

// Function to open pizza order modal with the correct pizza data
function openPizzaOrder(name, img, price) {
  document.getElementById('pizzaModal').style.display = 'flex';
  document.getElementById('pizzaImg').src = img;
  document.getElementById('pizzaTitle').innerText = name;
  document.getElementById('pizzaFoodName').value = name;
  document.getElementById('pizzaPrice').value = price;
}


//price change function
const pizzaPrices = {
  "চিকেন পিজ্জা": {
    "Personal Pan": 240,
    "Medium Pan": 300,
    "Family Pan": 440
  },
  "Margherita Pizza": {
    "Personal Pan": 200,
    "Medium Pan": 240,
    "Family Pan": 350
  },
  "Shrimp Lime Pizza": {
    "Personal Pan": 400,
    "Medium Pan": 600,
    "Family Pan": 850
  },
  "BBQ Chicken Pizza": {
    "Personal Pan": 350,
    "Medium Pan": 550,
    "Family Pan": 800
  },
  "Meat Lover Pizza": {
    "Personal Pan": 400,
    "Medium Pan": 600,
    "Family Pan": 850
  },
  "Seafood Delight Pizza": {
    "Personal Pan": 400,
    "Medium Pan": 600,
    "Family Pan": 900
  },
  "Chicken Alfredo Pizza": {
    "Personal Pan": 350,
    "Medium Pan": 500,
    "Family Pan": 700
  },

  "Twisted Peri Peri Pizza": {
    "Personal Pan": 380,
    "Medium Pan": 580,
    "Family Pan": 850
  }
  // অন্য পিজ্জাগুলোর জন্যও এভাবে অ্যাড করতে পারো
};
