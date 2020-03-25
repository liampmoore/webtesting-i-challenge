const enhancer = require('./enhancer.js');
// test away!
describe('enhancer.js item enhancer module', () => {
    describe('repair function', () => {
        it("only accepts an item object", () => {
            const emptyObject = {};
            expect(() => {
                enhancer.repair(emptyObject)
            }).toThrow();
        })
        it("returns an item object with 100 durability", () => {
            const item = {
                name: "Item",
                durability: 5,
                enhancement: 0
            }
            expect(enhancer.repair(item).durability).toBe(100);
        })
    })
    describe('success function', () => {
        it("only accepts an item object", () => {
            const emptyObject = {};
            expect(() => {
                enhancer.succeed(emptyObject)
            }).toThrow();
        })
        it("increases an item's enhancement by 1", () => {
            const item = {
                name: "Item",
                durability: 5,
                enhancement: 0
            }
            expect(enhancer.succeed(item).enhancement).toBe(1);
        })
        it("won't increase the item's enhancement above 20", () => {
            const item = {
                name: "Item",
                durability: 5,
                enhancement: 20
            }
            expect(enhancer.succeed(item).enhancement).toBe(20);
        })
        it("won't change the item's durability", () => {
            const item = {
                name: "Item",
                durability: 5,
                enhancement: 20
            }
            expect(enhancer.succeed(item).durability).toBe(5);
        })
    })
describe('fail function', () => {
    it("only accepts an item object", () => {
        const emptyObject = {};
        expect(() => {
            enhancer.fail(emptyObject)
        }).toThrow();
    })
    it("if enhancement level is < 15 durability is reduced by 5", () => {
        const item = {
            name: "Item",
            durability: 50,
            enhancement: 10
        }
        expect(enhancer.fail(item).durability).toBe(45)
    })
    it("if enhancement level is > 15 durability is reduced by 10", () => {
        const item = {
            name: "Item",
            durability: 50,
            enhancement: 16
        }
        expect(enhancer.fail(item).durability).toBe(40)
    })
    it("if enhancement level is > 16 enhancement is reduced by 1", () => {
        const item = {
            name: "Item",
            durability: 50,
            enhancement: 17
        }
        expect(enhancer.fail(item).enhancement).toBe(16)
    })

})
describe('get', () => {
    it.todo("only accepts an item object")
    it.todo("if enhancement is 0 name is not modified")
    it.todo("if enhancement > 0 change name to include '[+enhancement]'")
})
    
})