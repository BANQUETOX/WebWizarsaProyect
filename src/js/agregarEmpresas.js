

 // Preview uploaded logo
 const logoInput = document.getElementById('logo');
 const logoPreview = document.getElementById('logoPreview');

 logoInput.addEventListener('change', function(event) {
   const file = event.target.files[0];
   const reader = new FileReader();

   reader.onload = function(event) {
     logoPreview.src = event.target.result;
     logoPreview.style.display = 'block';
   }

   reader.readAsDataURL(file);
 });

 // Handle form submission
 const companyForm = document.getElementById('companyForm');

 companyForm.addEventListener('submit', function(event) {
   event.preventDefault();

   // Get form values
   const name = document.getElementById('name').value;
   const id = document.getElementById('id').value;
   const phone = document.getElementById('phone').value;
   const sns = document.getElementById('sns').value;
   const direction = document.getElementById('direction').value;


   // Clear form
   companyForm.reset();
   logoPreview.style.display = 'none';
 });
