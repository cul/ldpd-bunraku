/*!
 * lunr.unicodeNormalizer
 * by Chris Van <cvan>, 2014
 * Extension for lunr.js <http://lunrjs.com/>
 * Includes code from https://github.com/dodo/node-slug/blob/master/slug.js
 */

(function(lunr) {
  var charmap = {
    // Latin
    'À': 'A', 'Á': 'A', 'Â': 'A', 'Ã': 'A', 'Ä': 'A', 'Å': 'A', 'Æ': 'AE',
    'Ç': 'C',
    'È': 'E', 'É': 'E', 'Ê': 'E', 'Ë': 'E',
    'Ì': 'I', 'Í': 'I','Î': 'I', 'Ï': 'I',
    'Ð': 'D',
    'Ñ': 'N',
    'Ò': 'O', 'Ó': 'O', 'Ô': 'O','Õ': 'O', 'Ö': 'O', 'Ő': 'O', 'Ø': 'O','Ō':'O',
    'Ù': 'U', 'Ú': 'U', 'Û': 'U','Ü': 'U', 'Ű': 'U','Ū':'U',
    'Ý': 'Y',
    'Þ': 'TH', 'ß': 'ss',
    'à': 'a', 'á': 'a', 'â': 'a', 'ã': 'a', 'ä': 'a', 'å': 'a', 'æ': 'ae',
    'ç': 'c',
    'è': 'e', 'é': 'e', 'ê': 'e', 'ë': 'e',
    'ì': 'i', 'í': 'i',
    'î': 'i', 'ï': 'i',
    'ð': 'd', 'ñ': 'n', 'ò': 'o', 'ó': 'o', 'ô': 'o','õ': 'o', 'ö': 'o', 'ő': 'o', 'ø': 'o', 'ō': 'o',
    'ù': 'u', 'ú': 'u', 'û': 'u','ü': 'u', 'ű': 'u','ū':'u',
    'ý': 'y','ÿ': 'y',
    'þ': 'th', 'ẞ': 'SS',

    // Currency
    '€': 'euro', '₢': 'cruzeiro', '₣': 'french franc', '£': 'pound',
    '₤': 'lira', '₥': 'mill', '₦': 'naira', '₧': 'peseta', '₨': 'rupee',
    '₩': 'won', '₪': 'new shequel', '₫': 'dong', '₭': 'kip', '₮': 'tugrik',
    '₯': 'drachma', '₰': 'penny', '₱': 'peso', '₲': 'guarani',
    '₳': 'austral', '₴': 'hryvnia', '₵': 'cedi', '¢': 'cent', '¥': 'yen',
    '元': 'yuan', '円': 'yen', '﷼': 'rial', '₠': 'ecu', '¤': 'currency',
    '฿': 'baht', "$": 'dollar', '₹': 'indian rupee',

    // Symbols
    '©': '(c)', 'œ': 'oe', 'Œ': 'OE', '∑': 'sum', '®': '(r)', '†': '+',
    '“': '"', '”': '"', '‘': "'", '’': "'", '∂': 'd', 'ƒ': 'f', '™': 'tm',
    '℠': 'sm', '…': '...', '˚': 'o', 'º': 'o', 'ª': 'a', '•': '*',
    '∆': 'delta', '∞': 'infinity', '♥': 'love', '&': 'and', '|': 'or',
    '<': 'less', '>': 'greater'
  };
  var charmapPattern = Object.keys(charmap).map(function(char) {
    // Update this with every normalized character that is also a unicode
    // operator.
    return char.replace(/[\|\$]/g, '\\$&');  // `$&` -> returns matched text
  }).join('|');
  var charmapRegExp = new RegExp('(' + charmapPattern + ')', 'g');

  /**
   * A function for normalizing unicode characters from a string.
   *
   * @module
   * @param {String} str The string ready to be tokenized
   * @returns {String}
 */
  lunr.unicodeNormalizer = function(str) {
    return str.replace(charmapRegExp, function(char) {
      return charmap[char];
    });
  };

  /**
   * A function for splitting a string into tokens ready to be inserted into
   * the search index.
   *
   * @module
   * @param {String} obj The string to convert into tokens
   * @returns {Array}
   */
   var tokenizer = function(obj) {
    if (!arguments.length || obj === null || obj === undefined) return [];
    if (Array.isArray(obj)) {
      return obj.map(function(t) {
        return lunr.unicodeNormalizer(t).toLowerCase();
      });
    }

    var str = obj.toString().replace(/^\s+/, '');

    for (var i = str.length - 1; i >= 0; i--) {
      if (/\S/.test(str.charAt(i))) {
        str = str.substring(0, i + 1);
        break;
      }
    }

    str = lunr.unicodeNormalizer(str);

    return str
      .split(/\s+/)
      .map(function(token) {
        return token.toLowerCase();
      });
    };

    for(var attr in lunr.tokenizer){
      tokenizer[attr] = lunr.tokenizer[attr];
    }

    lunr.tokenizer = tokenizer;
})(lunr);
