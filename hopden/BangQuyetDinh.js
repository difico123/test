const assert = require('chai').assert;
const app = require('../function');

describe('Bang Quyet Dinh', function () {
    it('Ca kiểm thử 1', () => {
        assert.equal(app(151, -2), 'Không hợp lệ')
    })
    it('Ca kiểm thử 2', () => {
        assert.equal(app(157, 15), 'Hồ lớn và vé 25k')
    })
    it('Ca kiểm thử 3', () => {
        assert.equal(app(181, 18), 'Hồ lớn và vé 30k')
    })
    it('Ca kiểm thử 4', () => {
        assert.equal(app(159, 69), 'Không được vào')
    })
    it('Ca kiểm thử 5', () => {
        assert.equal(app(149, -2), 'Không hợp lệ')
    })
    it('Ca kiểm thử 6', () => {
        assert.equal(app(140, 14), 'Hồ bé và vé 25k')
    })
    it('Ca kiểm thử 7', () => {
        assert.equal(app(142, 30), 'Hồ bé và vé 30k')
    })
    it('Ca kiểm thử 8', () => {
        assert.equal(app(144, 70), 'Không được vào')
    })
    it('Ca kiểm thử 9', () => {
        assert.equal(app(-2, -1), 'Không hợp lệ')
    })
    it('Ca kiểm thử 10', () => {
        assert.equal(app(-2, 13), 'Không hợp lệ')
    })
    it('Ca kiểm thử 11', () => {
        assert.equal(app(-2, 25), 'Không hợp lệ')
    })
    it('Ca kiểm thử 12', () => {
        assert.equal(app(-2, 99), 'Không hợp lệ')
    })
})