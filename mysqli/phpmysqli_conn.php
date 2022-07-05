<style>
table,
td,
th {
  border-collapse: collapse;
  border: 1px solid red;
}
</style>
<?php
header("Content-Type:text/html;charset=utf-8");
require_once "phpmysqli.inc.php";

$sql = "SELECT * FROM students";
$result = mysqli_query($conn, $sql);

// `cID`, `cName`, `cSex`, `cBirthday`, `cEmail`, `cPhone`, `cAddr`, `cHeight`, `cWeight
// 資料表
//table頭
echo "<table>
  <caption>學生資料表</caption>
  <thead>
    <tr>
      <th>座號</th>
      <th>姓名</th>
      <th>性別</th>
      <th>生日</th>
      <th>電子信箱</th>
      <th>手機號碼</th>
      <th>地址</th>
      <th>身高</th>
      <th>體重</th>
      <th colspan='2'>功能</th>
    </tr>
  </thead>
  <tbody>";

// table身體

while ($row = mysqli_fetch_assoc($result)) {
    echo "<tr>
  <td >{$row['cID']}</td>
  <td >{$row['cName']}</td>
  <td >{$row['cSex']}</td>
  <td >{$row['cBirthday']}</td>
  <td >{$row['cEmail']}</td>
  <td >{$row['cPhone']}</td>
  <td >{$row['cAddr']}</td>
  <td >{$row['cHeight']}</td>
  <td >{$row['cWeight']}</td>
  <td ><a href='?cID={$row['cID']}'>修改</a> </td>
  <td > <a href='?cID={$row['cID']}'>刪除</a></td>
</tr>";

}
// 尾巴
echo "  </tbody>
  <tfoot>
    <tr>
      <td colspan='11'>***************************************</td>

    </tr>
  </tfoot>
</table>";

// 釋放
mysqli_free_result($result);
mysqli_close($conn);
?>