//1-Criar classe Pai/SuperClasse com construtor contendo 1 atributo chamado: rodas 
//2- Dentro da SUPERCLASSE cria um metodo chamdo acelerar()

class Veiculo{ 
    constructor (rodas){
        this.rodas = rodas;
}
    //metodos
    acelerar(){
        console.log('KATIAUUUUUUUUUUU');
    }
}
//4-Criar a Subclasse Moto Da SuperClasse com um metodo empinar()
class Moto extends Veiculo{
    empinar(){
        console.log('Você empinou e caiu...')
    }
    
}
//criar subclasse moto2 herdando 
class Moto2 extends Veiculo{ 
    acelerar(){
        super.acelerar(){
            console.log('VRUUUUUUUUUUUUUUUUUM')
        }
    }
}
//3-Instanciar classe veiculo - new
const voyage = new Veiculo(4);
//instanciar objeto fuscar para acessar o metodo empinar
const voyage1 = new Moto(4);
//Chamando metodo empinar da moto
voyage1.empinar()
//chamar o metodo acelerar usando a classe moto?
voyage1.acelerar()