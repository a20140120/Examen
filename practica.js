nom=prompt("Bienvenido/a al cuestionario sobre las Olimpíadas.¿Cual es tu nombre?");

preg1=prompt("1. ¿Cuándo se realizará la inauguración de las Olimpiadas?\nA. Lunes 02 de octubre\nB. Viernes 29 de setiembre\nC. Jueves 28 de setiembre")
if (preg1=="B"){
    preg1=1
}
else{
    preg1=0
}


preg2=prompt("2-¿De qué color es la prompoción de 2do de secundaria?\nA. Celeste\nB. Rojo\nC. Morado")
if (preg2=="A"){
    preg2=1
}
else{
    preg2=0
}


preg3=prompt("3. Nuevo deporte incluido este año\nA. Futsal femenino\nB. Balonmano\nC. Marcha atlética")
if (preg3=="C"){
    preg3=1
}
else{
    preg3=0
}


puntaje=preg1+preg2+preg3
document.write("Tu puntaje es: ",puntaje)
if (puntaje>1){
    document.write(" Lo has hecho bien ",nom)
}
else{
    document.write(" Puedes hacerlo mejor ",nom)
}