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
                        <form name="contactForm">
                                <div class="row"> 
                                        <div class="form-group col-md-6">
                                            <label for="doc">Nombre del remitente</label>
                                            <input type="text" class="form-control" id="nomRemitente" required placeholder="Ingresar los nombres">
                                        </div>
                                </div> 
                                <div class="row">       
                                       <div class="form-group col-md-6">
                                            <label for="name">Documento del reminitente</label>
                                            <input type="number" class="form-control" id="docRemitente" required placeholder="Ingresar doc ">
                                        </div>     
                                </div> 
                                <div class="row">
                                        <div class="form-group col-md-6">
                                            <label for="lastname">Lugar de envio</label>
                                            <input type="lastname" class="form-control" id="lugarEnvio" required placeholder="ingresar el lugar">
                                        </div>
                                </div> 
                                <button type="submit" class="btn btn-primary registrarGiro">
                                        Registrar
                                </button>

  <!--                                   RegistrarGiro
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


