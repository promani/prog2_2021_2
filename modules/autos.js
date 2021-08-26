let autos = {
    lista: [
            {
                patente: "AB123EZ",
                marca: "volkswagen",
                modelo: "scirocco",
                anio: 2016,
                color: "black",
                describirse: function(){
                    return `Hola soy el auto marca ${autos.lista[0].marca}, modelo ${autos.lista[0].modelo}, fabricado en el año ${autos.lista[0].anio} y de color ${autos.lista[0].color}`
                }
            },
            {
                patente: "AB124EZ",
                marca: "volkswagen",
                modelo: "scirocco",
                anio: 2020,
                color: "red",
                describirse: function(){
                    return `Hola soy el auto marca ${autos.lista[1].marca}, modelo ${autos.lista[1].modelo}, fabricado en el año ${autos.lista[1].anio} y de color ${autos.lista[1].color}`
                }                
            },
            {
                patente: "AB122EZ",
                marca: "volkswagen",
                modelo: "scirocco",
                anio: 2015,
                color: "white",
                describirse: function(){
                    return `Hola soy el auto marca ${autos.lista[2].marca}, modelo ${autos.lista[2].modelo}, fabricado en el año ${autos.lista[2].anio} y de color ${autos.lista[2].color}`
                }                
            },
            {
                patente: "AB323EZ",
                marca: "volkswagen",
                modelo: "golf",
                anio: 2016,
                color: "white",
                describirse: function(){
                    return `Hola soy el auto marca ${autos.lista[3].marca}, modelo ${autos.lista[3].modelo}, fabricado en el año ${autos.lista[3].anio} y de color ${autos.lista[3].color}`
                }
            },
            {
                patente: "AB523eZ",
                marca: "volkswagen",
                modelo: "golf",
                anio: 2016,
                color: "white",
                describirse: function(){
                    return `Hola soy el auto marca ${autos.lista[3].marca}, modelo ${autos.lista[3].modelo}, fabricado en el año ${autos.lista[3].anio} y de color ${autos.lista[3].color}`
                }
            }
          ],

    porPatente: function (patente) {
        for (let i = 0; i < autos.lista.length; i++) {
            if (autos.lista[i].patente.toLowerCase() == patente.toLowerCase()) {
                return autos.lista[i];
            }
        }
    },

    porColor: function (color) {
        let respuesta = []
        for (let i = 0; i < autos.lista.length; i++) {
            if (autos.lista[i].color == color.toLowerCase()) {
                respuesta.push(autos.lista[i])
            }
        }
        return respuesta
    },
    
    porMarca: function (marca) {
        let respuesta = []
        for (let i = 0; i < autos.lista.length; i++) {
            if (autos.lista[i].marca == marca.toLowerCase()) {
                respuesta.push(autos.lista[i])
            }
        }
        return respuesta
        
    },
    
    porAnio: function (anio) {
        let respuesta = []
        for (let i = 0; i < autos.lista.length; i++) {
            if (autos.lista[i].anio == anio) {
                respuesta.push(autos.lista[i])
            }
        }
        return respuesta        
    }
}


module.exports = autos;