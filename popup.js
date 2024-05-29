document.getElementById('imageUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
      const imageUrl = e.target.result;
      chrome.storage.local.set({ profilePic: imageUrl }, function() {
        console.log('Profile picture updated.');
      });
    };
    
    reader.readAsDataURL(file);
  });
  