const assert = require('chai').assert;
const app = require('../function');

describe('all c-uses/some p-uses', function () {
    it('Ca kiểm thử 1', () => {
        assert.equal(app(-1, -1), 'Không hợp lệ')
    })
    it('Ca kiểm thử 2', () => {
        assert.equal(app(150, 90), 'Không được vào')
    })
    it('Ca kiểm thử 3', () => {
        assert.equal(app(140, 30), 'Hồ lớn và 30k')
    })
    it('Ca kiểm thử 4', () => {
        assert.equal(app(170, 14), 'Hồ lớn và 25k')
    })
    it('Ca kiểm thử 5', () => {
        assert.equal(app(149, 10), 'Hồ bé và 25k')
    })
})