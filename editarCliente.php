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
                <h2>Editar Cliente</h2>
                <form name="contactForm">
                    <input type="text"
                        hidden
                        id="docid"
                        name="docid">
                    <div class="row"> 
                        <div class="form-group col-md-6">
                            <label for="doc">Documento</label>
                            <input type="number" 
                                class="form-control" 
                                id="doc"
                                name="doc" 
                                required 
                                placeholder="Ingresar doc">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="name">Nombres</label>
                            <input type="text" 
                                class="form-control" 
                                id="name"
                                name="name" 
                                required 
                                placeholder="Ingresar los nombres">
                        </div>
                    </div> 
                    <div class="row">         
                        <div class="form-group col-md-6">
                            <label for="lastname">Apellidos</label>
                            <input type="text" 
                                class="form-control" 
                                id="lastname"
                                name="lastname" 
                                required 
                                placeholder="Ingresar los apellidos">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="lastname">Email</label>
                            <input type="email" 
                                class="form-control" 
                                id="email" 
                                name="email" 
                                required 
                                placeholder="Ingresar el Email">
                        </div>
                    </div> 
                    <div class="row">         
                        <div class="form-group col-md-6">
                            <label for="lastname">Telefono</label>
                            <input type="number" 
                                class="form-control" 
                                id="phone" 
                                name="phone" 
                                required 
                                placeholder="Ingresar el Telefono">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="lastname">Direccion</label>
                            <input type="text" 
                                class="form-control" 
                                id="address"
                                name="address" 
                                required 
                                placeholder="Ingresar la Direccion">
                        </div>
                    </div> 

                    <button type="submit" class="btn btn-primary editCliente">
                        Editar
                    </button>

                </form>  
            </div>      
        </section>
        <!-- Modal -->
        <?php require_once('partials/modal.php'); ?>
    </body>
</html>


