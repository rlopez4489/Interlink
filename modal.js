import { collection, db, onSnapshot } from "./firebase.js";

window.addEventListener("DOMContentLoaded", async () => {
  const unsub = onSnapshot(
    collection(db, "popUp"),
    (snapshot) => {
      snapshot.docs.forEach((doc) => {
        let data = doc.data();
        document.getElementById("imgModal").src = `${data.imgUrlPopup}`;
        document.getElementById("imgModal").alt = `${data.altImgPopup}`;
        document.getElementById(
          "urlModalRedirect"
        ).href = `${data.linkToRedirect}`;
        document.getElementById(
          "urlModalRedirectG"
        ).href = `${data.linkToRedirect}`;
        switch (data.pageSelected) {
          case "home":
            let modalHome = new bootstrap.Modal(
              document.getElementById("homeModal")
            );
            if (data.active && !sessionStorage.getItem("open")) {
              modalHome.show();
            }
            break;
          case "nosotros":
            let modalNosotros = new bootstrap.Modal(
              document.getElementById("nosotrosModal")
            );
            if (data.active && !sessionStorage.getItem("open")) {
              modalNosotros.show();
            }
            break;
          case "servicios":
            let modalServicios = new bootstrap.Modal(
              document.getElementById("serviciosModal")
            );
            if (data.active && !sessionStorage.getItem("open")) {
              modalServicios.show();
            }
            break;
          case "servicios":
            let modalFranquicias = new bootstrap.Modal(
              document.getElementById("franquiciasModal")
            );
            if (data.active && !sessionStorage.getItem("open")) {
              modalFranquicias.show();
            }
            break;
          case "texas":
            let modalTexas = new bootstrap.Modal(
              document.getElementById("texasModal")
            );
            if (data.active && !sessionStorage.getItem("open")) {
              modalTexas.show();
            }
            break;
          case "california":
            let modalCalifornia = new bootstrap.Modal(
              document.getElementById("californiaModal")
            );
            if (data.active && !sessionStorage.getItem("open")) {
              modalCalifornia.show();
            }
            break;
          case "florida":
            let modalFlorida = new bootstrap.Modal(
              document.getElementById("floridaModal")
            );
            if (data.active && !sessionStorage.getItem("open")) {
              modalFlorida.show();
            }
            break;
          case "inversionistas":
            let modalInversionistas = new bootstrap.Modal(
              document.getElementById("inversionistasModal")
            );
            if (data.active && !sessionStorage.getItem("open")) {
              modalInversionistas.show();
            }
            break;
          case "visa-e2":
            let modalVisaE2 = new bootstrap.Modal(
              document.getElementById("visaE2Modal")
            );
            if (data.active && !sessionStorage.getItem("open")) {
              modalVisaE2.show();
            }
            break;
          case "visa-e1":
            let modalVisaE1 = new bootstrap.Modal(
              document.getElementById("visaE1Modal")
            );
            if (data.active && !sessionStorage.getItem("open")) {
              modalVisaE1.show();
            }
            break;
          case "visa-eb-5":
            let modalVisaEB5 = new bootstrap.Modal(
              document.getElementById("visaEB5Modal")
            );
            if (data.active && !sessionStorage.getItem("open")) {
              modalVisaEB5.show();
            }
            break;
          case "visa-l1":
            let modalVisaL1 = new bootstrap.Modal(
              document.getElementById("visaL1Modal")
            );
            if (data.active && !sessionStorage.getItem("open")) {
              modalVisaL1.show();
            }
            break;
          case "blog":
            let modalBlog = new bootstrap.Modal(
              document.getElementById("blogModal")
            );
            if (data.active && !sessionStorage.getItem("open")) {
              modalBlog.show();
            }
            break;
          case "cursos":
            let modalCursos = new bootstrap.Modal(
              document.getElementById("cursosModal")
            );
            if (data.active && !sessionStorage.getItem("open")) {
              modalCursos.show();
            }
            break;
          case "contacto":
            let modalContacto = new bootstrap.Modal(
              document.getElementById("contactoModal")
            );
            if (data.active && !sessionStorage.getItem("open")) {
              modalContacto.show();
            }
            break;
          case "texasAds":
            let modalTexasAds = new bootstrap.Modal(
              document.getElementById("texasAdsModal")
            );
            if (data.active && !sessionStorage.getItem("open")) {
              modalTexasAds.show();
            }
            break;
          case "floridaAds":
            let modalFloridaAds = new bootstrap.Modal(
              document.getElementById("floridaAdsModal")
            );
            if (data.active && !sessionStorage.getItem("open")) {
              modalFloridaAds.show();
            }
            break;
          case "alls":
            let modalAlls = new bootstrap.Modal(
              document.getElementById("allsModal")
            );
            document.getElementById(
              "generalImgModal"
            ).src = `${data.imgUrlPopup}`;
            document.getElementById(
              "generalImgModal"
            ).alt = `${data.altImgPopup}`;
            if (data.active && !sessionStorage.getItem("open")) {
              setTimeout(() => {
                modalAlls.show();
              }, 1000);
            }
            break;
          default:
            if (data.active && !sessionStorage.getItem("open")) {
              modalHome.show();
            }
        }
      });
    },
    (error) => {
      console.log(error);
    }
  );
});

document.getElementById("btnCloseModal").addEventListener("click", () => {
  sessionStorage.setItem("open", true);
});
