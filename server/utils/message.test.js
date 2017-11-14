const expect = require('expect');

let {generateMessage} = require('./message')

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
