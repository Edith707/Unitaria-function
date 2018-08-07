const assert = require("assert")
const promedio= require("../calificacion").promedio

describe("result", function(){
    it("promedio es de sumar cinco veces 20", function(){
       var expected = 20;
       var actual = promedio(20, 20, 20, 20,20);
       assert.equal(actual, expected)
    });
});