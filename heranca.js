//Criar classe Pai/SuperClasse com construtor contendo 1 atributo chamado: rodas 
//Dentro da SUPERCLASSE cria um metodo chamdo acelerar()

class Funcionario{ 
    constructor (nome,rg,salario){
        this.nome = nome;
        this.rg = rg;
        this.salario = salario;
}
    //metodos
    aumentar(valor){
        console.log(`AEEE SEU SALARIO AUMENTOU EM ${valor}`);
    }
    pagar(nome){
        console.log(`O Funcionario ${nome} foi pago`)
    }
}
//Criar a Subclasse Chefe Da SuperClasse com um metodo pagar()
class Chefe extends Funcionario{
    constructor(gastro_extra,adicional_chefia){
        this.gastro_extra = gastro_extra;
        this.adicional_chefia = adicional_chefia;
    }
    pagar()
}
