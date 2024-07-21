import { getQueryParams } from './addQueryParams';

describe('addQueryParams', () => {
    test('with 1 params', () => {
        const params = getQueryParams({
            test: 'value',
        });
        expect(params).toBe('?test=value');
    });
    test('with several params', () => {
        const params = getQueryParams({
            test: 'value',
            second: '2',
            third: 'hello',
        });
        expect(params).toBe('?test=value&second=2&third=hello');
    });
    test('with undefined', () => {
        const params = getQueryParams({
            test: 'value',
            second: undefined,
        });
        expect(params).toBe('?test=value');
    });
});
/// npm run test:unit addQueryParams.test.ts
