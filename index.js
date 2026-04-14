// // Write your code here!
// document.addEventListener("DOMContentLoaded", function() {
//   getPosts();
// });


// // async function housing the fetch
// async function getPosts() {
//   try {

//     // await fetch
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");

//     // await json conversion
//     const data = await response.json();

//     // call displayPosts after fetch completes
//     displayPosts(data);

//   } catch(error) {
//     console.log("Error: " + error);
//   }
// }


// display posts function
// function displayPosts(posts) {

//   // select the ul by id
//   const ul = document.getElementById("post-list");

//   // loop through posts array
//   posts.forEach(function(post) {

//     // create li tag
//     const li = document.createElement("li");

//     // create h1 and add title as textContent
//     const h1 = document.createElement("h1");
//     h1.textContent = post.title;

//     // create p and add body as textContent
//     const p = document.createElement("p");
//     p.textContent = post.body;

//     // append h1 and p to li
//     li.appendChild(h1);
//     li.appendChild(p);

//     // append li to ul
//     ul.appendChild(li);
//   });
// }

// // // ── .then() version ──────────────────────────────
// // fetch("https://jsonplaceholder.typicode.com/posts")
// //   .then(function(response) {
// //     return response.json();
// //   })
// //   .then(function(data) {
// //     displayPosts(data);
// //   })
// //   .catch(function(error) {
// //     console.log("Error: " + error);
// //   });


// // ── Async/Await version ───────────────────────────
// async function getPosts() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data     = await response.json();
//     displayPosts(data);
//   } catch(error) {
//     console.log("Error: " + error);
//   }
// }
// getPosts();

// Function to display posts
function displayPosts(posts) {
  const postList = document.getElementById('post-list');
  postList.innerHTML = ''; // clear any existing content

  posts.forEach(post => {
    const li = document.createElement('li');

    const h1 = document.createElement('h1');
    h1.textContent = post.title;

    const p = document.createElement('p');
    p.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);
    postList.appendChild(li);
  });
}

// Async function to fetch posts
async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    displayPosts(data);
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

// Call the async function
fetchPosts();
