const objeto4 = {
    name: 'objeto4',
    imprimir: function (){
        console.log('Esta funcion esta dentro del objeto ', this.name)
    }
}

objeto4.imprimir()