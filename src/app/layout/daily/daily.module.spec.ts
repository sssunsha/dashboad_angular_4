import { DailyModule } from './daily.module';

describe('DailyModule', () => {
    let DailyModule: DailyModule;

    beforeEach(() => {
        DailyModule = new DailyModule();
    });

    it('should create an instance', () => {
        expect(DailyModule).toBeTruthy();
    });
});
