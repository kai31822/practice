<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name='description' content='log-in~sign-up test'>
    <meta name='keywords' content='HTML,CSS,JavaScript'>
    <meta name='author' content='kai'>
    <title>log-in & sign-up test </title>
    <link rel="stylesheet" href="LoginSignup.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    <!-- nav -->
    <header>
        <img class="logo" src="https://fakeimg.pl/100x50/?text=logo&font=lobster" alt="logo">
        <nav>
          <ul class="nav_links">
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
        <a class="contact" href="#"><button class="nav-btn">contact</button></a>
      </header>
    <!-- nav END -->
    <!-- banner -->
    <div class="container">
        <h1>會員登入</h1>
     
    </div>
    <!-- banner END -->
    <!-- account -->
    <?php
$account = array('admin' => '1234', 'web111a' => 'web111a');
// $accountuser = array('admin' , 'web111a');
// $accountpwd = array('1234','web111a');
// $account = array($accountuser,$accountpwd);
if (isset($_POST['user']) && isset($_POST['pwd']) && !empty($_POST['user']) && !empty($_POST['pwd'])) {
    if (($_POST['user'] == "admin" && $_POST['pwd'] == $account['admin'])||($_POST['user'] == "web111a" && $_POST['pwd'] == $account['web111a'])) {
       $user = $_POST['user'];
        $pwd = $_POST['pwd'];
        echo "<div id='show' class='container'><P class='ppcolor'>帳號為:{$user}</P>
        </div>";
    } else {
        
        echo "<div class='container'><P class='pcolor'>密碼錯誤!!</P>
        </div>";
    }
    // <P class='pcolor' >密碼為:{$pwd}</P>
}

?>
    <section id="log" class="container">
        <form action="index.php" method="post">
            <input type="text" id="userid" name="user" placeholder="user/email" require>
            <div class="pwd-container">
                <label id="eye"><i class="fa-solid fa-eye-slash"></i></label>
                <input type="password" id="pwd" name="pwd" value="" placeholder="password" require  >
            </div>
            <input type="submit" id="loginbtn" class="loginbtn" name="login" value="登入">
            <input type="reset" class="loginbtn" value="取消">
        </form>
    </section>
    <div class="signout-container">
    <button id="signout">登出</button>
    </div>

    
<!-- account END -->
<!-- footer -->

<!-- footer END -->

<script src="LoginSignup.js"></script>

</body>
</html>