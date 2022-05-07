let continuar: number = 0;
let numero: number;

while (continuar === 0) {
  numero = Number(prompt("ingresar numero: "));
  if (numero % 2 === 0) {
    console.log("par");
  } else {
    console.log("impar");
  }
  continuar = Number(prompt("continuar?: "));
}
