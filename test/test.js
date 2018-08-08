const assert = require("assert")
const promedio= require("../calificacion").promedio
const burbuja = require("../calificacion").burbuja
  const remove = require("../calificacion").remove

describe("result", function(){
    it("promedio es de sumar cinco veces 20", function(){
       var expected = 20;
       var actual = promedio(20, 20, 20, 20,20);
       assert.equal(actual, expected)
    });
});

describe("result", function() {
    it("promedio esta fuera de rango valores mayores de 100", function(){
        var expected = console.log("algun parametro esta fuera del rango");
        var actual =  promedio(140, 20, 60, 80, 90);
        assert.equal(actual, expected)
     });
});

describe("result", function() {
    it("promedio esta fuera de rango valores mayores de números negativos", function(){
        var expected = console.log("algun parametro esta fuera del rango");
        var actual =  promedio(-60, 60, 60, 80, 90);
        assert.equal(actual, expected)
     });
});


describe("result", function () {
    it(" acomodar numeros", function (){
        var expected =  (1, 2, 2, 3, 4, 5, 8, 9, 99, 111, 1000)
        var actual = burbuja(1000,9,111,8,1,5,4,2,99,2,3);
        assert.equal(actual, expected)
    });

});

