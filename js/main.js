
/*
//EventEmitter
const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on("User logged", data => {
	console.log(data);
});

emitter.emit('User logged', { user: 'Jonathas Torquato' });
*/

/*
// Async / Await

const asyncTimer = () => new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(12345);
	}, 1000);

});

const simpleFunc = async () => {
	const data = await asyncTimer();
	return data;
};
simpleFunc().then(data => {
	console.log(data);
}).catch(err => {
	console.log(err);
});

*/
/*
///Fetch
fetch('/data.json').then(responseStream => {
	if (responseStream.status === 200) {
		return responseStream.json()
	} else
		throw new Error('Request error');
}).then(data => {
		console.log(data);
	})
.catch(err => {
	console.log('Erro: ', err);
});

*/


/*
//Callbacks e promises
const fazerAlgo = () =>
	new Promise((resolve, reject) => {
		setTimeout(function () {
			resolve('Strogonoff');
		}, 1000);
	});

const fazerAlgoMais = () =>
	new Promise((resolve, reject) => {
		setTimeout(function () {
			resolve('Batata Frita');
		}, 1000);
	});
*/
/* //A primeira que resolver para a outra
Promise.race([fazerAlgo(), fazerAlgoMais()]).then(data => {
	console.log(data);
});
*/
/* ///Faz todas juntas
Promise.all([fazerAlgo(), fazerAlgoMais()]).then(data => {
	console.log(data[0].split(''));
	console.log(data[1].split(''));
}).catch(err => {
	console.log(err);
});*/



///Generators


/*
function* numerosNaturais() {
	let numero = 1;
	while (true) {
		yield numero;
		numero++;
	}
}

const it = numerosNaturais();
console.log(it.next());



function* hello() {
	console.log("Boa tarde");
	yield 1;
	console.log("Da função");
	const value = yield 2;
	console.log(value);
	yield 3;
}
const it = hello();
console.log(it.next());
console.log(it.next());
console.log(it.next('Outside!'));
*/
///Symbols
/*
const uniqueId = Symbol("Bom dia");

const obj = {
	[Symbol.iterator]() {

	}

};
//console.log(obj);

///Well known symbols
//Symbol.iterator
//Symbol.split
//Symbol.toPrimitive
//const arr = [1, 2, 3, 4];
//const it = arr[Symbol.iterator]();
//console.log(it.next());
*//*
const obj = {
	values: [1, 2, 3, 4],
	*[Symbol.iterator]() {
		for (var i = 0; i < this.values.length; i++) {
			yield this.values[i];
		}
		*//*let i = 0;
		return {
			next: () => {
				i++;

				return {
					value: this.values[i - 1],
					done: i > this.values.length
				}
			}
		}*//*
	}
};
for (let value of obj) {
	console.log(value);
}

*/

/*
var arr = ['Apple', 'Banana', 'Orange'];

var apple1 = arr[0];
var banana1 = arr[1];
var orange1 = arr[2];

var obj = {
	name: 'Jonathas'
}
var name = obj.name;
//Destuturing Assignnement
var [apple2, banana2, orange2] = ['Apple', 'Banana', 'Orange'];
var { name2 } = obj;



//rest operator pega parametros que estão sobrando e transforma num array ..., spread operator pega um array e separa ...


soma = (a, b,...args) =>a + b + args.reduce((acc, value)=>acc+value, 0);


console.log(soma(5, 5, 5, 2, 3));

var soma = (a, b) => a + b;
var somaCom5 = a => a + 5;

console.log(soma(5, 5));


var quantasVezes = 0;

function botao() {
	document.getElementById("agradecimento").innerHTML = "<b>Passe o mouse aqui</b>";
	quantasVezes++;
	alert("Olá para você também!\nClicou " + quantasVezes + " vezes.");

}

function trocar() {
	document.getElementById("agradecimento").innerHTML = "<b>Clique no botão</b>";
}

function volta() {
	document.getElementById("agradecimento").innerHTML = "<b>Pode clicar!</b>";
}
function load() {
	alert("Página Carregada!");
}

function redirecionar() {
	window.open("https://www.youtube.com/");
}

function soma(n1, n2) {
	return n1 + n2;
}

function setReplace(frase, nome, novo_nome) {
	return frase.replace(nome, novo_nome);
}

function validaIdade(idade) {
	var validar;
	if (idade >= 18) {
		validar = true;
	} else
		validar = false;
	return validar;
	

}

var idade = prompt("Qual a sua idade?");

alert(validaIdade(idade));
alert(soma(1, 10));
alert(setReplace("Japão melhor", "Japão", "Brasil"));

var d = new Date();
alert(d.getMonth());
*/

/*
var count;
for (count = 0; count <= 5; count++) {
	alert(count);
}


var total = prompt("valor: ");
var count = 0;
while (count < total) {
	console.log(count);
	count++;
}

var idade = prompt("Qual sua idade?");

if (idade >= 18) {
	alert("maior de idade");
} else
	alert("menor de idade");

*/
//var frutas = [{ nome: "maçã", cor: "vermelha" }, { nome: "uva", cor: "roxa" }];
//console.log(frutas[1].nome);

//var fruta = { nome: "maçã", cor : "vermelha" }

//console.log(fruta.nome);

//var lista = ["maçã", "laranja", "pera"];
//lista.push("uva");
//lista.pop();
//console.log(lista.join("|"));
//console.log(lista[0].toString());