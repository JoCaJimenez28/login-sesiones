
        /****************************************************************
         *  Funcion que muestra en la pagina Web la tabla con los datos *
         *  guardados en la BD                                          *
         ****************************************************************/
        function mostrarVehiculo() {
            /*if (window.XMLHttpRequest) {
                // Codigo para  IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            } else { // Codigo para IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }

            // Funcion que obtiene el resultado
            xmlhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {   //4= Completado 200=Exitoso
                    // Modificar la pagina indicando donde
                    document.getElementById("txtHint").innerHTML = this.responseText;
                }
            }

            // Indicar a quien llamar y modo
            xmlhttp.open("GET", "mostrar_usuario.php", true);
            // Enviar
            xmlhttp.send();*/
            $.get('mostrar_vehiculo.php',
            function(respuesta,status){
                $("#txtHint").html(respuesta);
            },)
        }

        function mostrarVehiculoPlaca(valor) {
            $.get('mostrar_vehiculoPlaca.php',
            function(respuesta){
                $("#txtHint").html(respuesta);
            },);
            
        }
        /******************************************************************
         *          Funcion que borra todo el contenido de la BD          *
         ******************************************************************/
        function borrarVehiculo() {
              // Crea el objeto XMLHttpRequest
            if (window.XMLHttpRequest) {
                // Codigo para  IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            } else { // Codigo para IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
    
            // Abre la conexion
            xmlhttp.open("GET", "eliminar_vehiculo.php", true);
                
            // Hace la peticion
            xmlhttp.send();
            //return false; //Si se quiere anular el submit
        }
       
        /*****************************************************************************
         *        Funcion que borra de la BD el dato seleccionado en el combo        *
         *****************************************************************************/         
         function borrarVehiculo2() {
            /*//Obtiene el valor elegido con el SELECT
            var dato=document.getElementById('seleccion').value;
            var dato2= new FormData();
            dato2.append('id',dato);
            // Crea el objeto XMLHttpRequest
            if (window.XMLHttpRequest) {
                // Codigo para  IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            } else { // Codigo para IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }

            // Abre la conexion
            xmlhttp.open("POST", "eliminar_usuarios2.php", true);
            
            // Hace la peticion
            xmlhttp.send(dato2);

            //return false; //Si se quiere anular el submit*/
            $.post("borrar_vehiculo2.php",
               {placa:$("#seleccion")} 
             );
             
        }
        

        /******************************************************************
         *        Funcion que borra de la BD el renglon seleccionado         *
         ******************************************************************/         
         function borrarVehiculo3(valor) {
            /*//Obtiene el valor elegido con el SELECT
            var dato=valor;
            //alert(dato);
            var dato3= new FormData();
            dato3.append('id',dato);
            // Crea el objeto XMLHttpRequest
            if (window.XMLHttpRequest) {
                // Codigo para  IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            } else { // Codigo para IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }

            // Abre la conexion
            xmlhttp.open("POST", "eliminar_usuarios3.php", true);
            
            // Hace la peticion
            xmlhttp.send(dato3);

            //return false; //Si se quiere anular el submit*/
            $.post("borrar_vehiculo3.php",
           {placa:valor}
            );

        }

        /*********************************************************************
         *               Funcion que inserta datos en la BD                  *
         *********************************************************************/
        function insertarVehiculo(){
            /*//Obtiene el formulario
            var mi_form=document.getElementById("mi_formulario");
            
            // Valida los campos del formulario 
            if (mi_form.checkValidity()){
            
                //Obtiene los datos del formulario
                var datos_form=new FormData(mi_form);
            
                // Crea el objeto XMLHttpRequest
                if (window.XMLHttpRequest) {
                    // Codigo para  IE7+, Firefox, Chrome, Opera, Safari
                    xmlhttp = new XMLHttpRequest();
                } 
                else { 
                    // Codigo para IE6, IE5
                    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                }

                // Abre la conexion
                xmlhttp.open("POST", "insertar_usuario.php", true);
                
                // Envia los datos del frmulario
                xmlhttp.send(datos_form);

                //return false; //Si se quiere anular el submit

            }       
            else{
                alert("Datos incorrectooos");
            }*/

            alert("entro ");
            

                $.post("insertar_vehiculo.php",
                {        
                placa:$("#mi_placa").val(),
                tipo:$("#mi_tipo").val(),
                marca:$("#mi_marca").val(),
                modelo:$("#mi_modelo").val(),
                version:$("#mi_version").val(),
                nserie:$("#mi_nserie").val()
                });
                alert("salio ");
        }      

        /************************************************************************
         *  Funcion que crea un selector en HTML con opciones de una BD y lo    *
         *  agrega en la pagina. Usa Ajax para elegir la posicion del selector  *
         *  en la pagina                                                        *
         ************************************************************************/
        
        

        /*************************************************************************
         * Funcion que será llamada por el Selector.                             * 
         *************************************************************************/
        function mifuncion(){
           //No hace nada
        }

