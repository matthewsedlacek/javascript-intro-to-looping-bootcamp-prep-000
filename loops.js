function forLoop(array) {
if (!array) {
  return [];
}


for (var i = 0; i < 25; i++) {
      if (i === 1) {
         array.push(`I am ${i} strange loop.`);
      } 
      else  {
      array.push(`I am ${i} strange loops.`);
  }
}
return array;
}