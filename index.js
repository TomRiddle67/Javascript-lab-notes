//objects as a design pattern

const car = {
	make: "Volvo",
	model: "electric",
	year: 2020,
	color : "Red",
	priceUSD : 3000,

	applyDiscount: function (discount) {
	const multiplier = 1 - discount / 100;
	this.priceUSD *= multiplier;
	return "enjoy discount!" },

	summary: function (){
	return`${this.make} ${this.model} ${this.year} ${this.color} in
	${this.color} priced at $${this.priceUSD} (USD).`},
};
console.log(car.applyDiscount(10));

console.log(car.summary ());
