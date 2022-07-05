<?php
    header("Content-Type:text/html; charset=utf-8");
    require_once("connDB.php");

    echo "
  <style>
  table {
    border-collapse: collapse;
  }
  </style>";

    $sql = "SELECT * FROM `students`";
    $result = mysqli_query($conn, $sql);

    //$row = mysqli_fetch_assoc($result);
    // echo "{$row['cID']}, {$row['cName']}, {$row['cSex']}, {$row['cBirthday']}, {$row['cEmail']}, {$row['cPhone']}, {$row['cAddr']}, {$row['cHeight']}, {$row['cWeight']} ";

    //製作分頁
    //預設每頁筆數
    $pageRow_records = 5;

    //預設頁數
    if(isset($_GET['page'])){
       $num_pages=$_GET['page'];
    }else{
       $num_pages=1;
    }

    //本頁開始顯示的筆數
    $startRow_records = ($num_pages - 1 ) * $pageRow_records;

    //未加上限制筆數的 SQL
    $sql_query = "SELECT * FROM `students`";

    //加上限制筆數的 SQL
    $sql_query_limit = $sql_query . "LIMIT " . $startRow_records . ", " . $pageRow_records;

    //加上限制後查詢的結果
    $result =  mysqli_query($conn, $sql_query_limit);

    //無限制的查詢結果
    $result_all = mysqli_query($conn, $sql_query);

    //計算總共需要幾頁來做顯示
    $total_records = mysqli_num_rows($result_all );

    $total_pages = ceil( $total_records / $pageRow_record );


    echo "<h1 align='center'>學生資料管理系統</h1>
          <p align=center>目前資料的筆數：{} <a href='php_mysqli_create.php'>新增學生資料</a>
          </p>
    ";


    //資料內容呈現
    echo "<p><table align='center' border='1'>";
    //表格的標題
    echo "
    <tr>
      <th>座號</th>
      <th>姓名</th>
      <th>性別</th>
      <th>生日</th>
      <th>郵件</th>
      <th>電話</th>
      <th>住址</th>
      <th>身高</th>
      <th>體重</th>
      <th colspan=2>功能</th>
      </tr>
    ";
    //表格內容
    while ($row = mysqli_fetch_assoc($result)) {
    echo "<tr align='center'>";
    echo "<td>" . $row['cID']  . "</td>";
    echo "<td>    {$row['cName']} </td>";
    echo "<td>" . $row['cSex'] . "</td>";
    echo "<td>" . $row['cBirthday'] . "</td>";
    echo "<td>" . $row['cEmail'] . "</td>";
    echo "<td>" . $row['cPhone'] . "</td>";
    echo "<td>" . $row['cAddr'] . "</td>";
    echo "<td>" . $row['cHeight'] . "</td>";
    echo "<td>" . $row['cWeight'] . "</td>";
    //新增修改與刪除功能
    echo "
       <td><a href='php_mysqli_update.php?cID="  . $row['cID'] . "'>修改</a></td>
       <td><a href='php_mysqli_delete.php?cID= {$row["cID"]} '>刪除</a></td>
    ";
    echo "</tr>";
    }

    echo "</table></p>";

    mysqli_free_result($result);
    mysqli_close($conn);

?>