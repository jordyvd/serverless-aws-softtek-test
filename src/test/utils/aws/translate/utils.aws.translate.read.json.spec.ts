import { expect, test } from '@jest/globals';
import { AwsTranslateReadJson } from '@/utils/infrastructure/aws/translate/utils.aws.translate.read.json';

test('translate properties', async () => {
    const json = {
        name: 'test',
        climate: 'test'
    };

    const result = await AwsTranslateReadJson.readJson(json);

    expect(result).toEqual({
        nombre: 'test',
        clima: 'test'
    });
});

