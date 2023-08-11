function telephoneCheck(str) {
  let USNumberRgx = /(^([(][0-9]{3}[)])|^[0-9]{3})(-| |)*([0-9]{3})(-| )*([0-9]{4}$)|^([1])(-| |)*(([(][0-9]{3}[)])|[0-9]{3})(-| |)*([0-9]{3})(-| )*([0-9]{4}$)/gi
  return USNumberRgx.test(str);
}

telephoneCheck("-1 (757) 622-7382");

module.exports = {
  telephoneCheck
}