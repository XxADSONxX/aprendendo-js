      function hideH1() {
        let h1 = document.getElementsByTagName("h1")[0]
        h1.style.display = "none";
      }
      function aparecerh1() {
        let h1 = document.getElementsByTagName("h1")[0]
        h1.style.display = "block";
      }

      function on(elemento) {
        elemento.style.backgroundColor = "red";
      }
      function out(elemento) {
          elemento.style.backgroundColor = "#00FFFF";
      }