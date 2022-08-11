const { Rectangle } = require('../rectangle');

describe('Test Rectangle class', () => {
    test('Rectangle class should return given width and height', () => {
        const r1 = new Rectangle(1,2);
        expect(r1.width).toBe(1);
        expect(r1.height).toBe(2);
    });
});