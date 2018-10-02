const {assert,expect,use} = require('chai');
const chaiHtml  = require('chai-html');
const updateTotal = require('../question1.js');
const dataConcat = require('../question2.js');
const makeHtml = require('../question3.js');
const testRegex = require('../question4.js');

use(chaiHtml);


describe('test update total function', function() {
  it('should return total 100.00', function() {
    const data = {
      'id' : 'UID_12345',
      'total' : '0.00',
      'items' : [
        {'id' : 'a', 'value' : '25.00' },
        {'id' : 'b', 'value' : '40.00' },
        {'id' : 'c', 'value' : '35.00' }
      ]
    };
    const actual = updateTotal(data);
    assert.equal(actual.total, '100.00');
  });

  it('should return data type error if total cannot be converted to number', function() {
    const errorTotal = {
      'id' : 'UID_12345',
      'total' : 'abc',
      'items' : [
        {'id' : 'a', 'value' : '25.00' },
        {'id' : 'b', 'value' : '40.00' },
        {'id' : 'c', 'value' : '35.00' }
      ]
    };
    assert.equal(updateTotal(errorTotal), 'data type error');
  });

  it('should return data type error if item value cannot be converted to number', function() {
    const errorItemValue = {
      'id' : 'UID_12345',
      'total' : '0.00',
      'items' : [
        {'id' : 'a', 'value' : '25.00' },
        {'id' : 'b', 'value' : undefined },
        {'id' : 'c', 'value' : '35.00' }
      ]
    };
    assert.equal(updateTotal(errorItemValue), 'data type error');
  });
 
});

describe('test flatten data function', function() {
  const expectedResult = {
    'listConcat' : {
      'id' : ['hide_1', 'hide_2', 'hide_3'],
      'label' : ['Rock', 'Weed', 'Coral']
    }
  }
  it('should return flattened list result', function() {
    const data = {
      'list' : [
        {'id' : 'hide_1', 'label' : 'Rock'},
        {'id' : 'hide_2', 'label' : 'Weed'},
        {'id' : 'hide_3', 'label' : 'Coral'}
      ]
    };
    expect(dataConcat(data)).to.deep.equal(expectedResult);
  });
});

describe('test makeHtml function', function() {
  it('should return nested unorder list html', function() {
    const menu = [
      {
        'id' : 'm1', 
        'label' : 'Home'
      },
      {
        'id' : 'm2', 
        'label' : 'Blog'
      },
      {
        'id' : 'm3', 
        'label' : 'Resources',
        'items' : [
          {
            'id' : 'm3.1', 
            'label' : 'FAQ'
          },
          {
            'id' : 'm3.1', 
            'label' : 'Downloads',
            'items' : [
              {
                'id' : 'm3.1.1', 
                'label' : 'PDF'
              }
            ]
          }
        ]
      }
    ];
    expect(makeHtml(menu)).html.to.equal('<ul><li id="m1">Home</li><li id="m2">Blog</li><li id="m3">Resources</li><ul><li id="m3.1">FAQ</li><li id="m3.1">Downloads</li><ul><li id="m3.1.1">PDF</li></ul></ul> </ul>');
  });
});


describe('test testRegex function', function() {
  const urlA = "https://foo.com/form/sign-up/thankyou";
  const urlB = "https://foo.com/form/sign-up/thankyou?id=123456789";
  const urlC = "https://foo.com/path-to-thankyou/";
  const urlD = "https://foo.com/form/sign-up/12345/thankyou";
  const urlE = "https://foo.com/form/sign-up/12345/fail";
  const urlF = "https://foo.com/form/path-thankyou/how-to-sign-up";
  const urlG = "https://foo.com/form/sign-up/thankyou/";
  const urlH = "https://foo.com/form/sign-in/thankyou";
  
  it('should return true for urlA', function() {
    assert.equal(testRegex(urlA),true);
  });
  it('should return true for urlB', function() {
    assert.equal(testRegex(urlB),true);
  });
  it('should return false for urlC', function() {
    assert.equal(testRegex(urlC),false);
  });
  it('should return true for urlD', function() {
    assert.equal(testRegex(urlD),true);
  });
  it('should return false for urlE', function() {
    assert.equal(testRegex(urlE),false);
  });
  it('should return false for urlF', function() {
    assert.equal(testRegex(urlF),false);
  });
  it('should return true for urlG', function() {
    assert.equal(testRegex(urlG),true);
  });
  it('should return false for urlH', function() {
    assert.equal(testRegex(urlH),false);
  });
});