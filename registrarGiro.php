<!DOCTYPE html>
<html>
        <!-- head -->
        <?php require_once('partials/head.php'); ?>
        <!-- session start -->
        <?php require_once('partials/session.php'); ?>
        <!-- body -->
        <body>
                <!-- header -->
                <?php require_once('partials/header.php'); ?>
                <!-- aside -->
                <?php require_once('partials/aside.php'); ?>
                <!-- section -->
                <section  class="row" id="content">
                    <div class="container">
                        <h2>Registrar Giro</h2><br/><br/>
                        <form name="girosForm">
                                <div class="row"> 
                                     <div class="form-group col-md-6">
                                       <label>Seleccione remitente</label>
                                        <select class="form-control" id="remitente">
                                          <option value="0">seleccione</option>                                     
                                        </select>
                                     </div>  
                                     
                                      <div class="form-group col-md-6">
                                       <label>Seleccione Destinatario</label>
                                        <select class="form-control" id="destino">
                                          <option value="0">seleccione</option>                                     
                                        </select>
                                     </div>   
                                </div> 

                                <div class="row">       
                                       <div class="form-group col-md-6">
                                            <label for="name">Valor de giro</label>
                                            <input type="number" class="form-control" id="valorGiro" required placeholder="Ingresar valor">
                                        </div>    
                                        <div class="form-group col-md-6">
                                            <label for="lastname">Fecha</label>
                                            <input type="date" class="form-control" id="fechaGiro" required placeholder="ingresar fecha">
                                        </div>
                                </div> 
                                
                                 <div class="row">
                                        <div class="form-group col-md-6">
                                            <label for="lastname">Destino (direccion)</label>
                                            <input type="text" class="form-control" id="direccion" required placeholder="ingresar destino">
                                        </div>

                                        <div class="form-group col-md-6">
                                           <label>Seleccione ciudad</label>
                                            <select class="form-control" id="ciudad">
                                              <option value="0">seleccione</option>     
                                            </select>
                                     </div>   
                                </div> 
                                <button type="submit" class="btn btn-primary registrarGiro">
                                        Registrar
                                </button>

  <!--  RegistrarGiro
    id_registroGiro
    id_Remitente
    id_Destinatario
    valor
    fecha
    destino
    id_Estado -->

                        </form>
                          
                    </div>
                        
                </section>
        </body>
</html>


