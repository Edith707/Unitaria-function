const assert = require("assert")
const promedio= require("../calificacion").promedio
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
    it("quitar numeros repetidos", function (){
        var expected = [9, 11, 12, 13];
        var actual = remove[9, 11, 13, 13, 11, 11, 12];
        assert.equal(actual, expected)
    });

});