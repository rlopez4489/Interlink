import { getPosts } from "./firebase.js";

const firtsColumn = document.getElementById("first-column");
const loader = document.getElementById("loader");
const headerBlog = document.getElementById("headerPrincipal");

window.addEventListener("DOMContentLoaded", async () => {
  let postsList = [];
  let querySnapshot;

  let html = "";
  let headerBlogContent = "";

  try {
    querySnapshot = await getPosts();
    html = "";
  } catch (err) {
    console.log(err);
  }

  querySnapshot?.forEach((doc) => {
    postsList.push({ ...doc.data(), id: doc.id });
    postsList.sort(function (a, b) {
      return new Date(b.timestamp.toDate()) - new Date(a.timestamp.toDate());
    });
  });
  const post = postsList[0];
  let diaActual = new Intl.DateTimeFormat("es-ES", { day: "numeric" }).format(
    new Date(post.timestamp.toDate())
  );
  let mesActual = new Intl.DateTimeFormat("es-ES", { month: "long" }).format(
    new Date(post.timestamp.toDate())
  );
  let anioActual = new Intl.DateTimeFormat("es-ES", {
    year: "numeric",
  }).format(new Date(post.timestamp.toDate()));
  // leemos los enlaces, en tu caso deberás usar un selector más específico
  let enlaces = document.getElementsByClassName("blog-id");
  // leemos la dirección de la página y comprobamos si tiene ?
  let url = window.location.href;
  let conector = url.indexOf("?") < 0 ? "?" : "&";

  // para cada enlace
  for (let x = 0; x < enlaces.length; x++) {
    // reemplazamos su href por la URL + el parámetro con el conector correcto
    enlaces[x].href =
      url + enlaces[x].getAttribute("href")?.replace("?", conector);
  }

  let titleAux = post.title;
  console.log(titleAux.replace(/\s/g, " ").split(" ").join("-"));
  headerBlogContent += `
 
  <img loading="lazy" class="img-fluid d-none d-lg-block d-sm-none"
      src=${post.headerImgUrl} alt="Header franquicias">
  <div class="container position-relative">
      <div class="card-header-franchise id-post">
        <div class="d-flex title-margin ms-3 me-lg-5 me-3 ms-lg-5">
          <div>
            <hr class="hr-main-white mt-2">
          </div>
          <div class="d-flex flex-column ms-4">
            <h1 class="titulo-portada-franchise">${post.title}
            </h1>
            <span class="subtitle-header-franchise mt-3">${post.subtitle}</span>
            <span class="title-paragraph mt-4">By - ${
              post.author
            } | ${diaActual} de ${mesActual} ${anioActual}
            </span>
            <p class="header-paragraph mt-3">${post.short_description.substr(
              0,
              350
            )}...
            </p>
            <a class="blog-id" href="post.html?${post.url}?id=${
    post.id
  } " class="d-inline-block"><span class="read-more" data-id="${
    post.id
  }">Leer más</span></a>
          </div>
        </div>
      </div>
  </div>

  `;

  let listPost = [...postsList];
  if (screen.width > 850) {
    listPost = listPost.slice(1, listPost.length);
  } else {
    listPost = [...postsList];
  }

  listPost.forEach((post) => {
    let diaActual = new Intl.DateTimeFormat("es-ES", { day: "numeric" }).format(
      new Date(post.timestamp.toDate())
    );
    let mesActual = new Intl.DateTimeFormat("es-ES", { month: "long" }).format(
      new Date(post.timestamp.toDate())
    );
    let anioActual = new Intl.DateTimeFormat("es-ES", {
      year: "numeric",
    }).format(new Date(post.timestamp.toDate()));
    html += `
    <div class="col-lg-4 id-post col-sm-12 mt-4">
    <a class="blog-id" href="post.html?${post.url}?id=${post.id}" class="d-inline-block">
    <div class="card-item" data-id="${post.id}">
        <img loading="lazy" class="img-fluid" data-id="${post.id}" src=${
      post.imgUrl
    } alt="Image">
      <div class="d-block mt-2">
        <span class="tab-name" data-id="${post.id}">${post.category}</span>
      </div>
        <span class="card-title-item mt-2" data-id="${post.id}">${
      post.title
    }</span>
        <span class="date-item mt-3" data-id="${post.id}">By - ${
      post.author
    } | ${diaActual} de ${mesActual} ${anioActual}
        </span>
        <p class="description-card-item mt-3" data-id="${
          post.id
        }">${post.short_description.substr(0, 150)}...</p>
    </div>
    </a>
    </div>
    `;
  });

  headerBlog.innerHTML = headerBlogContent;
  firtsColumn.innerHTML = html;
  setTimeout(() => {
    loader.classList.toggle("d-none");
  }, 1000);
  const cardSelected = document.querySelectorAll(".id-post");
  console.log(cardSelected);
  cardSelected.forEach((post) => {
    post.addEventListener("click", async (e) => {
      console.log(e.target.dataset.id);
      sessionStorage.setItem("id", e.target.dataset.id);
    });
  });
});
