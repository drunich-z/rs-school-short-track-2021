/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domainsList = new Map();
  let oneDomain;
  let element;
  for (let i = 0; i < domains.length; i++) {
    //  по списку
    oneDomain = domains[i].split('.');
    element = '';
    for (let j = oneDomain.length - 1; j >= 0; j--) {
      //  по элементу списка
      element = `${element}.${oneDomain[j]}`; // из-за eslint так пришлось написать
      domainsList.set(element, (domainsList.get(element) || 0) + 1); // В мап уникальные
    }
  }
  return Object.fromEntries(domainsList.entries());
}

module.exports = getDNSStats;
