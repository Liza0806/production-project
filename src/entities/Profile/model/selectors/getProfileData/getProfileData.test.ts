import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';
// getProfileData.ts
const data = {
    username: 'name',
    age: 22,
    country: Country.Kazakhstan,
    lastname: '',
    first: 'name1',
    city: 'my-city',
    currency: Currency.USD,
};
describe('getProfileData.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});

// npm run test:unit getProfileData.test.ts
