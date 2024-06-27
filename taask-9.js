//********************************1
// let x = document.getElementById('xxx');
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(posts => {
//         posts.forEach(post => {
//             let zaid = document.createElement('div');
//             zaid.innerHTML = `<h1>${post.title}</h1><h4>${post.body}</h4>`;
            
//             x.appendChild(zaid);
//         });
//     })
//     .catch(error => console.error('Error fetching posts:', error));



//********************************2
// let xxx = document.getElementById('xxx');
// fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
// .then(response => response.json())
// .then(zz => {
// zz.forEach(comment => {
// let y = document.createElement('div');
// y.innerHTML = `
//     <h4>${comment.name}</h4>
//     <p><strong>Email:</strong> ${comment.email}</p>
//     <p>${comment.body}</p>
// `;

// xxx.appendChild(y);
// });
// })
// .catch(error => console.error('Error fetching comments:', error));



//********************************3
// document.addEventListener('DOMContentLoaded', function() {
//     const albumsContainer = document.getElementById('xxx');

//     fetch('https://jsonplaceholder.typicode.com/albums?userId=1')
//         .then(response => response.json())
//         .then(albums => {
//             albums.forEach(album => {
//                 const albumElement = document.createElement('div');
//                 albumElement.innerHTML = `<h3>${album.title}</h3>`;
//                 albumsContainer.appendChild(albumElement);
//             });
//         })
//         .catch(error => console.error('Error fetching albums:', error));
// });
