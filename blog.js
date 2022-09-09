import { getPost, getPosts } from "./firebase.js";

const firtsColumn = document.getElementById("first-column");
const alls = document.getElementById("alls");
const business = document.getElementById("business");
const franchises = document.getElementById("franchises");
const visa = document.getElementById("visa");

window.addEventListener("DOMContentLoaded", async () => {
  let postsList = [];
  const querySnapshot = await getPosts();
  let html = "";
  querySnapshot?.forEach((doc) => {
    postsList.push(doc.data());
    const post = doc.data();
    post.id = doc.id;

    html += `

                <div class="col-lg-4 id-post col-sm-12 mt-4" >
                <a href="post.html" class="d-inline-block">
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
                </a>
            </div>
       
     
    `;
  });
  firtsColumn.innerHTML = html;

  alls.addEventListener("click", (e) => {
    e.preventDefault();
    html = "";
    alls.classList.toggle("active");
    business.classList.toggle("active");
    postsList.forEach((post) => {
      html += `
  
                  <div class="col-lg-4 id-post col-sm-12 mt-4" >
                  <a href="post.html" class="d-inline-block">
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
                  </a>
              </div>
         
       
      `;
    });
    firtsColumn.innerHTML = html;
  });

  business.addEventListener("click", (e) => {
    e.preventDefault();
    html = "";
    alls.classList.toggle("active");
    business.classList.toggle("active");
    const businessBody = postsList.filter((post) => post.tag === "Negocios");
    businessBody.forEach((post) => {
      html += `
  
                  <div class="col-lg-4 id-post col-sm-12 mt-4" >
                  <a href="post.html" class="d-inline-block">
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
                  </a>
              </div>
         
       
      `;
    });
    firtsColumn.innerHTML = html;
  });

  const cardSelected = document.querySelectorAll(".id-post");
  cardSelected.forEach((post) => {
    post.addEventListener("click", async (e) => {
      sessionStorage.setItem("id", e.target.dataset.id);
    });
  });
});
