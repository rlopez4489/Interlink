import { getPost } from "./firebase.js";
const img = document.getElementById("principal-img");
const data = document.getElementById("header-img");
const headBody = document.getElementById("head-body");

window.addEventListener("DOMContentLoaded", async () => {
  const querySnapshot = await getPost();
  const post = querySnapshot;
  console.log(post);
  let header = "";
  let body = "";
  let headPrincipal = "";
  let diaActual = new Intl.DateTimeFormat("es-ES", { day: "numeric" }).format(
    new Date(post.timestamp.toDate())
  );
  let mesActual = new Intl.DateTimeFormat("es-ES", { month: "long" }).format(
    new Date(post.timestamp.toDate())
  );
  let anioActual = new Intl.DateTimeFormat("es-ES", { year: "numeric" }).format(
    new Date(post.timestamp.toDate())
  );
  console.log(`${diaActual} de ${mesActual} de ${anioActual}`);
  header += `<img src="${post.headerImgUrl}" alt="img" class="img-fluid">`;
  headPrincipal += `<div class="d-flex flex-column"><span class="subtitle-carousel-clients">${post.title}</span> 
  <span class="title-carousel-clients">${post.subtitle}</span>
  </div>
  <div class="d-flex justify-content-end">
  <span class="label-author">By - ${post.author} | ${diaActual} de ${mesActual} ${anioActual}</span>
  </div>
`;
  body += `${post.body}
      `;
  img.innerHTML = header;
  headBody.innerHTML = headPrincipal;
  data.innerHTML = body;
});
