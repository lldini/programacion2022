// function Parametros(n1:number,n2:number,s1:string,b1:boolean):void{
//   console.log('parametro 1: '+n1);
//   console.log('parametro 2: '+n2);
//   console.log('parametro 3: '+s1);
//   console.log('parametro 4: '+b1);
// }

// function sumar():number{
//   return 1+1;
// }

// let n1:number = 1;
// let n2:number = 2;
// let s1:string = 'hola';
// let b1:boolean = true;

// Parametros(sumar(),1,s1,false);

function es_par(n1: number): boolean {
  if (n1 % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

if (es_par(2)) {
  console.log("es par");
} else {
  console.log("es impar");
}
