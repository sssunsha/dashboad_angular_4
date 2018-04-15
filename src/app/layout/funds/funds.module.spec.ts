import { FundsModule } from './funds.module';

describe('FormModule', () => {
    let formModule: FundsModule;

    beforeEach(() => {
        formModule = new FundsModule();
    });

    it('should create an instance', () => {
        expect(formModule).toBeTruthy();
    });
});
