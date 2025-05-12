window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);

  const name = params.get('name');
  const price = parseFloat(params.get('price'));
  const size = params.get('size');
  const quantity = parseInt(params.get('quantity')) || 1;

  // LocalStorage থেকে ডেলিভারি চার্জ নেওয়া
  const deliveryCharge = parseFloat(localStorage.getItem('deliveryCharge')) || 30;

  const subtotal = price * quantity;
  const total = subtotal + deliveryCharge;

  // অর্ডার তথ্য দেখানো
  document.getElementById('orderName').innerText = name || 'N/A';
  document.getElementById('orderQuantity').innerText = quantity;
  document.getElementById('orderUnitPrice').innerText = `৳${price}`;
  document.getElementById('orderSubtotal').innerText = `৳${subtotal}`;
  document.getElementById('orderDelivery').innerText = `৳${deliveryCharge}`;
  document.getElementById('orderTotal').innerText = `৳${total}`;

  if (size) {
    document.getElementById('orderSize').innerText = size;
  } else {
    document.getElementById('orderSizeRow').style.display = 'none';
  }

  // Hidden input এ সংক্ষিপ্ত info রাখার জন্য (FormSubmit/Email integration এর জন্য)
  const details = `${name}${size ? ' - ' + size : ''} × ${quantity} - ৳${subtotal} + ৳${deliveryCharge} = ৳${total}`;
  document.getElementById('orderItemHidden').value = details;
});
