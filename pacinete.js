class Paciente {
    constructor(nombre,apellidos, fechaNacimiento){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fechaNacimiento = fechaNacimiento;
        this.bascula = new Bascula();
    }
    saludar() {
        return `Hola, soy ${this.nombre} ${this.apellidos}.`;
      }
    obtenerNombre(){
        return this.nombre;
    }
    modificarNombre(){
        return this.nombre = nuevoNombre;
    }
    obtenerApellido(){
        return this.apellidos;
    }
    modificarApellidos(){
        return this.apellidos = nuevoApellidos;
    }
    obtenerFechaNacimiento(){
        return this.fechaNacimiento;
    }
    modificarFechaNacimiento(){
        return this.fechaNacimiento = nuevaFechaNacimiento;
    }
    obtenerEdad(){
        const fechaActual = new Date();
        const fechaNacimiento = new Date(this.fechaNacimiento);
        const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
        return edad;
    }
    modificarBascula(){
        return this.bascula = nuevaBascula;
    }
    obtenerBascula(){
        return this.bascula;
    }
    calcularImc(){
        const imc= this.bascula.calcularImc();
        return imc;
    }

 }
 const pacinete = new Paciente("Manuel","Sánchez","1975-06-10");
 pacinete.obtenerBascula().anotarPeso(85,1.70);
 const edad = pacinete.obtenerEdad();
 const imc = pacinete.calcularImc();

 console.log(pacinete.saludar());
 console.log(`Edad: ${edad} años`);
 console.log(`IMC: ${imc.toFixed(2)}`);