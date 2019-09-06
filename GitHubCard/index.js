
/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/developer3027')
  .then(response => {
    console.log(response);
      const card = profileCard(response);
      cardClone.appendChild(card);
  })
  .catch(error => {
    console.log('not returned', error);
  });

  
  axios.get('https://api.github.com/users/developer3027/followers')
  .then(response => {
    console.log(response);
    response.data.forEach(response => {
      const card = profileCard(response);
      cardClone.appendChild(card);
    })
      
  })
  .catch(error => {
    console.log('not returned', error);
  });
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for 
          each user, and adding that card to the DOM.
*/

const followersArray = ['uziasr','rashmipoddar','DannyManzietti','mary-clayton','Techne3','LenWinkler'];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM 
          element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div> 
*/
//grab the div in the html the cards will go in
const cardClone = document.querySelector('.cards');

function profileCard(response){
const card = document.createElement('div');
card.classList.add('card');

const img = document.createElement('img');
card.append(img);
img.src = `${response.data.avatar_url}`;

const cardInfo = document.createElement('div');
card.append(cardInfo);
cardInfo.classList.add('card-info');

const name = document.createElement('h3');
cardInfo.append(name);
name.classList.add('name');
name.textContent = `Name: ${response.data.name}`;

const userName = document.createElement('p');
cardInfo.append(userName);
userName.classList.add('username');
userName.textContent = `User Name: ${response.data.login}`;

const location = document.createElement('p');
cardInfo.append(location);
location.textContent = `Location: ${response.data.location}`;

const profile = document.createElement('p');
cardInfo.append(profile);

const prolink = document.createElement('a');
profile.append(prolink);
prolink.href = `${response.data.html_url}`;
prolink.textContent = `Profile: ${response.data.html_url}`;

const followers = document.createElement('p');
cardInfo.append(followers);
followers.textContent = `Followers: ${response.data.followers}`;

const following = document.createElement('p');
cardInfo.append(following);
following.textContent = `Following: ${response.data.following}`;

const bio = document.createElement('p');
cardInfo.append('bio');
bio.textContent = `Bio: ${response.data.bio}`;

return card;
}



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
