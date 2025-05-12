function openOrder(item) {
    window.location.href = `/order-page/index.html?item=${item}`;
  }
  
  const toggleButton = document.getElementById('darkModeToggle');
  
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleButton.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
  });
  
  
  
  function openOrder(name, image, price) {
    const url = `/order-page/index.html?name=${encodeURIComponent(name)}&image=${encodeURIComponent(image)}&price=${encodeURIComponent(price)}`;
    window.location.href = url;
  }
  