     
        /************************************************************************
         *  Funcion que crea un selector en HTML con opciones de una BD y lo    *
         *  agrega en la pagina. Usa Ajax para elegir la posicion del selector  *
         *  en la pagina                                                        *
         ************************************************************************/
    

        /*************************************************************************
         * Funcion que sará llamada por el Selector. Obtiene el valor elegido y  *
         * llama a la funcion que mostrara los datos correspondientes de la BD   *                                            *
         *************************************************************************/
        function mifuncion(){
            //Obtiene el valor elegido con el SELECT
            var dato=document.getElementById('seleccion').value;
            //Llama funcion que obtiene los datos buscados
            llamarPhp(dato);
        }
            
       /********************************************************************************* 
        * Funcion que hace una consulta a la BD. llama a "consulta.php" que crear una   * 
        * una tabla HTML con la respuesta de la consulta del valor recibido.            *
        *********************************************************************************/
       function llamarPhp(dato){
        // AJAX
        $.ajax({
               //Tipo de envio
               type: "GET",
               //URL destino
               url: "consulta.php",
               //Datos a enviar
               data: {q:dato},  // Se forma la cadena consulta.php?q=2
               
               //Procesa dato recibido. Obtiene la tabla HTML en el objeto "respuesta"
               success: function (respuesta) {
                   //Coloca el resultado en la pagina WEB
                   $("#resultado").html(respuesta);
               },
               
               //Procesa mensaje de error
               error: function (e) {
                   //Coloca un mensaje en la pagina WEB
                   $("#result").text("error:"+e.status+"error:"+e.statusText);
               }
           }); 
   }

