import { getPost, getPosts } from "./firebase.js";

const firtsColumn = document.getElementById("first-column");
const alls = document.getElementById("alls");
const business = document.getElementById("business");
const franchises = document.getElementById("franchices");
const life = document.getElementById("life-usa");
const loader = document.getElementById("loader");

window.addEventListener("DOMContentLoaded", async () => {
  let postsList = [];
  let querySnapshot;

  let html = "";

  html += `
      <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      `;
  loader.innerHTML = html;

  try {
    querySnapshot = await getPosts();
    html = "";
  } catch (err) {
    console.log(err);
  }

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
  setTimeout(() => {
    loader.classList.add("d-none");
    firtsColumn.classList.remove("d-none");
  }, 1000);

  alls.addEventListener("click", (e) => {
    e.preventDefault();
    html = "";
    alls.classList.add("active");
    business.classList.remove("active");
    franchises.classList.remove("active");
    life.classList.remove("active");
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
    alls.classList.remove("active");
    business.classList.add("active");
    franchises.classList.remove("active");
    life.classList.remove("active");
    const businessBody = postsList.filter(
      (post) => post?.tag?.toLowerCase() === "negocios"
    );
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

  franchises.addEventListener("click", (e) => {
    e.preventDefault();
    html = "";
    alls.classList.remove("active");
    business.classList.remove("active");
    franchises.classList.add("active");
    life.classList.remove("active");
    const franchisesBody = postsList.filter(
      (post) => post?.tag?.toLowerCase() === "franquicias"
    );
    franchisesBody.forEach((post) => {
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

  life.addEventListener("click", (e) => {
    e.preventDefault();
    html = "";
    alls.classList.remove("active");
    business.classList.remove("active");
    franchises.classList.remove("active");
    life.classList.add("active");
    const lifeBody = postsList.filter(
      (post) => post?.tag?.toLowerCase() === "vida en usa"
    );
    if (lifeBody.length > 0) {
      lifeBody.forEach((post) => {
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
                        <span class="card-title-item mt-2" data-id="${
                          post.id
                        }">${post.title}</span>
                        <span class="date-item mt-3" data-id="${
                          post.id
                        }">By - ${post.owner} | ${post.uploadDate}
                        </span>
                        <p class="description-card-item mt-3" data-id="${
                          post.id
                        }">${post.description.substr(0, 150)}...</p>
                    </div>
                    </a>
                </div>
           
         
        `;
      });
    } else {
      html += `<div class="alert alert-info" role="alert">
    No se encontraron resultados...
  </div>`;
    }

    firtsColumn.innerHTML = html;
  });

  const cardSelected = document.querySelectorAll(".id-post");
  cardSelected.forEach((post) => {
    post.addEventListener("click", async (e) => {
      sessionStorage.setItem("id", e.target.dataset.id);
    });
  });
});
