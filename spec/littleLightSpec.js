const { Guardian, Warlock, Hunter, Titan } = require("../src/littleLight")
const randomPower = randomInt(1, 750)

console.log(`Random Power Level: ${randomPower}`)

describe("Guardian", function() {
    it("should not be able to access the Guardian class", function() {
        expect(() => { return new Guardian("Warlock", 750) }).toThrowError("Guardian is not a constructor")
    })
    
    it("should be able to use the higher classes", function() {
        let testWarlock = new Warlock(750)
        expect(testWarlock.archetype).toEqual("Warlock")
        expect(testWarlock.power).toEqual(750)

        let testHunter = new Hunter(750)
        expect(testHunter.archetype).toEqual("Hunter")
        expect(testHunter.power).toEqual(750)

        let testTitan = new Titan(750)
        expect(testTitan.archetype).toEqual("Titan")
        expect(testTitan.power).toEqual(750)
    })

    it("should accurately check power level", function() {
        expect(() => { return new Warlock(0) }).toThrowError("Not a valid power level")
        expect(() => { return new Warlock(751) }).toThrowError("Not a valid power level")
        expect(() => { return new Warlock(0.5) }).toThrowError("Not a valid power level")
        expect(() => { return new Warlock(751.5) }).toThrowError("Not a valid power level")
        expect(() => { return new Warlock(750.5) }).not.toThrowError()
        expect(() => { return new Warlock(1) }).not.toThrowError()
        expect(() => { return new Warlock(550) }).not.toThrowError()
        expect(() => { return new Warlock(750) }).not.toThrowError()
        expect(() => { return new Warlock(749.5) }).not.toThrowError()

        expect(() => { return new Hunter(0) }).toThrowError("Not a valid power level")
        expect(() => { return new Hunter(751) }).toThrowError("Not a valid power level")
        expect(() => { return new Hunter(0.5) }).toThrowError("Not a valid power level")
        expect(() => { return new Hunter(751.5) }).toThrowError("Not a valid power level")
        expect(() => { return new Hunter(750.5) }).not.toThrowError()
        expect(() => { return new Hunter(1) }).not.toThrowError()
        expect(() => { return new Hunter(550) }).not.toThrowError()
        expect(() => { return new Hunter(750) }).not.toThrowError()
        expect(() => { return new Hunter(749.5) }).not.toThrowError()

        expect(() => { return new Titan(0) }).toThrowError("Not a valid power level")
        expect(() => { return new Titan(751) }).toThrowError("Not a valid power level")
        expect(() => { return new Titan(0.5) }).toThrowError("Not a valid power level")
        expect(() => { return new Titan(751.5) }).toThrowError("Not a valid power level")
        expect(() => { return new Titan(750.5) }).not.toThrowError()
        expect(() => { return new Titan(1) }).not.toThrowError()
        expect(() => { return new Titan(550) }).not.toThrowError()
        expect(() => { return new Titan(750) }).not.toThrowError()
        expect(() => { return new Titan(749.5) }).not.toThrowError()
    })

    it("should be able to return the raw power level", function() {
        let testGuardian = new Warlock(749)
        expect(testGuardian.powerRaw).toEqual(749)

        testGuardian = new Warlock(randomPower)
        expect(testGuardian.powerRaw).toEqual(randomPower)

        testGuardian = new Hunter(749)
        expect(testGuardian.powerRaw).toEqual(749)

        testGuardian = new Hunter(randomPower)
        expect(testGuardian.powerRaw).toEqual(randomPower)

        testGuardian = new Titan(749)
        expect(testGuardian.powerRaw).toEqual(749)

        testGuardian = new Titan(randomPower)
        expect(testGuardian.powerRaw).toEqual(randomPower)
    })

    it("should be able to return the power rounded to the nearest multiple of 5", function() {
        let testGuardian = new Warlock(749)
        expect(testGuardian.power).toEqual(745)

        testGuardian = new Warlock(randomPower)
        expect(testGuardian.power).toEqual(Math.floor(randomPower / 5) * 5)

        testGuardian = new Hunter(749)
        expect(testGuardian.power).toEqual(745)

        testGuardian = new Hunter(randomPower)
        expect(testGuardian.power).toEqual(Math.floor(randomPower / 5) * 5)

        testGuardian = new Titan(749)
        expect(testGuardian.power).toEqual(745)

        testGuardian = new Titan(randomPower)
        expect(testGuardian.power).toEqual(Math.floor(randomPower / 5) * 5)
    })
})

function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}