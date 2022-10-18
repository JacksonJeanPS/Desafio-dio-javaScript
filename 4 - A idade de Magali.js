let M = parseInt(gets());
let A = parseInt(gets());
let B = parseInt(gets());

let C = M - A - B ;
	
let res = A;
if ( res <  B ) res = C
if ( res <  C ) res =  A  ;
	
print(  res   )
