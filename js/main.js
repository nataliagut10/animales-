/*jshint esversion: 6 */
// creacion animal
var Animal = function(
  numero_de_patas = 4,
  carnivoro = false,
   pelaje = true,
  numero_de_ojos = 2,
  nombre = null
){
var object = { //OBJECT}
 numero_de_patas: numero_de_patas,
 carnivoro: carnivoro,
 pelaje: pelaje,
 numero_de_ojos: numero_de_ojos,
 nombre : nombre,
//metodo
"comer": function(){
if (this.carnivoro === true) {
  return "carnivoro";
}else{
  return "no carnivoro";
}
}
};//Object
return object;
};//Animal()


var jirafa = new Animal (4,false,true,2,"jirafa");
var perro = new Animal (4,true,true,2,"perro");
var araña = new Animal (8,false,true,16,"araña");
console.log(jirafa);
console.log(perro);
console.log(araña)
