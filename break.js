/* ----- Break y Continue 
Sentencias que permitene alterar un poco el comportamiento de los ciclos*/

var amigos = ['Alejandro', 'Cesar', 'Manuel', 'Luis',];

/*for (amigo in amigos) { //extraer cada amigo dentro del arreglo de amigos
    document.write(amigos[amigo] + '<br>') /* con esta linea de codigo se le dice quiero que 
    me muestres en pantalla lo que es mi arreglo amigos con mi posicion actual la cual se 
    encuentra en la variable amigo

    if (amigos [amigo] == 'Cesar') {
        break;//Nos salimos completamente del ciclo o corta toda la ejecucion del ciclo
    }

    console.log('Fin del ciclo');*/

    /*  NOTA: cuando por ejemplo le decimos al programa O LE DAMOS UNA CONDICION si tu encuentras el nombre por ejemplo 
    de Cesar los demas nombres ya no me los muestres, corta la ejecucion del ciclo y ya no ejecutes 
    lo demmas esto es lo que nosnpermite hacer la sentencia BREAK*/

    /*NOTA. continue nos permite saltarnos a la siguiente ejecucion del ciclo en este ejemplo si le
    decimos que si amigos en la posicion amigo es igual a 'Alejandro', continua a la siguiente ejecucion
    es decir , se reinicia el ciclo y muestra los siguientes elementos en pantalla despues del nombre 
    Alejandro*/

for (amigo in amigos) {
    if (amigos [amigo] == 'Alejandro') {
        continue;//se salta a la siguiente iteracion
    }
    document.write(amigos[amigo] + '<br>')
}