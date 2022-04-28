// Ejemplo 8: Métodos static nos ayudan a escribir métodos en una clase que podemos usar sin necesidad de instanciar algún objeto
class Toolbox {
    static getMostUsefulTools(){
      return ["Command line", "git", "Text Editor"]
    }
}
  
  console.log("Ejemplo 8: Métodos static")
  // Puedo llamar el método static directamente con el nombre de la clase
  console.log(Toolbox.getMostUsefulTools())
  // Si intentamos instanciar un objeto, no podremos llamar este método static
  //const toolbox = new Toolbox()
  //console.log(toolbox.getMostUsefulTools()) // is not a function
  
  /*
  HERENCIA: Nos permite relacionar clases entre sí y rehusar sus componentes
  */

// Ejemplo  9: Herencia entre dos clases
class Developer {
    constructor(name, mainLang, stack){
      this.name =  name
      this.mainLang = mainLang
      this.stack = stack
    }
  
    get getName() {
          return this.name
      }
  }
  
  console.log("Ejemplo  9: Herencia entre dos clases")
  const carloDev = new Developer("Carlo", "js", ["elixir", "groovy", "lisp"])
  console.log(carloDev)
  
  // Se usa la palabra extends para indicar que heredarás las propiedades de la clase Padre (Developer) en la clase definida.
  // Podemos definir una clase vacía y rehusar todos los componentes de la clase padre
  class LaunchXStudent extends Developer{
  }
  
  const carloLaunchXDev = new LaunchXStudent("Carlo", "js", ["elixir", "groovy", "lisp"])
  console.log(carloLaunchXDev)
  console.log(carloLaunchXDev.getName) // getter de la clase padre rehusada en la clase hija