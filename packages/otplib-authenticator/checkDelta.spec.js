import * as core from 'otplib-core';
import check from './check';

describe('checkDelta', () => {
  it('should call and return value from totpToken', () => {
    const token = '123456';
    const secret = 'GEZDGNBVGY3TQOJQGEZDG';
    const options = { test: 'test', base32Decode: jest.fn() };

    const spy = jest
      .spyOn(core, 'totpCheckWithWindow')
      .mockImplementation(() => jest.fn());

    options.base32Decode.mockImplementation(() => 'decode');

    check(token, secret, options);

    expect(options.base32Decode).toHaveBeenCalledTimes(1);
    expect(options.base32Decode).toHaveBeenCalledWith('GEZDGNBVGY3TQOJQGEZDG');

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(token, 'decode', options);
  });
});
