class Appliance {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.pluggedIn = false;
  }

  plugIn() {
    this.pluggedIn = true;
    console.log(`${this.name} включен в розетку`);
  }

  unplug() {
    this.pluggedIn = false;
    console.log(`${this.name} выключен из розетки`);
  }
}

class Lamp extends Appliance {
  constructor(name, power, type) {
    super(name, power);
    this.type = type;
  }

  changeType(newType) {
    this.type = newType;
    console.log(`${this.name} изменен на ${newType} тип`);
  }
}

class Computer extends Appliance {
  constructor(name, power, brand) {
    super(name, power);
    this.brand = brand;
  }

  upgrade(newBrand) {
    this.brand = newBrand;
    console.log(`${this.name} обновлен до ${newBrand}`);
  }
}

// Делегирующая связь [[Prototype]] для двух конкретных приборов
Lamp.prototype = Object.create(Appliance.prototype);
Computer.prototype = Object.create(Appliance.prototype);

let lamp = new Lamp('Настольная лампа', 40, 'LED');
let computer = new Computer('Компьютер', 500, 'Dell');

lamp.plugIn();
computer.plugIn();

let totalPower = lamp.power + computer.power;
console.log(`Общая потребляемая мощность: ${totalPower} Вт`);

