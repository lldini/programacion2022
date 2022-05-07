//Faltaria una estructura repetitiva, hace al codigo mas legible y modificable a futuro.
let clave: string = prompt("Ingrese clave");

if (clave === "eureka") {
  console.log("clave correcta");
} else {
  console.log("clave incorrecta");
  clave = prompt("Ingrese clave");
  if (clave === "eureka") {
    console.log("clave correcta");
  } else {
    console.log("clave incorrecta");
    clave = prompt("Ingrese clave");
    if (clave === "eureka") {
      console.log("clave correcta");
    } else {
      console.log("clave incorrecta se terminaron los intentos");
    }
  }
}
