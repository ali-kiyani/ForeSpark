(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1311],{

/***/ "./node_modules/@angular/common/locales/global/si.js":
/*!***********************************************************!*\
  !*** ./node_modules/@angular/common/locales/global/si.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

// THIS CODE IS GENERATED - DO NOT MODIFY
// See angular/tools/gulp-tasks/cldr/extract.js

(function(global) {
  global.ng = global.ng || {};
  global.ng.common = global.ng.common || {};
  global.ng.common.locales = global.ng.common.locales || {};
  const u = undefined;
  function plural(n) {
    let i = Math.floor(Math.abs(n)), f = parseInt(n.toString().replace(/^[^.]*\.?/, ''), 10) || 0;
    if (n === 0 || n === 1 || i === 0 && f === 1) return 1;
    return 5;
  }
  global.ng.common.locales['si'] = [
    'si',
    [['පෙ', 'ප'], ['පෙ.ව.', 'ප.ව.'], u],
    [['පෙ.ව.', 'ප.ව.'], u, u],
    [
      ['ඉ', 'ස', 'අ', 'බ', 'බ්\u200dර', 'සි', 'සෙ'],
      [
        'ඉරිදා', 'සඳුදා', 'අඟහ', 'බදාදා',
        'බ්\u200dරහස්', 'සිකු', 'සෙන'
      ],
      [
        'ඉරිදා', 'සඳුදා', 'අඟහරුවාදා', 'බදාදා',
        'බ්\u200dරහස්පතින්දා', 'සිකුරාදා',
        'සෙනසුරාදා'
      ],
      [
        'ඉරි', 'සඳු', 'අඟ', 'බදා', 'බ්\u200dරහ', 'සිකු',
        'සෙන'
      ]
    ],
    u,
    [
      [
        'ජ', 'පෙ', 'මා', 'අ', 'මැ', 'ජූ', 'ජූ', 'අ', 'සැ', 'ඔ',
        'නෙ', 'දෙ'
      ],
      [
        'ජන', 'පෙබ', 'මාර්තු', 'අප්\u200dරේල්', 'මැයි',
        'ජූනි', 'ජූලි', 'අගෝ', 'සැප්', 'ඔක්', 'නොවැ',
        'දෙසැ'
      ],
      [
        'ජනවාරි', 'පෙබරවාරි', 'මාර්තු',
        'අප්\u200dරේල්', 'මැයි', 'ජූනි', 'ජූලි',
        'අගෝස්තු', 'සැප්තැම්බර්', 'ඔක්තෝබර්',
        'නොවැම්බර්', 'දෙසැම්බර්'
      ]
    ],
    [
      [
        'ජ', 'පෙ', 'මා', 'අ', 'මැ', 'ජූ', 'ජූ', 'අ', 'සැ', 'ඔ',
        'නෙ', 'දෙ'
      ],
      [
        'ජන', 'පෙබ', 'මාර්', 'අප්\u200dරේල්', 'මැයි',
        'ජූනි', 'ජූලි', 'අගෝ', 'සැප්', 'ඔක්', 'නොවැ',
        'දෙසැ'
      ],
      [
        'ජනවාරි', 'පෙබරවාරි', 'මාර්තු',
        'අප්\u200dරේල්', 'මැයි', 'ජූනි', 'ජූලි',
        'අගෝස්තු', 'සැප්තැම්බර්', 'ඔක්තෝබර්',
        'නොවැම්බර්', 'දෙසැම්බර්'
      ]
    ],
    [
      ['ක්\u200dරි.පූ.', 'ක්\u200dරි.ව.'], u,
      [
        'ක්\u200dරිස්තු පූර්ව',
        'ක්\u200dරිස්තු වර්ෂ'
      ]
    ],
    1,
    [6, 0],
    ['y-MM-dd', 'y MMM d', 'y MMMM d', 'y MMMM d, EEEE'],
    ['HH.mm', 'HH.mm.ss', 'HH.mm.ss z', 'HH.mm.ss zzzz'],
    ['{1} {0}', u, u, u],
    ['.', ',', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', '.'],
    ['#,##0.###', '#,##0%', '¤#,##0.00', '#'],
    'LKR',
    'රු.',
    'ශ්\u200dරී ලංකා රුපියල',
    {
      'JPY': ['JP¥', '¥'],
      'LKR': ['රු.'],
      'THB': ['฿'],
      'TWD': ['NT$'],
      'USD': ['US$', '$'],
      'XOF': ['සිෆ්එ']
    },
    'ltr',
    plural,
    [
      [
        ['මැ', 'ම', 'පා', 'උ', 'ද', 'හ', 'රෑ', 'මැ'],
        [
          'මැදියම', 'මධ්\u200dයාහ්නය', 'පාන්දර',
          'උදේ', 'දවල්', 'හවස', 'රෑ', 'මැදියමට පසු'
        ],
        u
      ],
      [
        [
          'මැදියම', 'මධ්\u200dයාහ්නය', 'පාන්දර',
          'උදේ', 'දවල්', 'හවස', 'රෑ', 'මැදියමට පසු'
        ],
        u, u
      ],
      [
        '00:00', '12:00', ['01:00', '06:00'], ['06:00', '12:00'], ['12:00', '14:00'],
        ['14:00', '18:00'], ['18:00', '24:00'], ['00:00', '01:00']
      ]
    ]
  ];
})(typeof globalThis !== 'undefined' && globalThis || typeof global !== 'undefined' && global ||
   typeof window !== 'undefined' && window);


/***/ })

}]);
//# sourceMappingURL=1311-es2015.js.map