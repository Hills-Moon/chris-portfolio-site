document.addEventListener('DOMContentLoaded', function () {
    // Enable all Bootstrap tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
  
    // Copy email to clipboard and show modal
    document.getElementById('email-icon').addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default behavior
      const email = 'christophereric.dahl@gmail.com'; // Your email address
      navigator.clipboard.writeText(email).then(() => {
        const modalElement = new bootstrap.Modal(document.getElementById('emailModal'));
        modalElement.show(); // Show modal
      });
    });
  });
  
  
  
  