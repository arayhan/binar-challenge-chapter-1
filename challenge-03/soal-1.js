function Ship(draft, crew) {
    this.draft = draft;
    this.crew = crew;
    this.getWeight = function () {
        return this.draft - this.crew * 1.5;
    };
    this.getWeightStatus = function () {
        return this.getWeight() < 20 ? "Lebih banyak muatan orangnya" : "Banyak nih muatan kapalnya";
    };
}

const emptyShip = new Ship(0, 0);
const containedShip = new Ship(100, 20);

console.log(emptyShip.getWeight());
console.log(emptyShip.getWeightStatus());
console.log(containedShip.getWeight());
console.log(containedShip.getWeightStatus());
