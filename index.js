function Player (name, marker) {
	this.name = name;
	this.marker = marker;
	this.sayName = function () {
	console.log(this.name)
};
}

const player1 = new Player ("Tom","O");
const player2 = new Player ("also Tom", "X");
player1.sayName ();
player2.sayName ();



