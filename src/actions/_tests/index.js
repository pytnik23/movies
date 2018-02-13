import { expect } from 'chai';

import {
    saveConfigToStore,
    SAVE_CONFIG,
} from '../index.js';

describe('actions', () => {
    describe('#saveConfigToStore()', () => {
        it('should return an action to save config', () => {
            const config = {};
            const action = saveConfigToStore(config);

            expect(action).to.eql({
                type: SAVE_CONFIG,
                config,
            });
        })
    });
});
