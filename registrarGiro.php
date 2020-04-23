<?php require_once('partials/head.php'); ?>
<body>

<?php require_once('partials/header.php'); ?>

<?php require_once('partials/aside.php'); ?>


<section class="row" id="content">
                
        <form>
        <h2 class="title-registarg">registrar giro </h2>
                <div class="form-row">
                        <div class="form-group col-md-6">
                                <label for="inputEmail4">Nombres</label>
                                <input type="email" class="form-control" id="inputEmail4">
                        </div>
                        <div class="form-group col-md-6">
                                <label for="inputPassword4">Apellidos</label>
                                <input type="password" class="form-control" id="inputPassword4">
                        </div>
                        </div>
                        <div class="form-group">
                                <label for="inputAddress">Cedula</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                        </div>
                        <div class="form-group">
                        <label for="inputAddress2">Destino</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
                </div>
                <div class="form-row">
                        <div class="form-group col-md-6">
                                <label for="inputCity">City</label>
                                <input type="text" class="form-control" id="inputCity">
                        </div>
                        <div class="form-group col-md-4">
                                <label for="inputState">State</label>
                                <select id="inputState" class="form-control">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                </select>
                        </div>
                        <div class="form-group col-md-2">
                                <label for="inputZip">Valor</label>
                                <input type="text" class="form-control" id="inputZip">
                        </div>
                </div>
                <div class="form-group">
                        <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck">
                                <label class="form-check-label" for="gridCheck">
                                        Check me out
                                </label>
                        </div>
                </div>
                <button type="submit" class="btn btn-primary">Sign in</button>
        </form>
</section>
</body>
</html>


