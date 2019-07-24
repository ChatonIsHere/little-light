"use strict";

/** Class representing a Guardian */
class Guardian {
    /**
     * Create a Guardian
     * @param {string} archetype The Guardian's archetype/class
     * @param {number} power     The Guardian's power/light level
     */
    constructor(archetype, power) {
        this._archetype = archetype;

        if (!isNaN(power)) this._power = Math.trunc(power);
        else this._power = 0;

        if (this._power <= 0 || this._power > 750) throw new Error("Not a valid power level");
    }

    /**
     * Get the Guardian's archetype/class
     * @return {string} The Guardian's archetype/class
     */
    get archetype() {
        return this._archetype;
    }

    /**
     * Get the Guardian's power/light level
     * @return {number} The Guardian's power/light level, rounded down to the nearest multiple of 5
     */
    get power() {
        return Math.floor(this._power / 5) * 5;
    }

    /**
     * Get the Guardian's power/light level
     * @return {string} The Guardian's power/light level
     */
    get powerRaw() {
        return this._power;
    }
}

/**
 * Class representing a Hunter Guardian
 * @extends Guardian
 */
class Warlock extends Guardian {
    /**
     * Create a Warlock
     * @param {number} power The Warlock's power/light level
     */
    constructor(power) { super("Warlock", power) }

    /**
     * Get the Warlock's archetype/class
     * @return {string} The Guardian's archetype/class
     */
    get archetype() { return super.archetype }
    /**
     * Get the Warlock's power/light level
     * @return {number} The Guardian's power/light level, rounded down to the nearest multiple of 5
     */
    get power() { return super.power }
    /**
     * Get the Warlock's power/light level
     * @return {string} The Guardian's power/light level
     */
    get powerRaw() { return super.powerRaw }
}

class Hunter extends Guardian {
    /**
     * Create a Hunter
     * @param {number} power The Hunter's power/light level
     */
    constructor(power) { super("Hunter", power) }

    /**
     * Get the Hunter's archetype/class
     * @return {string} The Guardian's archetype/class
     */
    get archetype() { return super.archetype }
    /**
     * Get the Hunter's power/light level
     * @return {number} The Guardian's power/light level, rounded down to the nearest multiple of 5
     */
    get power() { return super.power }
    /**
     * Get the Hunter's power/light level
     * @return {string} The Guardian's power/light level
     */
    get powerRaw() { return super.powerRaw }
}

class Titan extends Guardian {
    /**
     * Create a Titan
     * @param {number} power The Titan's power/light level
     */
    constructor(power) { super("Titan", power) }

    /**
     * Get the Titan's archetype/class
     * @return {string} The Guardian's archetype/class
     */
    get archetype() { return super.archetype }
    /**
     * Get the Titan's power/light level
     * @return {number} The Guardian's power/light level, rounded down to the nearest multiple of 5
     */
    get power() { return super.power }
    /**
     * Get the Titan's power/light level
     * @return {string} The Guardian's power/light level
     */
    get powerRaw() { return super.powerRaw }
}

module.exports.Guardian = Guardian;
module.exports.Warlock = Warlock;
module.exports.Hunter = Hunter;
module.exports.Titan = Titan;