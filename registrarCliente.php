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
                        <h2>Registrar Cliente</h2>
                        <form method="post" name="contactForm">
                                <div class="row"> 
                                        <div class="form-group col-md-6">
                                            <label for="doc">Documento</label>
                                            <input type="number" class="form-control" id="doc" required placeholder="Ingresar doc">
                                        </div>
                                </div> 
                                <div class="row">       
                                       <div class="form-group col-md-6">
                                            <label for="name">Nombres</label>
                                            <input type="text" class="form-control" id="name" required placeholder="Ingresar los nombres">
                                        </div>
                                
                                        <div class="form-group col-md-6">
                                            <label for="lastname">Apellidos</label>
                                            <input type="lastname" class="form-control" id="lastname" required placeholder="ingresar los apellidos">
                                        </div>
                                </div> 
       
                                <button type="submit" class="btn btn-primary registrar">
                                        Aceptar
                                </button>

                        </form>
                          
                    </div>
                        
                </section>
                
        </body>
</html>


