<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Sign UP</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  </head>
  <body>
    <div class="container">
        <form id="signUpForm" class="card p-4 mt-5">
            <h2>Login</h2>
            <div>
              <label for="form-label">Email</label>
              <input type="text" name="email" class="form-control">
              <span class="error"></span>
            </div>
            
            <div class="mt-3">
              <label for="form-label">Password</label>
              <input type="password" name="password" class="form-control">
              <span class="error"></span>
            </div>
            <input type="submit" name="signbtn" class="btn btn-primary mt-4" value="Sign Up">
        </form>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

    <script src="script.js">
    </script>
  </body>
</html>