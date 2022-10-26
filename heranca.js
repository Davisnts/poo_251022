//1-Entrar no GITHUB.COM e criar repositorio chamado POO-251022
//2-Criar classe PAI/SUPERCLASSE - FUNCIONARIO conforme imagem acima
class Funcionario{ 
    constructor (nome,rg,salario){
        this.nome = nome;
        this.rg = rg;
        this.salario = salario;
}
    //3-Dentro da SUPERCLASSE criar os metodos da imagem acima
    //metodos
    aumentar(valor){
        console.log(`AEEE SEU SALARIO AUMENTOU EM ${valor}`);
    }
    pagar(nome){
        console.log(`O Funcionario ${nome} foi pago`)
    }
}
//4-Criar a SUBCLASSE Chefe da SUPERCLASSE com seus atributos e metodos
class Chefe extends Funcionario{
    constructor(gastro_extra,adicional_chefia){
        this.gastro_extra = gastro_extra;
        this.adicional_chefia = adicional_chefia;
    }
//5-Na SUBCLASSE, o metodo pagar() deve-se referenciar o metodo pagar() da SUPERCLASSE

    pagar(){
        super.pagar();
    }
}
//6-instanciar OBJETO com nome qualquer da classe PAI
const Jorge = new Funcionario('Jorge',337,200);
//7-chamar o metodo da CLASSE PAI passando os parametros
console.log(Jorge)
//8-instanciar OBJETO qualquer usando CLASSE FILHA, acessando metodo da classe SOBRESCRITA na classe FILHA

const JorgeChefe = new Chefe.pagar();

