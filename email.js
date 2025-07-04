document.addEventListener('DOMContentLoaded', function () {
  emailjs.init('_bzyrYKhUQcehinHM'); // your public key

  const form = document.getElementById('contact-form');
  const popupMessage = document.getElementById('popup-message');
function showPopupMessage(text, type = 'success') {
  popupMessage.textContent = text;

  // Reset classes and force reflow
  popupMessage.classList.remove('show', 'success', 'error');
  void popupMessage.offsetWidth; // Force reflow para mag-trigger ulit animation

  popupMessage.classList.add('show', type);

  // Show popup
  popupMessage.style.opacity = '1';

  // Auto-hide after 4 seconds
  setTimeout(() => {
    popupMessage.style.opacity = '0';
    popupMessage.classList.remove('show', type);
  }, 4000);
}

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    emailjs.sendForm('service_n664ev6', 'template_v1yz7ri', this).then(
      () => {
        showPopupMessage('✅ Message sent successfully!', 'success');
        form.reset();
      },
      (error) => {
        showPopupMessage('❌ Failed to send. Please try again.', 'error');
        console.error('FAILED...', error);
      }
    );
  });
});
