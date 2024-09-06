class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.curr = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.curr = Math.round((this.min + this.max) / 2);
        return this.curr;
    }

    lower() {
        this.max = this.curr;
    }

    greater() {
        this.min = this.curr;
    }
}

module.exports = GuessingGame;
