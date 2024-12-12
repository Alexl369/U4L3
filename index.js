async function getData(userId) {

    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await userResponse.json();
   
    const photoResponse = await fetch(`https://jsonplaceholder.typicode.com/photos/${userId}`);
    const photo = await photoResponse.json();
   
    const commentResponse = await fetch(`https://jsonplaceholder.typicode.com/comments/${userId}`);
    const comment = await commentResponse.json();
   
   
    return { user, photo, comment };
   }
   
   
   async function display() {
    try {
    
      const container = document.createElement('div');
      container.classList.add('container');
      document.body.appendChild(container);
    
      for (let i = 1; i <= 3; i++) {
        const { user, photo, comment } = await getData(i);
       
   
   
        const userContainer = document.createElement('div');
        userContainer.classList.add('user-container');
     
        const userInfoDiv = document.createElement('div');
        userInfoDiv.classList.add('user-info');
        userInfoDiv.innerHTML = `
          <h3>${user.name}</h3>
          <div class="address">
            <span>Address:</span> City: ${user.address.city}, Street: ${user.address.street}, Suite: ${user.address.suite}, Zipcode: ${user.address.zipcode}
          </div>
        `;
        userContainer.appendChild(userInfoDiv);
        console.log(user)
   
   
    
        const imageDiv = document.createElement('div');
        imageDiv.classList.add('user-image');
        const img = document.createElement('img');
        img.src = photo.thumbnailUrl;
        imageDiv.appendChild(img);
        userContainer.appendChild(imageDiv);
        console.log(photo)
   
    
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('user-comment');
        commentDiv.textContent = `Comment: ${comment.body}`;
        userContainer.appendChild(commentDiv);
        console.log(comment)
   
      
        container.appendChild(userContainer);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
   }
   
   
   display();
   
   