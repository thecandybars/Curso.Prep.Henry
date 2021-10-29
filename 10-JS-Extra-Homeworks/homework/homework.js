// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz=[];
  for(var key in objeto){
    matriz.push([key,objeto[key]]);
  }
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var objeto = {};
  for(var i=0;i<string.length;i++){
    var agregar=true;
    var letra = string[i];
    for(var k in objeto){
      if(letra===k){
        objeto[k]=objeto[k]+1;
        agregar=false;
      }
    }
    if(agregar){
      objeto[letra]=1;
    }
  }
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var may = "";
  var min = "";
  for(var i=0;i<s.length;i++){
    var letra = s[i];
    if(letra===letra.toUpperCase()) {
      may = may + letra;
    } else {
      min = min + letra;
    }
  }
  return may+min;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var fraseE  = "";
  var palabraE= "";
  str=str+" ";  //Agrego un espacio para identificar la ultima palabra: el alg identifica palabras buscando espacios
  for(var i=0;i<str.length;i++){
    var letra=str[i];
    if(letra===" "){
      fraseE=fraseE+palabraE+" "; //Añade la palabra en espejo a la frase y agrega espacio
      palabraE="";
    } else {
      palabraE=letra+palabraE;
    }
  }
  return fraseE.substr(0,str.length-1); //Elimino el ultimo espacio
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var str=numero+"";
  var long=Math.floor((str.length)/2);
  for(var i=0;i<long;i++){
    if(str[i] !== str[str.length-i-1]) {
    //if(str.substr(i,1)!==str.slice(i-1))
      return "No es capicua";
    }
  }
  return "Es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var respuesta ="";
  for(var i=0;i<cadena.length;i++){
    if(cadena[i]!=="a" && cadena[i]!=="b" && cadena[i]!=="c") {
      respuesta=respuesta+cadena[i];
    }
  }
  return respuesta;
 }


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  for(var i=1;i<arr.length;i++){  // i=posición ascendente de cada registro en el array
    for(var j=i;j>0;j--){         // j=recorre el array desde i hacia atrás
      if(arr[i].length>=arr[j-1].length){ // compara cada registro actual arr[i] con cada registro anterior
        break;                            // se sale cuando encuentra uno que es menor
      }                                   // j representa la poscición de ese registro
    }
    if(j!==i){  // no es necesario, pero evita hacer movimientos donde no hay nada que mover
      arr.splice(j,0,arr[i]);
      arr.splice(i+1,1);
    }
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aqui
  var respuesta =[];
  for(var i=0;i<arreglo1.length;i++){
    for(var j=0;j<arreglo2.length;j++){
      if(arreglo1[i]===arreglo2[j]) {
        respuesta.push(arreglo1[i]);
        break;
      }
    }
  }  
  return respuesta;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

