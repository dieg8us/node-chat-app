const expect = require('expect');

let {generateMessage, generateLocationMessage} = require('./message')

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    let from = 'diego';
    let text = 'hey';
    let message = generateMessage(from, text);

    expect(message).toInclude({
      from,
      text
    });
    expect(message.createAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    let from = 'diego';
    let latitude = '-33.437388999999996';
    let longitude = '-70.6515926';
    let url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    let locationObject = generateLocationMessage(from, latitude, longitude);

    expect(locationObject).toInclude({
      from,
      url
    });
    expect(locationObject.createAt).toBeA('number');
  });
});
