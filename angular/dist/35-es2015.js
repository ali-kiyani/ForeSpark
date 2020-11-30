(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/@angular/common/locales/ast.js":
/*!*****************************************************!*\
  !*** ./node_modules/@angular/common/locales/ast.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(null, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY
    // See angular/tools/gulp-tasks/cldr/extract.js
    var u = undefined;
    function plural(n) {
        var i = Math.floor(Math.abs(n)), v = n.toString().replace(/^[^.]*\.?/, '').length;
        if (i === 1 && v === 0)
            return 1;
        return 5;
    }
    exports.default = [
        'ast',
        [['a', 'p'], ['AM', 'PM'], ['de la mañana', 'de la tarde']],
        [['a', 'p'], ['AM', 'PM'], ['mañana', 'tarde']],
        [
            ['D', 'L', 'M', 'M', 'X', 'V', 'S'], ['dom', 'llu', 'mar', 'mié', 'xue', 'vie', 'sáb'],
            ['domingu', 'llunes', 'martes', 'miércoles', 'xueves', 'vienres', 'sábadu'],
            ['do', 'll', 'ma', 'mi', 'xu', 'vi', 'sá']
        ],
        u,
        [
            ['X', 'F', 'M', 'A', 'M', 'X', 'X', 'A', 'S', 'O', 'P', 'A'],
            ['xin', 'feb', 'mar', 'abr', 'may', 'xun', 'xnt', 'ago', 'set', 'och', 'pay', 'avi'],
            [
                'de xineru', 'de febreru', 'de marzu', 'd’abril', 'de mayu', 'de xunu', 'de xunetu',
                'd’agostu', 'de setiembre', 'd’ochobre', 'de payares', 'd’avientu'
            ]
        ],
        [
            ['X', 'F', 'M', 'A', 'M', 'X', 'X', 'A', 'S', 'O', 'P', 'A'],
            ['Xin', 'Feb', 'Mar', 'Abr', 'May', 'Xun', 'Xnt', 'Ago', 'Set', 'Och', 'Pay', 'Avi'],
            [
                'xineru', 'febreru', 'marzu', 'abril', 'mayu', 'xunu', 'xunetu', 'agostu', 'setiembre',
                'ochobre', 'payares', 'avientu'
            ]
        ],
        [['e.C.', 'd.C.'], u, ['enantes de Cristu', 'después de Cristu']],
        1,
        [6, 0],
        ['d/M/yy', 'd MMM y', 'd MMMM \'de\' y', 'EEEE, d MMMM \'de\' y'],
        ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'],
        ['{1} {0}', '{1}, {0}', '{1} \'a\' \'les\' {0}', u],
        [',', '.', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'ND', ':'],
        ['#,##0.###', '#,##0%', '#,##0.00 ¤', '#E0'],
        'EUR',
        '€',
        'euro',
        {
            'BYN': [],
            'DKK': [],
            'HRK': [],
            'ISK': [],
            'NOK': [],
            'PLN': [],
            'RUR': [],
            'SEK': [],
            'THB': ['฿'],
            'TWD': ['NT$'],
            'XXX': []
        },
        'ltr',
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL2xvY2FsZXMvYXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUgseUNBQXlDO0lBQ3pDLCtDQUErQztJQUUvQyxJQUFNLENBQUMsR0FBRyxTQUFTLENBQUM7SUFFcEIsU0FBUyxNQUFNLENBQUMsQ0FBUztRQUN2QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ2xGLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELGtCQUFlO1FBQ2IsS0FBSztRQUNMLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDM0QsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMvQztZQUNFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7WUFDdEYsQ0FBQyxTQUFT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dCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLy8gVEhJUyBDT0RFIElTIEdFTkVSQVRFRCAtIERPIE5PVCBNT0RJRllcbi8vIFNlZSBhbmd1bGFyL3Rvb2xzL2d1bHAtdGFza3MvY2xkci9leHRyYWN0LmpzXG5cbmNvbnN0IHUgPSB1bmRlZmluZWQ7XG5cbmZ1bmN0aW9uIHBsdXJhbChuOiBudW1iZXIpOiBudW1iZXIge1xuICBsZXQgaSA9IE1hdGguZmxvb3IoTWF0aC5hYnMobikpLCB2ID0gbi50b1N0cmluZygpLnJlcGxhY2UoL15bXi5dKlxcLj8vLCAnJykubGVuZ3RoO1xuICBpZiAoaSA9PT0gMSAmJiB2ID09PSAwKSByZXR1cm4gMTtcbiAgcmV0dXJuIDU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgJ2FzdCcsXG4gIFtbJ2EnLCAncCddLCBbJ0FNJywgJ1BNJ10sIFsnZGUgbGEgbWHDsWFuYScsICdkZSBsYSB0YXJkZSddXSxcbiAgW1snYScsICdwJ10sIFsnQU0nLCAnUE0nXSwgWydtYcOxYW5hJywgJ3RhcmRlJ11dLFxuICBbXG4gICAgWydEJywgJ0wnLCAnTScsICdNJywgJ1gnLCAnVicsICdTJ10sIFsnZG9tJywgJ2xsdScsICdtYXInLCAnbWnDqScsICd4dWUnLCAndmllJywgJ3PDoWInXSxcbiAgICBbJ2RvbWluZ3UnLCAnbGx1bmVzJywgJ21hcnRlcycsICdtacOpcmNvbGVzJywgJ3h1ZXZlcycsICd2aWVucmVzJywgJ3PDoWJhZHUnXSxcbiAgICBbJ2RvJywgJ2xsJywgJ21hJywgJ21pJywgJ3h1JywgJ3ZpJywgJ3PDoSddXG4gIF0sXG4gIHUsXG4gIFtcbiAgICBbJ1gnLCAnRicsICdNJywgJ0EnLCAnTScsICdYJywgJ1gnLCAnQScsICdTJywgJ08nLCAnUCcsICdBJ10sXG4gICAgWyd4aW4nLCAnZmViJywgJ21hcicsICdhYnInLCAnbWF5JywgJ3h1bicsICd4bnQnLCAnYWdvJywgJ3NldCcsICdvY2gnLCAncGF5JywgJ2F2aSddLFxuICAgIFtcbiAgICAgICdkZSB4aW5lcnUnLCAnZGUgZmVicmVydScsICdkZSBtYXJ6dScsICdk4oCZYWJyaWwnLCAnZGUgbWF5dScsICdkZSB4dW51JywgJ2RlIHh1bmV0dScsXG4gICAgICAnZOKAmWFnb3N0dScsICdkZSBzZXRpZW1icmUnLCAnZOKAmW9jaG9icmUnLCAnZGUgcGF5YXJlcycsICdk4oCZYXZpZW50dSdcbiAgICBdXG4gIF0sXG4gIFtcbiAgICBbJ1gnLCAnRicsICdNJywgJ0EnLCAnTScsICdYJywgJ1gnLCAnQScsICdTJywgJ08nLCAnUCcsICdBJ10sXG4gICAgWydYaW4nLCAnRmViJywgJ01hcicsICdBYnInLCAnTWF5JywgJ1h1bicsICdYbnQnLCAnQWdvJywgJ1NldCcsICdPY2gnLCAnUGF5JywgJ0F2aSddLFxuICAgIFtcbiAgICAgICd4aW5lcnUnLCAnZmVicmVydScsICdtYXJ6dScsICdhYnJpbCcsICdtYXl1JywgJ3h1bnUnLCAneHVuZXR1JywgJ2Fnb3N0dScsICdzZXRpZW1icmUnLFxuICAgICAgJ29jaG9icmUnLCAncGF5YXJlcycsICdhdmllbnR1J1xuICAgIF1cbiAgXSxcbiAgW1snZS5DLicsICdkLkMuJ10sIHUsIFsnZW5hbnRlcyBkZSBDcmlzdHUnLCAnZGVzcHXDqXMgZGUgQ3Jpc3R1J11dLFxuICAxLFxuICBbNiwgMF0sXG4gIFsnZC9NL3l5JywgJ2QgTU1NIHknLCAnZCBNTU1NIFxcJ2RlXFwnIHknLCAnRUVFRSwgZCBNTU1NIFxcJ2RlXFwnIHknXSxcbiAgWydISDptbScsICdISDptbTpzcycsICdISDptbTpzcyB6JywgJ0hIOm1tOnNzIHp6enonXSxcbiAgWyd7MX0gezB9JywgJ3sxfSwgezB9JywgJ3sxfSBcXCdhXFwnIFxcJ2xlc1xcJyB7MH0nLCB1XSxcbiAgWycsJywgJy4nLCAnOycsICclJywgJysnLCAnLScsICdFJywgJ8OXJywgJ+KAsCcsICfiiJ4nLCAnTkQnLCAnOiddLFxuICBbJyMsIyMwLiMjIycsICcjLCMjMCUnLCAnIywjIzAuMDDCoMKkJywgJyNFMCddLFxuICAnRVVSJyxcbiAgJ+KCrCcsXG4gICdldXJvJyxcbiAge1xuICAgICdCWU4nOiBbXSxcbiAgICAnREtLJzogW10sXG4gICAgJ0hSSyc6IFtdLFxuICAgICdJU0snOiBbXSxcbiAgICAnTk9LJzogW10sXG4gICAgJ1BMTic6IFtdLFxuICAgICdSVVInOiBbXSxcbiAgICAnU0VLJzogW10sXG4gICAgJ1RIQic6IFsn4Li/J10sXG4gICAgJ1RXRCc6IFsnTlQkJ10sXG4gICAgJ1hYWCc6IFtdXG4gIH0sXG4gICdsdHInLFxuICBwbHVyYWxcbl07XG4iXX0=

/***/ })

}]);
//# sourceMappingURL=35-es2015.js.map