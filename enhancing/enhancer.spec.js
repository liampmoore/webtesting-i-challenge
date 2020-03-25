const enhancer = require('./enhancer.js');
// test away!
describe('enhancer.js item enhancer module', () => {
    describe('repair function', () => {
        it.todo("only accepts an item object")
        it.todo("returns an item object with 100 durability")
    })
    describe('success function', () => {
        it.todo("only accepts an item object")
        it.todo("increases an item's enhancement by 1")
        it.todo("won't increase the item's enhancement above 20")
        it.todo("won't change the item's durability")
    })
    describe('fail function', () => {
        it.todo("only accepts an item object")
        it.todo("if enhancement level is < 15 durability is reduced by 5")
        it.todo("if enhancement level is > 15 durability is reduced by 10")
        it.todo("if enhancement level is > 16 enhancement is reduced by 1")

    })
    describe('get', () => {
        it.todo("only accepts an item object")
        it.todo("if enhancement is 0 name is not modified")
        it.todo("if enhancement > 0 change name to include '[+enhancement]'")
    })
    
})