import { db, doc, onSnapshot, updatePost } from "./firebase.js";
const img = document.getElementById("principal-img");
const data = document.getElementById("header-img");
const headBody = document.getElementById("head-body");
const commentsHtml = document.getElementById("comments");

window.addEventListener("DOMContentLoaded", async () => {
  setTimeout(() => {
    document.getElementById("loader").classList.toggle("d-none");
  }, 1800);
  let post;

  onSnapshot(doc(db, "blogs", sessionStorage.getItem("id")), (doc) => {
    post = doc.data();
    let header = "";
    let body = "";
    let headPrincipal = "";
    let commentsBody = "";
    let diaActual = new Intl.DateTimeFormat("es-ES", { day: "numeric" }).format(
      new Date(post.timestamp.toDate())
    );
    let mesActual = new Intl.DateTimeFormat("es-ES", { month: "long" }).format(
      new Date(post.timestamp.toDate())
    );
    let anioActual = new Intl.DateTimeFormat("es-ES", {
      year: "numeric",
    }).format(new Date(post.timestamp.toDate()));
    console.log(`${diaActual} de ${mesActual} de ${anioActual}`);
    header += `<img src="${post.headerImgUrl}" alt="img" class="img-fluid">`;
    headPrincipal += `
    <div class="row">
    <div class="col-lg-6 col-sm-12">
    <div class="d-flex flex-column"><span class="subtitle-carousel-clients mt-4 mt-lg-0 mt-sm-4">${post.title}</span> 
    <span class="title-carousel-clients mt-2 mt-lg-0 mt-sm-2">${post.subtitle}</span>
    </div>
    </div>
    <div class="col-lg-6 col-sm-12 d-flex align-items-end justify-content-lg-end justify-content-sm-start">
    <div class="d-flex justify-content-end mt-3 mt-lg-0 mt-sm-3">
    <span class="label-author">By - ${post.author} | ${diaActual} de ${mesActual} ${anioActual}</span>
    </div>
    </div>
    </div>
    
 
     
    `;
    body += `${post.body}
          `;
    img.innerHTML = header;
    headBody.innerHTML = headPrincipal;
    data.innerHTML = body;

    const { comments } = post;

    comments.forEach((comment) => {
      let diaActual = new Intl.DateTimeFormat("es-ES", {
        day: "numeric",
      }).format(new Date(comment.timestamp.toDate()));
      let mesActual = new Intl.DateTimeFormat("es-ES", {
        month: "long",
      }).format(new Date(comment.timestamp.toDate()));
      let anioActual = new Intl.DateTimeFormat("es-ES", {
        year: "numeric",
      }).format(new Date(comment.timestamp.toDate()));

      const commentsExist = (comment) => {
        if (comment) {
          return `<div class="ms-5 mt-4">
              <div class="d-flex align-items-center">
                <div class="me-3">
                  <i style="font-size: 30px;" class="fa-solid fa-user"></i>
                </div>
                <div class="d-flex flex-column">
                  <span class="letter-type">
                    ${comment?.response ? comment?.response[0]?.author : ""}
                  </span>
                  <span class="letter-type"></span>
                </div>
              </div>
              <span class="d-block mt-2 letter-type">
                ${comment?.response ? comment?.response[0]?.message : ""}
              </span>
            </div>;`;
        } else return "";
      };
      commentsBody += `
        <div class="comment-container mt-2">
        <div class="d-flex align-items-center">
            <div class="me-3">
                <i style="font-size: 30px;" class="fa-solid fa-user"></i>
            </div>
            <div class="d-flex flex-column">
                <span class="letter-type">${comment.name}</span>
                <span class="letter-type">${diaActual} ${mesActual} ${anioActual} </span>
            </div>
        </div>
        <div>
            <span class="d-block mt-2 letter-type">${comment?.comment}</span>
        </div>
      ${commentsExist(comment.response)}
      </div>
        `;
    });

    commentsHtml.innerHTML = commentsBody;
  });
});

document.getElementById("form-comments").addEventListener("submit", (e) => {
  e.preventDefault();
  let fullname = document.getElementById("fullname").value;
  let email = document.getElementById("email").value;
  let comment = document.getElementById("comment").value;
  updatePost({
    name: fullname,
    timestamp: new Date(),
    email: email,
    comment: comment,
    id: Math.floor(Math.random() * 999999),
  });
});
