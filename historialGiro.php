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
        <section id="content">
            <h2 class="title-registarg">ESTADO DE MI GIRO </h2>
            <table class="table table-bordered col-md-9">
                <thead>
                    <tr>
                        <th>Fecha de envio</th>
                        <th>Valor</th>
                        <th>Remitente</th>
                        <th>Destinatario</th>
                        <th>Direccion</th>
                        <th>Ciudad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody id="giros">
                    
                </tbody>
            </table>
        </section>
    </body>
</html>