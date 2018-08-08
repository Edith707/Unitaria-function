

  exports.promedio =function promedio(a, b, c, d, e){
    if(a>=0 && a<=100 && b>=0 && b<=100 && c>=0 && c<=100 && d>=0 && d<=100 && e>=0 && e<=100 ){
      var prom = ((a+b+c+d+e)/5);
      return prom;
      
      if (prom >=60 && prom<=69){
           return "tu puntuacion es E";
      }else if(prom>=70 && prom<=79){
        return "tu puntuacion es D";
      }
      else if(prom>=80 && prom<=89){
        return "tu puntuacion es B";
      } else if(prom>=90 && prom<=100){
        return "tu puntuacion es A";
      }
      

    }
    else{
      return "algun parametro esta fuera del rango";
    }
}


exports.remove = function remove(array){
  var arregloNuevo = Array.from(new Set(array));
  return arregloNuevo.sort(function(a, b){return a - b});
}
  
