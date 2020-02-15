//Built-in Objects exercises.

/*---------- String ----------*/
/*
Crear una función que reciba un string como parametro y que al ser llamada haga
un console.log mostrando el length del string recibido.

Ex:
myFunc('myString');
*/ 

/*------------------------------ Solución ------------------------------------------- */
function string(value) {
    console.log(value.length);
}

console.log(string("Hello")); 
/*----------------------------------------------------------------------------------- */



/*---------- Number ----------*/
/*
crear una función que reciba un number, que haga lo siguiente:
* Determinar si el numero recibido es un número entero.
* En caso de ser entero, hacer un console.log avisando que es un entero. 
* En caso de no ser entero, convertirlo a entero y mostar el nuevo valor usando console.log.

Ex:
myFunc(number);
posibles casos:
a) el número es un entero :3
b) el número ahora es un entero con valor de (valor) ;)
*/ 

/*------------------------------ Solución ------------------------------------------- */
function integer(num){
    if (Number.isInteger(num)){
        console.log(num, ": Is an Integer");

    }else{
        console.log("The number is now an integer with this value: ", parseInt(num));
    }
}

integer("15");
integer(8);     
/*----------------------------------------------------------------------------------- */



/*---------- Boolean ----------*/
/*
Crear una función que reciba un boolean, que al ser llamada haga un console.log mostrando:
* El numero de caracteres que representan el valor del boolean recibido.

Ex:
var flag = true;
myFunc(flag);
expected result:  4 caracteres.
*/

/*------------------------------ Solución ------------------------------------------- */
let boolean = false;

function charnum(boolean){
    let string = boolean.toString();
    console.log(string.length);
}

charnum(boolean);  
/*----------------------------------------------------------------------------------- */



/*---------- Object ----------*/
/*
crear una función que reciba un object, que al ser llamada haga un console.log mostrando:
* El numero de propiedades que contiene el objeto.
* El nombre de cada una de las propiedades del objeto.
* El valor de cada una las propiedades del objeto.

Ex:
myFunc(obj);
*/ 

/*------------------------------ Solución ------------------------------------------- */
let object = {
    name: 'Isis',
    age: 28
}

function data(object){
    console.log()
    console.log("1(number of properties): ",Object.keys(object).length,", ", "2(properties name): ",Object.keys(object),", ", "3:(properties value) ",Object.values(object));
}

data(object);  

/*----------------------------------------------------------------------------------- */



/*---------- Function ----------*/
/*
Crear una función que reciba una function, que al ser llamada haga un console log mostrando:
* El número de argumentos que espera la funcion.

Ex:
var sum = new Function('a','b','c', 'return a + b + c');

myFunc(sum);
result: 3.
*/ 

/*------------------------------ Solución ------------------------------------------- */
var sum = new Function('a','b','c', 'return a + b + c');

function myFunc(fn){
  console.log(fn.length);
}

myFunc(sum);    

/*----------------------------------------------------------------------------------- */



/*---------- Array ----------*/
/*
Crear una función que reciba un array de strings, un número (desiredLength) y un string (template), 
que al ser llamda haga lo siguiente:
*Checar el numero de propiedades que tiene el array.
*Si el numero de propiedades es menor a desiredLength por 1: 
    *Rellenar el espacio faltante dentro del array usando template.  
    *Hacer un console.log del arreglo con los cambios.
*En caso de que no se cumpla la condición, mencionar si el array es menor o mayor que desiredLength y por cuanto.
Ex:

var arr = ['Apple', 'Banana'];
myFunc(arr, 3, 'apple');
*/ 

/*------------------------------ Solución ------------------------------------------- */ 
let fruits = ["Apple", "Banana"];

function desiredLength(array, num, template){
    let difference = num - array.length;

    if( difference === 1){
        array.push(template);
        console.log(array);
    }

    else if (difference > 1) {
        console.log("El arreglo es menor por: ", difference);
    }

    else{
        console.log("El arreglo es mayor por: ", Math.abs(difference));
    }
}

desiredLength(fruits, 1, "Apple");  

/*----------------------------------------------------------------------------------- */



/*---------- Date ----------*/
/*
Crear una función que al ser llamada haga dos console.log, uno mostrando la fecha actual 
y otro que muestre cuantos milisegundos han pasado desde el 1/enero/1970 hasta ahora.

myFunc();
*/

/*------------------------------ Solución ------------------------------------------- */ 
function date(){
    var today = new Date();

    console.log(today.toISOString());
    console.log(Date.now());
}
        
date();     

/*----------------------------------------------------------------------------------- */



/*---------- Math ----------*/
/*
Crear una función que reciba dos numeros (base y exponente). 
la función al ser llamada usará el valor absoluto de base y lo elevara a la potencia 
determinada por exponente, al final mostrar este resultado usando console.log.

Ex:

myFunc(-3, 2) 
result = 9;
*/

/*------------------------------ Solución ------------------------------------------- */
function power(base, exponent){
    console.log(Math.pow(base, exponent));
}

power(2,4);     

/*----------------------------------------------------------------------------------- */



/*---------- RegExp ----------*/
/*
Dada el siguiente patrón (/([A-Z])/), crear una funcion que reciba dos strings (str, template).
* Determine si str cumple con el patrón.
* Si cumple, remplazar el las incidencias del patron con el valor de template.
* Mostar el resultado usando console.log.
* Si no, mostrar un mensaje de no coincidencia usando console.log

Ex:
myFunc(str, template)
*/

/*------------------------------ Solución ------------------------------------------- */
var rg = new RegExp(/([A-Z])/);

function regex(str, template) {

    if (rg.test(str)) {

        newstring = str.replace(rg, template);
        console.log(newstring);
        return;
    }

    console.log("No encuentro coincidencias");
}
console.log( regex("nombre", "Ja") ); 
console.log( regex("nombJre", "Ja") );       


/*----------------------------------------------------------------------------------- */



/*---------- Error ----------*/
/*
Crear una funcion que reciba un numero.
*Si el número es menor o igual a 10, usar console.log para mostrar un mensaje de valor dentro de los paramatros.
*Si el número es mayor a 10 arrojar un error con el mensaje, el valor esta fuera de los parametros.

Ex: myFunc(number)
*/

/*------------------------------ Solución ------------------------------------------- */
function numparameters(num){
    if (num <= 10 && num >= 1){

        console.log("El número esta dentro de los parámetros");
        return;
    }

    throw new Error("El número esta fuera de los parametros");
}

numparameters(8);
numparameters(34);       

/*----------------------------------------------------------------------------------- */


/*---------- Extra (más no opcional) ----------*/
/*
Usar los objetos vistos en clase y aplicarlos para solucionar un escenario que pueda ocurrir 
entre los proyectos finales que tienen asignados.

Describir el caso:En mi página de tutoriales no todos los usuarios podrán crear un tutorial, solo los sUser
en este casó quiero que haya un botón solo para los sUser de crear tutorial.

Mostrar la solucíon en código:  */
function User(idUser, email, password, nickName, sUser) {
    this.idUser = idUser;
    this.email = email;
    this.password = password;
    this.nickName = nickName;
    this.sUser = sUser;
  }

let user1 = new User(0, "user1@gmail.com", "password1", "User1", true);
let user2 = new User(0, "user2@gmail.com", "password2", "User2", false);
let btn = "";

function btnPermission(user){
if (user.sUser == true){
    btn = "Enabled";
    
    return btn;
    }

    else {
        btn = "Disabled"
        return btn;
    }
}

console.log(btnPermission(user1));
console.log(btnPermission(user2));