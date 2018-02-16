import { expect } from 'chai';

import { getImageUrl, formatPrice } from '../index';

describe('utils', () => {
    describe('#getImageUrl()', () => {
        it('should returt joint URL', () => {
            const result = getImageUrl('https://google.com', '/main');

            expect(result).to.be.equal('https://google.com/main');
        });

        it('should returt "null" if the first argument not passed', () => {
            const result = getImageUrl('', '/main');

            expect(result).to.be.a('null');
        });

        it('should returt "null" if the second argument not passed', () => {
            const result = getImageUrl('https://google.com');

            expect(result).to.be.a('null');
        });
    });

    describe('#formatPrice()', () => {
        it('should return formatted string', () => {
            const tests = [
                { in: 1234567890, out: '1,234,567,890' },
                { in: 123456789, out: '123,456,789' },
                { in: 0, out: '0' },
            ];

            tests.forEach((test) => {
                const result = formatPrice(test.in);

                expect(result).to.equal(test.out);
            });
        });

        it('should trow error if argument is not typeof number', () => {
            const result = () => { formatPrice('error') };

            expect(result).to.throw('"price" should be typeof number');
        });
    });
});
