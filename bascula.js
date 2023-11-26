class Bascula{
    constructor(){
        this.registros = [];
    }
    obtenerNumeroAnotacones(){
        return this.registros.length();
    }
    anotarPeso(peso,altura= 1.0, fecha = new Date()){
        peso = Number(peso);
        altura = Number(altura);

        if (isNaN(peso) || isNaN(altura)){
            throw new Error ("El valor del peso y la altura no son validos, deben ser numeros validos")
        }
        this.registros.push({altura,peso,fecha});
    }
    obtenerPesoMaximo(){
        if (this.registros.length === 0){
            throw new Error ("No hay registros para calcular el peso maximo")
        }
       const pesos = this.registros.map(this.registros, this.registros.peso);
       const pesosMaximo = Math.max(...pesos);
       return pesosMaximo;
    }
    obtenerPesoMinio(){
        if (this.registros.length === 0){
            throw new Error ("No hay registros para calcular el peso minimo.")
        }
        const pesos = this.registros.map(this.registros , this.registros.peso);
        const pesoMinimo = Math.min(...pesos);
        return pesoMinimo;
    }
    calcularImc(){
        if (this.registros.length === 0){
            throw new Error("No hay registros para calcular el IMC");
        }
        const ultimoRegistro = this.registros[this.registros.length -1];
        const imc = ultimoRegistro.peso / Math.pow(ultimoRegistro.altura, 2);
        return imc;
    }
    describirImc(imc){
        if (isNaN(imc)){
            throw new Error("El valor de IMC no es valido, introduzca un valor correcto");
        }
        if (imc < 16){
            return "Infrapeso (delgadez severa)";
        }else if (imc >= 16 && imc < 17){
            return "Infrapeso (delgadez moderada)";
        }else if (imc >= 17 && imc < 18.5){
            return "Infrapeso (delgadez aceptable";
        }else if (imc >= 18 && imc < 25){
            return "Peso Normal";
        }else if (imc > 25 && imc < 30){
            return "Sobrepeso";
        }else if (imc > 30 && imc < 35){
            return "Obeso (Tipo I)";
        }else if (imc > 35 && imc < 40){
            return "Obeso (Tipo II)";
        }else{
            return "Obeso (Tipo III)"
        }
    }
}
const bascula = new Bascula();
try {
    bascula.anotarPeso(70.5, 1.75);
    bascula.anotarPeso(75.2);

    const numAnotaciones = bascula.obtenerNumeroAnotaciones();
    const pesoMaximo = bascula.obtenerPesoMaximo();
    const pesoMinimo = bascula.obtenerPesoMinimo();
    const imc = bascula.calcularIMC();
    const descripcionIMC = bascula.describirIMC(imc);

    console.log(`Número de anotaciones: ${numAnotaciones}`);
    console.log(`Peso máximo registrado: ${pesoMaximo.toFixed(2)} kg`);
    console.log(`Peso mínimo registrado: ${pesoMinimo.toFixed(2)} kg`);
    console.log(`IMC calculado: ${imc.toFixed(2)}`);
    console.log(`Descripción del IMC: ${descripcionIMC}`);
} catch (error) {
    console.error(`Error: ${error.message}`);
}