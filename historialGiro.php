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
                        <th>#</th>
                        <th>FECHA DE ENVIO</th>
                        <th>VALOR</th>
                        <th>FECHA DE RETIRO</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>1 marzo</td>
                        <td>$100.000</td>
                        <td>30 marzo</td>

                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>1 abril</td>
                    <td>$200.000</td>
                    <td>30 abril</td>

                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>1 mayo</td>
                        <td>$300.000</td>
                        <td>30 mayo</td>
                    </tr>
                </tbody>
            </table>
        </section>
    </body>
</html>