function Cat () {
  this.name = 'Markov';
  this.age = 3;
}

function Dog () {
  this.name = 'Noodles';
  this.age = 4;
}

Dog.prototype.chase = function (cat) {
  console.log(`My name is ${this.name} and I'm chasing ${cat.name}! Woof!`)
};

const Markov = new Cat ();
const Noodles = new Dog ();

//Call function method style
Noodles.chase(Markov);
// Call with call and apply to switch around arguments
Noodles.chase.call(Markov, Noodles);
Noodles.chase.apply(Markov, [Noodles]);
