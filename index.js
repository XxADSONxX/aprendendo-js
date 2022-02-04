

      /* var nomes = ["Adson", "igor", "Maria"];
var notasA = [9.4, 9.9, 8.9];
var notasB = [7.6, 8.3, 9.9];

function media(n1, n2) {
    return (n1 + n2) / 2;
}

function passou(media) {

    if (media > 7) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

for (var index in nomes) {

    var nota1 = notasA[index];
    var nota2 = notasB[index];

    var m = media(nota1, nota2);

    console.log(nomes[index] +
        " - " +
        nota1 +
        " - " +
        nota2 +
        " - " +
        m +
        " - " +
        passou (m));
}*/

/*var aluno = {
    nome: "bruno",
    notas: [5.0, 8.0]
}
console.log(aluno["notas"][1])*/

/* function CriarAluno(nome, n1, n2) {

    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function() {
            return (this.nota1 + this.nota2) / 2;
        }
    }
} */



/* var turma = [
    CriarAluno("Adson", 9, 8),
    CriarAluno("Caio", 7, 9),
    CriarAluno("Sandra", 9, 5)
] 

var aluno = turma[0];
 */
/* 
 function aluno(nome, n1, n2){
     this.aluno = aluno;
     this.nota1 = n1;
     this.nota2  = n2;
     
     this.media = function() {
         return(this.nota1 + this.nota2) /2;
     }
 }

 var a = new aluno("Igor", 9, 7);
 var a = new aluno("Adson", 9, 10);

 console.log(a.media()); */
/* console.log(aluno); */
/* console.log(aluno.media()); */
   
        
   
/* ++++++++++++++++++++++++++++++++++++++++++*/

/* function obj(n, s) {
    return {
        nome: n,
        sobrenome: s
    } 
}
    var aluno = obj("Adson", "Santana");

    console.log(aluno); */
/* 
    const d = new Date ();
    console.log(d); */

       /*  function media() {
        
                const a = 10;
                const b = 20;
                const c = (a + b) / 2;

                console.log(c);
          
        }
     */

        /* function change(){
            let h1 = document.getElementsByTagName("h1")[0]
            h1.style.color = "red";
        } */
         /* function hideh1(){
           let h1 = document.getElementsByTagName("h1")[0]
           h1.style.color = "red";
           
        alert("funcionando");
        } */

/* 
      function changeH1(i) {
          let h1 = document.getElementsByTagName("h1")[0]
          h1.innerText = i.value;
      } */

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