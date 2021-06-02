document.getElementById("titulo2")

function mostrar() {

    var N_tablas = document.getElementById("numero1").value;

    var contenedor = document.getElementById("resultado");

    
    document.getElementById('resultado').innerHTML = "";  /* Limpiar div contenedor */
    document.getElementById('titulo').innerHTML = "<p><b class: 'titulo_tabla> Se muestran las tablas del multiplicar hasta numero  "+ N_tablas +": </b></p><br>";
    if(N_tablas>0){
        for (let i = 1; i <= N_tablas; i++ ){ 
            
            var lista = contenedor.appendChild(document.createElement ("div"));
            lista.innerHTML += "<h3> Tabla N°" + i + "</h3";
            
            for (var j= 1; j<=10; j++) {
                
                /* for para obtener la tabla de multiplicar */
                if (((j*i)%2)==0) {
                    var par = "rgb(10, 137, 160)";
                    lista.innerHTML += "<p style ='color:" + par+ ";'>"  + i + "  x  " + j + "  =   " + (j*i) + "   Par" + " </b> <br>";
                }

                else {
                    var impar = "tomato"
                    lista.innerHTML += "<p style = 'color:" + impar + "'>" + i + "  x  " + j + "  =   " + (j*i) + "  Impar"+" </b><br>";
                }

            /* document.getElementById('resultado').innerHTML += "<li>" + j + "x" + i + "=" + (j*i) + "</li>"; */ 
            /*lista.appendChild(document.createElement ("li")).innerHTML +=  i + "x" + j + "=" + (j*i) + "<br>"; */
            }
        } 
    }
    else{
        alert("")
    }

}