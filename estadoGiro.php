<?php require_once('partials/head.php'); ?>
<body>

<?php require_once('partials/header.php'); ?>

<?php require_once('partials/aside.php'); ?>

<section id="content">
<h2 class="title-registarg">ESTADO DE MI GIRO </h2>

    <table class="table table-bordered col-md-9">
        <thead>
            <tr>
                <th>#</th>
                <th>FECHA</th>
                <th>VALOR</th>
                <th>ESTADO</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>1 marzo</td>
                <td>$100.000</td>
                <td>Enviado</td>

            </tr>
            <tr>
            <th scope="row">2</th>
            <td>1 abril</td>
            <td>$200.000</td>
            <td>Proceso</td>

            </tr>
            <tr>
                <th scope="row">3</th>
                <td>1 mayo</td>
                <td>$300.000</td>
                <td>Denegado</td>
            </tr>
        </tbody>
    </table>
</section>
</body>
</html>