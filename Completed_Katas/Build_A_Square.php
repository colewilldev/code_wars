/*
I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 0 and 50.
Example
n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++

*/

function generateShape($int) {
  echo "Input = $int \n";
  $final = '';
  
  for($i=0; $i < $int; $i++){
    $s = 0;
    while($s < $int){
      $s ++;
      $final .= "+";
    }
    $s = 0;
    if($i < $int -1){
      $final .= "\n";
    }
  }
  echo "Final: $final";
  return $final;
}
