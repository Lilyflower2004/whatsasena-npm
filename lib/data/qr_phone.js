async function phone(number, name) {
  if (!number || !name) {
    throw new Error ('Missin Phone Number or Name!')
  }
  var data = ''
  if (number.startsWith('90')) {
    data = '*Bu Kodu Kimseyle Paylaşmayın!*' + ' ' + name
  } else {
    data = '*¡Por favor no compartas este código con nadie, confío en tí!*' + ' ' + name
  }
  return data;
}
module.exports = phone
