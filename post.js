import { getPost } from "./firebase.js";
const img = document.getElementById("principal-img");
const data = document.getElementById("header-img");
window.addEventListener("DOMContentLoaded", async () => {
  const querySnapshot = await getPost();
  const post = querySnapshot;
  let header = "";
  let body = "";
  header += `<img src="${post.urlImage}" alt="img" class="img-fluid">`;
  body += `
  
                  <div style="border:1px solid red" class="col-lg-4 id-post col-sm-12 mt-4" >
                  <div class="card-item" data-id="${post.id}">
                      <img class="img-fluid" data-id="${post.id}" src=${
    post.urlImage
  } alt="">
                      <span class="tab-name mt-2" data-id="${post.id}">${
    post.tag
  }</span>
                      <span class="card-title-item mt-2" data-id="${post.id}">${
    post.title
  }</span>
                      <span class="date-item mt-3" data-id="${post.id}">By - ${
    post.owner
  } | ${post.uploadDate}
                      </span>
                      <p class="description-card-item mt-3" data-id="${
                        post.id
                      }">${post.description.substr(0, 150)}...</p>
                  </div>
              </div>
                  
       
      `;
  img.innerHTML = header;
  data.innerHTML = body;
});
