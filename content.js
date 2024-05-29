chrome.storage.local.get("profilePic", function (data) {
    const newProfilePicUrl = data.profilePic || "";
    console.log("Retrieved profile picture URL:", newProfilePicUrl);
  
    // Function to replace profile pictures
    function replaceProfilePictures() {
      if (!newProfilePicUrl) return;
  
      // Select all profile picture elements
      const profilePics = document.querySelectorAll(`
        img.feed-shared-actor__avatar-image, 
        img.profile-rail-card__member-photo,
        img.feed-identity-module__member-photo,
        img.evi-image.ember-view
      `);
  
      profilePics.forEach((pic) => {
        pic.src = newProfilePicUrl;
        pic.srcset = newProfilePicUrl; // Ensure high-res images are also replaced
        console.log("Profile picture replaced:", pic);
      });
    }
  
    // Run the function initially
    replaceProfilePictures();
  
    // Re-run the function every time new content is loaded (e.g., infinite scroll)
    const observer = new MutationObserver(replaceProfilePictures);
    observer.observe(document.body, { childList: true, subtree: true });
  });
  