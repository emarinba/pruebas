angular
    .module("contador", [])
    .controller("contadorCont", function(){

        this.numero=0;
        this.total=0;


        this.sumar=function(){
            this.total += parseInt(this.numero);
        }


        this.restar=function(){
            this.total -= parseInt(this.numero);
        }

    }); 