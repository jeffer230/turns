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
            <h2 class="title-registarg"> Clientes </h2>
            <table class="table table-bordered col-md-9">
                <thead>
                    <tr>
                        <th>Documento</th>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Email</th>
                        <th>Telefono</th>
                        <th>Dirección</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody id="customers">
                
                </tbody>

            </table>
        </section>
    </body>
</html>