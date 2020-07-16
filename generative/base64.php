<?php
    $imageData = $_POST['image'];
    $filename = 'temp.png';
    $imageData=base64_decode($imageData);
    file_put_contents('./upload/' . $filename, $imageData);
    fclose($fp);
?>