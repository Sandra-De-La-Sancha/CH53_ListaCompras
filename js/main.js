const txtName = document.getElementById("Name");//nombre
const txtNumber = document.getElementById("Number");//cantidad
const btnAgregar = document.getElementById("btnAgregar");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
const alertValidaciones = document.getElementById("alertValidaciones");
const tablaListaCompras = document.getElementById("tablaListaCompras");
const cuerpoTabla = tablaListaCompras.getElementsByTagName("tbody").item(0);//item(0) primer elemento que encuentres


const contadorProductos = document.getElementById("contadorProductos");
const productosTotal =document.getElementById("productosTotal");
const precioTotal = document.getElementById("precioTotal");

///////////////////Validar la cantidad//////////////////////////////////////////////////     
let cont = 0; //Numeracion de la primera columna de la tabla
let costoTotal = 0;
let totalEnProductos = 0;



function validarCantidad(){
    if(txtNumber.value.trim().length <=0){ //validar longitud
        return false;
    }//length<=0

    if(isNaN(txtNumber.value)){//si txtNumber no es un numero regresa falso
            return false;
    }//isNan

    if(Number(txtNumber.value)<=0){ //constructor que lo convierte a numero y lo regresa
        return false;
    }//<=0


    return true; 
}//validarCantidad

function getPrecio(){
    return Math.round((Math.random()*10000))/100;//Nos da un numero al azar que esta en un limite
                                               ///de 10000 y luego lo divide en 100 
                                               ///round quiere decir que lo redondea
}//getprecio




btnAgregar.addEventListener("click", function(event){
    event.preventDefault();

    let isValid = true; ///Bandera por defecto que nos da true

    //////////////////////Limpia el alert//////////////////////////////////////////////////////////////////////
    alertValidacionesTexto.innerHTML=" ";
    alertValidaciones.style.display="none"; ///none para que no lo muestre/////
    txtName.style.border="";
    txtNumber.style.border="";



    txtName.value = txtName.value.trim();
    txtNumber.value= txtNumber.value.trim();

    

    if(txtName.value.length <3 ){
        txtName.style.border="solid 3px red";
        alertValidacionesTexto.innerHTML="<strong> El nombre del producto no es correcto.</strong>";
        alertValidaciones.style.display="block";
        isValid = false; //Si entra a estas validaciones la bandera se vuelve falsa
    }//length >=3
  
    if(! validarCantidad()){ //si txtnumber no es verdadero
        txtNumber.style.border="solid 3px red";
        alertValidacionesTexto.innerHTML +="</br><strong> La cantidad no es correcta.</strong>";
        alertValidaciones.style.display="block";
        isValid = false;  //Si entra a estas validaciones la bandera se vuelve falsa
    } ///validarcantidad
    /////////////Si es valido los agregara a la tabla/////////////////////
    if(isValid){
        cont++;
        let precio= getPrecio();

        let row = `<tr>
                    <td>${cont}</td>
                    <td>${txtName.value}</td>
                    <td>${txtNumber.value}</td>
                    <td>${precio}</td>
                    </tr>`;
            cuerpoTabla.insertAdjacentHTML("beforeend",row);
           
        ///contador en su texto interno es el cons
            contadorProductos.innerText = cont;


            costoTotal += precio * Number(txtNumber.value);
            contadorProductos.innerText = "$ " + costoTotal.toFixed;
            precioTotal.innerText = "$" + costoTotal.toFixed(2); //El 2 es por la cantidad de decimales
            totalEnProductos += Number(txtNumber.value);
            productosTotal.innerText = totalEnProductos;
            contadorProductos.innerText = cont;




            txtName.value ="";
            txtNumber.value="";
            txtName.focus();  //////////////agrega el foco a txtname
 
        }//if(isValid)
    

});//btnAgregar
