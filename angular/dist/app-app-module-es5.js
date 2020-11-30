function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-app-module"], {
  /***/
  "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js":
  /*!******************************************************************!*\
    !*** ./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js ***!
    \******************************************************************/

  /*! exports provided: AgmBicyclingLayer, AgmCircle, AgmCoreModule, AgmDataLayer, AgmFitBounds, AgmGeocoder, AgmInfoWindow, AgmKmlLayer, AgmMap, AgmMarker, AgmPolygon, AgmPolyline, AgmPolylineIcon, AgmPolylinePoint, AgmRectangle, AgmTransitLayer, CircleManager, ControlPosition, DataLayerManager, FitBoundsAccessor, GeocoderLocationType, GeocoderStatus, GoogleMapsAPIWrapper, GoogleMapsScriptProtocol, InfoWindowManager, KmlLayerManager, LAZY_MAPS_API_CONFIG, LayerManager, LazyMapsAPILoader, MapTypeId, MapsAPILoader, MarkerManager, NoOpMapsAPILoader, PolygonManager, PolylineManager, RectangleManager, ScaleControlStyle, ZoomControlStyle, ɵa, ɵb, ɵc, ɵd, ɵe */

  /***/
  function node_modulesAgmCore__ivy_ngcc__Fesm2015AgmCoreJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmBicyclingLayer", function () {
      return AgmBicyclingLayer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmCircle", function () {
      return AgmCircle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmCoreModule", function () {
      return AgmCoreModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmDataLayer", function () {
      return AgmDataLayer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmFitBounds", function () {
      return AgmFitBounds;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmGeocoder", function () {
      return AgmGeocoder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmInfoWindow", function () {
      return AgmInfoWindow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmKmlLayer", function () {
      return AgmKmlLayer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmMap", function () {
      return AgmMap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmMarker", function () {
      return AgmMarker;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmPolygon", function () {
      return AgmPolygon;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmPolyline", function () {
      return AgmPolyline;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmPolylineIcon", function () {
      return AgmPolylineIcon;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmPolylinePoint", function () {
      return AgmPolylinePoint;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmRectangle", function () {
      return AgmRectangle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmTransitLayer", function () {
      return AgmTransitLayer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CircleManager", function () {
      return CircleManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlPosition", function () {
      return ControlPosition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataLayerManager", function () {
      return DataLayerManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FitBoundsAccessor", function () {
      return FitBoundsAccessor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeocoderLocationType", function () {
      return GeocoderLocationType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeocoderStatus", function () {
      return GeocoderStatus;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoogleMapsAPIWrapper", function () {
      return GoogleMapsAPIWrapper;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoogleMapsScriptProtocol", function () {
      return GoogleMapsScriptProtocol;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoWindowManager", function () {
      return InfoWindowManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KmlLayerManager", function () {
      return KmlLayerManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LAZY_MAPS_API_CONFIG", function () {
      return LAZY_MAPS_API_CONFIG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayerManager", function () {
      return LayerManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LazyMapsAPILoader", function () {
      return LazyMapsAPILoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapTypeId", function () {
      return MapTypeId;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapsAPILoader", function () {
      return MapsAPILoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MarkerManager", function () {
      return MarkerManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NoOpMapsAPILoader", function () {
      return NoOpMapsAPILoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PolygonManager", function () {
      return PolygonManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PolylineManager", function () {
      return PolylineManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RectangleManager", function () {
      return RectangleManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScaleControlStyle", function () {
      return ScaleControlStyle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ZoomControlStyle", function () {
      return ZoomControlStyle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return FitBoundsService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return coreDirectives;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return WindowRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵd", function () {
      return DocumentRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵe", function () {
      return BROWSER_GLOBALS_PROVIDERS;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["*"];

    var MapsAPILoader = function MapsAPILoader() {
      _classCallCheck(this, MapsAPILoader);
    };

    MapsAPILoader.ɵfac = function MapsAPILoader_Factory(t) {
      return new (t || MapsAPILoader)();
    };

    MapsAPILoader.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: MapsAPILoader,
      factory: MapsAPILoader.ɵfac
    });
    /**
     * Wrapper class that handles the communication with the Google Maps Javascript
     * API v3
     */

    var GoogleMapsAPIWrapper = /*#__PURE__*/function () {
      function GoogleMapsAPIWrapper(_loader, _zone) {
        var _this = this;

        _classCallCheck(this, GoogleMapsAPIWrapper);

        this._loader = _loader;
        this._zone = _zone;
        this._map = new Promise(function (resolve) {
          _this._mapResolver = resolve;
        });
      }

      _createClass(GoogleMapsAPIWrapper, [{
        key: "createMap",
        value: function createMap(el, mapOptions) {
          var _this2 = this;

          return this._zone.runOutsideAngular(function () {
            return _this2._loader.load().then(function () {
              var map = new google.maps.Map(el, mapOptions);

              _this2._mapResolver(map);

              return;
            });
          });
        }
      }, {
        key: "setMapOptions",
        value: function setMapOptions(options) {
          var _this3 = this;

          return this._zone.runOutsideAngular(function () {
            _this3._map.then(function (m) {
              m.setOptions(options);
            });
          });
        }
        /**
         * Creates a google map marker with the map context
         */

      }, {
        key: "createMarker",
        value: function createMarker() {
          var _this4 = this;

          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var addToMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return this._zone.runOutsideAngular(function () {
            return _this4._map.then(function (map) {
              if (addToMap) {
                options.map = map;
              }

              return new google.maps.Marker(options);
            });
          });
        }
      }, {
        key: "createInfoWindow",
        value: function createInfoWindow(options) {
          var _this5 = this;

          return this._zone.runOutsideAngular(function () {
            return _this5._map.then(function () {
              return new google.maps.InfoWindow(options);
            });
          });
        }
        /**
         * Creates a google.map.Circle for the current map.
         */

      }, {
        key: "createCircle",
        value: function createCircle(options) {
          var _this6 = this;

          return this._zone.runOutsideAngular(function () {
            return _this6._map.then(function (map) {
              if (typeof options.strokePosition === 'string') {
                options.strokePosition = google.maps.StrokePosition[options.strokePosition];
              }

              options.map = map;
              return new google.maps.Circle(options);
            });
          });
        }
        /**
         * Creates a google.map.Rectangle for the current map.
         */

      }, {
        key: "createRectangle",
        value: function createRectangle(options) {
          var _this7 = this;

          return this._zone.runOutsideAngular(function () {
            return _this7._map.then(function (map) {
              options.map = map;
              return new google.maps.Rectangle(options);
            });
          });
        }
      }, {
        key: "createPolyline",
        value: function createPolyline(options) {
          var _this8 = this;

          return this._zone.runOutsideAngular(function () {
            return _this8.getNativeMap().then(function (map) {
              var line = new google.maps.Polyline(options);
              line.setMap(map);
              return line;
            });
          });
        }
      }, {
        key: "createPolygon",
        value: function createPolygon(options) {
          var _this9 = this;

          return this._zone.runOutsideAngular(function () {
            return _this9.getNativeMap().then(function (map) {
              var polygon = new google.maps.Polygon(options);
              polygon.setMap(map);
              return polygon;
            });
          });
        }
        /**
         * Creates a new google.map.Data layer for the current map
         */

      }, {
        key: "createDataLayer",
        value: function createDataLayer(options) {
          var _this10 = this;

          return this._zone.runOutsideAngular(function () {
            return _this10._map.then(function (m) {
              var data = new google.maps.Data(options);
              data.setMap(m);
              return data;
            });
          });
        }
        /**
         * Creates a TransitLayer instance for a map
         * @param {TransitLayerOptions} options - used for setting layer options
         * @returns {Promise<TransitLayer>} a new transit layer object
         */

      }, {
        key: "createTransitLayer",
        value: function createTransitLayer(options) {
          var _this11 = this;

          return this._zone.runOutsideAngular(function () {
            return _this11._map.then(function (map) {
              var newLayer = new google.maps.TransitLayer();
              newLayer.setMap(options.visible ? map : null);
              return newLayer;
            });
          });
        }
        /**
         * Creates a BicyclingLayer instance for a map
         * @param {BicyclingLayerOptions} options - used for setting layer options
         * @returns {Promise<BicyclingLayer>} a new bicycling layer object
         */

      }, {
        key: "createBicyclingLayer",
        value: function createBicyclingLayer(options) {
          var _this12 = this;

          return this._zone.runOutsideAngular(function () {
            return _this12._map.then(function (map) {
              var newLayer = new google.maps.BicyclingLayer();
              newLayer.setMap(options.visible ? map : null);
              return newLayer;
            });
          });
        }
        /**
         * Determines if given coordinates are insite a Polygon path.
         */

      }, {
        key: "containsLocation",
        value: function containsLocation(latLng, polygon) {
          return google.maps.geometry.poly.containsLocation(latLng, polygon);
        }
      }, {
        key: "subscribeToMapEvent",
        value: function subscribeToMapEvent(eventName) {
          var _this13 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this13._map.then(function (m) {
              m.addListener(eventName, function (arg) {
                _this13._zone.run(function () {
                  return observer.next(arg);
                });
              });
            });
          });
        }
      }, {
        key: "clearInstanceListeners",
        value: function clearInstanceListeners() {
          var _this14 = this;

          return this._zone.runOutsideAngular(function () {
            _this14._map.then(function (map) {
              google.maps.event.clearInstanceListeners(map);
            });
          });
        }
      }, {
        key: "setCenter",
        value: function setCenter(latLng) {
          var _this15 = this;

          return this._zone.runOutsideAngular(function () {
            return _this15._map.then(function (map) {
              return map.setCenter(latLng);
            });
          });
        }
      }, {
        key: "getZoom",
        value: function getZoom() {
          var _this16 = this;

          return this._zone.runOutsideAngular(function () {
            return _this16._map.then(function (map) {
              return map.getZoom();
            });
          });
        }
      }, {
        key: "getBounds",
        value: function getBounds() {
          var _this17 = this;

          return this._zone.runOutsideAngular(function () {
            return _this17._map.then(function (map) {
              return map.getBounds();
            });
          });
        }
      }, {
        key: "getMapTypeId",
        value: function getMapTypeId() {
          var _this18 = this;

          return this._zone.runOutsideAngular(function () {
            return _this18._map.then(function (map) {
              return map.getMapTypeId();
            });
          });
        }
      }, {
        key: "setZoom",
        value: function setZoom(zoom) {
          var _this19 = this;

          return this._zone.runOutsideAngular(function () {
            return _this19._map.then(function (map) {
              return map.setZoom(zoom);
            });
          });
        }
      }, {
        key: "getCenter",
        value: function getCenter() {
          var _this20 = this;

          return this._zone.runOutsideAngular(function () {
            return _this20._map.then(function (map) {
              return map.getCenter();
            });
          });
        }
      }, {
        key: "panTo",
        value: function panTo(latLng) {
          var _this21 = this;

          return this._zone.runOutsideAngular(function () {
            return _this21._map.then(function (map) {
              return map.panTo(latLng);
            });
          });
        }
      }, {
        key: "panBy",
        value: function panBy(x, y) {
          var _this22 = this;

          return this._zone.runOutsideAngular(function () {
            return _this22._map.then(function (map) {
              return map.panBy(x, y);
            });
          });
        }
      }, {
        key: "fitBounds",
        value: function fitBounds(latLng, padding) {
          var _this23 = this;

          return this._zone.runOutsideAngular(function () {
            return _this23._map.then(function (map) {
              return map.fitBounds(latLng, padding);
            });
          });
        }
      }, {
        key: "panToBounds",
        value: function panToBounds(latLng, padding) {
          var _this24 = this;

          return this._zone.runOutsideAngular(function () {
            return _this24._map.then(function (map) {
              return map.panToBounds(latLng, padding);
            });
          });
        }
        /**
         * Returns the native Google Maps Map instance. Be careful when using this instance directly.
         */

      }, {
        key: "getNativeMap",
        value: function getNativeMap() {
          return this._map;
        }
        /**
         * Triggers the given event name on the map instance.
         */

      }, {
        key: "triggerMapEvent",
        value: function triggerMapEvent(eventName) {
          return this._map.then(function (m) {
            return google.maps.event.trigger(m, eventName);
          });
        }
      }]);

      return GoogleMapsAPIWrapper;
    }();

    GoogleMapsAPIWrapper.ɵfac = function GoogleMapsAPIWrapper_Factory(t) {
      return new (t || GoogleMapsAPIWrapper)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MapsAPILoader), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    GoogleMapsAPIWrapper.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: GoogleMapsAPIWrapper,
      factory: GoogleMapsAPIWrapper.ɵfac
    });

    GoogleMapsAPIWrapper.ctorParameters = function () {
      return [{
        type: MapsAPILoader
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    GoogleMapsAPIWrapper = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [MapsAPILoader, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], GoogleMapsAPIWrapper);
    /**
     * This class manages Transit and Bicycling Layers for a Google Map instance.
     */

    var LayerManager = /*#__PURE__*/function () {
      function LayerManager(_wrapper) {
        _classCallCheck(this, LayerManager);

        this._wrapper = _wrapper;
        this._layers = new Map();
      }
      /**
       * Adds a transit layer to a map instance.
       * @param {AgmTransitLayer} layer - a TransitLayer object
       * @param {TransitLayerOptions} options - TransitLayerOptions options
       * @returns void
       */


      _createClass(LayerManager, [{
        key: "addTransitLayer",
        value: function addTransitLayer(layer, options) {
          var newLayer = this._wrapper.createTransitLayer(options);

          this._layers.set(layer, newLayer);
        }
        /**
         * Adds a bicycling layer to a map instance.
         * @param {AgmBicyclingLayer} layer - a bicycling layer object
         * @param {BicyclingLayerOptions} options - BicyclingLayer options
         * @returns void
         */

      }, {
        key: "addBicyclingLayer",
        value: function addBicyclingLayer(layer, options) {
          var newLayer = this._wrapper.createBicyclingLayer(options);

          this._layers.set(layer, newLayer);
        }
        /**
         * Deletes a map layer
         * @param {AgmTransitLayer|AgmBicyclingLayer} layer - the layer to delete
         * @returns  Promise<void>
         */

      }, {
        key: "deleteLayer",
        value: function deleteLayer(layer) {
          var _this25 = this;

          return this._layers.get(layer).then(function (currentLayer) {
            currentLayer.setMap(null);

            _this25._layers["delete"](layer);
          });
        }
        /**
         * Hide/Show a google map layer
         * @param { AgmTransitLayer|AgmBicyclingLayer} layer - the layer to hide/show
         * @param {TransitLayerOptions|BicyclingLayerOptions} options - used to set visibility of the layer
         * @returns Promise<void>
         */

      }, {
        key: "toggleLayerVisibility",
        value: function toggleLayerVisibility(layer, options) {
          var _this26 = this;

          return this._layers.get(layer).then(function (currentLayer) {
            if (!options.visible) {
              currentLayer.setMap(null);
              return;
            } else {
              return _this26._wrapper.getNativeMap().then(function (map) {
                currentLayer.setMap(map);
              });
            }
          });
        }
      }]);

      return LayerManager;
    }();

    LayerManager.ɵfac = function LayerManager_Factory(t) {
      return new (t || LayerManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper));
    };

    LayerManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: LayerManager,
      factory: LayerManager.ɵfac
    });

    LayerManager.ctorParameters = function () {
      return [{
        type: GoogleMapsAPIWrapper
      }];
    };

    LayerManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper])], LayerManager);
    var layerId = 0;
    /*
     * This directive adds a bicycling layer to a google map instance
     * <agm-bicycling-layer [visible]="true|false"> <agm-bicycling-layer>
     * */

    var AgmBicyclingLayer = /*#__PURE__*/function () {
      function AgmBicyclingLayer(_manager) {
        _classCallCheck(this, AgmBicyclingLayer);

        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId++).toString();
        /**
         * Hide/show bicycling layer
         */

        this.visible = true;
      }

      _createClass(AgmBicyclingLayer, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this._addedToManager) {
            return;
          }

          this._manager.addBicyclingLayer(this, {
            visible: this.visible
          });

          this._addedToManager = true;
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this._addedToManager) {
            return;
          }

          if (changes['visible'] != null) {
            this._manager.toggleLayerVisibility(this, {
              visible: changes['visible'].currentValue
            });
          }
        }
        /** @internal */

      }, {
        key: "id",
        value: function id() {
          return this._id;
        }
        /** @internal */

      }, {
        key: "toString",
        value: function toString() {
          return "AgmBicyclingLayer-".concat(this._id.toString());
        }
        /** @internal */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._manager.deleteLayer(this);
        }
      }]);

      return AgmBicyclingLayer;
    }();

    AgmBicyclingLayer.ɵfac = function AgmBicyclingLayer_Factory(t) {
      return new (t || AgmBicyclingLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerManager));
    };

    AgmBicyclingLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmBicyclingLayer,
      selectors: [["agm-bicycling-layer"]],
      inputs: {
        visible: "visible"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });

    AgmBicyclingLayer.ctorParameters = function () {
      return [{
        type: LayerManager
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmBicyclingLayer.prototype, "visible", void 0);
    AgmBicyclingLayer = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [LayerManager])], AgmBicyclingLayer);

    var CircleManager = /*#__PURE__*/function () {
      function CircleManager(_apiWrapper, _zone) {
        _classCallCheck(this, CircleManager);

        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
        this._circles = new Map();
      }

      _createClass(CircleManager, [{
        key: "addCircle",
        value: function addCircle(circle) {
          this._circles.set(circle, this._apiWrapper.createCircle({
            center: {
              lat: circle.latitude,
              lng: circle.longitude
            },
            clickable: circle.clickable,
            draggable: circle.draggable,
            editable: circle.editable,
            fillColor: circle.fillColor,
            fillOpacity: circle.fillOpacity,
            radius: circle.radius,
            strokeColor: circle.strokeColor,
            strokeOpacity: circle.strokeOpacity,
            strokePosition: circle.strokePosition,
            strokeWeight: circle.strokeWeight,
            visible: circle.visible,
            zIndex: circle.zIndex
          }));
        }
        /**
         * Removes the given circle from the map.
         */

      }, {
        key: "removeCircle",
        value: function removeCircle(circle) {
          var _this27 = this;

          return this._circles.get(circle).then(function (c) {
            c.setMap(null);

            _this27._circles["delete"](circle);
          });
        }
      }, {
        key: "setOptions",
        value: function setOptions(circle, options) {
          return this._circles.get(circle).then(function (c) {
            if (typeof options.strokePosition === 'string') {
              options.strokePosition = google.maps.StrokePosition[options.strokePosition];
            }

            c.setOptions(options);
          });
        }
      }, {
        key: "getBounds",
        value: function getBounds(circle) {
          return this._circles.get(circle).then(function (c) {
            return c.getBounds();
          });
        }
      }, {
        key: "getCenter",
        value: function getCenter(circle) {
          return this._circles.get(circle).then(function (c) {
            return c.getCenter();
          });
        }
      }, {
        key: "getRadius",
        value: function getRadius(circle) {
          return this._circles.get(circle).then(function (c) {
            return c.getRadius();
          });
        }
      }, {
        key: "setCenter",
        value: function setCenter(circle) {
          return this._circles.get(circle).then(function (c) {
            return c.setCenter({
              lat: circle.latitude,
              lng: circle.longitude
            });
          });
        }
      }, {
        key: "setEditable",
        value: function setEditable(circle) {
          return this._circles.get(circle).then(function (c) {
            return c.setEditable(circle.editable);
          });
        }
      }, {
        key: "setDraggable",
        value: function setDraggable(circle) {
          return this._circles.get(circle).then(function (c) {
            return c.setDraggable(circle.draggable);
          });
        }
      }, {
        key: "setVisible",
        value: function setVisible(circle) {
          return this._circles.get(circle).then(function (c) {
            return c.setVisible(circle.visible);
          });
        }
      }, {
        key: "setRadius",
        value: function setRadius(circle) {
          return this._circles.get(circle).then(function (c) {
            return c.setRadius(circle.radius);
          });
        }
      }, {
        key: "getNativeCircle",
        value: function getNativeCircle(circle) {
          return this._circles.get(circle);
        }
      }, {
        key: "createEventObservable",
        value: function createEventObservable(eventName, circle) {
          var _this28 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            var listener = null;

            _this28._circles.get(circle).then(function (c) {
              listener = c.addListener(eventName, function (e) {
                return _this28._zone.run(function () {
                  return observer.next(e);
                });
              });
            });

            return function () {
              if (listener !== null) {
                listener.remove();
              }
            };
          });
        }
      }]);

      return CircleManager;
    }();

    CircleManager.ɵfac = function CircleManager_Factory(t) {
      return new (t || CircleManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    CircleManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CircleManager,
      factory: CircleManager.ɵfac
    });

    CircleManager.ctorParameters = function () {
      return [{
        type: GoogleMapsAPIWrapper
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    CircleManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], CircleManager);
    var AgmCircle_1;

    var AgmCircle = AgmCircle_1 = /*#__PURE__*/function () {
      function AgmCircle(_manager) {
        _classCallCheck(this, AgmCircle);

        this._manager = _manager;
        /**
         * Indicates whether this Circle handles mouse events. Defaults to true.
         */

        this.clickable = true;
        /**
         * If set to true, the user can drag this circle over the map. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename

        this.draggable = false;
        /**
         * If set to true, the user can edit this circle by dragging the control points shown at
         * the center and around the circumference of the circle. Defaults to false.
         */

        this.editable = false;
        /**
         * The radius in meters on the Earth's surface.
         */

        this.radius = 0;
        /**
         * The stroke position. Defaults to CENTER.
         * This property is not supported on Internet Explorer 8 and earlier.
         */

        this.strokePosition = 'CENTER';
        /**
         * The stroke width in pixels.
         */

        this.strokeWeight = 0;
        /**
         * Whether this circle is visible on the map. Defaults to true.
         */

        this.visible = true;
        /**
         * This event is fired when the circle's center is changed.
         */

        this.centerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks on the circle.
         */

        this.circleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks on the circle.
         */

        this.circleDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the circle.
         */

        this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the circle.
         */

        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the circle.
         */

        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousedown event is fired on the circle.
         */

        this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousemove event is fired on the circle.
         */

        this.mouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on circle mouseout.
         */

        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on circle mouseover.
         */

        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mouseup event is fired on the circle.
         */

        this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the circle's radius is changed.
         */

        this.radiusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the circle is right-clicked on.
         */

        this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._circleAddedToManager = false;
        this._eventSubscriptions = [];
      }
      /** @internal */


      _createClass(AgmCircle, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._manager.addCircle(this);

          this._circleAddedToManager = true;

          this._registerEventListeners();
        }
        /** @internal */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this._circleAddedToManager) {
            return;
          }

          if (changes['latitude'] || changes['longitude']) {
            this._manager.setCenter(this);
          }

          if (changes['editable']) {
            this._manager.setEditable(this);
          }

          if (changes['draggable']) {
            this._manager.setDraggable(this);
          }

          if (changes['visible']) {
            this._manager.setVisible(this);
          }

          if (changes['radius']) {
            this._manager.setRadius(this);
          }

          this._updateCircleOptionsChanges(changes);
        }
      }, {
        key: "_updateCircleOptionsChanges",
        value: function _updateCircleOptionsChanges(changes) {
          var options = {};
          var optionKeys = Object.keys(changes).filter(function (k) {
            return AgmCircle_1._mapOptions.indexOf(k) !== -1;
          });
          optionKeys.forEach(function (k) {
            options[k] = changes[k].currentValue;
          });

          if (optionKeys.length > 0) {
            this._manager.setOptions(this, options);
          }
        }
      }, {
        key: "_registerEventListeners",
        value: function _registerEventListeners() {
          var _this29 = this;

          var events = new Map();
          events.set('center_changed', this.centerChange);
          events.set('click', this.circleClick);
          events.set('dblclick', this.circleDblClick);
          events.set('drag', this.drag);
          events.set('dragend', this.dragEnd);
          events.set('dragstart', this.dragStart);
          events.set('mousedown', this.mouseDown);
          events.set('mousemove', this.mouseMove);
          events.set('mouseout', this.mouseOut);
          events.set('mouseover', this.mouseOver);
          events.set('mouseup', this.mouseUp);
          events.set('radius_changed', this.radiusChange);
          events.set('rightclick', this.rightClick);
          events.forEach(function (eventEmitter, eventName) {
            _this29._eventSubscriptions.push(_this29._manager.createEventObservable(eventName, _this29).subscribe(function (value) {
              switch (eventName) {
                case 'radius_changed':
                  _this29._manager.getRadius(_this29).then(function (radius) {
                    return eventEmitter.emit(radius);
                  });

                  break;

                case 'center_changed':
                  _this29._manager.getCenter(_this29).then(function (center) {
                    return eventEmitter.emit({
                      lat: center.lat(),
                      lng: center.lng()
                    });
                  });

                  break;

                default:
                  eventEmitter.emit({
                    coords: {
                      lat: value.latLng.lat(),
                      lng: value.latLng.lng()
                    }
                  });
              }
            }));
          });
        }
        /** @internal */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._eventSubscriptions.forEach(function (s) {
            s.unsubscribe();
          });

          this._eventSubscriptions = null;

          this._manager.removeCircle(this);
        }
        /**
         * Gets the LatLngBounds of this Circle.
         */

      }, {
        key: "getBounds",
        value: function getBounds() {
          return this._manager.getBounds(this);
        }
      }, {
        key: "getCenter",
        value: function getCenter() {
          return this._manager.getCenter(this);
        }
      }]);

      return AgmCircle;
    }();

    AgmCircle.ɵfac = function AgmCircle_Factory(t) {
      return new (t || AgmCircle)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CircleManager));
    };

    AgmCircle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmCircle,
      selectors: [["agm-circle"]],
      inputs: {
        clickable: "clickable",
        draggable: ["circleDraggable", "draggable"],
        editable: "editable",
        radius: "radius",
        strokePosition: "strokePosition",
        strokeWeight: "strokeWeight",
        visible: "visible",
        latitude: "latitude",
        longitude: "longitude",
        fillColor: "fillColor",
        fillOpacity: "fillOpacity",
        strokeColor: "strokeColor",
        strokeOpacity: "strokeOpacity",
        zIndex: "zIndex"
      },
      outputs: {
        centerChange: "centerChange",
        circleClick: "circleClick",
        circleDblClick: "circleDblClick",
        drag: "drag",
        dragEnd: "dragEnd",
        dragStart: "dragStart",
        mouseDown: "mouseDown",
        mouseMove: "mouseMove",
        mouseOut: "mouseOut",
        mouseOver: "mouseOver",
        mouseUp: "mouseUp",
        radiusChange: "radiusChange",
        rightClick: "rightClick"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    AgmCircle._mapOptions = ['fillColor', 'fillOpacity', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'clickable'];

    AgmCircle.ctorParameters = function () {
      return [{
        type: CircleManager
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmCircle.prototype, "latitude", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmCircle.prototype, "longitude", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmCircle.prototype, "clickable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('circleDraggable'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmCircle.prototype, "draggable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmCircle.prototype, "editable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmCircle.prototype, "fillColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmCircle.prototype, "fillOpacity", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmCircle.prototype, "radius", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmCircle.prototype, "strokeColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmCircle.prototype, "strokeOpacity", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmCircle.prototype, "strokePosition", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmCircle.prototype, "strokeWeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmCircle.prototype, "visible", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmCircle.prototype, "zIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "centerChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "circleClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "circleDblClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "drag", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "dragEnd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "dragStart", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "mouseDown", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "mouseMove", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "mouseOut", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "mouseOver", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "mouseUp", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "radiusChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "rightClick", void 0);
    AgmCircle = AgmCircle_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [CircleManager])], AgmCircle);
    /**
     * Manages all Data Layers for a Google Map instance.
     */

    var DataLayerManager = /*#__PURE__*/function () {
      function DataLayerManager(_wrapper, _zone) {
        _classCallCheck(this, DataLayerManager);

        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
      }
      /**
       * Adds a new Data Layer to the map.
       */


      _createClass(DataLayerManager, [{
        key: "addDataLayer",
        value: function addDataLayer(layer) {
          var _this30 = this;

          var newLayer = this._wrapper.createDataLayer({
            style: layer.style
          }).then(function (d) {
            if (layer.geoJson) {
              _this30.getDataFeatures(d, layer.geoJson).then(function (features) {
                return d.features = features;
              });
            }

            return d;
          });

          this._layers.set(layer, newLayer);
        }
      }, {
        key: "deleteDataLayer",
        value: function deleteDataLayer(layer) {
          var _this31 = this;

          this._layers.get(layer).then(function (l) {
            l.setMap(null);

            _this31._layers["delete"](layer);
          });
        }
      }, {
        key: "updateGeoJson",
        value: function updateGeoJson(layer, geoJson) {
          var _this32 = this;

          this._layers.get(layer).then(function (l) {
            l.forEach(function (feature) {
              l.remove(feature);
              var index = l.features.indexOf(feature, 0);

              if (index > -1) {
                l.features.splice(index, 1);
              }
            });

            _this32.getDataFeatures(l, geoJson).then(function (features) {
              return l.features = features;
            });
          });
        }
      }, {
        key: "setDataOptions",
        value: function setDataOptions(layer, options) {
          this._layers.get(layer).then(function (l) {
            l.setControlPosition(options.controlPosition);
            l.setControls(options.controls);
            l.setDrawingMode(options.drawingMode);
            l.setStyle(options.style);
          });
        }
        /**
         * Creates a Google Maps event listener for the given DataLayer as an Observable
         */

      }, {
        key: "createEventObservable",
        value: function createEventObservable(eventName, layer) {
          var _this33 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this33._layers.get(layer).then(function (d) {
              d.addListener(eventName, function (e) {
                return _this33._zone.run(function () {
                  return observer.next(e);
                });
              });
            });
          });
        }
        /**
         * Extract features from a geoJson using google.maps Data Class
         * @param d : google.maps.Data class instance
         * @param geoJson : url or geojson object
         */

      }, {
        key: "getDataFeatures",
        value: function getDataFeatures(d, geoJson) {
          return new Promise(function (resolve, reject) {
            if (typeof geoJson === 'object') {
              try {
                var features = d.addGeoJson(geoJson);
                resolve(features);
              } catch (e) {
                reject(e);
              }
            } else if (typeof geoJson === 'string') {
              d.loadGeoJson(geoJson, null, resolve);
            } else {
              reject("Impossible to extract features from geoJson: wrong argument type");
            }
          });
        }
      }]);

      return DataLayerManager;
    }();

    DataLayerManager.ɵfac = function DataLayerManager_Factory(t) {
      return new (t || DataLayerManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    DataLayerManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: DataLayerManager,
      factory: DataLayerManager.ɵfac
    });

    DataLayerManager.ctorParameters = function () {
      return [{
        type: GoogleMapsAPIWrapper
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    DataLayerManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], DataLayerManager);
    var AgmDataLayer_1;
    var layerId$1 = 0;
    /**
     * AgmDataLayer enables the user to add data layers to the map.
     *
     * ### Example
     * ```typescript
     * import { Component } from 'angular2/core';
     * import { AgmMap, AgmDataLayer } from
     * 'angular-google-maps/core';
     *
     * @Component({
     *  selector: 'my-map-cmp',
     *  directives: [AgmMap, AgmDataLayer],
     *  styles: [`
     *    .agm-container {
     *      height: 300px;
     *    }
     * `],
     *  template: `
     * <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
     * 	  <agm-data-layer [geoJson]="geoJsonObject" (layerClick)="clicked($event)" [style]="styleFunc">
     * 	  </agm-data-layer>
     * </agm-map>
     *  `
     * })
     * export class MyMapCmp {
     *   lat: number = -25.274449;
     *   lng: number = 133.775060;
     *   zoom: number = 5;
     *
     * clicked(clickEvent) {
     *    console.log(clickEvent);
     *  }
     *
     *  styleFunc(feature) {
     *    return ({
     *      clickable: false,
     *      fillColor: feature.getProperty('color'),
     *      strokeWeight: 1
     *    });
     *  }
     *
     *  geoJsonObject: Object = {
     *    "type": "FeatureCollection",
     *    "features": [
     *      {
     *        "type": "Feature",
     *        "properties": {
     *          "letter": "G",
     *          "color": "blue",
     *          "rank": "7",
     *          "ascii": "71"
     *        },
     *        "geometry": {
     *          "type": "Polygon",
     *          "coordinates": [
     *            [
     *              [123.61, -22.14], [122.38, -21.73], [121.06, -21.69], [119.66, -22.22], [119.00, -23.40],
     *              [118.65, -24.76], [118.43, -26.07], [118.78, -27.56], [119.22, -28.57], [120.23, -29.49],
     *              [121.77, -29.87], [123.57, -29.64], [124.45, -29.03], [124.71, -27.95], [124.80, -26.70],
     *              [124.80, -25.60], [123.61, -25.64], [122.56, -25.64], [121.72, -25.72], [121.81, -26.62],
     *              [121.86, -26.98], [122.60, -26.90], [123.57, -27.05], [123.57, -27.68], [123.35, -28.18],
     *              [122.51, -28.38], [121.77, -28.26], [121.02, -27.91], [120.49, -27.21], [120.14, -26.50],
     *              [120.10, -25.64], [120.27, -24.52], [120.67, -23.68], [121.72, -23.32], [122.43, -23.48],
     *              [123.04, -24.04], [124.54, -24.28], [124.58, -23.20], [123.61, -22.14]
     *            ]
     *          ]
     *        }
     *      },
     *      {
     *        "type": "Feature",
     *        "properties": {
     *          "letter": "o",
     *          "color": "red",
     *          "rank": "15",
     *          "ascii": "111"
     *        },
     *        "geometry": {
     *          "type": "Polygon",
     *          "coordinates": [
     *            [
     *              [128.84, -25.76], [128.18, -25.60], [127.96, -25.52], [127.88, -25.52], [127.70, -25.60],
     *              [127.26, -25.79], [126.60, -26.11], [126.16, -26.78], [126.12, -27.68], [126.21, -28.42],
     *              [126.69, -29.49], [127.74, -29.80], [128.80, -29.72], [129.41, -29.03], [129.72, -27.95],
     *              [129.68, -27.21], [129.33, -26.23], [128.84, -25.76]
     *            ],
     *            [
     *              [128.45, -27.44], [128.32, -26.94], [127.70, -26.82], [127.35, -27.05], [127.17, -27.80],
     *              [127.57, -28.22], [128.10, -28.42], [128.49, -27.80], [128.45, -27.44]
     *            ]
     *          ]
     *        }
     *      },
     *      {
     *        "type": "Feature",
     *        "properties": {
     *          "letter": "o",
     *          "color": "yellow",
     *          "rank": "15",
     *          "ascii": "111"
     *        },
     *        "geometry": {
     *          "type": "Polygon",
     *          "coordinates": [
     *            [
     *              [131.87, -25.76], [131.35, -26.07], [130.95, -26.78], [130.82, -27.64], [130.86, -28.53],
     *              [131.26, -29.22], [131.92, -29.76], [132.45, -29.87], [133.06, -29.76], [133.72, -29.34],
     *              [134.07, -28.80], [134.20, -27.91], [134.07, -27.21], [133.81, -26.31], [133.37, -25.83],
     *              [132.71, -25.64], [131.87, -25.76]
     *            ],
     *            [
     *              [133.15, -27.17], [132.71, -26.86], [132.09, -26.90], [131.74, -27.56], [131.79, -28.26],
     *              [132.36, -28.45], [132.93, -28.34], [133.15, -27.76], [133.15, -27.17]
     *            ]
     *          ]
     *        }
     *      },
     *      {
     *        "type": "Feature",
     *        "properties": {
     *          "letter": "g",
     *          "color": "blue",
     *          "rank": "7",
     *          "ascii": "103"
     *        },
     *        "geometry": {
     *          "type": "Polygon",
     *          "coordinates": [
     *            [
     *              [138.12, -25.04], [136.84, -25.16], [135.96, -25.36], [135.26, -25.99], [135, -26.90],
     *              [135.04, -27.91], [135.26, -28.88], [136.05, -29.45], [137.02, -29.49], [137.81, -29.49],
     *              [137.94, -29.99], [137.90, -31.20], [137.85, -32.24], [136.88, -32.69], [136.45, -32.36],
     *              [136.27, -31.80], [134.95, -31.84], [135.17, -32.99], [135.52, -33.43], [136.14, -33.76],
     *              [137.06, -33.83], [138.12, -33.65], [138.86, -33.21], [139.30, -32.28], [139.30, -31.24],
     *              [139.30, -30.14], [139.21, -28.96], [139.17, -28.22], [139.08, -27.41], [139.08, -26.47],
     *              [138.99, -25.40], [138.73, -25.00], [138.12, -25.04]
     *            ],
     *            [
     *              [137.50, -26.54], [136.97, -26.47], [136.49, -26.58], [136.31, -27.13], [136.31, -27.72],
     *              [136.58, -27.99], [137.50, -28.03], [137.68, -27.68], [137.59, -26.78], [137.50, -26.54]
     *            ]
     *          ]
     *        }
     *      },
     *      {
     *        "type": "Feature",
     *        "properties": {
     *          "letter": "l",
     *          "color": "green",
     *          "rank": "12",
     *          "ascii": "108"
     *        },
     *        "geometry": {
     *          "type": "Polygon",
     *          "coordinates": [
     *            [
     *              [140.14, -21.04], [140.31, -29.42], [141.67, -29.49], [141.59, -20.92], [140.14, -21.04]
     *            ]
     *          ]
     *        }
     *      },
     *      {
     *        "type": "Feature",
     *        "properties": {
     *          "letter": "e",
     *          "color": "red",
     *          "rank": "5",
     *          "ascii": "101"
     *        },
     *        "geometry": {
     *          "type": "Polygon",
     *          "coordinates": [
     *            [
     *              [144.14, -27.41], [145.67, -27.52], [146.86, -27.09], [146.82, -25.64], [146.25, -25.04],
     *              [145.45, -24.68], [144.66, -24.60], [144.09, -24.76], [143.43, -25.08], [142.99, -25.40],
     *              [142.64, -26.03], [142.64, -27.05], [142.64, -28.26], [143.30, -29.11], [144.18, -29.57],
     *              [145.41, -29.64], [146.46, -29.19], [146.64, -28.72], [146.82, -28.14], [144.84, -28.42],
     *              [144.31, -28.26], [144.14, -27.41]
     *            ],
     *            [
     *              [144.18, -26.39], [144.53, -26.58], [145.19, -26.62], [145.72, -26.35], [145.81, -25.91],
     *              [145.41, -25.68], [144.97, -25.68], [144.49, -25.64], [144, -25.99], [144.18, -26.39]
     *            ]
     *          ]
     *        }
     *      }
     *    ]
     *  };
     * }
     * ```
     */

    var AgmDataLayer = AgmDataLayer_1 = /*#__PURE__*/function () {
      function AgmDataLayer(_manager) {
        _classCallCheck(this, AgmDataLayer);

        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId$1++).toString();
        this._subscriptions = [];
        /**
         * This event is fired when a feature in the layer is clicked.
         */

        this.layerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * The geoJson to be displayed
         */

        this.geoJson = null;
      }

      _createClass(AgmDataLayer, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this._addedToManager) {
            return;
          }

          this._manager.addDataLayer(this);

          this._addedToManager = true;

          this._addEventListeners();
        }
      }, {
        key: "_addEventListeners",
        value: function _addEventListeners() {
          var _this34 = this;

          var listeners = [{
            name: 'click',
            handler: function handler(ev) {
              return _this34.layerClick.emit(ev);
            }
          }];
          listeners.forEach(function (obj) {
            var os = _this34._manager.createEventObservable(obj.name, _this34).subscribe(obj.handler);

            _this34._subscriptions.push(os);
          });
        }
        /** @internal */

      }, {
        key: "id",
        value: function id() {
          return this._id;
        }
        /** @internal */

      }, {
        key: "toString",
        value: function toString() {
          return "AgmDataLayer-".concat(this._id.toString());
        }
        /** @internal */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._manager.deleteDataLayer(this); // unsubscribe all registered observable subscriptions


          this._subscriptions.forEach(function (s) {
            return s.unsubscribe();
          });
        }
        /** @internal */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this35 = this;

          if (!this._addedToManager) {
            return;
          }

          var geoJsonChange = changes['geoJson'];

          if (geoJsonChange) {
            this._manager.updateGeoJson(this, geoJsonChange.currentValue);
          }

          var dataOptions = {};

          AgmDataLayer_1._dataOptionsAttributes.forEach(function (k) {
            return dataOptions[k] = changes.hasOwnProperty(k) ? changes[k].currentValue : _this35[k];
          });

          this._manager.setDataOptions(this, dataOptions);
        }
      }]);

      return AgmDataLayer;
    }();

    AgmDataLayer.ɵfac = function AgmDataLayer_Factory(t) {
      return new (t || AgmDataLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DataLayerManager));
    };

    AgmDataLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmDataLayer,
      selectors: [["agm-data-layer"]],
      inputs: {
        geoJson: "geoJson",
        style: "style"
      },
      outputs: {
        layerClick: "layerClick"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    AgmDataLayer._dataOptionsAttributes = ['style'];

    AgmDataLayer.ctorParameters = function () {
      return [{
        type: DataLayerManager
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmDataLayer.prototype, "layerClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmDataLayer.prototype, "geoJson", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)], AgmDataLayer.prototype, "style", void 0);
    AgmDataLayer = AgmDataLayer_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [DataLayerManager])], AgmDataLayer);
    /**
     * Class to implement when you what to be able to make it work with the auto fit bounds feature
     * of AGM.
     */

    var FitBoundsAccessor = function FitBoundsAccessor() {
      _classCallCheck(this, FitBoundsAccessor);
    };
    /**
     * The FitBoundsService is responsible for computing the bounds of the a single map.
     */


    var FitBoundsService = /*#__PURE__*/function () {
      function FitBoundsService(loader) {
        var _this36 = this;

        _classCallCheck(this, FitBoundsService);

        this._boundsChangeSampleTime$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](200);
        this._includeInBounds$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new Map());
        this.bounds$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(loader.load()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function () {
          return _this36._includeInBounds$;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["sample"])(this._boundsChangeSampleTime$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (time) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, time);
        }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (includeInBounds) {
          return _this36._generateBounds(includeInBounds);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
      }

      _createClass(FitBoundsService, [{
        key: "_generateBounds",
        value: function _generateBounds(includeInBounds) {
          var bounds = new google.maps.LatLngBounds();
          includeInBounds.forEach(function (b) {
            return bounds.extend(b);
          });
          return bounds;
        }
      }, {
        key: "addToBounds",
        value: function addToBounds(latLng) {
          var id = this._createIdentifier(latLng);

          if (this._includeInBounds$.value.has(id)) {
            return;
          }

          var map = this._includeInBounds$.value;
          map.set(id, latLng);

          this._includeInBounds$.next(map);
        }
      }, {
        key: "removeFromBounds",
        value: function removeFromBounds(latLng) {
          var map = this._includeInBounds$.value;
          map["delete"](this._createIdentifier(latLng));

          this._includeInBounds$.next(map);
        }
      }, {
        key: "changeFitBoundsChangeSampleTime",
        value: function changeFitBoundsChangeSampleTime(timeMs) {
          this._boundsChangeSampleTime$.next(timeMs);
        }
      }, {
        key: "getBounds$",
        value: function getBounds$() {
          return this.bounds$;
        }
      }, {
        key: "_createIdentifier",
        value: function _createIdentifier(latLng) {
          return "".concat(latLng.lat, "+").concat(latLng.lng);
        }
      }]);

      return FitBoundsService;
    }();

    FitBoundsService.ɵfac = function FitBoundsService_Factory(t) {
      return new (t || FitBoundsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MapsAPILoader));
    };

    FitBoundsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: FitBoundsService,
      factory: FitBoundsService.ɵfac
    });

    FitBoundsService.ctorParameters = function () {
      return [{
        type: MapsAPILoader
      }];
    };

    FitBoundsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [MapsAPILoader])], FitBoundsService);
    /**
     * Adds the given directive to the auto fit bounds feature when the value is true.
     * To make it work with you custom AGM component, you also have to implement the {@link FitBoundsAccessor} abstract class.
     * @example
     * <agm-marker [agmFitBounds]="true"></agm-marker>
     */

    var AgmFitBounds = /*#__PURE__*/function () {
      function AgmFitBounds(_fitBoundsAccessor, _fitBoundsService) {
        _classCallCheck(this, AgmFitBounds);

        this._fitBoundsAccessor = _fitBoundsAccessor;
        this._fitBoundsService = _fitBoundsService;
        /**
         * If the value is true, the element gets added to the bounds of the map.
         * Default: true.
         */

        this.agmFitBounds = true;
        this._destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._latestFitBoundsDetails = null;
      }
      /**
       * @internal
       */


      _createClass(AgmFitBounds, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this._updateBounds();
        }
        /**
         * @internal
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this37 = this;

          this._fitBoundsAccessor.getFitBoundsDetails$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(function (x, y) {
            return x.latLng.lat === y.latLng.lat && x.latLng.lng === y.latLng.lng;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed$)).subscribe(function (details) {
            return _this37._updateBounds(details);
          });
        }
        /*
         Either the location changed, or visible status changed.
         Possible state changes are
         invisible -> visible
         visible -> invisible
         visible -> visible (new location)
        */

      }, {
        key: "_updateBounds",
        value: function _updateBounds(newFitBoundsDetails) {
          // either visibility will change, or location, so remove the old one anyway
          if (this._latestFitBoundsDetails) {
            this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng); // don't set latestFitBoundsDetails to null, because we can toggle visibility from
            // true -> false -> true, in which case we still need old value cached here

          }

          if (newFitBoundsDetails) {
            this._latestFitBoundsDetails = newFitBoundsDetails;
          }

          if (!this._latestFitBoundsDetails) {
            return;
          }

          if (this.agmFitBounds === true) {
            this._fitBoundsService.addToBounds(this._latestFitBoundsDetails.latLng);
          }
        }
        /**
         * @internal
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroyed$.next();

          this._destroyed$.complete();

          if (this._latestFitBoundsDetails !== null) {
            this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng);
          }
        }
      }]);

      return AgmFitBounds;
    }();

    AgmFitBounds.ɵfac = function AgmFitBounds_Factory(t) {
      return new (t || AgmFitBounds)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FitBoundsAccessor, 2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FitBoundsService));
    };

    AgmFitBounds.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmFitBounds,
      selectors: [["", "agmFitBounds", ""]],
      inputs: {
        agmFitBounds: "agmFitBounds"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });

    AgmFitBounds.ctorParameters = function () {
      return [{
        type: FitBoundsAccessor,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
        }]
      }, {
        type: FitBoundsService
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmFitBounds.prototype, "agmFitBounds", void 0);
    AgmFitBounds = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [FitBoundsAccessor, FitBoundsService])], AgmFitBounds);

    var MarkerManager = /*#__PURE__*/function () {
      function MarkerManager(_mapsWrapper, _zone) {
        _classCallCheck(this, MarkerManager);

        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markers = new Map();
      }

      _createClass(MarkerManager, [{
        key: "convertAnimation",
        value: function convertAnimation(uiAnim) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(uiAnim === null)) {
                      _context.next = 4;
                      break;
                    }

                    return _context.abrupt("return", null);

                  case 4:
                    return _context.abrupt("return", this._mapsWrapper.getNativeMap().then(function () {
                      return google.maps.Animation[uiAnim];
                    }));

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "deleteMarker",
        value: function deleteMarker(marker) {
          var _this38 = this;

          var m = this._markers.get(marker);

          if (m == null) {
            // marker already deleted
            return Promise.resolve();
          }

          return m.then(function (m) {
            return _this38._zone.run(function () {
              m.setMap(null);

              _this38._markers["delete"](marker);
            });
          });
        }
      }, {
        key: "updateMarkerPosition",
        value: function updateMarkerPosition(marker) {
          return this._markers.get(marker).then(function (m) {
            return m.setPosition({
              lat: marker.latitude,
              lng: marker.longitude
            });
          });
        }
      }, {
        key: "updateTitle",
        value: function updateTitle(marker) {
          return this._markers.get(marker).then(function (m) {
            return m.setTitle(marker.title);
          });
        }
      }, {
        key: "updateLabel",
        value: function updateLabel(marker) {
          return this._markers.get(marker).then(function (m) {
            m.setLabel(marker.label);
          });
        }
      }, {
        key: "updateDraggable",
        value: function updateDraggable(marker) {
          return this._markers.get(marker).then(function (m) {
            return m.setDraggable(marker.draggable);
          });
        }
      }, {
        key: "updateIcon",
        value: function updateIcon(marker) {
          return this._markers.get(marker).then(function (m) {
            return m.setIcon(marker.iconUrl);
          });
        }
      }, {
        key: "updateOpacity",
        value: function updateOpacity(marker) {
          return this._markers.get(marker).then(function (m) {
            return m.setOpacity(marker.opacity);
          });
        }
      }, {
        key: "updateVisible",
        value: function updateVisible(marker) {
          return this._markers.get(marker).then(function (m) {
            return m.setVisible(marker.visible);
          });
        }
      }, {
        key: "updateZIndex",
        value: function updateZIndex(marker) {
          return this._markers.get(marker).then(function (m) {
            return m.setZIndex(marker.zIndex);
          });
        }
      }, {
        key: "updateClickable",
        value: function updateClickable(marker) {
          return this._markers.get(marker).then(function (m) {
            return m.setClickable(marker.clickable);
          });
        }
      }, {
        key: "updateAnimation",
        value: function updateAnimation(marker) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var m;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this._markers.get(marker);

                  case 2:
                    m = _context2.sent;
                    _context2.t0 = m;
                    _context2.next = 6;
                    return this.convertAnimation(marker.animation);

                  case 6:
                    _context2.t1 = _context2.sent;

                    _context2.t0.setAnimation.call(_context2.t0, _context2.t1);

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "addMarker",
        value: function addMarker(marker) {
          var _this39 = this;

          var markerPromise = new Promise(function (resolve) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this39, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.t0 = this._mapsWrapper;
                      _context3.t1 = {
                        lat: marker.latitude,
                        lng: marker.longitude
                      };
                      _context3.t2 = marker.label;
                      _context3.t3 = marker.draggable;
                      _context3.t4 = marker.iconUrl;
                      _context3.t5 = marker.opacity;
                      _context3.t6 = marker.visible;
                      _context3.t7 = marker.zIndex;
                      _context3.t8 = marker.title;
                      _context3.t9 = marker.clickable;
                      _context3.next = 12;
                      return this.convertAnimation(marker.animation);

                    case 12:
                      _context3.t10 = _context3.sent;
                      _context3.t11 = {
                        position: _context3.t1,
                        label: _context3.t2,
                        draggable: _context3.t3,
                        icon: _context3.t4,
                        opacity: _context3.t5,
                        visible: _context3.t6,
                        zIndex: _context3.t7,
                        title: _context3.t8,
                        clickable: _context3.t9,
                        animation: _context3.t10
                      };
                      return _context3.abrupt("return", _context3.t0.createMarker.call(_context3.t0, _context3.t11).then(resolve));

                    case 15:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          });

          this._markers.set(marker, markerPromise);
        }
      }, {
        key: "getNativeMarker",
        value: function getNativeMarker(marker) {
          return this._markers.get(marker);
        }
      }, {
        key: "createEventObservable",
        value: function createEventObservable(eventName, marker) {
          var _this40 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this40._markers.get(marker).then(function (m) {
              m.addListener(eventName, function (e) {
                return _this40._zone.run(function () {
                  return observer.next(e);
                });
              });
            });
          });
        }
      }]);

      return MarkerManager;
    }();

    MarkerManager.ɵfac = function MarkerManager_Factory(t) {
      return new (t || MarkerManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    MarkerManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: MarkerManager,
      factory: MarkerManager.ɵfac
    });

    MarkerManager.ctorParameters = function () {
      return [{
        type: GoogleMapsAPIWrapper
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    MarkerManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], MarkerManager);

    var InfoWindowManager = /*#__PURE__*/function () {
      function InfoWindowManager(_mapsWrapper, _zone, _markerManager) {
        _classCallCheck(this, InfoWindowManager);

        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markerManager = _markerManager;
        this._infoWindows = new Map();
      }

      _createClass(InfoWindowManager, [{
        key: "deleteInfoWindow",
        value: function deleteInfoWindow(infoWindow) {
          var _this41 = this;

          var iWindow = this._infoWindows.get(infoWindow);

          if (iWindow == null) {
            // info window already deleted
            return Promise.resolve();
          }

          return iWindow.then(function (i) {
            return _this41._zone.run(function () {
              i.close();

              _this41._infoWindows["delete"](infoWindow);
            });
          });
        }
      }, {
        key: "setPosition",
        value: function setPosition(infoWindow) {
          return this._infoWindows.get(infoWindow).then(function (i) {
            return i.setPosition({
              lat: infoWindow.latitude,
              lng: infoWindow.longitude
            });
          });
        }
      }, {
        key: "setZIndex",
        value: function setZIndex(infoWindow) {
          return this._infoWindows.get(infoWindow).then(function (i) {
            return i.setZIndex(infoWindow.zIndex);
          });
        }
      }, {
        key: "open",
        value: function open(infoWindow) {
          var _this42 = this;

          return this._infoWindows.get(infoWindow).then(function (w) {
            if (infoWindow.hostMarker != null) {
              return _this42._markerManager.getNativeMarker(infoWindow.hostMarker).then(function (marker) {
                return _this42._mapsWrapper.getNativeMap().then(function (map) {
                  return w.open(map, marker);
                });
              });
            }

            return _this42._mapsWrapper.getNativeMap().then(function (map) {
              return w.open(map);
            });
          });
        }
      }, {
        key: "close",
        value: function close(infoWindow) {
          return this._infoWindows.get(infoWindow).then(function (w) {
            return w.close();
          });
        }
      }, {
        key: "setOptions",
        value: function setOptions(infoWindow, options) {
          return this._infoWindows.get(infoWindow).then(function (i) {
            return i.setOptions(options);
          });
        }
      }, {
        key: "addInfoWindow",
        value: function addInfoWindow(infoWindow) {
          var options = {
            content: infoWindow.content,
            maxWidth: infoWindow.maxWidth,
            zIndex: infoWindow.zIndex,
            disableAutoPan: infoWindow.disableAutoPan
          };

          if (typeof infoWindow.latitude === 'number' && typeof infoWindow.longitude === 'number') {
            options.position = {
              lat: infoWindow.latitude,
              lng: infoWindow.longitude
            };
          }

          var infoWindowPromise = this._mapsWrapper.createInfoWindow(options);

          this._infoWindows.set(infoWindow, infoWindowPromise);
        }
        /**
         * Creates a Google Maps event listener for the given InfoWindow as an Observable
         */

      }, {
        key: "createEventObservable",
        value: function createEventObservable(eventName, infoWindow) {
          var _this43 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this43._infoWindows.get(infoWindow).then(function (i) {
              i.addListener(eventName, function (e) {
                return _this43._zone.run(function () {
                  return observer.next(e);
                });
              });
            });
          });
        }
      }]);

      return InfoWindowManager;
    }();

    InfoWindowManager.ɵfac = function InfoWindowManager_Factory(t) {
      return new (t || InfoWindowManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MarkerManager));
    };

    InfoWindowManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: InfoWindowManager,
      factory: InfoWindowManager.ɵfac
    });

    InfoWindowManager.ctorParameters = function () {
      return [{
        type: GoogleMapsAPIWrapper
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: MarkerManager
      }];
    };

    InfoWindowManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], MarkerManager])], InfoWindowManager);
    var AgmInfoWindow_1;
    var infoWindowId = 0;
    /**
     * AgmInfoWindow renders a info window inside a {@link AgmMarker} or standalone.
     *
     * ### Example
     * ```typescript
     * import { Component } from '@angular/core';
     *
     * @Component({
     *  selector: 'my-map-cmp',
     *  styles: [`
     *    .agm-map-container {
     *      height: 300px;
     *    }
     * `],
     *  template: `
     *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
     *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
     *        <agm-info-window [disableAutoPan]="true">
     *          Hi, this is the content of the <strong>info window</strong>
     *        </agm-info-window>
     *      </agm-marker>
     *    </agm-map>
     *  `
     * })
     * ```
     */

    var AgmInfoWindow = AgmInfoWindow_1 = /*#__PURE__*/function () {
      function AgmInfoWindow(_infoWindowManager, _el) {
        _classCallCheck(this, AgmInfoWindow);

        this._infoWindowManager = _infoWindowManager;
        this._el = _el;
        /**
         * Sets the open state for the InfoWindow. You can also call the open() and close() methods.
         */

        this.isOpen = false;
        /**
         * Emits an event when the info window is closed.
         */

        this.infoWindowClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._infoWindowAddedToManager = false;
        this._id = (infoWindowId++).toString();
      }

      _createClass(AgmInfoWindow, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.content = this._el.nativeElement.querySelector('.agm-info-window-content');

          this._infoWindowManager.addInfoWindow(this);

          this._infoWindowAddedToManager = true;

          this._updateOpenState();

          this._registerEventListeners();
        }
        /** @internal */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this._infoWindowAddedToManager) {
            return;
          }

          if ((changes['latitude'] || changes['longitude']) && typeof this.latitude === 'number' && typeof this.longitude === 'number') {
            this._infoWindowManager.setPosition(this);
          }

          if (changes['zIndex']) {
            this._infoWindowManager.setZIndex(this);
          }

          if (changes['isOpen']) {
            this._updateOpenState();
          }

          this._setInfoWindowOptions(changes);
        }
      }, {
        key: "_registerEventListeners",
        value: function _registerEventListeners() {
          var _this44 = this;

          this._infoWindowManager.createEventObservable('closeclick', this).subscribe(function () {
            _this44.isOpen = false;

            _this44.infoWindowClose.emit();
          });
        }
      }, {
        key: "_updateOpenState",
        value: function _updateOpenState() {
          this.isOpen ? this.open() : this.close();
        }
      }, {
        key: "_setInfoWindowOptions",
        value: function _setInfoWindowOptions(changes) {
          var options = {};
          var optionKeys = Object.keys(changes).filter(function (k) {
            return AgmInfoWindow_1._infoWindowOptionsInputs.indexOf(k) !== -1;
          });
          optionKeys.forEach(function (k) {
            options[k] = changes[k].currentValue;
          });

          this._infoWindowManager.setOptions(this, options);
        }
        /**
         * Opens the info window.
         */

      }, {
        key: "open",
        value: function open() {
          return this._infoWindowManager.open(this);
        }
        /**
         * Closes the info window.
         */

      }, {
        key: "close",
        value: function close() {
          var _this45 = this;

          return this._infoWindowManager.close(this).then(function () {
            _this45.infoWindowClose.emit();
          });
        }
        /** @internal */

      }, {
        key: "id",
        value: function id() {
          return this._id;
        }
        /** @internal */

      }, {
        key: "toString",
        value: function toString() {
          return 'AgmInfoWindow-' + this._id.toString();
        }
        /** @internal */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._infoWindowManager.deleteInfoWindow(this);
        }
      }]);

      return AgmInfoWindow;
    }();

    AgmInfoWindow.ɵfac = function AgmInfoWindow_Factory(t) {
      return new (t || AgmInfoWindow)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](InfoWindowManager), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
    };

    AgmInfoWindow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AgmInfoWindow,
      selectors: [["agm-info-window"]],
      inputs: {
        isOpen: "isOpen",
        latitude: "latitude",
        longitude: "longitude",
        disableAutoPan: "disableAutoPan",
        zIndex: "zIndex",
        maxWidth: "maxWidth"
      },
      outputs: {
        infoWindowClose: "infoWindowClose"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c0,
      decls: 2,
      vars: 0,
      consts: [[1, "agm-info-window-content"]],
      template: function AgmInfoWindow_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
    AgmInfoWindow._infoWindowOptionsInputs = ['disableAutoPan', 'maxWidth'];

    AgmInfoWindow.ctorParameters = function () {
      return [{
        type: InfoWindowManager
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmInfoWindow.prototype, "latitude", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmInfoWindow.prototype, "longitude", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], AgmInfoWindow.prototype, "disableAutoPan", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmInfoWindow.prototype, "zIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmInfoWindow.prototype, "maxWidth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmInfoWindow.prototype, "isOpen", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmInfoWindow.prototype, "infoWindowClose", void 0);
    AgmInfoWindow = AgmInfoWindow_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [InfoWindowManager, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], AgmInfoWindow);
    /**
     * Manages all KML Layers for a Google Map instance.
     */

    var KmlLayerManager = /*#__PURE__*/function () {
      function KmlLayerManager(_wrapper, _zone) {
        _classCallCheck(this, KmlLayerManager);

        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
      }
      /**
       * Adds a new KML Layer to the map.
       */


      _createClass(KmlLayerManager, [{
        key: "addKmlLayer",
        value: function addKmlLayer(layer) {
          var newLayer = this._wrapper.getNativeMap().then(function (m) {
            return new google.maps.KmlLayer({
              clickable: layer.clickable,
              map: m,
              preserveViewport: layer.preserveViewport,
              screenOverlays: layer.screenOverlays,
              suppressInfoWindows: layer.suppressInfoWindows,
              url: layer.url,
              zIndex: layer.zIndex
            });
          });

          this._layers.set(layer, newLayer);
        }
      }, {
        key: "setOptions",
        value: function setOptions(layer, options) {
          this._layers.get(layer).then(function (l) {
            return l.setOptions(options);
          });
        }
      }, {
        key: "deleteKmlLayer",
        value: function deleteKmlLayer(layer) {
          var _this46 = this;

          this._layers.get(layer).then(function (l) {
            l.setMap(null);

            _this46._layers["delete"](layer);
          });
        }
        /**
         * Creates a Google Maps event listener for the given KmlLayer as an Observable
         */

      }, {
        key: "createEventObservable",
        value: function createEventObservable(eventName, layer) {
          var _this47 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this47._layers.get(layer).then(function (m) {
              m.addListener(eventName, function (e) {
                return _this47._zone.run(function () {
                  return observer.next(e);
                });
              });
            });
          });
        }
      }]);

      return KmlLayerManager;
    }();

    KmlLayerManager.ɵfac = function KmlLayerManager_Factory(t) {
      return new (t || KmlLayerManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    KmlLayerManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: KmlLayerManager,
      factory: KmlLayerManager.ɵfac
    });

    KmlLayerManager.ctorParameters = function () {
      return [{
        type: GoogleMapsAPIWrapper
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    KmlLayerManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], KmlLayerManager);
    var AgmKmlLayer_1;
    var layerId$2 = 0;

    var AgmKmlLayer = AgmKmlLayer_1 = /*#__PURE__*/function () {
      function AgmKmlLayer(_manager) {
        _classCallCheck(this, AgmKmlLayer);

        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId$2++).toString();
        this._subscriptions = [];
        /**
         * If true, the layer receives mouse events. Default value is true.
         */

        this.clickable = true;
        /**
         * By default, the input map is centered and zoomed to the bounding box of the contents of the
         * layer.
         * If this option is set to true, the viewport is left unchanged, unless the map's center and zoom
         * were never set.
         */

        this.preserveViewport = false;
        /**
         * Whether to render the screen overlays. Default true.
         */

        this.screenOverlays = true;
        /**
         * Suppress the rendering of info windows when layer features are clicked.
         */

        this.suppressInfoWindows = false;
        /**
         * The URL of the KML document to display.
         */

        this.url = null;
        /**
         * The z-index of the layer.
         */

        this.zIndex = null;
        /**
         * This event is fired when a feature in the layer is clicked.
         */

        this.layerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the KML layers default viewport has changed.
         */

        this.defaultViewportChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the KML layer has finished loading.
         * At this point it is safe to read the status property to determine if the layer loaded
         * successfully.
         */

        this.statusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(AgmKmlLayer, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this._addedToManager) {
            return;
          }

          this._manager.addKmlLayer(this);

          this._addedToManager = true;

          this._addEventListeners();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this._addedToManager) {
            return;
          }

          this._updatePolygonOptions(changes);
        }
      }, {
        key: "_updatePolygonOptions",
        value: function _updatePolygonOptions(changes) {
          var options = Object.keys(changes).filter(function (k) {
            return AgmKmlLayer_1._kmlLayerOptions.indexOf(k) !== -1;
          }).reduce(function (obj, k) {
            obj[k] = changes[k].currentValue;
            return obj;
          }, {});

          if (Object.keys(options).length > 0) {
            this._manager.setOptions(this, options);
          }
        }
      }, {
        key: "_addEventListeners",
        value: function _addEventListeners() {
          var _this48 = this;

          var listeners = [{
            name: 'click',
            handler: function handler(ev) {
              return _this48.layerClick.emit(ev);
            }
          }, {
            name: 'defaultviewport_changed',
            handler: function handler() {
              return _this48.defaultViewportChange.emit();
            }
          }, {
            name: 'status_changed',
            handler: function handler() {
              return _this48.statusChange.emit();
            }
          }];
          listeners.forEach(function (obj) {
            var os = _this48._manager.createEventObservable(obj.name, _this48).subscribe(obj.handler);

            _this48._subscriptions.push(os);
          });
        }
        /** @internal */

      }, {
        key: "id",
        value: function id() {
          return this._id;
        }
        /** @internal */

      }, {
        key: "toString",
        value: function toString() {
          return "AgmKmlLayer-".concat(this._id.toString());
        }
        /** @internal */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._manager.deleteKmlLayer(this); // unsubscribe all registered observable subscriptions


          this._subscriptions.forEach(function (s) {
            return s.unsubscribe();
          });
        }
      }]);

      return AgmKmlLayer;
    }();

    AgmKmlLayer.ɵfac = function AgmKmlLayer_Factory(t) {
      return new (t || AgmKmlLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](KmlLayerManager));
    };

    AgmKmlLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmKmlLayer,
      selectors: [["agm-kml-layer"]],
      inputs: {
        clickable: "clickable",
        preserveViewport: "preserveViewport",
        screenOverlays: "screenOverlays",
        suppressInfoWindows: "suppressInfoWindows",
        url: "url",
        zIndex: "zIndex"
      },
      outputs: {
        layerClick: "layerClick",
        defaultViewportChange: "defaultViewportChange",
        statusChange: "statusChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    AgmKmlLayer._kmlLayerOptions = ['clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex'];

    AgmKmlLayer.ctorParameters = function () {
      return [{
        type: KmlLayerManager
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmKmlLayer.prototype, "clickable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmKmlLayer.prototype, "preserveViewport", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmKmlLayer.prototype, "screenOverlays", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmKmlLayer.prototype, "suppressInfoWindows", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmKmlLayer.prototype, "url", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmKmlLayer.prototype, "zIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmKmlLayer.prototype, "layerClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmKmlLayer.prototype, "defaultViewportChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmKmlLayer.prototype, "statusChange", void 0);
    AgmKmlLayer = AgmKmlLayer_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [KmlLayerManager])], AgmKmlLayer);

    function createMVCEventObservable(array) {
      var eventNames = ['insert_at', 'remove_at', 'set_at'];
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEventPattern"])(function (handler) {
        return eventNames.map(function (evName) {
          return array.addListener(evName, function (index, previous) {
            return handler.apply(array, [{
              'newArr': array.getArray(),
              evName: evName,
              index: index,
              previous: previous
            }]);
          });
        });
      }, function (_handler, evListeners) {
        return evListeners.forEach(function (evListener) {
          return evListener.remove();
        });
      });
    }

    var MvcArrayMock = /*#__PURE__*/function () {
      function MvcArrayMock() {
        _classCallCheck(this, MvcArrayMock);

        this.vals = [];
        this.listeners = {
          'remove_at': [],
          'insert_at': [],
          'set_at': []
        };
      }

      _createClass(MvcArrayMock, [{
        key: "clear",
        value: function clear() {
          for (var i = this.vals.length - 1; i >= 0; i--) {
            this.removeAt(i);
          }
        }
      }, {
        key: "getArray",
        value: function getArray() {
          return _toConsumableArray(this.vals);
        }
      }, {
        key: "getAt",
        value: function getAt(i) {
          return this.vals[i];
        }
      }, {
        key: "getLength",
        value: function getLength() {
          return this.vals.length;
        }
      }, {
        key: "insertAt",
        value: function insertAt(i, elem) {
          this.vals.splice(i, 0, elem);
          this.listeners.insert_at.map(function (listener) {
            return listener(i);
          });
        }
      }, {
        key: "pop",
        value: function pop() {
          var _this49 = this;

          var deleted = this.vals.pop();
          this.listeners.remove_at.map(function (listener) {
            return listener(_this49.vals.length, deleted);
          });
          return deleted;
        }
      }, {
        key: "push",
        value: function push(elem) {
          var _this50 = this;

          this.vals.push(elem);
          this.listeners.insert_at.map(function (listener) {
            return listener(_this50.vals.length - 1);
          });
          return this.vals.length;
        }
      }, {
        key: "removeAt",
        value: function removeAt(i) {
          var deleted = this.vals.splice(i, 1)[0];
          this.listeners.remove_at.map(function (listener) {
            return listener(i, deleted);
          });
          return deleted;
        }
      }, {
        key: "setAt",
        value: function setAt(i, elem) {
          var deleted = this.vals[i];
          this.vals[i] = elem;
          this.listeners.set_at.map(function (listener) {
            return listener(i, deleted);
          });
        }
      }, {
        key: "forEach",
        value: function forEach(callback) {
          this.vals.forEach(callback);
        }
      }, {
        key: "addListener",
        value: function addListener(eventName, handler) {
          var listenerArr = this.listeners[eventName];
          listenerArr.push(handler);
          return {
            remove: function remove() {
              listenerArr.splice(listenerArr.indexOf(handler), 1);
            }
          };
        }
      }]);

      return MvcArrayMock;
    }();

    var PolygonManager = /*#__PURE__*/function () {
      function PolygonManager(_mapsWrapper, _zone) {
        _classCallCheck(this, PolygonManager);

        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polygons = new Map();
      }

      _createClass(PolygonManager, [{
        key: "addPolygon",
        value: function addPolygon(path) {
          var polygonPromise = this._mapsWrapper.createPolygon({
            clickable: path.clickable,
            draggable: path.draggable,
            editable: path.editable,
            fillColor: path.fillColor,
            fillOpacity: path.fillOpacity,
            geodesic: path.geodesic,
            paths: path.paths,
            strokeColor: path.strokeColor,
            strokeOpacity: path.strokeOpacity,
            strokeWeight: path.strokeWeight,
            visible: path.visible,
            zIndex: path.zIndex
          });

          this._polygons.set(path, polygonPromise);
        }
      }, {
        key: "updatePolygon",
        value: function updatePolygon(polygon) {
          var _this51 = this;

          var m = this._polygons.get(polygon);

          if (m == null) {
            return Promise.resolve();
          }

          return m.then(function (l) {
            return _this51._zone.run(function () {
              l.setPaths(polygon.paths);
            });
          });
        }
      }, {
        key: "setPolygonOptions",
        value: function setPolygonOptions(path, options) {
          return this._polygons.get(path).then(function (l) {
            l.setOptions(options);
          });
        }
      }, {
        key: "deletePolygon",
        value: function deletePolygon(paths) {
          var _this52 = this;

          var m = this._polygons.get(paths);

          if (m == null) {
            return Promise.resolve();
          }

          return m.then(function (l) {
            return _this52._zone.run(function () {
              l.setMap(null);

              _this52._polygons["delete"](paths);
            });
          });
        }
      }, {
        key: "getPath",
        value: function getPath(polygon) {
          return this._polygons.get(polygon).then(function (polygon) {
            return polygon.getPath().getArray();
          });
        }
      }, {
        key: "getPaths",
        value: function getPaths(polygon) {
          return this._polygons.get(polygon).then(function (polygon) {
            return polygon.getPaths().getArray().map(function (p) {
              return p.getArray();
            });
          });
        }
      }, {
        key: "createEventObservable",
        value: function createEventObservable(eventName, path) {
          var _this53 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this53._polygons.get(path).then(function (l) {
              l.addListener(eventName, function (e) {
                return _this53._zone.run(function () {
                  return observer.next(e);
                });
              });
            });
          });
        }
      }, {
        key: "createPathEventObservable",
        value: function createPathEventObservable(agmPolygon) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var polygon, paths, pathsChanges$;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this._polygons.get(agmPolygon);

                  case 2:
                    polygon = _context4.sent;
                    paths = polygon.getPaths();
                    pathsChanges$ = createMVCEventObservable(paths);
                    return _context4.abrupt("return", pathsChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({
                      newArr: paths.getArray()
                    }), // in order to subscribe to them all
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (parentMVEvent) {
                      return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"]).apply(void 0, _toConsumableArray( // rest parameter
                      parentMVEvent.newArr.map(function (chMVC, index) {
                        return createMVCEventObservable(chMVC).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (chMVCEvent) {
                          return {
                            parentMVEvent: parentMVEvent,
                            chMVCEvent: chMVCEvent,
                            pathIndex: index
                          };
                        }));
                      }))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({
                        parentMVEvent: parentMVEvent,
                        chMVCEvent: null,
                        pathIndex: null
                      }));
                    }), // start the merged ob with an event signinifing change to parent
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["skip"])(1), // skip the manually added event
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref) {
                      var parentMVEvent = _ref.parentMVEvent,
                          chMVCEvent = _ref.chMVCEvent,
                          pathIndex = _ref.pathIndex;
                      var retVal;

                      if (!chMVCEvent) {
                        retVal = {
                          newArr: parentMVEvent.newArr.map(function (subArr) {
                            return subArr.getArray().map(function (latLng) {
                              return latLng.toJSON();
                            });
                          }),
                          eventName: parentMVEvent.evName,
                          index: parentMVEvent.index
                        };

                        if (parentMVEvent.previous) {
                          retVal.previous = parentMVEvent.previous.getArray();
                        }
                      } else {
                        retVal = {
                          newArr: parentMVEvent.newArr.map(function (subArr) {
                            return subArr.getArray().map(function (latLng) {
                              return latLng.toJSON();
                            });
                          }),
                          pathIndex: pathIndex,
                          eventName: chMVCEvent.evName,
                          index: chMVCEvent.index
                        };

                        if (chMVCEvent.previous) {
                          retVal.previous = chMVCEvent.previous;
                        }
                      }

                      return retVal;
                    })));

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return PolygonManager;
    }();

    PolygonManager.ɵfac = function PolygonManager_Factory(t) {
      return new (t || PolygonManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    PolygonManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: PolygonManager,
      factory: PolygonManager.ɵfac
    });

    PolygonManager.ctorParameters = function () {
      return [{
        type: GoogleMapsAPIWrapper
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    PolygonManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], PolygonManager);
    var PolylineManager_1;

    var PolylineManager = PolylineManager_1 = /*#__PURE__*/function () {
      function PolylineManager(_mapsWrapper, _zone) {
        _classCallCheck(this, PolylineManager);

        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polylines = new Map();
      }

      _createClass(PolylineManager, [{
        key: "addPolyline",
        value: function addPolyline(line) {
          var _this54 = this;

          var polylinePromise = this._mapsWrapper.getNativeMap().then(function () {
            return [PolylineManager_1._convertPoints(line), PolylineManager_1._convertIcons(line)];
          }).then(function (_ref2) {
            var _ref3 = _slicedToArray(_ref2, 2),
                path = _ref3[0],
                icons = _ref3[1];

            return _this54._mapsWrapper.createPolyline({
              clickable: line.clickable,
              draggable: line.draggable,
              editable: line.editable,
              geodesic: line.geodesic,
              strokeColor: line.strokeColor,
              strokeOpacity: line.strokeOpacity,
              strokeWeight: line.strokeWeight,
              visible: line.visible,
              zIndex: line.zIndex,
              path: path,
              icons: icons
            });
          });

          this._polylines.set(line, polylinePromise);
        }
      }, {
        key: "updatePolylinePoints",
        value: function updatePolylinePoints(line) {
          var _this55 = this;

          var path = PolylineManager_1._convertPoints(line);

          var m = this._polylines.get(line);

          if (m == null) {
            return Promise.resolve();
          }

          return m.then(function (l) {
            return _this55._zone.run(function () {
              l.setPath(path);
            });
          });
        }
      }, {
        key: "updateIconSequences",
        value: function updateIconSequences(line) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this56 = this;

            var icons, m;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this._mapsWrapper.getNativeMap();

                  case 2:
                    icons = PolylineManager_1._convertIcons(line);
                    m = this._polylines.get(line);

                    if (!(m == null)) {
                      _context5.next = 6;
                      break;
                    }

                    return _context5.abrupt("return");

                  case 6:
                    return _context5.abrupt("return", m.then(function (l) {
                      return _this56._zone.run(function () {
                        return l.setOptions({
                          icons: icons
                        });
                      });
                    }));

                  case 7:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "setPolylineOptions",
        value: function setPolylineOptions(line, options) {
          return this._polylines.get(line).then(function (l) {
            l.setOptions(options);
          });
        }
      }, {
        key: "deletePolyline",
        value: function deletePolyline(line) {
          var _this57 = this;

          var m = this._polylines.get(line);

          if (m == null) {
            return Promise.resolve();
          }

          return m.then(function (l) {
            return _this57._zone.run(function () {
              l.setMap(null);

              _this57._polylines["delete"](line);
            });
          });
        }
      }, {
        key: "getMVCPath",
        value: function getMVCPath(agmPolyline) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var polyline;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this._polylines.get(agmPolyline);

                  case 2:
                    polyline = _context6.sent;
                    return _context6.abrupt("return", polyline.getPath());

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "getPath",
        value: function getPath(agmPolyline) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.getMVCPath(agmPolyline);

                  case 2:
                    return _context7.abrupt("return", _context7.sent.getArray());

                  case 3:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "createEventObservable",
        value: function createEventObservable(eventName, line) {
          var _this58 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this58._polylines.get(line).then(function (l) {
              l.addListener(eventName, function (e) {
                return _this58._zone.run(function () {
                  return observer.next(e);
                });
              });
            });
          });
        }
      }, {
        key: "createPathEventObservable",
        value: function createPathEventObservable(line) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var mvcPath;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.getMVCPath(line);

                  case 2:
                    mvcPath = _context8.sent;
                    return _context8.abrupt("return", createMVCEventObservable(mvcPath));

                  case 4:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }], [{
        key: "_convertPoints",
        value: function _convertPoints(line) {
          var path = line._getPoints().map(function (point) {
            return {
              lat: point.latitude,
              lng: point.longitude
            };
          });

          return path;
        }
      }, {
        key: "_convertPath",
        value: function _convertPath(path) {
          var symbolPath = google.maps.SymbolPath[path];

          if (typeof symbolPath === 'number') {
            return symbolPath;
          } else {
            return path;
          }
        }
      }, {
        key: "_convertIcons",
        value: function _convertIcons(line) {
          var icons = line._getIcons().map(function (agmIcon) {
            return {
              fixedRotation: agmIcon.fixedRotation,
              offset: agmIcon.offset,
              repeat: agmIcon.repeat,
              icon: {
                anchor: new google.maps.Point(agmIcon.anchorX, agmIcon.anchorY),
                fillColor: agmIcon.fillColor,
                fillOpacity: agmIcon.fillOpacity,
                path: PolylineManager_1._convertPath(agmIcon.path),
                rotation: agmIcon.rotation,
                scale: agmIcon.scale,
                strokeColor: agmIcon.strokeColor,
                strokeOpacity: agmIcon.strokeOpacity,
                strokeWeight: agmIcon.strokeWeight
              }
            };
          }); // prune undefineds;


          icons.forEach(function (icon) {
            Object.entries(icon).forEach(function (_ref4) {
              var _ref5 = _slicedToArray(_ref4, 2),
                  key = _ref5[0],
                  val = _ref5[1];

              if (typeof val === 'undefined') {
                delete icon[key];
              }
            });

            if (typeof icon.icon.anchor.x === 'undefined' || typeof icon.icon.anchor.y === 'undefined') {
              delete icon.icon.anchor;
            }
          });
          return icons;
        }
      }]);

      return PolylineManager;
    }();

    PolylineManager.ɵfac = function PolylineManager_Factory(t) {
      return new (t || PolylineManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    PolylineManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: PolylineManager,
      factory: PolylineManager.ɵfac
    });

    PolylineManager.ctorParameters = function () {
      return [{
        type: GoogleMapsAPIWrapper
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    PolylineManager = PolylineManager_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], PolylineManager);

    var RectangleManager = /*#__PURE__*/function () {
      function RectangleManager(_apiWrapper, _zone) {
        _classCallCheck(this, RectangleManager);

        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
        this._rectangles = new Map();
      }

      _createClass(RectangleManager, [{
        key: "addRectangle",
        value: function addRectangle(rectangle) {
          this._rectangles.set(rectangle, this._apiWrapper.createRectangle({
            bounds: {
              north: rectangle.north,
              east: rectangle.east,
              south: rectangle.south,
              west: rectangle.west
            },
            clickable: rectangle.clickable,
            draggable: rectangle.draggable,
            editable: rectangle.editable,
            fillColor: rectangle.fillColor,
            fillOpacity: rectangle.fillOpacity,
            strokeColor: rectangle.strokeColor,
            strokeOpacity: rectangle.strokeOpacity,
            strokePosition: rectangle.strokePosition,
            strokeWeight: rectangle.strokeWeight,
            visible: rectangle.visible,
            zIndex: rectangle.zIndex
          }));
        }
        /**
         * Removes the given rectangle from the map.
         */

      }, {
        key: "removeRectangle",
        value: function removeRectangle(rectangle) {
          var _this59 = this;

          return this._rectangles.get(rectangle).then(function (r) {
            r.setMap(null);

            _this59._rectangles["delete"](rectangle);
          });
        }
      }, {
        key: "setOptions",
        value: function setOptions(rectangle, options) {
          return this._rectangles.get(rectangle).then(function (r) {
            return r.setOptions(options);
          });
        }
      }, {
        key: "getBounds",
        value: function getBounds(rectangle) {
          return this._rectangles.get(rectangle).then(function (r) {
            return r.getBounds();
          });
        }
      }, {
        key: "setBounds",
        value: function setBounds(rectangle) {
          return this._rectangles.get(rectangle).then(function (r) {
            return r.setBounds({
              north: rectangle.north,
              east: rectangle.east,
              south: rectangle.south,
              west: rectangle.west
            });
          });
        }
      }, {
        key: "setEditable",
        value: function setEditable(rectangle) {
          return this._rectangles.get(rectangle).then(function (r) {
            return r.setEditable(rectangle.editable);
          });
        }
      }, {
        key: "setDraggable",
        value: function setDraggable(rectangle) {
          return this._rectangles.get(rectangle).then(function (r) {
            return r.setDraggable(rectangle.draggable);
          });
        }
      }, {
        key: "setVisible",
        value: function setVisible(rectangle) {
          return this._rectangles.get(rectangle).then(function (r) {
            return r.setVisible(rectangle.visible);
          });
        }
      }, {
        key: "createEventObservable",
        value: function createEventObservable(eventName, rectangle) {
          var _this60 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            var listener = null;

            _this60._rectangles.get(rectangle).then(function (r) {
              listener = r.addListener(eventName, function (e) {
                return _this60._zone.run(function () {
                  return observer.next(e);
                });
              });
            });

            return function () {
              if (listener !== null) {
                listener.remove();
              }
            };
          });
        }
      }]);

      return RectangleManager;
    }();

    RectangleManager.ɵfac = function RectangleManager_Factory(t) {
      return new (t || RectangleManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    RectangleManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: RectangleManager,
      factory: RectangleManager.ɵfac
    });

    RectangleManager.ctorParameters = function () {
      return [{
        type: GoogleMapsAPIWrapper
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    RectangleManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], RectangleManager);
    var AgmMap_1;
    /**
     * AgmMap renders a Google Map.
     * **Important note**: To be able see a map in the browser, you have to define a height for the
     * element `agm-map`.
     *
     * ### Example
     * ```typescript
     * import { Component } from '@angular/core';
     *
     * @Component({
     *  selector: 'my-map-cmp',
     *  styles: [`
     *    agm-map {
     *      height: 300px;
     *    }
     * `],
     *  template: `
     *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
     *    </agm-map>
     *  `
     * })
     * ```
     */

    var AgmMap = AgmMap_1 = /*#__PURE__*/function () {
      function AgmMap(_elem, _mapsWrapper, _platformId, _fitBoundsService, _zone) {
        _classCallCheck(this, AgmMap);

        this._elem = _elem;
        this._mapsWrapper = _mapsWrapper;
        this._platformId = _platformId;
        this._fitBoundsService = _fitBoundsService;
        this._zone = _zone;
        /**
         * The longitude that defines the center of the map.
         */

        this.longitude = 0;
        /**
         * The latitude that defines the center of the map.
         */

        this.latitude = 0;
        /**
         * The zoom level of the map. The default zoom level is 8.
         */

        this.zoom = 8;
        /**
         * Enables/disables if map is draggable.
         */
        // tslint:disable-next-line:no-input-rename

        this.draggable = true;
        /**
         * Enables/disables zoom and center on double click. Enabled by default.
         */

        this.disableDoubleClickZoom = false;
        /**
         * Enables/disables all default UI of the Google map. Please note: When the map is created, this
         * value cannot get updated.
         */

        this.disableDefaultUI = false;
        /**
         * If false, disables scrollwheel zooming on the map. The scrollwheel is enabled by default.
         */

        this.scrollwheel = true;
        /**
         * If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts are
         * enabled by default.
         */

        this.keyboardShortcuts = true;
        /**
         * Styles to apply to each of the default map types. Note that for Satellite/Hybrid and Terrain
         * modes, these styles will only apply to labels and geometry.
         */

        this.styles = [];
        /**
         * When true and the latitude and/or longitude values changes, the Google Maps panTo method is
         * used to
         * center the map. See: https://developers.google.com/maps/documentation/javascript/reference#Map
         */

        this.usePanning = false;
        /**
         * Sets the viewport to contain the given bounds.
         * If this option to `true`, the bounds get automatically computed from all elements that use the {@link AgmFitBounds} directive.
         */

        this.fitBounds = false;
        /**
         * The initial enabled/disabled state of the Scale control. This is disabled by default.
         */

        this.scaleControl = false;
        /**
         * The initial enabled/disabled state of the Map type control.
         */

        this.mapTypeControl = false;
        /**
         * The initial enabled/disabled state of the Pan control.
         */

        this.panControl = false;
        /**
         * The initial enabled/disabled state of the Rotate control.
         */

        this.rotateControl = false;
        /**
         * The initial enabled/disabled state of the Fullscreen control.
         */

        this.fullscreenControl = false;
        /**
         * The map mapTypeId. Defaults to 'roadmap'.
         */

        this.mapTypeId = 'roadmap';
        /**
         * When false, map icons are not clickable. A map icon represents a point of interest,
         * also known as a POI. By default map icons are clickable.
         */

        this.clickableIcons = true;
        /**
         * A map icon represents a point of interest, also known as a POI.
         * When map icons are clickable by default, an info window is displayed.
         * When this property is set to false, the info window will not be shown but the click event
         * will still fire
         */

        this.showDefaultInfoWindow = true;
        /**
         * This setting controls how gestures on the map are handled.
         * Allowed values:
         * - 'cooperative' (Two-finger touch gestures pan and zoom the map. One-finger touch gestures are not handled by the map.)
         * - 'greedy'      (All touch gestures pan or zoom the map.)
         * - 'none'        (The map cannot be panned or zoomed by user gestures.)
         * - 'auto'        [default] (Gesture handling is either cooperative or greedy, depending on whether the page is scrollable or not.
         */

        this.gestureHandling = 'auto';
        /**
         * Controls the automatic switching behavior for the angle of incidence of
         * the map. The only allowed values are 0 and 45. The value 0 causes the map
         * to always use a 0° overhead view regardless of the zoom level and
         * viewport. The value 45 causes the tilt angle to automatically switch to
         * 45 whenever 45° imagery is available for the current zoom level and
         * viewport, and switch back to 0 whenever 45° imagery is not available
         * (this is the default behavior). 45° imagery is only available for
         * satellite and hybrid map types, within some locations, and at some zoom
         * levels. Note: getTilt returns the current tilt angle, not the value
         * specified by this option. Because getTilt and this option refer to
         * different things, do not bind() the tilt property; doing so may yield
         * unpredictable effects. (Default of AGM is 0 (disabled). Enable it with value 45.)
         */

        this.tilt = 0;
        this._observableSubscriptions = [];
        /**
         * This event emitter gets emitted when the user clicks on the map (but not when they click on a
         * marker or infoWindow).
         */

        this.mapClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user right-clicks on the map (but not when they click
         * on a marker or infoWindow).
         */

        this.mapRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user double-clicks on the map (but not when they click
         * on a marker or infoWindow).
         */

        this.mapDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter is fired when the map center changes.
         */

        this.centerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the viewport bounds have changed.
         */

        this.boundsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the mapTypeId property changes.
         */

        this.mapTypeIdChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the map becomes idle after panning or zooming.
         */

        this.idle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the zoom level has changed.
         */

        this.zoomChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the google map is fully initialized.
         * You get the google.maps.Map instance as a result of this EventEmitter.
         */

        this.mapReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the visible tiles have finished loading.
         */

        this.tilesLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }
      /** @internal */


      _createClass(AgmMap, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformServer"])(this._platformId)) {
            // The code is running on the server, do nothing
            return;
          } // todo: this should be solved with a new component and a viewChild decorator


          var container = this._elem.nativeElement.querySelector('.agm-map-container-inner');

          this._initMapInstance(container);
        }
      }, {
        key: "_initMapInstance",
        value: function _initMapInstance(el) {
          var _this61 = this;

          this._mapsWrapper.createMap(el, {
            center: {
              lat: this.latitude || 0,
              lng: this.longitude || 0
            },
            zoom: this.zoom,
            minZoom: this.minZoom,
            maxZoom: this.maxZoom,
            controlSize: this.controlSize,
            disableDefaultUI: this.disableDefaultUI,
            disableDoubleClickZoom: this.disableDoubleClickZoom,
            scrollwheel: this.scrollwheel,
            backgroundColor: this.backgroundColor,
            draggable: this.draggable,
            draggableCursor: this.draggableCursor,
            draggingCursor: this.draggingCursor,
            keyboardShortcuts: this.keyboardShortcuts,
            styles: this.styles,
            zoomControl: this.zoomControl,
            zoomControlOptions: this.zoomControlOptions,
            streetViewControl: this.streetViewControl,
            streetViewControlOptions: this.streetViewControlOptions,
            scaleControl: this.scaleControl,
            scaleControlOptions: this.scaleControlOptions,
            mapTypeControl: this.mapTypeControl,
            mapTypeControlOptions: this.mapTypeControlOptions,
            panControl: this.panControl,
            panControlOptions: this.panControlOptions,
            rotateControl: this.rotateControl,
            rotateControlOptions: this.rotateControlOptions,
            fullscreenControl: this.fullscreenControl,
            fullscreenControlOptions: this.fullscreenControlOptions,
            mapTypeId: this.mapTypeId,
            clickableIcons: this.clickableIcons,
            gestureHandling: this.gestureHandling,
            tilt: this.tilt,
            restriction: this.restriction
          }).then(function () {
            return _this61._mapsWrapper.getNativeMap();
          }).then(function (map) {
            return _this61.mapReady.emit(map);
          }); // register event listeners


          this._handleMapCenterChange();

          this._handleMapZoomChange();

          this._handleMapMouseEvents();

          this._handleBoundsChange();

          this._handleMapTypeIdChange();

          this._handleTilesLoadedEvent();

          this._handleIdleEvent();
        }
        /** @internal */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // unsubscribe all registered observable subscriptions
          this._observableSubscriptions.forEach(function (s) {
            return s.unsubscribe();
          }); // remove all listeners from the map instance


          this._mapsWrapper.clearInstanceListeners();

          if (this._fitBoundsSubscription) {
            this._fitBoundsSubscription.unsubscribe();
          }
        }
        /* @internal */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this._updateMapOptionsChanges(changes);

          this._updatePosition(changes);
        }
      }, {
        key: "_updateMapOptionsChanges",
        value: function _updateMapOptionsChanges(changes) {
          var options = {};
          var optionKeys = Object.keys(changes).filter(function (k) {
            return AgmMap_1._mapOptionsAttributes.indexOf(k) !== -1;
          });
          optionKeys.forEach(function (k) {
            options[k] = changes[k].currentValue;
          });

          this._mapsWrapper.setMapOptions(options);
        }
        /**
         * Triggers a resize event on the google map instance.
         * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
         * Returns a promise that gets resolved after the event was triggered.
         */

      }, {
        key: "triggerResize",
        value: function triggerResize() {
          var _this62 = this;

          var recenter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          // Note: When we would trigger the resize event and show the map in the same turn (which is a
          // common case for triggering a resize event), then the resize event would not
          // work (to show the map), so we trigger the event in a timeout.
          return new Promise(function (resolve) {
            setTimeout(function () {
              return _this62._mapsWrapper.triggerMapEvent('resize').then(function () {
                if (recenter) {
                  _this62.fitBounds != null ? _this62._fitBounds() : _this62._setCenter();
                }

                resolve();
              });
            });
          });
        }
      }, {
        key: "_updatePosition",
        value: function _updatePosition(changes) {
          if (changes['latitude'] == null && changes['longitude'] == null && !changes['fitBounds']) {
            // no position update needed
            return;
          } // we prefer fitBounds in changes


          if ('fitBounds' in changes) {
            this._fitBounds();

            return;
          }

          if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
          }

          this._setCenter();
        }
      }, {
        key: "_setCenter",
        value: function _setCenter() {
          var newCenter = {
            lat: this.latitude,
            lng: this.longitude
          };

          if (this.usePanning) {
            this._mapsWrapper.panTo(newCenter);
          } else {
            this._mapsWrapper.setCenter(newCenter);
          }
        }
      }, {
        key: "_fitBounds",
        value: function _fitBounds() {
          switch (this.fitBounds) {
            case true:
              this._subscribeToFitBoundsUpdates();

              break;

            case false:
              if (this._fitBoundsSubscription) {
                this._fitBoundsSubscription.unsubscribe();
              }

              break;

            default:
              this._updateBounds(this.fitBounds, this.fitBoundsPadding);

          }
        }
      }, {
        key: "_subscribeToFitBoundsUpdates",
        value: function _subscribeToFitBoundsUpdates() {
          var _this63 = this;

          this._zone.runOutsideAngular(function () {
            _this63._fitBoundsSubscription = _this63._fitBoundsService.getBounds$().subscribe(function (b) {
              _this63._zone.run(function () {
                return _this63._updateBounds(b, _this63.fitBoundsPadding);
              });
            });
          });
        }
      }, {
        key: "_updateBounds",
        value: function _updateBounds(bounds, padding) {
          if (!bounds) {
            return;
          }

          if (this._isLatLngBoundsLiteral(bounds) && typeof google !== 'undefined' && google && google.maps && google.maps.LatLngBounds) {
            var newBounds = new google.maps.LatLngBounds();
            newBounds.union(bounds);
            bounds = newBounds;
          }

          if (this.usePanning) {
            this._mapsWrapper.panToBounds(bounds, padding);

            return;
          }

          this._mapsWrapper.fitBounds(bounds, padding);
        }
      }, {
        key: "_isLatLngBoundsLiteral",
        value: function _isLatLngBoundsLiteral(bounds) {
          return bounds != null && bounds.extend === undefined;
        }
      }, {
        key: "_handleMapCenterChange",
        value: function _handleMapCenterChange() {
          var _this64 = this;

          var s = this._mapsWrapper.subscribeToMapEvent('center_changed').subscribe(function () {
            _this64._mapsWrapper.getCenter().then(function (center) {
              _this64.latitude = center.lat();
              _this64.longitude = center.lng();

              _this64.centerChange.emit({
                lat: _this64.latitude,
                lng: _this64.longitude
              });
            });
          });

          this._observableSubscriptions.push(s);
        }
      }, {
        key: "_handleBoundsChange",
        value: function _handleBoundsChange() {
          var _this65 = this;

          var s = this._mapsWrapper.subscribeToMapEvent('bounds_changed').subscribe(function () {
            _this65._mapsWrapper.getBounds().then(function (bounds) {
              _this65.boundsChange.emit(bounds);
            });
          });

          this._observableSubscriptions.push(s);
        }
      }, {
        key: "_handleMapTypeIdChange",
        value: function _handleMapTypeIdChange() {
          var _this66 = this;

          var s = this._mapsWrapper.subscribeToMapEvent('maptypeid_changed').subscribe(function () {
            _this66._mapsWrapper.getMapTypeId().then(function (mapTypeId) {
              _this66.mapTypeIdChange.emit(mapTypeId);
            });
          });

          this._observableSubscriptions.push(s);
        }
      }, {
        key: "_handleMapZoomChange",
        value: function _handleMapZoomChange() {
          var _this67 = this;

          var s = this._mapsWrapper.subscribeToMapEvent('zoom_changed').subscribe(function () {
            _this67._mapsWrapper.getZoom().then(function (z) {
              _this67.zoom = z;

              _this67.zoomChange.emit(z);
            });
          });

          this._observableSubscriptions.push(s);
        }
      }, {
        key: "_handleIdleEvent",
        value: function _handleIdleEvent() {
          var _this68 = this;

          var s = this._mapsWrapper.subscribeToMapEvent('idle').subscribe(function () {
            _this68.idle.emit(void 0);
          });

          this._observableSubscriptions.push(s);
        }
      }, {
        key: "_handleTilesLoadedEvent",
        value: function _handleTilesLoadedEvent() {
          var _this69 = this;

          var s = this._mapsWrapper.subscribeToMapEvent('tilesloaded').subscribe(function () {
            return _this69.tilesLoaded.emit(void 0);
          });

          this._observableSubscriptions.push(s);
        }
      }, {
        key: "_handleMapMouseEvents",
        value: function _handleMapMouseEvents() {
          var _this70 = this;

          var events = [{
            name: 'click',
            emitter: this.mapClick
          }, {
            name: 'rightclick',
            emitter: this.mapRightClick
          }, {
            name: 'dblclick',
            emitter: this.mapDblClick
          }];
          events.forEach(function (e) {
            var s = _this70._mapsWrapper.subscribeToMapEvent(e.name).subscribe(function (event) {
              var value = {
                coords: {
                  lat: event.latLng.lat(),
                  lng: event.latLng.lng()
                },
                placeId: event.placeId
              }; // the placeId will be undefined in case the event was not an IconMouseEvent (google types)

              if (value.placeId && !_this70.showDefaultInfoWindow) {
                event.stop();
              }

              e.emitter.emit(value);
            });

            _this70._observableSubscriptions.push(s);
          });
        }
      }]);

      return AgmMap;
    }();

    AgmMap.ɵfac = function AgmMap_Factory(t) {
      return new (t || AgmMap)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FitBoundsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    AgmMap.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AgmMap,
      selectors: [["agm-map"]],
      hostVars: 2,
      hostBindings: function AgmMap_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("sebm-google-map-container", true);
        }
      },
      inputs: {
        longitude: "longitude",
        latitude: "latitude",
        zoom: "zoom",
        draggable: ["mapDraggable", "draggable"],
        disableDoubleClickZoom: "disableDoubleClickZoom",
        disableDefaultUI: "disableDefaultUI",
        scrollwheel: "scrollwheel",
        keyboardShortcuts: "keyboardShortcuts",
        styles: "styles",
        usePanning: "usePanning",
        fitBounds: "fitBounds",
        scaleControl: "scaleControl",
        mapTypeControl: "mapTypeControl",
        panControl: "panControl",
        rotateControl: "rotateControl",
        fullscreenControl: "fullscreenControl",
        mapTypeId: "mapTypeId",
        clickableIcons: "clickableIcons",
        showDefaultInfoWindow: "showDefaultInfoWindow",
        gestureHandling: "gestureHandling",
        tilt: "tilt",
        minZoom: "minZoom",
        maxZoom: "maxZoom",
        controlSize: "controlSize",
        backgroundColor: "backgroundColor",
        draggableCursor: "draggableCursor",
        draggingCursor: "draggingCursor",
        zoomControl: "zoomControl",
        zoomControlOptions: "zoomControlOptions",
        streetViewControl: "streetViewControl",
        streetViewControlOptions: "streetViewControlOptions",
        fitBoundsPadding: "fitBoundsPadding",
        scaleControlOptions: "scaleControlOptions",
        mapTypeControlOptions: "mapTypeControlOptions",
        panControlOptions: "panControlOptions",
        rotateControlOptions: "rotateControlOptions",
        fullscreenControlOptions: "fullscreenControlOptions",
        restriction: "restriction"
      },
      outputs: {
        mapClick: "mapClick",
        mapRightClick: "mapRightClick",
        mapDblClick: "mapDblClick",
        centerChange: "centerChange",
        boundsChange: "boundsChange",
        mapTypeIdChange: "mapTypeIdChange",
        idle: "idle",
        zoomChange: "zoomChange",
        mapReady: "mapReady",
        tilesLoaded: "tilesLoaded"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([CircleManager, DataLayerManager, DataLayerManager, FitBoundsService, GoogleMapsAPIWrapper, InfoWindowManager, KmlLayerManager, LayerManager, MarkerManager, PolygonManager, PolylineManager, RectangleManager]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c0,
      decls: 3,
      vars: 0,
      consts: [[1, "agm-map-container-inner", "sebm-google-map-container-inner"], [1, "agm-map-content"]],
      template: function AgmMap_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      styles: [".agm-map-container-inner[_ngcontent-%COMP%] {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content[_ngcontent-%COMP%] {\n      display:none;\n    }"]
    });
    /**
     * Map option attributes that can change over time
     */

    AgmMap._mapOptionsAttributes = ['disableDoubleClickZoom', 'scrollwheel', 'draggable', 'draggableCursor', 'draggingCursor', 'keyboardShortcuts', 'zoomControl', 'zoomControlOptions', 'styles', 'streetViewControl', 'streetViewControlOptions', 'zoom', 'mapTypeControl', 'mapTypeControlOptions', 'minZoom', 'maxZoom', 'panControl', 'panControlOptions', 'rotateControl', 'rotateControlOptions', 'fullscreenControl', 'fullscreenControlOptions', 'scaleControl', 'scaleControlOptions', 'mapTypeId', 'clickableIcons', 'gestureHandling', 'tilt', 'restriction'];

    AgmMap.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: GoogleMapsAPIWrapper
      }, {
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
        }]
      }, {
        type: FitBoundsService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "longitude", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "latitude", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "zoom", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmMap.prototype, "minZoom", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmMap.prototype, "maxZoom", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmMap.prototype, "controlSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mapDraggable'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "draggable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "disableDoubleClickZoom", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "disableDefaultUI", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "scrollwheel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmMap.prototype, "backgroundColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmMap.prototype, "draggableCursor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmMap.prototype, "draggingCursor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "keyboardShortcuts", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], AgmMap.prototype, "zoomControl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "zoomControlOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], AgmMap.prototype, "styles", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "usePanning", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], AgmMap.prototype, "streetViewControl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "streetViewControlOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "fitBounds", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "fitBoundsPadding", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "scaleControl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "scaleControlOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "mapTypeControl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "mapTypeControlOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "panControl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "panControlOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "rotateControl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "rotateControlOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "fullscreenControl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "fullscreenControlOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmMap.prototype, "mapTypeId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "clickableIcons", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "showDefaultInfoWindow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmMap.prototype, "gestureHandling", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "tilt", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "restriction", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "mapClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "mapRightClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "mapDblClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "centerChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "boundsChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "mapTypeIdChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "idle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "zoomChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "mapReady", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "tilesLoaded", void 0);
    AgmMap = AgmMap_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], GoogleMapsAPIWrapper, Object, FitBoundsService, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], AgmMap);
    var AgmMarker_1;
    var markerId = 0;
    /**
     * AgmMarker renders a map marker inside a {@link AgmMap}.
     *
     * ### Example
     * ```typescript
     * import { Component } from '@angular/core';
     *
     * @Component({
     *  selector: 'my-map-cmp',
     *  styles: [`
     *    .agm-map-container {
     *      height: 300px;
     *    }
     * `],
     *  template: `
     *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
     *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
     *      </agm-marker>
     *    </agm-map>
     *  `
     * })
     * ```
     */

    var AgmMarker = AgmMarker_1 = /*#__PURE__*/function () {
      function AgmMarker(_markerManager) {
        _classCallCheck(this, AgmMarker);

        this._markerManager = _markerManager;
        /**
         * If true, the marker can be dragged. Default value is false.
         */
        // tslint:disable-next-line:no-input-rename

        this.draggable = false;
        /**
         * If true, the marker is visible
         */

        this.visible = true;
        /**
         * Whether to automatically open the child info window when the marker is clicked.
         */

        this.openInfoWindow = true;
        /**
         * The marker's opacity between 0.0 and 1.0.
         */

        this.opacity = 1;
        /**
         * All markers are displayed on the map in order of their zIndex, with higher values displaying in
         * front of markers with lower values. By default, markers are displayed according to their
         * vertical position on screen, with lower markers appearing in front of markers further up the
         * screen.
         */

        this.zIndex = 1;
        /**
         * If true, the marker can be clicked. Default value is true.
         */
        // tslint:disable-next-line:no-input-rename

        this.clickable = true;
        /**
         * This event is fired when the marker's animation property changes.
         *
         * @memberof AgmMarker
         */

        this.animationChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks on the marker.
         */

        this.markerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks twice on the marker.
         */

        this.markerDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user rightclicks on the marker.
         */

        this.markerRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the marker.
         */

        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the marker.
         */

        this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the marker.
         */

        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user mouses over the marker.
         */

        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user mouses outside the marker.
         */

        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** @internal */

        this.infoWindow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]();
        this._markerAddedToManger = false;
        this._observableSubscriptions = [];
        this._fitBoundsDetails$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this._id = (markerId++).toString();
      }
      /* @internal */


      _createClass(AgmMarker, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this71 = this;

          this.handleInfoWindowUpdate();
          this.infoWindow.changes.subscribe(function () {
            return _this71.handleInfoWindowUpdate();
          });
        }
      }, {
        key: "handleInfoWindowUpdate",
        value: function handleInfoWindowUpdate() {
          var _this72 = this;

          if (this.infoWindow.length > 1) {
            throw new Error('Expected no more than one info window.');
          }

          this.infoWindow.forEach(function (marker) {
            marker.hostMarker = _this72;
          });
        }
        /** @internal */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (typeof this.latitude === 'string') {
            this.latitude = Number(this.latitude);
          }

          if (typeof this.longitude === 'string') {
            this.longitude = Number(this.longitude);
          }

          if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
          }

          if (!this._markerAddedToManger) {
            this._markerManager.addMarker(this);

            this._updateFitBoundsDetails();

            this._markerAddedToManger = true;

            this._addEventListeners();

            return;
          }

          if (changes['latitude'] || changes['longitude']) {
            this._markerManager.updateMarkerPosition(this);

            this._updateFitBoundsDetails();
          }

          if (changes['title']) {
            this._markerManager.updateTitle(this);
          }

          if (changes['label']) {
            this._markerManager.updateLabel(this);
          }

          if (changes['draggable']) {
            this._markerManager.updateDraggable(this);
          }

          if (changes['iconUrl']) {
            this._markerManager.updateIcon(this);
          }

          if (changes['opacity']) {
            this._markerManager.updateOpacity(this);
          }

          if (changes['visible']) {
            this._markerManager.updateVisible(this);
          }

          if (changes['zIndex']) {
            this._markerManager.updateZIndex(this);
          }

          if (changes['clickable']) {
            this._markerManager.updateClickable(this);
          }

          if (changes['animation']) {
            this._markerManager.updateAnimation(this);
          }
        }
        /** @internal */

      }, {
        key: "getFitBoundsDetails$",
        value: function getFitBoundsDetails$() {
          return this._fitBoundsDetails$.asObservable();
        }
      }, {
        key: "_updateFitBoundsDetails",
        value: function _updateFitBoundsDetails() {
          this._fitBoundsDetails$.next({
            latLng: {
              lat: this.latitude,
              lng: this.longitude
            }
          });
        }
      }, {
        key: "_addEventListeners",
        value: function _addEventListeners() {
          var _this73 = this;

          var cs = this._markerManager.createEventObservable('click', this).subscribe(function () {
            if (_this73.openInfoWindow) {
              _this73.infoWindow.forEach(function (infoWindow) {
                return infoWindow.open();
              });
            }

            _this73.markerClick.emit(_this73);
          });

          this._observableSubscriptions.push(cs);

          var dcs = this._markerManager.createEventObservable('dblclick', this).subscribe(function () {
            _this73.markerDblClick.emit(null);
          });

          this._observableSubscriptions.push(dcs);

          var rc = this._markerManager.createEventObservable('rightclick', this).subscribe(function () {
            _this73.markerRightClick.emit(null);
          });

          this._observableSubscriptions.push(rc);

          var ds = this._markerManager.createEventObservable('dragstart', this).subscribe(function (e) {
            _this73.dragStart.emit({
              coords: {
                lat: e.latLng.lat(),
                lng: e.latLng.lng()
              }
            });
          });

          this._observableSubscriptions.push(ds);

          var d = this._markerManager.createEventObservable('drag', this).subscribe(function (e) {
            _this73.drag.emit({
              coords: {
                lat: e.latLng.lat(),
                lng: e.latLng.lng()
              }
            });
          });

          this._observableSubscriptions.push(d);

          var de = this._markerManager.createEventObservable('dragend', this).subscribe(function (e) {
            _this73.dragEnd.emit({
              coords: {
                lat: e.latLng.lat(),
                lng: e.latLng.lng()
              }
            });
          });

          this._observableSubscriptions.push(de);

          var mover = this._markerManager.createEventObservable('mouseover', this).subscribe(function (e) {
            _this73.mouseOver.emit({
              coords: {
                lat: e.latLng.lat(),
                lng: e.latLng.lng()
              }
            });
          });

          this._observableSubscriptions.push(mover);

          var mout = this._markerManager.createEventObservable('mouseout', this).subscribe(function (e) {
            _this73.mouseOut.emit({
              coords: {
                lat: e.latLng.lat(),
                lng: e.latLng.lng()
              }
            });
          });

          this._observableSubscriptions.push(mout);

          var anChng = this._markerManager.createEventObservable('animation_changed', this).subscribe(function () {
            _this73.animationChange.emit(_this73.animation);
          });

          this._observableSubscriptions.push(anChng);
        }
        /** @internal */

      }, {
        key: "id",
        value: function id() {
          return this._id;
        }
        /** @internal */

      }, {
        key: "toString",
        value: function toString() {
          return 'AgmMarker-' + this._id.toString();
        }
        /** @internal */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._markerManager.deleteMarker(this); // unsubscribe all registered observable subscriptions


          this._observableSubscriptions.forEach(function (s) {
            return s.unsubscribe();
          });
        }
      }]);

      return AgmMarker;
    }();

    AgmMarker.ɵfac = function AgmMarker_Factory(t) {
      return new (t || AgmMarker)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MarkerManager));
    };

    AgmMarker.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmMarker,
      selectors: [["agm-marker"]],
      contentQueries: function AgmMarker_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, AgmInfoWindow, false);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.infoWindow = _t);
        }
      },
      inputs: {
        latitude: "latitude",
        longitude: "longitude",
        title: "title",
        label: "label",
        draggable: ["markerDraggable", "draggable"],
        iconUrl: "iconUrl",
        openInfoWindow: "openInfoWindow",
        opacity: "opacity",
        visible: "visible",
        zIndex: "zIndex",
        animation: "animation",
        clickable: ["markerClickable", "clickable"]
      },
      outputs: {
        markerClick: "markerClick",
        dragStart: "dragStart",
        drag: "drag",
        dragEnd: "dragEnd",
        mouseOver: "mouseOver",
        mouseOut: "mouseOut",
        animationChange: "animationChange",
        markerDblClick: "markerDblClick",
        markerRightClick: "markerRightClick"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: FitBoundsAccessor,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return AgmMarker_1;
        })
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });

    AgmMarker.ctorParameters = function () {
      return [{
        type: MarkerManager
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmMarker.prototype, "latitude", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmMarker.prototype, "longitude", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmMarker.prototype, "title", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMarker.prototype, "label", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('markerDraggable'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMarker.prototype, "draggable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmMarker.prototype, "iconUrl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMarker.prototype, "visible", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMarker.prototype, "openInfoWindow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMarker.prototype, "opacity", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMarker.prototype, "zIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('markerClickable'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMarker.prototype, "clickable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmMarker.prototype, "animation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMarker.prototype, "animationChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMarker.prototype, "markerClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMarker.prototype, "markerDblClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMarker.prototype, "markerRightClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMarker.prototype, "dragStart", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMarker.prototype, "drag", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMarker.prototype, "dragEnd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMarker.prototype, "mouseOver", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMarker.prototype, "mouseOut", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(AgmInfoWindow), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], AgmMarker.prototype, "infoWindow", void 0);
    AgmMarker = AgmMarker_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [MarkerManager])], AgmMarker);
    var AgmPolygon_1;
    /**
     * AgmPolygon renders a polygon on a {@link AgmMap}
     *
     * ### Example
     * ```typescript
     * import { Component } from '@angular/core';
     *
     * @Component({
     *  selector: 'my-map-cmp',
     *  styles: [`
     *    agm-map {
     *      height: 300px;
     *    }
     * `],
     *  template: `
     *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
     *      <agm-polygon [paths]="paths">
     *      </agm-polygon>
     *    </agm-map>
     *  `
     * })
     * export class MyMapCmp {
     *   lat: number = 0;
     *   lng: number = 0;
     *   zoom: number = 10;
     *   paths: Array<LatLngLiteral> = [
     *     { lat: 0,  lng: 10 },
     *     { lat: 0,  lng: 20 },
     *     { lat: 10, lng: 20 },
     *     { lat: 10, lng: 10 },
     *     { lat: 0,  lng: 10 }
     *   ]
     *   // Nesting paths will create a hole where they overlap;
     *   nestedPaths: Array<Array<LatLngLiteral>> = [[
     *     { lat: 0,  lng: 10 },
     *     { lat: 0,  lng: 20 },
     *     { lat: 10, lng: 20 },
     *     { lat: 10, lng: 10 },
     *     { lat: 0,  lng: 10 }
     *   ], [
     *     { lat: 0, lng: 15 },
     *     { lat: 0, lng: 20 },
     *     { lat: 5, lng: 20 },
     *     { lat: 5, lng: 15 },
     *     { lat: 0, lng: 15 }
     *   ]]
     * }
     * ```
     */

    var AgmPolygon = AgmPolygon_1 = /*#__PURE__*/function () {
      function AgmPolygon(_polygonManager) {
        _classCallCheck(this, AgmPolygon);

        this._polygonManager = _polygonManager;
        /**
         * Indicates whether this Polygon handles mouse events. Defaults to true.
         */

        this.clickable = true;
        /**
         * If set to true, the user can drag this shape over the map. The geodesic
         * property defines the mode of dragging. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename

        this.draggable = false;
        /**
         * If set to true, the user can edit this shape by dragging the control
         * points shown at the vertices and on each segment. Defaults to false.
         */

        this.editable = false;
        /**
         * When true, edges of the polygon are interpreted as geodesic and will
         * follow the curvature of the Earth. When false, edges of the polygon are
         * rendered as straight lines in screen space. Note that the shape of a
         * geodesic polygon may appear to change when dragged, as the dimensions
         * are maintained relative to the surface of the earth. Defaults to false.
         */

        this.geodesic = false;
        /**
         * The ordered sequence of coordinates that designates a closed loop.
         * Unlike polylines, a polygon may consist of one or more paths.
         *  As a result, the paths property may specify one or more arrays of
         * LatLng coordinates. Paths are closed automatically; do not repeat the
         * first vertex of the path as the last vertex. Simple polygons may be
         * defined using a single array of LatLngs. More complex polygons may
         * specify an array of arrays. Any simple arrays are converted into Arrays.
         * Inserting or removing LatLngs from the Array will automatically update
         * the polygon on the map.
         */

        this.paths = [];
        /**
         * This event is fired when the DOM click event is fired on the Polygon.
         */

        this.polyClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM dblclick event is fired on the Polygon.
         */

        this.polyDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the polygon.
         */

        this.polyDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the polygon.
         */

        this.polyDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the polygon.
         */

        this.polyDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousedown event is fired on the Polygon.
         */

        this.polyMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousemove event is fired on the Polygon.
         */

        this.polyMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on Polygon mouseout.
         */

        this.polyMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on Polygon mouseover.
         */

        this.polyMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired whe the DOM mouseup event is fired on the Polygon
         */

        this.polyMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the Polygon is right-clicked on.
         */

        this.polyRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired after Polygon first path changes.
         */

        this.polyPathsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._polygonAddedToManager = false;
        this._subscriptions = [];
      }
      /** @internal */


      _createClass(AgmPolygon, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          if (!this._polygonAddedToManager) {
            this._init();
          }
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this._polygonAddedToManager) {
            this._init();

            return;
          }

          this._polygonManager.setPolygonOptions(this, this._updatePolygonOptions(changes));
        }
      }, {
        key: "_init",
        value: function _init() {
          this._polygonManager.addPolygon(this);

          this._polygonAddedToManager = true;

          this._addEventListeners();
        }
      }, {
        key: "_addEventListeners",
        value: function _addEventListeners() {
          var _this74 = this;

          var handlers = [{
            name: 'click',
            handler: function handler(ev) {
              return _this74.polyClick.emit(ev);
            }
          }, {
            name: 'dblclick',
            handler: function handler(ev) {
              return _this74.polyDblClick.emit(ev);
            }
          }, {
            name: 'drag',
            handler: function handler(ev) {
              return _this74.polyDrag.emit(ev);
            }
          }, {
            name: 'dragend',
            handler: function handler(ev) {
              return _this74.polyDragEnd.emit(ev);
            }
          }, {
            name: 'dragstart',
            handler: function handler(ev) {
              return _this74.polyDragStart.emit(ev);
            }
          }, {
            name: 'mousedown',
            handler: function handler(ev) {
              return _this74.polyMouseDown.emit(ev);
            }
          }, {
            name: 'mousemove',
            handler: function handler(ev) {
              return _this74.polyMouseMove.emit(ev);
            }
          }, {
            name: 'mouseout',
            handler: function handler(ev) {
              return _this74.polyMouseOut.emit(ev);
            }
          }, {
            name: 'mouseover',
            handler: function handler(ev) {
              return _this74.polyMouseOver.emit(ev);
            }
          }, {
            name: 'mouseup',
            handler: function handler(ev) {
              return _this74.polyMouseUp.emit(ev);
            }
          }, {
            name: 'rightclick',
            handler: function handler(ev) {
              return _this74.polyRightClick.emit(ev);
            }
          }];
          handlers.forEach(function (obj) {
            var os = _this74._polygonManager.createEventObservable(obj.name, _this74).subscribe(obj.handler);

            _this74._subscriptions.push(os);
          });

          this._polygonManager.createPathEventObservable(this).then(function (paths$) {
            var os = paths$.subscribe(function (pathEvent) {
              return _this74.polyPathsChange.emit(pathEvent);
            });

            _this74._subscriptions.push(os);
          });
        }
      }, {
        key: "_updatePolygonOptions",
        value: function _updatePolygonOptions(changes) {
          return Object.keys(changes).filter(function (k) {
            return AgmPolygon_1._polygonOptionsAttributes.indexOf(k) !== -1;
          }).reduce(function (obj, k) {
            obj[k] = changes[k].currentValue;
            return obj;
          }, {});
        }
        /** @internal */

      }, {
        key: "id",
        value: function id() {
          return this._id;
        }
        /** @internal */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._polygonManager.deletePolygon(this); // unsubscribe all registered observable subscriptions


          this._subscriptions.forEach(function (s) {
            return s.unsubscribe();
          });
        }
      }, {
        key: "getPath",
        value: function getPath() {
          return this._polygonManager.getPath(this);
        }
      }, {
        key: "getPaths",
        value: function getPaths() {
          return this._polygonManager.getPaths(this);
        }
      }]);

      return AgmPolygon;
    }();

    AgmPolygon.ɵfac = function AgmPolygon_Factory(t) {
      return new (t || AgmPolygon)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](PolygonManager));
    };

    AgmPolygon.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmPolygon,
      selectors: [["agm-polygon"]],
      inputs: {
        clickable: "clickable",
        draggable: ["polyDraggable", "draggable"],
        editable: "editable",
        geodesic: "geodesic",
        paths: "paths",
        fillColor: "fillColor",
        fillOpacity: "fillOpacity",
        strokeColor: "strokeColor",
        strokeOpacity: "strokeOpacity",
        strokeWeight: "strokeWeight",
        visible: "visible",
        zIndex: "zIndex"
      },
      outputs: {
        polyClick: "polyClick",
        polyDblClick: "polyDblClick",
        polyDrag: "polyDrag",
        polyDragEnd: "polyDragEnd",
        polyDragStart: "polyDragStart",
        polyMouseDown: "polyMouseDown",
        polyMouseMove: "polyMouseMove",
        polyMouseOut: "polyMouseOut",
        polyMouseOver: "polyMouseOver",
        polyMouseUp: "polyMouseUp",
        polyRightClick: "polyRightClick",
        polyPathsChange: "polyPathsChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    AgmPolygon._polygonOptionsAttributes = ['clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'icon', 'map', 'paths', 'strokeColor', 'strokeOpacity', 'strokeWeight', 'visible', 'zIndex', 'draggable', 'editable', 'visible'];

    AgmPolygon.ctorParameters = function () {
      return [{
        type: PolygonManager
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolygon.prototype, "clickable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('polyDraggable'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolygon.prototype, "draggable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolygon.prototype, "editable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmPolygon.prototype, "fillColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolygon.prototype, "fillOpacity", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolygon.prototype, "geodesic", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], AgmPolygon.prototype, "paths", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmPolygon.prototype, "strokeColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolygon.prototype, "strokeOpacity", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolygon.prototype, "strokeWeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], AgmPolygon.prototype, "visible", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolygon.prototype, "zIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyDblClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyDrag", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyDragEnd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyDragStart", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyMouseDown", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyMouseMove", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyMouseOut", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyMouseOver", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyMouseUp", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyRightClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolygon.prototype, "polyPathsChange", void 0);
    AgmPolygon = AgmPolygon_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [PolygonManager])], AgmPolygon);
    /**
     * AgmPolylineIcon enables to add polyline sequences to add arrows, circle,
     * or custom icons either along the entire line, or in a specific part of it.
     * See https://developers.google.com/maps/documentation/javascript/shapes#polyline_customize
     *
     * ### Example
     * ```html
     *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
     *      <agm-polyline>
     *          <agm-icon-sequence [fixedRotation]="true" [path]="'FORWARD_OPEN_ARROW'">
     *          </agm-icon-sequence>
     *      </agm-polyline>
     *    </agm-map>
     * ```
     *
     * @export
     * @class AgmPolylineIcon
     */

    var AgmPolylineIcon = /*#__PURE__*/function () {
      function AgmPolylineIcon() {
        _classCallCheck(this, AgmPolylineIcon);
      }

      _createClass(AgmPolylineIcon, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.path == null) {
            throw new Error('Icon Sequence path is required');
          }
        }
      }]);

      return AgmPolylineIcon;
    }();

    AgmPolylineIcon.ɵfac = function AgmPolylineIcon_Factory(t) {
      return new (t || AgmPolylineIcon)();
    };

    AgmPolylineIcon.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmPolylineIcon,
      selectors: [["agm-icon-sequence"]],
      inputs: {
        fixedRotation: "fixedRotation",
        offset: "offset",
        repeat: "repeat",
        anchorX: "anchorX",
        anchorY: "anchorY",
        fillColor: "fillColor",
        fillOpacity: "fillOpacity",
        path: "path",
        rotation: "rotation",
        scale: "scale",
        strokeColor: "strokeColor",
        strokeOpacity: "strokeOpacity",
        strokeWeight: "strokeWeight"
      }
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], AgmPolylineIcon.prototype, "fixedRotation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmPolylineIcon.prototype, "offset", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmPolylineIcon.prototype, "repeat", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolylineIcon.prototype, "anchorX", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolylineIcon.prototype, "anchorY", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmPolylineIcon.prototype, "fillColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolylineIcon.prototype, "fillOpacity", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmPolylineIcon.prototype, "path", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolylineIcon.prototype, "rotation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolylineIcon.prototype, "scale", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmPolylineIcon.prototype, "strokeColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolylineIcon.prototype, "strokeOpacity", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolylineIcon.prototype, "strokeWeight", void 0);
    var AgmPolylinePoint_1;
    /**
     * AgmPolylinePoint represents one element of a polyline within a  {@link
     * AgmPolyline}
     */

    var AgmPolylinePoint = AgmPolylinePoint_1 = /*#__PURE__*/function () {
      function AgmPolylinePoint() {
        _classCallCheck(this, AgmPolylinePoint);

        /**
         * This event emitter gets emitted when the position of the point changed.
         */
        this.positionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(AgmPolylinePoint, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes['latitude'] || changes['longitude']) {
            var position = {
              lat: changes['latitude'] ? changes['latitude'].currentValue : this.latitude,
              lng: changes['longitude'] ? changes['longitude'].currentValue : this.longitude
            };
            this.positionChanged.emit(position);
          }
        }
        /** @internal */

      }, {
        key: "getFitBoundsDetails$",
        value: function getFitBoundsDetails$() {
          return this.positionChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({
            lat: this.latitude,
            lng: this.longitude
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (position) {
            return {
              latLng: position
            };
          }));
        }
      }]);

      return AgmPolylinePoint;
    }();

    AgmPolylinePoint.ɵfac = function AgmPolylinePoint_Factory(t) {
      return new (t || AgmPolylinePoint)();
    };

    AgmPolylinePoint.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmPolylinePoint,
      selectors: [["agm-polyline-point"]],
      inputs: {
        latitude: "latitude",
        longitude: "longitude"
      },
      outputs: {
        positionChanged: "positionChanged"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: FitBoundsAccessor,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return AgmPolylinePoint_1;
        })
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolylinePoint.prototype, "latitude", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolylinePoint.prototype, "longitude", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolylinePoint.prototype, "positionChanged", void 0);
    AgmPolylinePoint = AgmPolylinePoint_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AgmPolylinePoint);
    var AgmPolyline_1;
    var polylineId = 0;
    /**
     * AgmPolyline renders a polyline on a {@link AgmMap}
     *
     * ### Example
     * ```typescript
     * import { Component } from '@angular/core';
     *
     * @Component({
     *  selector: 'my-map-cmp',
     *  styles: [`
     *    .agm-map-container {
     *      height: 300px;
     *    }
     * `],
     *  template: `
     *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
     *      <agm-polyline>
     *          <agm-polyline-point [latitude]="latA" [longitude]="lngA">
     *          </agm-polyline-point>
     *          <agm-polyline-point [latitude]="latB" [longitude]="lngB">
     *          </agm-polyline-point>
     *      </agm-polyline>
     *    </agm-map>
     *  `
     * })
     * ```
     */

    var AgmPolyline = AgmPolyline_1 = /*#__PURE__*/function () {
      function AgmPolyline(_polylineManager) {
        _classCallCheck(this, AgmPolyline);

        this._polylineManager = _polylineManager;
        /**
         * Indicates whether this Polyline handles mouse events. Defaults to true.
         */

        this.clickable = true;
        /**
         * If set to true, the user can drag this shape over the map. The geodesic property defines the
         * mode of dragging. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename

        this.draggable = false;
        /**
         * If set to true, the user can edit this shape by dragging the control points shown at the
         * vertices and on each segment. Defaults to false.
         */

        this.editable = false;
        /**
         * When true, edges of the polygon are interpreted as geodesic and will follow the curvature of
         * the Earth. When false, edges of the polygon are rendered as straight lines in screen space.
         * Note that the shape of a geodesic polygon may appear to change when dragged, as the dimensions
         * are maintained relative to the surface of the earth. Defaults to false.
         */

        this.geodesic = false;
        /**
         * Whether this polyline is visible on the map. Defaults to true.
         */

        this.visible = true;
        /**
         * This event is fired when the DOM click event is fired on the Polyline.
         */

        this.lineClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM dblclick event is fired on the Polyline.
         */

        this.lineDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the polyline.
         */

        this.lineDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the polyline.
         */

        this.lineDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the polyline.
         */

        this.lineDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousedown event is fired on the Polyline.
         */

        this.lineMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousemove event is fired on the Polyline.
         */

        this.lineMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on Polyline mouseout.
         */

        this.lineMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on Polyline mouseover.
         */

        this.lineMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired whe the DOM mouseup event is fired on the Polyline
         */

        this.lineMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the Polyline is right-clicked on.
         */

        this.lineRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired after Polyline's path changes.
         */

        this.polyPathChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._polylineAddedToManager = false;
        this._subscriptions = [];
        this._id = (polylineId++).toString();
      }
      /** @internal */


      _createClass(AgmPolyline, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this75 = this;

          if (this.points.length) {
            this.points.forEach(function (point) {
              var s = point.positionChanged.subscribe(function () {
                _this75._polylineManager.updatePolylinePoints(_this75);
              });

              _this75._subscriptions.push(s);
            });
          }

          if (!this._polylineAddedToManager) {
            this._init();
          }

          var pointSub = this.points.changes.subscribe(function () {
            return _this75._polylineManager.updatePolylinePoints(_this75);
          });

          this._subscriptions.push(pointSub);

          this._polylineManager.updatePolylinePoints(this);

          var iconSub = this.iconSequences.changes.subscribe(function () {
            return _this75._polylineManager.updateIconSequences(_this75);
          });

          this._subscriptions.push(iconSub);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this._polylineAddedToManager) {
            this._init();

            return;
          }

          var options = {};
          var optionKeys = Object.keys(changes).filter(function (k) {
            return AgmPolyline_1._polylineOptionsAttributes.indexOf(k) !== -1;
          });
          optionKeys.forEach(function (k) {
            return options[k] = changes[k].currentValue;
          });

          this._polylineManager.setPolylineOptions(this, options);
        }
      }, {
        key: "getPath",
        value: function getPath() {
          return this._polylineManager.getPath(this);
        }
      }, {
        key: "_init",
        value: function _init() {
          this._polylineManager.addPolyline(this);

          this._polylineAddedToManager = true;

          this._addEventListeners();
        }
      }, {
        key: "_addEventListeners",
        value: function _addEventListeners() {
          var _this76 = this;

          var handlers = [{
            name: 'click',
            handler: function handler(ev) {
              return _this76.lineClick.emit(ev);
            }
          }, {
            name: 'dblclick',
            handler: function handler(ev) {
              return _this76.lineDblClick.emit(ev);
            }
          }, {
            name: 'drag',
            handler: function handler(ev) {
              return _this76.lineDrag.emit(ev);
            }
          }, {
            name: 'dragend',
            handler: function handler(ev) {
              return _this76.lineDragEnd.emit(ev);
            }
          }, {
            name: 'dragstart',
            handler: function handler(ev) {
              return _this76.lineDragStart.emit(ev);
            }
          }, {
            name: 'mousedown',
            handler: function handler(ev) {
              return _this76.lineMouseDown.emit(ev);
            }
          }, {
            name: 'mousemove',
            handler: function handler(ev) {
              return _this76.lineMouseMove.emit(ev);
            }
          }, {
            name: 'mouseout',
            handler: function handler(ev) {
              return _this76.lineMouseOut.emit(ev);
            }
          }, {
            name: 'mouseover',
            handler: function handler(ev) {
              return _this76.lineMouseOver.emit(ev);
            }
          }, {
            name: 'mouseup',
            handler: function handler(ev) {
              return _this76.lineMouseUp.emit(ev);
            }
          }, {
            name: 'rightclick',
            handler: function handler(ev) {
              return _this76.lineRightClick.emit(ev);
            }
          }];
          handlers.forEach(function (obj) {
            var os = _this76._polylineManager.createEventObservable(obj.name, _this76).subscribe(obj.handler);

            _this76._subscriptions.push(os);
          });

          this._polylineManager.createPathEventObservable(this).then(function (ob$) {
            var os = ob$.subscribe(function (pathEvent) {
              return _this76.polyPathChange.emit(pathEvent);
            });

            _this76._subscriptions.push(os);
          });
        }
        /** @internal */

      }, {
        key: "_getPoints",
        value: function _getPoints() {
          if (this.points) {
            return this.points.toArray();
          }

          return [];
        }
      }, {
        key: "_getIcons",
        value: function _getIcons() {
          if (this.iconSequences) {
            return this.iconSequences.toArray();
          }

          return [];
        }
        /** @internal */

      }, {
        key: "id",
        value: function id() {
          return this._id;
        }
        /** @internal */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._polylineManager.deletePolyline(this); // unsubscribe all registered observable subscriptions


          this._subscriptions.forEach(function (s) {
            return s.unsubscribe();
          });
        }
      }]);

      return AgmPolyline;
    }();

    AgmPolyline.ɵfac = function AgmPolyline_Factory(t) {
      return new (t || AgmPolyline)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](PolylineManager));
    };

    AgmPolyline.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmPolyline,
      selectors: [["agm-polyline"]],
      contentQueries: function AgmPolyline_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, AgmPolylinePoint, false);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, AgmPolylineIcon, false);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.points = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.iconSequences = _t);
        }
      },
      inputs: {
        clickable: "clickable",
        draggable: ["polylineDraggable", "draggable"],
        editable: "editable",
        geodesic: "geodesic",
        visible: "visible",
        strokeColor: "strokeColor",
        strokeOpacity: "strokeOpacity",
        strokeWeight: "strokeWeight",
        zIndex: "zIndex"
      },
      outputs: {
        lineClick: "lineClick",
        lineDblClick: "lineDblClick",
        lineDrag: "lineDrag",
        lineDragEnd: "lineDragEnd",
        lineDragStart: "lineDragStart",
        lineMouseDown: "lineMouseDown",
        lineMouseMove: "lineMouseMove",
        lineMouseOut: "lineMouseOut",
        lineMouseOver: "lineMouseOver",
        lineMouseUp: "lineMouseUp",
        lineRightClick: "lineRightClick",
        polyPathChange: "polyPathChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    AgmPolyline._polylineOptionsAttributes = ['draggable', 'editable', 'visible', 'geodesic', 'strokeColor', 'strokeOpacity', 'strokeWeight', 'zIndex'];

    AgmPolyline.ctorParameters = function () {
      return [{
        type: PolylineManager
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolyline.prototype, "clickable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('polylineDraggable'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolyline.prototype, "draggable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolyline.prototype, "editable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolyline.prototype, "geodesic", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmPolyline.prototype, "strokeColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolyline.prototype, "strokeOpacity", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolyline.prototype, "strokeWeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolyline.prototype, "visible", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolyline.prototype, "zIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineDblClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineDrag", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineDragEnd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineDragStart", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineMouseDown", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineMouseMove", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineMouseOut", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineMouseOver", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineMouseUp", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineRightClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolyline.prototype, "polyPathChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(AgmPolylinePoint), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], AgmPolyline.prototype, "points", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(AgmPolylineIcon), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], AgmPolyline.prototype, "iconSequences", void 0);
    AgmPolyline = AgmPolyline_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [PolylineManager])], AgmPolyline);
    var AgmRectangle_1;

    var AgmRectangle = AgmRectangle_1 = /*#__PURE__*/function () {
      function AgmRectangle(_manager) {
        _classCallCheck(this, AgmRectangle);

        this._manager = _manager;
        /**
         * Indicates whether this Rectangle handles mouse events. Defaults to true.
         */

        this.clickable = true;
        /**
         * If set to true, the user can drag this rectangle over the map. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename

        this.draggable = false;
        /**
         * If set to true, the user can edit this rectangle by dragging the control points shown at
         * the center and around the circumference of the rectangle. Defaults to false.
         */

        this.editable = false;
        /**
         * The stroke position. Defaults to CENTER.
         * This property is not supported on Internet Explorer 8 and earlier.
         */

        this.strokePosition = 'CENTER';
        /**
         * The stroke width in pixels.
         */

        this.strokeWeight = 0;
        /**
         * Whether this rectangle is visible on the map. Defaults to true.
         */

        this.visible = true;
        /**
         * This event is fired when the rectangle's is changed.
         */

        this.boundsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks on the rectangle.
         */

        this.rectangleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks on the rectangle.
         */

        this.rectangleDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the rectangle.
         */

        this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the rectangle.
         */

        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the rectangle.
         */

        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousedown event is fired on the rectangle.
         */

        this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousemove event is fired on the rectangle.
         */

        this.mouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on rectangle mouseout.
         */

        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on rectangle mouseover.
         */

        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mouseup event is fired on the rectangle.
         */

        this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the rectangle is right-clicked on.
         */

        this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._rectangleAddedToManager = false;
        this._eventSubscriptions = [];
      }
      /** @internal */


      _createClass(AgmRectangle, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._manager.addRectangle(this);

          this._rectangleAddedToManager = true;

          this._registerEventListeners();
        }
        /** @internal */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this._rectangleAddedToManager) {
            return;
          }

          if (changes['north'] || changes['east'] || changes['south'] || changes['west']) {
            this._manager.setBounds(this);
          }

          if (changes['editable']) {
            this._manager.setEditable(this);
          }

          if (changes['draggable']) {
            this._manager.setDraggable(this);
          }

          if (changes['visible']) {
            this._manager.setVisible(this);
          }

          this._updateRectangleOptionsChanges(changes);
        }
      }, {
        key: "_updateRectangleOptionsChanges",
        value: function _updateRectangleOptionsChanges(changes) {
          var options = {};
          var optionKeys = Object.keys(changes).filter(function (k) {
            return AgmRectangle_1._mapOptions.indexOf(k) !== -1;
          });
          optionKeys.forEach(function (k) {
            options[k] = changes[k].currentValue;
          });

          if (optionKeys.length > 0) {
            this._manager.setOptions(this, options);
          }
        }
      }, {
        key: "_registerEventListeners",
        value: function _registerEventListeners() {
          var _this77 = this;

          var events = new Map();
          events.set('bounds_changed', this.boundsChange);
          events.set('click', this.rectangleClick);
          events.set('dblclick', this.rectangleDblClick);
          events.set('drag', this.drag);
          events.set('dragend', this.dragEnd);
          events.set('dragStart', this.dragStart);
          events.set('mousedown', this.mouseDown);
          events.set('mousemove', this.mouseMove);
          events.set('mouseout', this.mouseOut);
          events.set('mouseover', this.mouseOver);
          events.set('mouseup', this.mouseUp);
          events.set('rightclick', this.rightClick);
          events.forEach(function (eventEmitter, eventName) {
            _this77._eventSubscriptions.push(_this77._manager.createEventObservable(eventName, _this77).subscribe(function (value) {
              switch (eventName) {
                case 'bounds_changed':
                  _this77._manager.getBounds(_this77).then(function (bounds) {
                    return eventEmitter.emit({
                      north: bounds.getNorthEast().lat(),
                      east: bounds.getNorthEast().lng(),
                      south: bounds.getSouthWest().lat(),
                      west: bounds.getSouthWest().lng()
                    });
                  });

                  break;

                default:
                  eventEmitter.emit({
                    coords: {
                      lat: value.latLng.lat(),
                      lng: value.latLng.lng()
                    }
                  });
              }
            }));
          });
        }
        /** @internal */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._eventSubscriptions.forEach(function (s) {
            s.unsubscribe();
          });

          this._eventSubscriptions = null;

          this._manager.removeRectangle(this);
        }
        /**
         * Gets the LatLngBounds of this Rectangle.
         */

      }, {
        key: "getBounds",
        value: function getBounds() {
          return this._manager.getBounds(this);
        }
      }]);

      return AgmRectangle;
    }();

    AgmRectangle.ɵfac = function AgmRectangle_Factory(t) {
      return new (t || AgmRectangle)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](RectangleManager));
    };

    AgmRectangle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmRectangle,
      selectors: [["agm-rectangle"]],
      inputs: {
        clickable: "clickable",
        draggable: ["rectangleDraggable", "draggable"],
        editable: "editable",
        strokePosition: "strokePosition",
        strokeWeight: "strokeWeight",
        visible: "visible",
        north: "north",
        east: "east",
        south: "south",
        west: "west",
        fillColor: "fillColor",
        fillOpacity: "fillOpacity",
        strokeColor: "strokeColor",
        strokeOpacity: "strokeOpacity",
        zIndex: "zIndex"
      },
      outputs: {
        boundsChange: "boundsChange",
        rectangleClick: "rectangleClick",
        rectangleDblClick: "rectangleDblClick",
        drag: "drag",
        dragEnd: "dragEnd",
        dragStart: "dragStart",
        mouseDown: "mouseDown",
        mouseMove: "mouseMove",
        mouseOut: "mouseOut",
        mouseOver: "mouseOver",
        mouseUp: "mouseUp",
        rightClick: "rightClick"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    AgmRectangle._mapOptions = ['fillColor', 'fillOpacity', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'clickable'];

    AgmRectangle.ctorParameters = function () {
      return [{
        type: RectangleManager
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmRectangle.prototype, "north", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmRectangle.prototype, "east", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmRectangle.prototype, "south", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmRectangle.prototype, "west", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmRectangle.prototype, "clickable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('rectangleDraggable'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmRectangle.prototype, "draggable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmRectangle.prototype, "editable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmRectangle.prototype, "fillColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmRectangle.prototype, "fillOpacity", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmRectangle.prototype, "strokeColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmRectangle.prototype, "strokeOpacity", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmRectangle.prototype, "strokePosition", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmRectangle.prototype, "strokeWeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmRectangle.prototype, "visible", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmRectangle.prototype, "zIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "boundsChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "rectangleClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "rectangleDblClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "drag", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "dragEnd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "dragStart", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "mouseDown", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "mouseMove", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "mouseOut", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "mouseOver", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "mouseUp", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "rightClick", void 0);
    AgmRectangle = AgmRectangle_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [RectangleManager])], AgmRectangle);
    var layerId$3 = 0;
    /*
     * This directive adds a transit layer to a google map instance
     * <agm-transit-layer [visible]="true|false"> <agm-transit-layer>
     * */

    var AgmTransitLayer = /*#__PURE__*/function () {
      function AgmTransitLayer(_manager) {
        _classCallCheck(this, AgmTransitLayer);

        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId$3++).toString();
        /**
         * Hide/show transit layer
         */

        this.visible = true;
      }

      _createClass(AgmTransitLayer, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this._addedToManager) {
            return;
          }

          this._manager.addTransitLayer(this, {
            visible: this.visible
          });

          this._addedToManager = true;
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this._addedToManager) {
            return;
          }

          if (changes['visible'] != null) {
            this._manager.toggleLayerVisibility(this, {
              visible: changes['visible'].currentValue
            });
          }
        }
        /** @internal */

      }, {
        key: "id",
        value: function id() {
          return this._id;
        }
        /** @internal */

      }, {
        key: "toString",
        value: function toString() {
          return "AgmTransitLayer-".concat(this._id.toString());
        }
        /** @internal */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._manager.deleteLayer(this);
        }
      }]);

      return AgmTransitLayer;
    }();

    AgmTransitLayer.ɵfac = function AgmTransitLayer_Factory(t) {
      return new (t || AgmTransitLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerManager));
    };

    AgmTransitLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmTransitLayer,
      selectors: [["agm-transit-layer"]],
      inputs: {
        visible: "visible"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });

    AgmTransitLayer.ctorParameters = function () {
      return [{
        type: LayerManager
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmTransitLayer.prototype, "visible", void 0);
    AgmTransitLayer = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [LayerManager])], AgmTransitLayer);
    var google$1;
    var SymbolPath;

    (function (SymbolPath) {
      SymbolPath[SymbolPath["BACKWARD_CLOSED_ARROW"] = 3] = "BACKWARD_CLOSED_ARROW";
      SymbolPath[SymbolPath["BACKWARD_OPEN_ARROW"] = 4] = "BACKWARD_OPEN_ARROW";
      SymbolPath[SymbolPath["CIRCLE"] = 0] = "CIRCLE";
      SymbolPath[SymbolPath["FORWARD_CLOSED_ARROW"] = 1] = "FORWARD_CLOSED_ARROW";
      SymbolPath[SymbolPath["FORWARD_OPEN_ARROW"] = 2] = "FORWARD_OPEN_ARROW";
    })(SymbolPath || (SymbolPath = {}));
    /**
     * Identifiers used to specify the placement of controls on the map. Controls are
     * positioned relative to other controls in the same layout position. Controls that
     * are added first are positioned closer to the edge of the map.
     */


    var ControlPosition;

    (function (ControlPosition) {
      ControlPosition[ControlPosition["RIGHT_BOTTOM"] = 0] = "RIGHT_BOTTOM";
      ControlPosition[ControlPosition["TOP_LEFT"] = 1] = "TOP_LEFT";
      ControlPosition[ControlPosition["TOP_CENTER"] = 2] = "TOP_CENTER";
      ControlPosition[ControlPosition["TOP_RIGHT"] = 3] = "TOP_RIGHT";
      ControlPosition[ControlPosition["LEFT_CENTER"] = 4] = "LEFT_CENTER";
      ControlPosition[ControlPosition["LEFT_TOP"] = 5] = "LEFT_TOP";
      ControlPosition[ControlPosition["LEFT_BOTTOM"] = 6] = "LEFT_BOTTOM";
      ControlPosition[ControlPosition["RIGHT_TOP"] = 7] = "RIGHT_TOP";
      ControlPosition[ControlPosition["RIGHT_CENTER"] = 8] = "RIGHT_CENTER";
      ControlPosition[ControlPosition["BOTTOM_RIGHT"] = 9] = "BOTTOM_RIGHT";
      ControlPosition[ControlPosition["BOTTOM_LEFT"] = 10] = "BOTTOM_LEFT";
      ControlPosition[ControlPosition["BOTTOM_CENTER"] = 11] = "BOTTOM_CENTER";
    })(ControlPosition || (ControlPosition = {}));

    var MapTypeId;

    (function (MapTypeId) {
      /** This map type displays a transparent layer of major streets on satellite images. */
      MapTypeId[MapTypeId["HYBRID"] = 0] = "HYBRID";
      /** This map type displays a normal street map. */

      MapTypeId[MapTypeId["ROADMAP"] = 1] = "ROADMAP";
      /** This map type displays satellite images. */

      MapTypeId[MapTypeId["SATELLITE"] = 2] = "SATELLITE";
      /** This map type displays maps with physical features such as terrain and vegetation. */

      MapTypeId[MapTypeId["TERRAIN"] = 3] = "TERRAIN";
    })(MapTypeId || (MapTypeId = {}));

    var MapTypeControlStyle;

    (function (MapTypeControlStyle) {
      MapTypeControlStyle[MapTypeControlStyle["DEFAULT"] = 0] = "DEFAULT";
      MapTypeControlStyle[MapTypeControlStyle["DROPDOWN_MENU"] = 2] = "DROPDOWN_MENU";
      MapTypeControlStyle[MapTypeControlStyle["HORIZONTAL_BAR"] = 1] = "HORIZONTAL_BAR";
    })(MapTypeControlStyle || (MapTypeControlStyle = {}));

    var ScaleControlStyle;

    (function (ScaleControlStyle) {
      ScaleControlStyle[ScaleControlStyle["DEFAULT"] = 0] = "DEFAULT";
    })(ScaleControlStyle || (ScaleControlStyle = {}));

    var ZoomControlStyle;

    (function (ZoomControlStyle) {
      ZoomControlStyle[ZoomControlStyle["DEFAULT"] = 0] = "DEFAULT";
      ZoomControlStyle[ZoomControlStyle["LARGE"] = 1] = "LARGE";
      ZoomControlStyle[ZoomControlStyle["SMALL"] = 2] = "SMALL";
    })(ZoomControlStyle || (ZoomControlStyle = {}));

    var GeocoderLocationType;

    (function (GeocoderLocationType) {
      GeocoderLocationType["APPROXIMATE"] = "APPROXIMATE";
      GeocoderLocationType["GEOMETRIC_CENTER"] = "GEOMETRIC_CENTER";
      GeocoderLocationType["RANGE_INTERPOLATED"] = "RANGE_INTERPOLATED";
      GeocoderLocationType["ROOFTOP"] = "ROOFTOP";
    })(GeocoderLocationType || (GeocoderLocationType = {}));

    var GeocoderStatus;

    (function (GeocoderStatus) {
      GeocoderStatus["ERROR"] = "ERROR";
      GeocoderStatus["INVALID_REQUEST"] = "INVALID_REQUEST";
      GeocoderStatus["OK"] = "OK";
      GeocoderStatus["OVER_QUERY_LIMIT"] = "OVER_QUERY_LIMIT";
      GeocoderStatus["REQUEST_DENIED"] = "REQUEST_DENIED";
      GeocoderStatus["UNKNOWN_ERROR"] = "UNKNOWN_ERROR";
      GeocoderStatus["ZERO_RESULTS"] = "ZERO_RESULTS";
    })(GeocoderStatus || (GeocoderStatus = {}));

    var AgmGeocoder = /*#__PURE__*/function () {
      function AgmGeocoder(loader) {
        var _this78 = this;

        _classCallCheck(this, AgmGeocoder);

        var connectableGeocoder$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (subscriber) {
          loader.load().then(function () {
            return subscriber.next();
          });
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
          return _this78._createGeocoder();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["multicast"])(new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1)));
        connectableGeocoder$.connect(); // ignore the subscription
        // since we will remain subscribed till application exits

        this.geocoder$ = connectableGeocoder$;
      }

      _createClass(AgmGeocoder, [{
        key: "geocode",
        value: function geocode(request) {
          var _this79 = this;

          return this.geocoder$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (geocoder) {
            return _this79._getGoogleResults(geocoder, request);
          }));
        }
      }, {
        key: "_getGoogleResults",
        value: function _getGoogleResults(geocoder, request) {
          var geocodeObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["bindCallback"])(geocoder.geocode);
          return geocodeObservable(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_ref6) {
            var _ref7 = _slicedToArray(_ref6, 2),
                results = _ref7[0],
                status = _ref7[1];

            if (status === GeocoderStatus.OK) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(results);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(status);
          }));
        }
      }, {
        key: "_createGeocoder",
        value: function _createGeocoder() {
          return new google.maps.Geocoder();
        }
      }]);

      return AgmGeocoder;
    }();

    AgmGeocoder.ɵfac = function AgmGeocoder_Factory(t) {
      return new (t || AgmGeocoder)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MapsAPILoader));
    };

    AgmGeocoder.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AgmGeocoder,
      factory: AgmGeocoder.ɵfac,
      providedIn: 'root'
    });

    AgmGeocoder.ctorParameters = function () {
      return [{
        type: MapsAPILoader
      }];
    };

    AgmGeocoder.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function AgmGeocoder_Factory() {
        return new AgmGeocoder(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(MapsAPILoader));
      },
      token: AgmGeocoder,
      providedIn: "root"
    });
    AgmGeocoder = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [MapsAPILoader])], AgmGeocoder);

    var WindowRef = /*#__PURE__*/function () {
      function WindowRef() {
        _classCallCheck(this, WindowRef);
      }

      _createClass(WindowRef, [{
        key: "getNativeWindow",
        value: function getNativeWindow() {
          return window;
        }
      }]);

      return WindowRef;
    }();

    var DocumentRef = /*#__PURE__*/function () {
      function DocumentRef() {
        _classCallCheck(this, DocumentRef);
      }

      _createClass(DocumentRef, [{
        key: "getNativeDocument",
        value: function getNativeDocument() {
          return document;
        }
      }]);

      return DocumentRef;
    }();

    var BROWSER_GLOBALS_PROVIDERS = [WindowRef, DocumentRef];
    var GoogleMapsScriptProtocol;

    (function (GoogleMapsScriptProtocol) {
      GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTP"] = 1] = "HTTP";
      GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTPS"] = 2] = "HTTPS";
      GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["AUTO"] = 3] = "AUTO";
    })(GoogleMapsScriptProtocol || (GoogleMapsScriptProtocol = {}));
    /**
     * Token for the config of the LazyMapsAPILoader. Please provide an object of type {@link
     * LazyMapsAPILoaderConfig}.
     */


    var LAZY_MAPS_API_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('angular-google-maps LAZY_MAPS_API_CONFIG');

    var LazyMapsAPILoader = /*#__PURE__*/function (_MapsAPILoader) {
      _inherits(LazyMapsAPILoader, _MapsAPILoader);

      var _super = _createSuper(LazyMapsAPILoader);

      function LazyMapsAPILoader() {
        var _this80;

        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var w = arguments.length > 1 ? arguments[1] : undefined;
        var d = arguments.length > 2 ? arguments[2] : undefined;
        var localeId = arguments.length > 3 ? arguments[3] : undefined;

        _classCallCheck(this, LazyMapsAPILoader);

        _this80 = _super.call(this);
        _this80.localeId = localeId;
        _this80._SCRIPT_ID = 'agmGoogleMapsApiScript';
        _this80.callbackName = "agmLazyMapsAPILoader";
        _this80._config = config || {};
        _this80._windowRef = w;
        _this80._documentRef = d;
        return _this80;
      }

      _createClass(LazyMapsAPILoader, [{
        key: "load",
        value: function load() {
          var window = this._windowRef.getNativeWindow();

          if (window.google && window.google.maps) {
            // Google maps already loaded on the page.
            return Promise.resolve();
          }

          if (this._scriptLoadingPromise) {
            return this._scriptLoadingPromise;
          } // this can happen in HMR situations or Stackblitz.io editors.


          var scriptOnPage = this._documentRef.getNativeDocument().getElementById(this._SCRIPT_ID);

          if (scriptOnPage) {
            this._assignScriptLoadingPromise(scriptOnPage);

            return this._scriptLoadingPromise;
          }

          var script = this._documentRef.getNativeDocument().createElement('script');

          script.type = 'text/javascript';
          script.async = true;
          script.defer = true;
          script.id = this._SCRIPT_ID;
          script.src = this._getScriptSrc(this.callbackName);

          this._assignScriptLoadingPromise(script);

          this._documentRef.getNativeDocument().body.appendChild(script);

          return this._scriptLoadingPromise;
        }
      }, {
        key: "_assignScriptLoadingPromise",
        value: function _assignScriptLoadingPromise(scriptElem) {
          var _this81 = this;

          this._scriptLoadingPromise = new Promise(function (resolve, reject) {
            _this81._windowRef.getNativeWindow()[_this81.callbackName] = function () {
              resolve();
            };

            scriptElem.onerror = function (error) {
              reject(error);
            };
          });
        }
      }, {
        key: "_getScriptSrc",
        value: function _getScriptSrc(callbackName) {
          var protocolType = this._config && this._config.protocol || GoogleMapsScriptProtocol.HTTPS;
          var protocol;

          switch (protocolType) {
            case GoogleMapsScriptProtocol.AUTO:
              protocol = '';
              break;

            case GoogleMapsScriptProtocol.HTTP:
              protocol = 'http:';
              break;

            case GoogleMapsScriptProtocol.HTTPS:
              protocol = 'https:';
              break;
          }

          var hostAndPath = this._config.hostAndPath || 'maps.googleapis.com/maps/api/js';
          var queryParams = {
            v: this._config.apiVersion || 'quarterly',
            callback: callbackName,
            key: this._config.apiKey,
            client: this._config.clientId,
            channel: this._config.channel,
            libraries: this._config.libraries,
            region: this._config.region,
            language: this._config.language || this.localeId !== 'en-US' ? this.localeId : null
          };
          var params = Object.keys(queryParams).filter(function (k) {
            return queryParams[k] != null;
          }).filter(function (k) {
            // remove empty arrays
            return !Array.isArray(queryParams[k]) || Array.isArray(queryParams[k]) && queryParams[k].length > 0;
          }).map(function (k) {
            // join arrays as comma seperated strings
            var i = queryParams[k];

            if (Array.isArray(i)) {
              return {
                key: k,
                value: i.join(',')
              };
            }

            return {
              key: k,
              value: queryParams[k]
            };
          }).map(function (entry) {
            return "".concat(entry.key, "=").concat(entry.value);
          }).join('&');
          return "".concat(protocol, "//").concat(hostAndPath, "?").concat(params);
        }
      }]);

      return LazyMapsAPILoader;
    }(MapsAPILoader);

    LazyMapsAPILoader.ɵfac = function LazyMapsAPILoader_Factory(t) {
      return new (t || LazyMapsAPILoader)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](LAZY_MAPS_API_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](WindowRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DocumentRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]));
    };

    LazyMapsAPILoader.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: LazyMapsAPILoader,
      factory: LazyMapsAPILoader.ɵfac
    });

    LazyMapsAPILoader.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [LAZY_MAPS_API_CONFIG]
        }]
      }, {
        type: WindowRef
      }, {
        type: DocumentRef
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
        }]
      }];
    };

    LazyMapsAPILoader = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(LAZY_MAPS_API_CONFIG)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, WindowRef, DocumentRef, String])], LazyMapsAPILoader);
    /**
     * When using the NoOpMapsAPILoader, the Google Maps API must be added to the page via a `<script>`
     * Tag.
     * It's important that the Google Maps API script gets loaded first on the page.
     */

    var NoOpMapsAPILoader = /*#__PURE__*/function () {
      function NoOpMapsAPILoader() {
        _classCallCheck(this, NoOpMapsAPILoader);
      }

      _createClass(NoOpMapsAPILoader, [{
        key: "load",
        value: function load() {
          if (!window.google || !window.google.maps) {
            throw new Error('Google Maps API not loaded on page. Make sure window.google.maps is available!');
          }

          return Promise.resolve();
        }
      }]);

      return NoOpMapsAPILoader;
    }(); // exported map types


    var AgmCoreModule_1;
    /**
     * @internal
     */

    function coreDirectives() {
      return [AgmBicyclingLayer, AgmCircle, AgmDataLayer, AgmFitBounds, AgmInfoWindow, AgmKmlLayer, AgmMap, AgmMarker, AgmPolygon, AgmPolyline, AgmPolylineIcon, AgmPolylinePoint, AgmRectangle, AgmTransitLayer];
    }
    /**
     * The angular-google-maps core module. Contains all Directives/Services/Pipes
     * of the core module. Please use `AgmCoreModule.forRoot()` in your app module.
     */


    var AgmCoreModule = AgmCoreModule_1 = /*#__PURE__*/function () {
      function AgmCoreModule() {
        _classCallCheck(this, AgmCoreModule);
      }

      _createClass(AgmCoreModule, null, [{
        key: "forRoot",

        /**
         * Please use this method when you register the module at the root level.
         */
        value: function forRoot(lazyMapsAPILoaderConfig) {
          return {
            ngModule: AgmCoreModule_1,
            providers: [].concat(BROWSER_GLOBALS_PROVIDERS, [{
              provide: MapsAPILoader,
              useClass: LazyMapsAPILoader
            }, {
              provide: LAZY_MAPS_API_CONFIG,
              useValue: lazyMapsAPILoaderConfig
            }])
          };
        }
      }]);

      return AgmCoreModule;
    }();

    AgmCoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AgmCoreModule
    });
    AgmCoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AgmCoreModule_Factory(t) {
        return new (t || AgmCoreModule)();
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MapsAPILoader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GoogleMapsAPIWrapper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: MapsAPILoader
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LayerManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: GoogleMapsAPIWrapper
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmBicyclingLayer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-bicycling-layer'
        }]
      }], function () {
        return [{
          type: LayerManager
        }];
      }, {
        visible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CircleManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmCircle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-circle'
        }]
      }], function () {
        return [{
          type: CircleManager
        }];
      }, {
        clickable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        draggable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['circleDraggable']
        }],
        editable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        radius: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokePosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeWeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        visible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        centerChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        circleClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        circleDblClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        drag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dragEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dragStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseMove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseOut: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        radiusChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        rightClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        latitude: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        longitude: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fillColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fillOpacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeOpacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataLayerManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmDataLayer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-data-layer'
        }]
      }], function () {
        return [{
          type: DataLayerManager
        }];
      }, {
        layerClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        geoJson: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FitBoundsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: MapsAPILoader
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmFitBounds, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[agmFitBounds]'
        }]
      }], function () {
        return [{
          type: FitBoundsAccessor,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
          }]
        }, {
          type: FitBoundsService
        }];
      }, {
        agmFitBounds: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MarkerManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InfoWindowManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: MarkerManager
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmInfoWindow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'agm-info-window',
          template: "<div class='agm-info-window-content'>\n      <ng-content></ng-content>\n    </div>\n  "
        }]
      }], function () {
        return [{
          type: InfoWindowManager
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      }, {
        isOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        infoWindowClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        latitude: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        longitude: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disableAutoPan: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        maxWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](KmlLayerManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmKmlLayer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-kml-layer'
        }]
      }], function () {
        return [{
          type: KmlLayerManager
        }];
      }, {
        clickable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        preserveViewport: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        screenOverlays: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        suppressInfoWindows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        url: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        layerClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        defaultViewportChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        statusChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PolygonManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PolylineManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RectangleManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmMap, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'agm-map',
          providers: [CircleManager, DataLayerManager, DataLayerManager, FitBoundsService, GoogleMapsAPIWrapper, InfoWindowManager, KmlLayerManager, LayerManager, MarkerManager, PolygonManager, PolylineManager, RectangleManager],
          host: {
            // todo: deprecated - we will remove it with the next version
            '[class.sebm-google-map-container]': 'true'
          },
          template: "\n              <div class='agm-map-container-inner sebm-google-map-container-inner'></div>\n              <div class='agm-map-content'>\n                <ng-content></ng-content>\n              </div>\n  ",
          styles: ["\n    .agm-map-container-inner {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content {\n      display:none;\n    }\n  "]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: GoogleMapsAPIWrapper
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
          }]
        }, {
          type: FitBoundsService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, {
        longitude: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        latitude: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        draggable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['mapDraggable']
        }],
        disableDoubleClickZoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disableDefaultUI: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        scrollwheel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        keyboardShortcuts: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        styles: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        usePanning: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fitBounds: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        scaleControl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        mapTypeControl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        panControl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        rotateControl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fullscreenControl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        mapTypeId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        clickableIcons: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        showDefaultInfoWindow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        gestureHandling: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tilt: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        mapClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mapRightClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mapDblClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        centerChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        boundsChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mapTypeIdChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        idle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        zoomChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mapReady: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        tilesLoaded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        minZoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        maxZoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        controlSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        backgroundColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        draggableCursor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        draggingCursor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zoomControl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zoomControlOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        streetViewControl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        streetViewControlOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fitBoundsPadding: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        scaleControlOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        mapTypeControlOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        panControlOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        rotateControlOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fullscreenControlOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        restriction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmMarker, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-marker',
          providers: [{
            provide: FitBoundsAccessor,
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
              return AgmMarker_1;
            })
          }],
          inputs: ['latitude', 'longitude', 'title', 'label', 'draggable: markerDraggable', 'iconUrl', 'openInfoWindow', 'opacity', 'visible', 'zIndex', 'animation'],
          outputs: ['markerClick', 'dragStart', 'drag', 'dragEnd', 'mouseOver', 'mouseOut']
        }]
      }], function () {
        return [{
          type: MarkerManager
        }];
      }, {
        draggable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['markerDraggable']
        }],
        visible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        openInfoWindow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        opacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        clickable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['markerClickable']
        }],
        animationChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        markerClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        markerDblClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        markerRightClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dragStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        drag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dragEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseOut: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        infoWindow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [AgmInfoWindow]
        }],
        latitude: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        longitude: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        iconUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        animation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmPolygon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-polygon'
        }]
      }], function () {
        return [{
          type: PolygonManager
        }];
      }, {
        clickable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        draggable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['polyDraggable']
        }],
        editable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        geodesic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        paths: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        polyClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyDblClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyDrag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyDragEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyDragStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyMouseDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyMouseMove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyMouseOut: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyMouseOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyMouseUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyRightClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyPathsChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        fillColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fillOpacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeOpacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeWeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        visible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmPolylineIcon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-polyline agm-icon-sequence'
        }]
      }], null, {
        fixedRotation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        offset: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        repeat: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        anchorX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        anchorY: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fillColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fillOpacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        path: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        rotation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        scale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeOpacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeWeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmPolylinePoint, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-polyline-point',
          providers: [{
            provide: FitBoundsAccessor,
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
              return AgmPolylinePoint_1;
            })
          }]
        }]
      }], function () {
        return [];
      }, {
        positionChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        latitude: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        longitude: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmPolyline, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-polyline'
        }]
      }], function () {
        return [{
          type: PolylineManager
        }];
      }, {
        clickable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        draggable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['polylineDraggable']
        }],
        editable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        geodesic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        visible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        lineClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        lineDblClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        lineDrag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        lineDragEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        lineDragStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        lineMouseDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        lineMouseMove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        lineMouseOut: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        lineMouseOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        lineMouseUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        lineRightClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyPathChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        strokeColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeOpacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeWeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        points: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [AgmPolylinePoint]
        }],
        iconSequences: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [AgmPolylineIcon]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmRectangle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-rectangle'
        }]
      }], function () {
        return [{
          type: RectangleManager
        }];
      }, {
        clickable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        draggable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['rectangleDraggable']
        }],
        editable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokePosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeWeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        visible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        boundsChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        rectangleClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        rectangleDblClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        drag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dragEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dragStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseMove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseOut: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        rightClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        north: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        east: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        south: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        west: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fillColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fillOpacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeOpacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmTransitLayer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-transit-layer'
        }]
      }], function () {
        return [{
          type: LayerManager
        }];
      }, {
        visible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmGeocoder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: MapsAPILoader
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LazyMapsAPILoader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [LAZY_MAPS_API_CONFIG]
          }]
        }, {
          type: WindowRef
        }, {
          type: DocumentRef
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
          }]
        }];
      }, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AgmCoreModule, {
        declarations: [AgmBicyclingLayer, AgmCircle, AgmDataLayer, AgmFitBounds, AgmInfoWindow, AgmKmlLayer, AgmMap, AgmMarker, AgmPolygon, AgmPolyline, AgmPolylineIcon, AgmPolylinePoint, AgmRectangle, AgmTransitLayer],
        exports: [AgmBicyclingLayer, AgmCircle, AgmDataLayer, AgmFitBounds, AgmInfoWindow, AgmKmlLayer, AgmMap, AgmMarker, AgmPolygon, AgmPolyline, AgmPolylineIcon, AgmPolylinePoint, AgmRectangle, AgmTransitLayer]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmCoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: coreDirectives(),
          exports: coreDirectives()
        }]
      }], null, null);
    })(); // main modules

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=agm-core.js.map

    /***/

  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @shared/app-component-base */
    "./src/shared/app-component-base.ts");
    /* harmony import */


    var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @shared/animations/routerTransition */
    "./src/shared/animations/routerTransition.ts");
    /* harmony import */


    var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @shared/pipes/localize.pipe */
    "./src/shared/pipes/localize.pipe.ts");

    var AboutComponent = /*#__PURE__*/function (_shared_app_component) {
      _inherits(AboutComponent, _shared_app_component);

      var _super2 = _createSuper(AboutComponent);

      function AboutComponent(injector) {
        _classCallCheck(this, AboutComponent);

        return _super2.call(this, injector);
      }

      return AboutComponent;
    }(_shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]);

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]));
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 8,
      vars: 4,
      consts: [[1, "content-header"], [1, "container-fluid"], [1, "row"], [1, "col-12"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routerTransition", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 2, "About"));
        }
      },
      pipes: [_shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_3__["LocalizePipe"]],
      encapsulation: 2,
      data: {
        animation: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_2__["appModuleAnimation"])()]
      },
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './about.component.html',
          animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_2__["appModuleAnimation"])()],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _shared_auth_auth_route_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @shared/auth/auth-route-guard */
    "./src/shared/auth/auth-route-guard.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _users_users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./users/users.component */
    "./src/app/users/users.component.ts");
    /* harmony import */


    var _tenants_tenants_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./tenants/tenants.component */
    "./src/app/tenants/tenants.component.ts");
    /* harmony import */


    var app_roles_roles_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! app/roles/roles.component */
    "./src/app/roles/roles.component.ts");
    /* harmony import */


    var _users_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./users/change-password/change-password.component */
    "./src/app/users/change-password/change-password.component.ts");
    /* harmony import */


    var _requests_requests_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./requests/requests.component */
    "./src/app/requests/requests.component.ts");
    /* harmony import */


    var _installations_installations_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./installations/installations.component */
    "./src/app/installations/installations.component.ts");

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
        path: '',
        component: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        children: [{
          path: 'home',
          component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
          canActivate: [_shared_auth_auth_route_guard__WEBPACK_IMPORTED_MODULE_3__["AppRouteGuard"]]
        }, {
          path: 'users',
          component: _users_users_component__WEBPACK_IMPORTED_MODULE_6__["UsersComponent"],
          data: {
            permission: 'Pages.Users'
          },
          canActivate: [_shared_auth_auth_route_guard__WEBPACK_IMPORTED_MODULE_3__["AppRouteGuard"]]
        }, {
          path: 'roles',
          component: app_roles_roles_component__WEBPACK_IMPORTED_MODULE_8__["RolesComponent"],
          data: {
            permission: 'Pages.Roles'
          },
          canActivate: [_shared_auth_auth_route_guard__WEBPACK_IMPORTED_MODULE_3__["AppRouteGuard"]]
        }, {
          path: 'requests/:status',
          component: _requests_requests_component__WEBPACK_IMPORTED_MODULE_10__["RequestsComponent"],
          data: {
            permission: 'Pages.Requests'
          },
          canActivate: [_shared_auth_auth_route_guard__WEBPACK_IMPORTED_MODULE_3__["AppRouteGuard"]]
        }, {
          path: 'installations',
          component: _installations_installations_component__WEBPACK_IMPORTED_MODULE_11__["InstallationsComponent"],
          data: {
            permission: 'Pages.Installations'
          },
          canActivate: [_shared_auth_auth_route_guard__WEBPACK_IMPORTED_MODULE_3__["AppRouteGuard"]]
        }, {
          path: 'tenants',
          component: _tenants_tenants_component__WEBPACK_IMPORTED_MODULE_7__["TenantsComponent"],
          data: {
            permission: 'Pages.Tenants'
          },
          canActivate: [_shared_auth_auth_route_guard__WEBPACK_IMPORTED_MODULE_3__["AppRouteGuard"]]
        }, {
          path: 'about',
          component: _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"]
        }, {
          path: 'update-password',
          component: _users_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_9__["ChangePasswordComponent"]
        }]
      }])], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
            path: '',
            component: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
            children: [{
              path: 'home',
              component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
              canActivate: [_shared_auth_auth_route_guard__WEBPACK_IMPORTED_MODULE_3__["AppRouteGuard"]]
            }, {
              path: 'users',
              component: _users_users_component__WEBPACK_IMPORTED_MODULE_6__["UsersComponent"],
              data: {
                permission: 'Pages.Users'
              },
              canActivate: [_shared_auth_auth_route_guard__WEBPACK_IMPORTED_MODULE_3__["AppRouteGuard"]]
            }, {
              path: 'roles',
              component: app_roles_roles_component__WEBPACK_IMPORTED_MODULE_8__["RolesComponent"],
              data: {
                permission: 'Pages.Roles'
              },
              canActivate: [_shared_auth_auth_route_guard__WEBPACK_IMPORTED_MODULE_3__["AppRouteGuard"]]
            }, {
              path: 'requests/:status',
              component: _requests_requests_component__WEBPACK_IMPORTED_MODULE_10__["RequestsComponent"],
              data: {
                permission: 'Pages.Requests'
              },
              canActivate: [_shared_auth_auth_route_guard__WEBPACK_IMPORTED_MODULE_3__["AppRouteGuard"]]
            }, {
              path: 'installations',
              component: _installations_installations_component__WEBPACK_IMPORTED_MODULE_11__["InstallationsComponent"],
              data: {
                permission: 'Pages.Installations'
              },
              canActivate: [_shared_auth_auth_route_guard__WEBPACK_IMPORTED_MODULE_3__["AppRouteGuard"]]
            }, {
              path: 'tenants',
              component: _tenants_tenants_component__WEBPACK_IMPORTED_MODULE_7__["TenantsComponent"],
              data: {
                permission: 'Pages.Tenants'
              },
              canActivate: [_shared_auth_auth_route_guard__WEBPACK_IMPORTED_MODULE_3__["AppRouteGuard"]]
            }, {
              path: 'about',
              component: _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"]
            }, {
              path: 'update-password',
              component: _users_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_9__["ChangePasswordComponent"]
            }]
          }])],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @shared/app-component-base */
    "./src/shared/app-component-base.ts");
    /* harmony import */


    var _shared_helpers_SignalRAspNetCoreHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @shared/helpers/SignalRAspNetCoreHelper */
    "./src/shared/helpers/SignalRAspNetCoreHelper.ts");
    /* harmony import */


    var _shared_layout_layout_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @shared/layout/layout-store.service */
    "./src/shared/layout/layout-store.service.ts");
    /* harmony import */


    var _layout_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./layout/header.component */
    "./src/app/layout/header.component.ts");
    /* harmony import */


    var _layout_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./layout/sidebar.component */
    "./src/app/layout/sidebar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _layout_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./layout/footer.component */
    "./src/app/layout/footer.component.ts");

    var AppComponent = /*#__PURE__*/function (_shared_app_component2) {
      _inherits(AppComponent, _shared_app_component2);

      var _super3 = _createSuper(AppComponent);

      function AppComponent(injector, renderer, _layoutStore) {
        var _this82;

        _classCallCheck(this, AppComponent);

        _this82 = _super3.call(this, injector);
        _this82.renderer = renderer;
        _this82._layoutStore = _layoutStore;
        return _this82;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this83 = this;

          this.renderer.addClass(document.body, 'sidebar-mini');

          _shared_helpers_SignalRAspNetCoreHelper__WEBPACK_IMPORTED_MODULE_2__["SignalRAspNetCoreHelper"].initSignalR();

          abp.event.on('abp.notifications.received', function (userNotification) {
            abp.notifications.showUiNotifyForUserNotification(userNotification); // Desktop notification

            Push.create('AbpZeroTemplate', {
              body: userNotification.notification.data.message,
              icon: abp.appPath + 'assets/app-logo-small.png',
              timeout: 6000,
              onClick: function onClick() {
                window.focus();
                this.close();
              }
            });
          });

          this._layoutStore.sidebarExpanded.subscribe(function (value) {
            _this83.sidebarExpanded = value;
          });
        }
      }, {
        key: "toggleSidebar",
        value: function toggleSidebar() {
          this._layoutStore.setSidebarExpanded(!this.sidebarExpanded);
        }
      }]);

      return AppComponent;
    }(_shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]);

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_layout_layout_store_service__WEBPACK_IMPORTED_MODULE_3__["LayoutStoreService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 7,
      vars: 0,
      consts: [[1, "wrapper"], [1, "content-wrapper"], ["id", "sidebar-overlay", 3, "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_6_listener() {
            return ctx.toggleSidebar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_layout_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _layout_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _layout_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './app.component.html'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _shared_layout_layout_store_service__WEBPACK_IMPORTED_MODULE_3__["LayoutStoreService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-bootstrap/dropdown */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
    /* harmony import */


    var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-bootstrap/collapse */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/collapse/fesm2015/ngx-bootstrap-collapse.js");
    /* harmony import */


    var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-bootstrap/tabs */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _shared_service_proxies_service_proxy_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @shared/service-proxies/service-proxy.module */
    "./src/shared/service-proxies/service-proxy.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @shared/shared.module */
    "./src/shared/shared.module.ts");
    /* harmony import */


    var _app_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @app/home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _app_about_about_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @app/about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _app_tenants_tenants_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @app/tenants/tenants.component */
    "./src/app/tenants/tenants.component.ts");
    /* harmony import */


    var _tenants_create_tenant_create_tenant_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./tenants/create-tenant/create-tenant-dialog.component */
    "./src/app/tenants/create-tenant/create-tenant-dialog.component.ts");
    /* harmony import */


    var _tenants_edit_tenant_edit_tenant_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./tenants/edit-tenant/edit-tenant-dialog.component */
    "./src/app/tenants/edit-tenant/edit-tenant-dialog.component.ts");
    /* harmony import */


    var _app_roles_roles_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @app/roles/roles.component */
    "./src/app/roles/roles.component.ts");
    /* harmony import */


    var _roles_create_role_create_role_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./roles/create-role/create-role-dialog.component */
    "./src/app/roles/create-role/create-role-dialog.component.ts");
    /* harmony import */


    var _roles_edit_role_edit_role_dialog_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./roles/edit-role/edit-role-dialog.component */
    "./src/app/roles/edit-role/edit-role-dialog.component.ts");
    /* harmony import */


    var _app_users_users_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @app/users/users.component */
    "./src/app/users/users.component.ts");
    /* harmony import */


    var _app_users_create_user_create_user_dialog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @app/users/create-user/create-user-dialog.component */
    "./src/app/users/create-user/create-user-dialog.component.ts");
    /* harmony import */


    var _app_users_edit_user_edit_user_dialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @app/users/edit-user/edit-user-dialog.component */
    "./src/app/users/edit-user/edit-user-dialog.component.ts");
    /* harmony import */


    var _users_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./users/change-password/change-password.component */
    "./src/app/users/change-password/change-password.component.ts");
    /* harmony import */


    var _users_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./users/reset-password/reset-password.component */
    "./src/app/users/reset-password/reset-password.component.ts");
    /* harmony import */


    var _layout_header_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./layout/header.component */
    "./src/app/layout/header.component.ts");
    /* harmony import */


    var _layout_header_left_navbar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./layout/header-left-navbar.component */
    "./src/app/layout/header-left-navbar.component.ts");
    /* harmony import */


    var _layout_header_language_menu_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./layout/header-language-menu.component */
    "./src/app/layout/header-language-menu.component.ts");
    /* harmony import */


    var _layout_header_user_menu_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./layout/header-user-menu.component */
    "./src/app/layout/header-user-menu.component.ts");
    /* harmony import */


    var _layout_footer_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./layout/footer.component */
    "./src/app/layout/footer.component.ts");
    /* harmony import */


    var _layout_sidebar_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./layout/sidebar.component */
    "./src/app/layout/sidebar.component.ts");
    /* harmony import */


    var _layout_sidebar_logo_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./layout/sidebar-logo.component */
    "./src/app/layout/sidebar-logo.component.ts");
    /* harmony import */


    var _layout_sidebar_user_panel_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./layout/sidebar-user-panel.component */
    "./src/app/layout/sidebar-user-panel.component.ts");
    /* harmony import */


    var _layout_sidebar_menu_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./layout/sidebar-menu.component */
    "./src/app/layout/sidebar-menu.component.ts");
    /* harmony import */


    var _requests_requests_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./requests/requests.component */
    "./src/app/requests/requests.component.ts");
    /* harmony import */


    var _requests_create_request_create_request_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./requests/create-request/create-request.component */
    "./src/app/requests/create-request/create-request.component.ts");
    /* harmony import */


    var _requests_edit_request_edit_request_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./requests/edit-request/edit-request.component */
    "./src/app/requests/edit-request/edit-request.component.ts");
    /* harmony import */


    var _requests_request_details_request_details_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./requests/request-details/request-details.component */
    "./src/app/requests/request-details/request-details.component.ts");
    /* harmony import */


    var _map_map_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./map/map.component */
    "./src/app/map/map.component.ts");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
    /* harmony import */


    var _installations_installations_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./installations/installations.component */
    "./src/app/installations/installations.component.ts");
    /* harmony import */


    var _installations_create_installation_create_installation_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./installations/create-installation/create-installation.component */
    "./src/app/installations/create-installation/create-installation.component.ts");
    /* harmony import */


    var _installations_edit_installation_edit_installation_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./installations/edit-installation/edit-installation.component */
    "./src/app/installations/edit-installation/edit-installation.component.ts");
    /* harmony import */


    var _installations_view_in_map_view_in_map_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./installations/view-in-map/view-in-map.component */
    "./src/app/installations/view-in-map/view-in-map.component.ts"); // tenants
    // roles
    // users
    // layout


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_agm_core__WEBPACK_IMPORTED_MODULE_40__["AgmCoreModule"].forRoot({
        apiKey: 'AIzaSyB4MVTiaMpVu-Sedv-8XL491Y-3eqWo2GI'
      }), _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientJsonpModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forChild(), ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__["CollapseModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__["TabsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _shared_service_proxies_service_proxy_module__WEBPACK_IMPORTED_MODULE_11__["ServiceProxyModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _app_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"], _app_about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"], // tenants
        _app_tenants_tenants_component__WEBPACK_IMPORTED_MODULE_15__["TenantsComponent"], _tenants_create_tenant_create_tenant_dialog_component__WEBPACK_IMPORTED_MODULE_16__["CreateTenantDialogComponent"], _tenants_edit_tenant_edit_tenant_dialog_component__WEBPACK_IMPORTED_MODULE_17__["EditTenantDialogComponent"], // roles
        _app_roles_roles_component__WEBPACK_IMPORTED_MODULE_18__["RolesComponent"], _roles_create_role_create_role_dialog_component__WEBPACK_IMPORTED_MODULE_19__["CreateRoleDialogComponent"], _roles_edit_role_edit_role_dialog_component__WEBPACK_IMPORTED_MODULE_20__["EditRoleDialogComponent"], // users
        _app_users_users_component__WEBPACK_IMPORTED_MODULE_21__["UsersComponent"], _app_users_create_user_create_user_dialog_component__WEBPACK_IMPORTED_MODULE_22__["CreateUserDialogComponent"], _app_users_edit_user_edit_user_dialog_component__WEBPACK_IMPORTED_MODULE_23__["EditUserDialogComponent"], _users_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_24__["ChangePasswordComponent"], _users_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_25__["ResetPasswordDialogComponent"], // layout
        _layout_header_component__WEBPACK_IMPORTED_MODULE_26__["HeaderComponent"], _layout_header_left_navbar_component__WEBPACK_IMPORTED_MODULE_27__["HeaderLeftNavbarComponent"], _layout_header_language_menu_component__WEBPACK_IMPORTED_MODULE_28__["HeaderLanguageMenuComponent"], _layout_header_user_menu_component__WEBPACK_IMPORTED_MODULE_29__["HeaderUserMenuComponent"], _layout_footer_component__WEBPACK_IMPORTED_MODULE_30__["FooterComponent"], _layout_sidebar_component__WEBPACK_IMPORTED_MODULE_31__["SidebarComponent"], _layout_sidebar_logo_component__WEBPACK_IMPORTED_MODULE_32__["SidebarLogoComponent"], _layout_sidebar_user_panel_component__WEBPACK_IMPORTED_MODULE_33__["SidebarUserPanelComponent"], _layout_sidebar_menu_component__WEBPACK_IMPORTED_MODULE_34__["SidebarMenuComponent"], _requests_requests_component__WEBPACK_IMPORTED_MODULE_35__["RequestsComponent"], _requests_create_request_create_request_component__WEBPACK_IMPORTED_MODULE_36__["CreateRequestComponent"], _requests_edit_request_edit_request_component__WEBPACK_IMPORTED_MODULE_37__["EditRequestComponent"], _requests_request_details_request_details_component__WEBPACK_IMPORTED_MODULE_38__["RequestDetailsComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_39__["MapComponent"], _installations_installations_component__WEBPACK_IMPORTED_MODULE_41__["InstallationsComponent"], _installations_create_installation_create_installation_component__WEBPACK_IMPORTED_MODULE_42__["CreateInstallationComponent"], _installations_edit_installation_edit_installation_component__WEBPACK_IMPORTED_MODULE_43__["EditInstallationComponent"], _installations_view_in_map_view_in_map_component__WEBPACK_IMPORTED_MODULE_44__["ViewInMapComponent"]],
        imports: [_agm_core__WEBPACK_IMPORTED_MODULE_40__["AgmCoreModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientJsonpModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__["CollapseModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__["TabsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _shared_service_proxies_service_proxy_module__WEBPACK_IMPORTED_MODULE_11__["ServiceProxyModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _app_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"], _app_about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"], // tenants
          _app_tenants_tenants_component__WEBPACK_IMPORTED_MODULE_15__["TenantsComponent"], _tenants_create_tenant_create_tenant_dialog_component__WEBPACK_IMPORTED_MODULE_16__["CreateTenantDialogComponent"], _tenants_edit_tenant_edit_tenant_dialog_component__WEBPACK_IMPORTED_MODULE_17__["EditTenantDialogComponent"], // roles
          _app_roles_roles_component__WEBPACK_IMPORTED_MODULE_18__["RolesComponent"], _roles_create_role_create_role_dialog_component__WEBPACK_IMPORTED_MODULE_19__["CreateRoleDialogComponent"], _roles_edit_role_edit_role_dialog_component__WEBPACK_IMPORTED_MODULE_20__["EditRoleDialogComponent"], // users
          _app_users_users_component__WEBPACK_IMPORTED_MODULE_21__["UsersComponent"], _app_users_create_user_create_user_dialog_component__WEBPACK_IMPORTED_MODULE_22__["CreateUserDialogComponent"], _app_users_edit_user_edit_user_dialog_component__WEBPACK_IMPORTED_MODULE_23__["EditUserDialogComponent"], _users_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_24__["ChangePasswordComponent"], _users_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_25__["ResetPasswordDialogComponent"], // layout
          _layout_header_component__WEBPACK_IMPORTED_MODULE_26__["HeaderComponent"], _layout_header_left_navbar_component__WEBPACK_IMPORTED_MODULE_27__["HeaderLeftNavbarComponent"], _layout_header_language_menu_component__WEBPACK_IMPORTED_MODULE_28__["HeaderLanguageMenuComponent"], _layout_header_user_menu_component__WEBPACK_IMPORTED_MODULE_29__["HeaderUserMenuComponent"], _layout_footer_component__WEBPACK_IMPORTED_MODULE_30__["FooterComponent"], _layout_sidebar_component__WEBPACK_IMPORTED_MODULE_31__["SidebarComponent"], _layout_sidebar_logo_component__WEBPACK_IMPORTED_MODULE_32__["SidebarLogoComponent"], _layout_sidebar_user_panel_component__WEBPACK_IMPORTED_MODULE_33__["SidebarUserPanelComponent"], _layout_sidebar_menu_component__WEBPACK_IMPORTED_MODULE_34__["SidebarMenuComponent"], _requests_requests_component__WEBPACK_IMPORTED_MODULE_35__["RequestsComponent"], _requests_create_request_create_request_component__WEBPACK_IMPORTED_MODULE_36__["CreateRequestComponent"], _requests_edit_request_edit_request_component__WEBPACK_IMPORTED_MODULE_37__["EditRequestComponent"], _requests_request_details_request_details_component__WEBPACK_IMPORTED_MODULE_38__["RequestDetailsComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_39__["MapComponent"], _installations_installations_component__WEBPACK_IMPORTED_MODULE_41__["InstallationsComponent"], _installations_create_installation_create_installation_component__WEBPACK_IMPORTED_MODULE_42__["CreateInstallationComponent"], _installations_edit_installation_edit_installation_component__WEBPACK_IMPORTED_MODULE_43__["EditInstallationComponent"], _installations_view_in_map_view_in_map_component__WEBPACK_IMPORTED_MODULE_44__["ViewInMapComponent"]],
          imports: [_agm_core__WEBPACK_IMPORTED_MODULE_40__["AgmCoreModule"].forRoot({
            apiKey: 'AIzaSyB4MVTiaMpVu-Sedv-8XL491Y-3eqWo2GI'
          }), _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientJsonpModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forChild(), ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__["CollapseModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__["TabsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _shared_service_proxies_service_proxy_module__WEBPACK_IMPORTED_MODULE_11__["ServiceProxyModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"]],
          providers: [],
          entryComponents: [// tenants
          _tenants_create_tenant_create_tenant_dialog_component__WEBPACK_IMPORTED_MODULE_16__["CreateTenantDialogComponent"], _tenants_edit_tenant_edit_tenant_dialog_component__WEBPACK_IMPORTED_MODULE_17__["EditTenantDialogComponent"], // roles
          _roles_create_role_create_role_dialog_component__WEBPACK_IMPORTED_MODULE_19__["CreateRoleDialogComponent"], _roles_edit_role_edit_role_dialog_component__WEBPACK_IMPORTED_MODULE_20__["EditRoleDialogComponent"], // users
          _app_users_create_user_create_user_dialog_component__WEBPACK_IMPORTED_MODULE_22__["CreateUserDialogComponent"], _app_users_edit_user_edit_user_dialog_component__WEBPACK_IMPORTED_MODULE_23__["EditUserDialogComponent"], _users_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_25__["ResetPasswordDialogComponent"], _requests_create_request_create_request_component__WEBPACK_IMPORTED_MODULE_36__["CreateRequestComponent"], _requests_edit_request_edit_request_component__WEBPACK_IMPORTED_MODULE_37__["EditRequestComponent"], _requests_request_details_request_details_component__WEBPACK_IMPORTED_MODULE_38__["RequestDetailsComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_39__["MapComponent"], _installations_create_installation_create_installation_component__WEBPACK_IMPORTED_MODULE_42__["CreateInstallationComponent"], _installations_edit_installation_edit_installation_component__WEBPACK_IMPORTED_MODULE_43__["EditInstallationComponent"], _installations_view_in_map_view_in_map_component__WEBPACK_IMPORTED_MODULE_44__["ViewInMapComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @shared/app-component-base */
    "./src/shared/app-component-base.ts");
    /* harmony import */


    var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @shared/animations/routerTransition */
    "./src/shared/animations/routerTransition.ts");
    /* harmony import */


    var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @shared/service-proxies/service-proxies */
    "./src/shared/service-proxies/service-proxies.ts");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @shared/pipes/localize.pipe */
    "./src/shared/pipes/localize.pipe.ts");

    function HomeComponent_agm_circle_103_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "agm-circle", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseOut", function HomeComponent_agm_circle_103_Template_agm_circle_mouseOut_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.infoWindow.close();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var city_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", city_r1.city.lat)("longitude", city_r1.city.lng)("radius", city_r1.requestsCount)("fillColor", "red");
      }
    }

    var HomeComponent = /*#__PURE__*/function (_shared_app_component3) {
      _inherits(HomeComponent, _shared_app_component3);

      var _super4 = _createSuper(HomeComponent);

      function HomeComponent(injector, _homeService) {
        var _this84;

        _classCallCheck(this, HomeComponent);

        _this84 = _super4.call(this, injector);
        _this84._homeService = _homeService;
        _this84.homeDto = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["HomeDto"]();
        _this84.lat = 30.0497935;
        _this84.lng = 60.3349021;
        _this84.loaded = false;
        return _this84;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this85 = this;

          this._homeService.getHomeMetaData().subscribe(function (result) {
            _this85.homeDto = result;

            _this85.homeDto.insightHome.forEach(function (x) {
              x.requestsCount *= 8000;
            });

            _this85.loaded = true;
          });
        }
      }]);

      return HomeComponent;
    }(_shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]);

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["HomeServiceProxy"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 104,
      vars: 49,
      consts: [[1, "content", "px-2"], [1, "container-fluid"], [1, "row"], [1, "col-lg-3", "col-6"], [1, "small-box", "bg-success"], [1, "inner"], [1, "icon"], [1, "fas", "fa-check"], ["href", "https://github.com/aspnetboilerplate/aspnetboilerplate/stargazers", 1, "small-box-footer"], [1, "fas", "fa-arrow-circle-right"], [1, "small-box", "bg-info"], [1, "fas", "fa-pause-circle"], ["href", "https://github.com/aspnetboilerplate/aspnetboilerplate/graphs/contributors", "target", "_blank", 1, "small-box-footer"], [1, "small-box", "bg-warning"], [1, "fas", "fa-times"], ["href", "https://github.com/aspnetboilerplate/aspnetboilerplate/network/dependents", "target", "_blank", 1, "small-box-footer"], [1, "small-box", "bg-primary"], [1, "fas", "fa-cogs"], ["href", "https://github.com/aspnetboilerplate/aspnetboilerplate/network/members", "target", "_blank", 1, "small-box-footer"], [1, "col-12", "col-sm-6", "col-md-3"], [1, "info-box"], [1, "info-box-icon", "bg-primary", "elevation-1"], [1, "fas", "fa-video"], [1, "info-box-content"], [1, "info-box-text"], [1, "info-box-number"], [1, "info-box", "mb-3"], [1, "info-box-icon", "bg-success", "elevation-1"], [1, "fas", "fa-eye"], [1, "clearfix", "hidden-md-up"], [1, "info-box-icon", "bg-warning", "elevation-1"], [1, "fas", "fa-exclamation-triangle"], [1, "info-box-icon", "bg-danger", "elevation-1"], [1, "fas", "fa-skull-crossbones"], [3, "latitude", "longitude", "zoom"], [3, "latitude", "longitude", "radius", "fillColor", "mouseOut", 4, "ngFor", "ngForOf"], [3, "latitude", "longitude", "radius", "fillColor", "mouseOut"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](58, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](68, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](78, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "i", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](89, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](99, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "agm-map", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](103, HomeComponent_agm_circle_103_Template, 1, 4, "agm-circle", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routerTransition", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.homeDto.requestsHome.approved);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 25, "ApprovedRequests"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 27, "View"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.homeDto.requestsHome.pending);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 29, "PendingRequests"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 31, "View"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.homeDto.requestsHome.declined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 33, "DeclinedRequests"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 35, "View"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.homeDto.requestsHome.processed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 37, "ProcessedRequests"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](58, 39, "View"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](68, 41, "TotalInstallations"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.homeDto.installationsHome.installationsTotal, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](78, 43, "ActiveInstallations"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.homeDto.installationsHome.installationsActive, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](89, 45, "InactiveInstallations"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.homeDto.installationsHome.installationsInactive, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](99, 47, "MalfunctionedInstallations"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.homeDto.installationsHome.installationsMalfunction, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng)("zoom", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.homeDto.insightHome);
        }
      },
      directives: [_agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmMap"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmCircle"]],
      pipes: [_shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_6__["LocalizePipe"]],
      styles: ["agm-map[_ngcontent-%COMP%] {\r\n    height: 60vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcclxuICAgIGhlaWdodDogNjB2aDtcclxufSJdfQ== */"],
      data: {
        animation: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_2__["appModuleAnimation"])()]
      },
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './home.component.html',
          animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_2__["appModuleAnimation"])()],
          styleUrls: ['./home.component.css'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["HomeServiceProxy"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/installations/create-installation/create-installation.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/installations/create-installation/create-installation.component.ts ***!
    \************************************************************************************/

  /*! exports provided: CreateInstallationComponent */

  /***/
  function srcAppInstallationsCreateInstallationCreateInstallationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateInstallationComponent", function () {
      return CreateInstallationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_map_map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @app/map/map.component */
    "./src/app/map/map.component.ts");
    /* harmony import */


    var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @shared/app-component-base */
    "./src/shared/app-component-base.ts");
    /* harmony import */


    var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @shared/service-proxies/service-proxies */
    "./src/shared/service-proxies/service-proxies.ts");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../shared/components/modal/abp-modal-header.component */
    "./src/shared/components/modal/abp-modal-header.component.ts");
    /* harmony import */


    var _shared_components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../shared/components/validation/abp-validation.summary.component */
    "./src/shared/components/validation/abp-validation.summary.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../shared/components/modal/abp-modal-footer.component */
    "./src/shared/components/modal/abp-modal-footer.component.ts");
    /* harmony import */


    var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @shared/pipes/localize.pipe */
    "./src/shared/pipes/localize.pipe.ts");

    function CreateInstallationComponent_option_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var city_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", city_r11.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](city_r11.name);
      }
    }

    var CreateInstallationComponent = /*#__PURE__*/function (_shared_app_component4) {
      _inherits(CreateInstallationComponent, _shared_app_component4);

      var _super5 = _createSuper(CreateInstallationComponent);

      function CreateInstallationComponent(injector, _installationService, bsModalRef, _modalService) {
        var _this86;

        _classCallCheck(this, CreateInstallationComponent);

        _this86 = _super5.call(this, injector);
        _this86._installationService = _installationService;
        _this86.bsModalRef = bsModalRef;
        _this86._modalService = _modalService;
        _this86.saving = false;
        _this86.installation = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["CreateInstallationsDto"]();
        _this86.cities = [];
        _this86.isActive = false;
        _this86.selectedCity = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["CitiesDto"]();
        _this86.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this86.installation.cityId = 0;
        _this86.selectedCity.lat = 33.6845867;
        _this86.selectedCity.lng = 73.0304453;
        return _this86;
      }

      _createClass(CreateInstallationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this87 = this;

          this._installationService.getAllCities().subscribe(function (result) {
            _this87.cities = result.items;
          });
        }
      }, {
        key: "cityChanged",
        value: function cityChanged(value) {
          this.selectedCity = this.cities.find(function (x) {
            return x.id === Number(value);
          });
        }
      }, {
        key: "save",
        value: function save() {
          var _this88 = this;

          this.saving = true;

          if (this.isActive === false) {
            this.installation.status = 0;
          } else {
            this.installation.status = 1;
          }

          this._installationService.create(this.installation).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
            _this88.saving = false;
          })).subscribe(function () {
            _this88.notify.info(_this88.l('SavedSuccessfully'));

            _this88.bsModalRef.hide();

            _this88.onSave.emit();
          });
        }
      }, {
        key: "pointLocationOnMap",
        value: function pointLocationOnMap() {
          var _this89 = this;

          var createOrEditRequestDialog;
          createOrEditRequestDialog = this._modalService.show(_app_map_map_component__WEBPACK_IMPORTED_MODULE_1__["MapComponent"], {
            "class": 'modal-lg',
            initialState: {
              lat: this.selectedCity.lat,
              lng: this.selectedCity.lng
            }
          });
          createOrEditRequestDialog.content.onSave.subscribe(function (latlng) {
            _this89.installation.lat = latlng.lat;
            _this89.installation.lng = latlng.lng;
          });
        }
      }]);

      return CreateInstallationComponent;
    }(_shared_app_component_base__WEBPACK_IMPORTED_MODULE_2__["AppComponentBase"]);

    CreateInstallationComponent.ɵfac = function CreateInstallationComponent_Factory(t) {
      return new (t || CreateInstallationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["InstallationsServiceProxy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]));
    };

    CreateInstallationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CreateInstallationComponent,
      selectors: [["app-create-installation"]],
      outputs: {
        onSave: "onSave"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 72,
      vars: 48,
      consts: [["autocomplete", "off", 1, "form-horizontal", 3, "ngSubmit"], ["createInstallationForm", "ngForm"], [3, "title", "onCloseClick"], [1, "modal-body"], [1, "form-group", "row", "required"], ["for", "make", 1, "col-md-3", "col-form-label"], [1, "col-md-9"], ["type", "text", "name", "make", "id", "make", "required", "", "maxlength", "50", 1, "form-control", 3, "ngModel", "ngModelChange"], ["makeModel", "ngModel", "makeEl", ""], [3, "control", "controlEl"], ["for", "serial", 1, "col-md-3", "col-form-label"], ["type", "text", "name", "serial", "id", "serial", "required", "", "maxlength", "32", 1, "form-control", 3, "ngModel", "ngModelChange"], ["serialModel", "ngModel", "serialEl", ""], ["for", "address", 1, "col-md-3", "col-form-label"], ["type", "text", "name", "address", "id", "address", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "city", 1, "col-md-3", "col-form-label"], [1, "col-md-5"], ["name", "city", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["city", ""], [3, "value", "disabled"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "lat", 1, "col-md-3", "col-form-label"], ["type", "number", "name", "lat", "id", "lat", "required", "", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["latModel", "ngModel", "latEl", ""], [1, "col-md-4"], ["href", "javascript:void(0);", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-map-marker-alt"], ["for", "lng", 1, "col-md-3", "col-form-label"], ["type", "number", "name", "lng", "id", "lng", "required", "", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["lngModel", "ngModel", "lngEl", ""], [1, "col-md-3", "col-form-label"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "name", "isActive", "id", "isActive", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "isActive", 1, "custom-control-label", "mt-2"], [3, "cancelDisabled", "saveDisabled", "onCancelClick"], [3, "value"]],
      template: function CreateInstallationComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreateInstallationComponent_Template_form_ngSubmit_0_listener() {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "abp-modal-header", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCloseClick", function CreateInstallationComponent_Template_abp_modal_header_onCloseClick_2_listener() {
            return ctx.bsModalRef.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateInstallationComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.installation.make = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "abp-validation-summary", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateInstallationComponent_Template_input_ngModelChange_19_listener($event) {
            return ctx.installation.serial = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "abp-validation-summary", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "textarea", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateInstallationComponent_Template_textarea_ngModelChange_28_listener($event) {
            return ctx.installation.address = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "              ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "select", 17, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateInstallationComponent_Template_select_ngModelChange_35_listener($event) {
            return ctx.installation.cityId = $event;
          })("change", function CreateInstallationComponent_Template_select_change_35_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);

            return ctx.cityChanged(_r5.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "--Select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, CreateInstallationComponent_option_39_Template, 2, 2, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "abp-validation-summary", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 22, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateInstallationComponent_Template_input_ngModelChange_46_listener($event) {
            return ctx.installation.lat = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "abp-validation-summary", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateInstallationComponent_Template_a_click_51_listener() {
            return ctx.pointLocationOnMap();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Point location on Map \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](57, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "input", 28, 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateInstallationComponent_Template_input_ngModelChange_59_listener($event) {
            return ctx.installation.lng = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "abp-validation-summary", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](66, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateInstallationComponent_Template_input_ngModelChange_69_listener($event) {
            return ctx.isActive = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "label", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "abp-modal-footer", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCancelClick", function CreateInstallationComponent_Template_abp_modal_footer_onCancelClick_71_listener() {
            return ctx.bsModalRef.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47);

          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](48);

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](60);

          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 32, "CreateNewInstallation"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 34, "Make"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.installation.make);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", _r1)("controlEl", _r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 36, "Serial"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.installation.serial);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", _r3)("controlEl", _r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 38, "Address"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.installation.address);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 40, "City"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.installation.cityId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 0)("disabled", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cities);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", _r9)("controlEl", _r10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 42, "Lat"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.installation.lat)("disabled", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", _r7)("controlEl", _r8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](57, 44, "Lng"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.installation.lng)("disabled", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", _r9)("controlEl", _r10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](66, 46, "IsActive"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.isActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cancelDisabled", ctx.saving)("saveDisabled", !_r0.form.valid || ctx.saving);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _shared_components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_7__["AbpModalHeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _shared_components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_8__["AbpValidationSummaryComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxControlValueAccessor"], _shared_components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_10__["AbpModalFooterComponent"]],
      pipes: [_shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_11__["LocalizePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc3RhbGxhdGlvbnMvY3JlYXRlLWluc3RhbGxhdGlvbi9jcmVhdGUtaW5zdGFsbGF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateInstallationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-create-installation',
          templateUrl: './create-installation.component.html',
          styleUrls: ['./create-installation.component.css']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["InstallationsServiceProxy"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]
        }];
      }, {
        onSave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/installations/edit-installation/edit-installation.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/installations/edit-installation/edit-installation.component.ts ***!
    \********************************************************************************/

  /*! exports provided: EditInstallationComponent */

  /***/
  function srcAppInstallationsEditInstallationEditInstallationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditInstallationComponent", function () {
      return EditInstallationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EditInstallationComponent = /*#__PURE__*/function () {
      function EditInstallationComponent() {
        _classCallCheck(this, EditInstallationComponent);
      }

      _createClass(EditInstallationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EditInstallationComponent;
    }();

    EditInstallationComponent.ɵfac = function EditInstallationComponent_Factory(t) {
      return new (t || EditInstallationComponent)();
    };

    EditInstallationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditInstallationComponent,
      selectors: [["app-edit-installation"]],
      decls: 2,
      vars: 0,
      template: function EditInstallationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "edit-installation works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc3RhbGxhdGlvbnMvZWRpdC1pbnN0YWxsYXRpb24vZWRpdC1pbnN0YWxsYXRpb24uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditInstallationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edit-installation',
          templateUrl: './edit-installation.component.html',
          styleUrls: ['./edit-installation.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/installations/installations.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/installations/installations.component.ts ***!
    \**********************************************************/

  /*! exports provided: InstallationsComponent */

  /***/
  function srcAppInstallationsInstallationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InstallationsComponent", function () {
      return InstallationsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @shared/animations/routerTransition */
    "./src/shared/animations/routerTransition.ts");
    /* harmony import */


    var _shared_paged_listing_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @shared/paged-listing-component-base */
    "./src/shared/paged-listing-component-base.ts");
    /* harmony import */


    var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @shared/service-proxies/service-proxies */
    "./src/shared/service-proxies/service-proxies.ts");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _create_installation_create_installation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./create-installation/create-installation.component */
    "./src/app/installations/create-installation/create-installation.component.ts");
    /* harmony import */


    var _edit_installation_edit_installation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./edit-installation/edit-installation.component */
    "./src/app/installations/edit-installation/edit-installation.component.ts");
    /* harmony import */


    var _view_in_map_view_in_map_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./view-in-map/view-in-map.component */
    "./src/app/installations/view-in-map/view-in-map.component.ts");
    /* harmony import */


    var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-bootstrap/tabs */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_directives_busy_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../shared/directives/busy.directive */
    "./src/shared/directives/busy.directive.ts");
    /* harmony import */


    var _shared_components_pagination_abp_pagination_controls_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../shared/components/pagination/abp-pagination-controls.component */
    "./src/shared/components/pagination/abp-pagination-controls.component.ts");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
    /* harmony import */


    var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @shared/pipes/localize.pipe */
    "./src/shared/pipes/localize.pipe.ts");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");

    function InstallationsComponent_option_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var city_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", city_r4.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](city_r4.name);
      }
    }

    function InstallationsComponent_tr_57_span_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "localize");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ACTIVE"), " ");
      }
    }

    function InstallationsComponent_tr_57_span_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "localize");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "INACTIVE"), " ");
      }
    }

    function InstallationsComponent_tr_57_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, InstallationsComponent_tr_57_span_12_Template, 3, 3, "span", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, InstallationsComponent_tr_57_span_13_Template, 3, 3, "span", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InstallationsComponent_tr_57_Template_a_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var installation_r5 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.viewInMap(installation_r5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "localize");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var installation_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](installation_r5.make);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](installation_r5.serial);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](installation_r5.city.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](installation_r5.lat);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](installation_r5.lng);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", installation_r5.status == 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", installation_r5.status == 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 8, "ViewInMap"), "");
      }
    }

    function InstallationsComponent_option_85_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var city_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", city_r10.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](city_r10.name);
      }
    }

    var _c0 = function _c0() {
      return {
        height: 30,
        width: 40
      };
    };

    var _c1 = function _c1(a0, a1) {
      return {
        url: a0,
        scaledSize: a1
      };
    };

    function InstallationsComponent_agm_marker_92_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "agm-marker", 47);
      }

      if (rf & 2) {
        var installation_r11 = ctx.$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", installation_r11.lat)("longitude", installation_r11.lng)("iconUrl", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c1, ctx_r3.getIcon(installation_r11), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0)));
      }
    }

    var _c2 = function _c2(a1, a2, a3) {
      return {
        id: "server",
        itemsPerPage: a1,
        currentPage: a2,
        totalItems: a3
      };
    };

    var PagedInstallationInstallationDto = /*#__PURE__*/function (_shared_paged_listing) {
      _inherits(PagedInstallationInstallationDto, _shared_paged_listing);

      var _super6 = _createSuper(PagedInstallationInstallationDto);

      function PagedInstallationInstallationDto() {
        _classCallCheck(this, PagedInstallationInstallationDto);

        return _super6.apply(this, arguments);
      }

      return PagedInstallationInstallationDto;
    }(_shared_paged_listing_component_base__WEBPACK_IMPORTED_MODULE_2__["PagedRequestDto"]);

    var InstallationsComponent = /*#__PURE__*/function (_shared_paged_listing2) {
      _inherits(InstallationsComponent, _shared_paged_listing2);

      var _super7 = _createSuper(InstallationsComponent);

      function InstallationsComponent(injector, _modalService, _installationService) {
        var _this90;

        _classCallCheck(this, InstallationsComponent);

        _this90 = _super7.call(this, injector);
        _this90._modalService = _modalService;
        _this90._installationService = _installationService;
        _this90.installations = [];
        _this90.keyword = '';
        _this90.cities = [];
        _this90.selectedCity = 1;
        _this90.tabClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this90.lat = 30.0497935;
        _this90.lng = 60.3349021;

        _this90.refresh();

        _this90.tabClick.subscribe(function (result) {
          if (result === 'List') {
            _this90.refresh();
          } else if (result === 'Map') {
            _this90.installationsForCity();
          }
        });

        return _this90;
      }

      _createClass(InstallationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this91 = this;

          this._installationService.getAllCities().subscribe(function (result) {
            _this91.cities = result.items;
          });
        }
      }, {
        key: "installationsForCity",
        value: function installationsForCity() {
          var _this92 = this;

          this._installationService.getInstallationsForCity(this.selectedCity).subscribe(function (installations) {
            _this92.installations = installations.items;

            if (_this92.installations.length > 0) {
              _this92.lat = _this92.installations[0].lat;
              _this92.lng = _this92.installations[0].lng;
            }
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          $('.nav-item').on('click', {
            _installationService: this._installationService,
            installations: this.installations,
            tabClick: this.tabClick
          }, this.tabsManager);
        }
      }, {
        key: "tabsManager",
        value: function tabsManager(objs) {
          var text = $(this).text();

          if (text === 'List') {
            objs.data.tabClick.emit('List');
          } else if (text === 'Map') {
            objs.data.tabClick.emit('Map');
          }
        }
      }, {
        key: "createInstallation",
        value: function createInstallation() {
          this.showCreateOrEditInstallationDialog();
        }
      }, {
        key: "editInstallation",
        value: function editInstallation(installation) {
          this.showCreateOrEditInstallationDialog(installation.id);
        }
      }, {
        key: "showCreateOrEditInstallationDialog",
        value: function showCreateOrEditInstallationDialog(id) {
          var _this93 = this;

          var createOrEditInstallationDialog;

          if (!id) {
            createOrEditInstallationDialog = this._modalService.show(_create_installation_create_installation_component__WEBPACK_IMPORTED_MODULE_6__["CreateInstallationComponent"], {
              "class": 'modal-lg'
            });
          } else {
            createOrEditInstallationDialog = this._modalService.show(_edit_installation_edit_installation_component__WEBPACK_IMPORTED_MODULE_7__["EditInstallationComponent"], {
              "class": 'modal-lg',
              initialState: {
                id: id
              }
            });
          }

          createOrEditInstallationDialog.content.onSave.subscribe(function () {
            _this93.refresh();
          });
        }
      }, {
        key: "listCityChange",
        value: function listCityChange() {
          this.refresh();
        }
      }, {
        key: "mapCityChange",
        value: function mapCityChange() {
          this.installationsForCity();
        }
      }, {
        key: "getIcon",
        value: function getIcon(installation) {
          if (installation.status === 1) {
            return '../../assets/img/green-dot.svg';
          } else {
            return '../../assets/img/red-dot.svg';
          }
        }
      }, {
        key: "viewInMap",
        value: function viewInMap(installation) {
          this._modalService.show(_view_in_map_view_in_map_component__WEBPACK_IMPORTED_MODULE_8__["ViewInMapComponent"], {
            "class": 'modal-lg',
            initialState: {
              installation: installation
            }
          });
        }
      }, {
        key: "list",
        value: function list(request, pageNumber, finishedCallback) {
          var _this94 = this;

          request.keyword = this.keyword;

          this._installationService.getPagedInstallations(request.keyword, this.selectedCity, request.skipCount, request.maxResultCount).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
            finishedCallback();
          })).subscribe(function (result) {
            _this94.installations = result.items;

            _this94.showPaging(result, pageNumber);
          });
        }
      }, {
        key: "delete",
        value: function _delete(installation) {
          var _this95 = this;

          abp.message.confirm(this.l('InstallationDeleteWarningMessage', installation.serial), undefined, function (result) {
            if (result) {
              _this95._installationService["delete"](installation.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
                abp.notify.success(_this95.l('SuccessfullyDeleted'));

                _this95.refresh();
              })).subscribe(function () {});
            }
          });
        }
      }]);

      return InstallationsComponent;
    }(_shared_paged_listing_component_base__WEBPACK_IMPORTED_MODULE_2__["PagedListingComponentBase"]);

    InstallationsComponent.ɵfac = function InstallationsComponent_Factory(t) {
      return new (t || InstallationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["InstallationsServiceProxy"]));
    };

    InstallationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InstallationsComponent,
      selectors: [["app-installations"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 93,
      vars: 65,
      consts: [["id", "list", 1, "pt-3", "px-2", 3, "heading"], [1, "content-header"], [1, "container-fluid"], [1, "row"], [1, "col-6"], [1, "col-6", "text-right"], [1, "col-10", "text-right"], ["name", "city", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-2", "text-right"], ["href", "javascript:;", 1, "btn", "bg-blue", 3, "click"], [1, "fa", "fa-plus-square"], [1, "content", "px-2"], [1, "card"], [1, "card-header"], [1, "input-group"], [1, "input-group-prepend"], ["type", "button", 1, "btn", "bg-blue", 3, "click"], [1, "fas", "fa-search"], ["type", "text", "name", "keyword", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange", "keyup.enter"], [1, "card-body", "table-responsive", "p-0"], [1, "table", "table-hover", "text-nowrap", 3, "busy"], [1, "bg-light"], [4, "ngFor", "ngForOf"], [1, "card-footer", "bg-light", "border-top"], [1, "col-sm-4", "col-12", "text-sm-left", "text-center"], [1, "btn", "btn-secondary", 3, "click"], [1, "fas", "fa-redo-alt"], [1, "col-sm-4", "col-12", "text-center"], [1, "mb-0", "my-2"], [1, "col-sm-4", "col-12"], [1, "float-sm-right", "m-auto"], ["id", "server", 3, "pageChange"], [1, "pt-3", "px-2", 3, "heading"], [3, "latitude", "longitude"], [3, "latitude", "longitude", "iconUrl", 4, "ngFor", "ngForOf"], [3, "value"], ["class", "badge badge-success mx-1", 4, "ngIf"], ["class", "badge badge-warning mx-1", 4, "ngIf"], [1, "dropdown"], ["type", "button", "id", "dropdownMenu2", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false"], [1, "fas", "fa-ellipsis-v"], [1, "dropdown-menu", "dropdown-primary"], [1, "dropdown-item", 3, "click"], [1, "fas", "fa-map-marker-alt"], [1, "badge", "badge-success", "mx-1"], [1, "badge", "badge-warning", "mx-1"], [3, "latitude", "longitude", "iconUrl"]],
      template: function InstallationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tabset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tab", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "select", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function InstallationsComponent_Template_select_change_14_listener() {
            return ctx.listCityChange();
          })("ngModelChange", function InstallationsComponent_Template_select_ngModelChange_14_listener($event) {
            return ctx.selectedCity = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, InstallationsComponent_option_15_Template, 2, 2, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InstallationsComponent_Template_a_click_17_listener() {
            return ctx.createInstallation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "section", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InstallationsComponent_Template_button_click_27_listener() {
            return ctx.getDataPage(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InstallationsComponent_Template_input_ngModelChange_29_listener($event) {
            return ctx.keyword = $event;
          })("keyup.enter", function InstallationsComponent_Template_input_keyup_enter_29_listener() {
            return ctx.getDataPage(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "table", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "thead", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](55, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, InstallationsComponent_tr_57_Template, 23, 10, "tr", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](58, "paginate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InstallationsComponent_Template_button_click_62_listener() {
            return ctx.refresh();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](67, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "abp-pagination-controls", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function InstallationsComponent_Template_abp_pagination_controls_pageChange_70_listener($event) {
            return ctx.getDataPage($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "tab", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](72, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](80, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "select", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function InstallationsComponent_Template_select_change_84_listener() {
            return ctx.mapCityChange();
          })("ngModelChange", function InstallationsComponent_Template_select_ngModelChange_84_listener($event) {
            return ctx.selectedCity = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, InstallationsComponent_option_85_Template, 2, 2, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InstallationsComponent_Template_a_click_87_listener() {
            return ctx.createInstallation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](90, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "agm-map", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, InstallationsComponent_agm_marker_92_Template, 1, 7, "agm-marker", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("heading", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 27, "List"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routerTransition", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 29, "Installations"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedCity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cities);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 31, "Create"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 33, "SearchWithThreeDot"))("ngModel", ctx.keyword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("busy", ctx.isTableLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 35, "Make"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 37, "Serial"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 39, "City"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 41, "Lat"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 43, "Lng"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](52, 45, "Status"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](55, 47, "Actions"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](58, 49, ctx.installations, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](61, _c2, ctx.pageSize, ctx.pageNumber, ctx.totalItems)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](67, 52, "TotalRecordsCount", ctx.totalItems), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("heading", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](72, 55, "Map"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routerTransition", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](80, 57, "Installations"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedCity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cities);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](90, 59, "Create"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.installations);
        }
      },
      directives: [ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__["TabsetComponent"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__["TabDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _shared_directives_busy_directive__WEBPACK_IMPORTED_MODULE_12__["BusyDirective"], _shared_components_pagination_abp_pagination_controls_component__WEBPACK_IMPORTED_MODULE_13__["AbpPaginationControlsComponent"], _agm_core__WEBPACK_IMPORTED_MODULE_14__["AgmMap"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _agm_core__WEBPACK_IMPORTED_MODULE_14__["AgmMarker"]],
      pipes: [_shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_15__["LocalizePipe"], ngx_pagination__WEBPACK_IMPORTED_MODULE_16__["PaginatePipe"]],
      styles: ["agm-map[_ngcontent-%COMP%] {\r\n    height: 70vh;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zdGFsbGF0aW9ucy9pbnN0YWxsYXRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9pbnN0YWxsYXRpb25zL2luc3RhbGxhdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xyXG4gICAgaGVpZ2h0OiA3MHZoO1xyXG4gIH0iXX0= */"],
      data: {
        animation: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_1__["appModuleAnimation"])()]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InstallationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-installations',
          templateUrl: './installations.component.html',
          styleUrls: ['./installations.component.css'],
          animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_1__["appModuleAnimation"])()]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]
        }, {
          type: _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["InstallationsServiceProxy"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/installations/view-in-map/view-in-map.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/installations/view-in-map/view-in-map.component.ts ***!
    \********************************************************************/

  /*! exports provided: ViewInMapComponent */

  /***/
  function srcAppInstallationsViewInMapViewInMapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewInMapComponent", function () {
      return ViewInMapComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @shared/app-component-base */
    "./src/shared/app-component-base.ts");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _shared_components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/components/modal/abp-modal-header.component */
    "./src/shared/components/modal/abp-modal-header.component.ts");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
    /* harmony import */


    var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @shared/pipes/localize.pipe */
    "./src/shared/pipes/localize.pipe.ts");

    var ViewInMapComponent = /*#__PURE__*/function (_shared_app_component5) {
      _inherits(ViewInMapComponent, _shared_app_component5);

      var _super8 = _createSuper(ViewInMapComponent);

      function ViewInMapComponent(injector, bsModalRef) {
        var _this96;

        _classCallCheck(this, ViewInMapComponent);

        _this96 = _super8.call(this, injector);
        _this96.bsModalRef = bsModalRef;
        return _this96;
      }

      _createClass(ViewInMapComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ViewInMapComponent;
    }(_shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]);

    ViewInMapComponent.ɵfac = function ViewInMapComponent_Factory(t) {
      return new (t || ViewInMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]));
    };

    ViewInMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ViewInMapComponent,
      selectors: [["app-view-in-map"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 9,
      vars: 10,
      consts: [[3, "title", "onCloseClick"], [1, "modal-body"], [3, "latitude", "longitude"], [1, "modal-footer", "justify-content-between"], ["type", "button", 1, "btn", "btn-default", 3, "click"]],
      template: function ViewInMapComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "abp-modal-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCloseClick", function ViewInMapComponent_Template_abp_modal_header_onCloseClick_0_listener() {
            return ctx.bsModalRef.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "agm-map", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "agm-marker", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewInMapComponent_Template_button_click_6_listener() {
            return ctx.bsModalRef.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 6, "InstallationDetail"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.installation.lat)("longitude", ctx.installation.lng);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.installation.lat)("longitude", ctx.installation.lng);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 8, "Close"), " ");
        }
      },
      directives: [_shared_components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_3__["AbpModalHeaderComponent"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmMap"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmMarker"]],
      pipes: [_shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_5__["LocalizePipe"]],
      styles: ["agm-map[_ngcontent-%COMP%] {\r\n    height: 50vh;\r\n    width: 50vw;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zdGFsbGF0aW9ucy92aWV3LWluLW1hcC92aWV3LWluLW1hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7RUFDYiIsImZpbGUiOiJzcmMvYXBwL2luc3RhbGxhdGlvbnMvdmlldy1pbi1tYXAvdmlldy1pbi1tYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xyXG4gICAgaGVpZ2h0OiA1MHZoO1xyXG4gICAgd2lkdGg6IDUwdnc7XHJcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewInMapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-view-in-map',
          templateUrl: './view-in-map.component.html',
          styleUrls: ['./view-in-map.component.css']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/layout/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppLayoutFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @shared/app-component-base */
    "./src/shared/app-component-base.ts");
    /* harmony import */


    var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @shared/pipes/localize.pipe */
    "./src/shared/pipes/localize.pipe.ts");

    var FooterComponent = /*#__PURE__*/function (_shared_app_component6) {
      _inherits(FooterComponent, _shared_app_component6);

      var _super9 = _createSuper(FooterComponent);

      function FooterComponent(injector) {
        var _this97;

        _classCallCheck(this, FooterComponent);

        _this97 = _super9.call(this, injector);
        _this97.currentYear = new Date().getFullYear();
        _this97.versionText = _this97.appSession.application.version + ' [' + _this97.appSession.application.releaseDate.format('YYYYDDMM') + ']';
        return _this97;
      }

      return FooterComponent;
    }(_shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]);

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]));
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 11,
      vars: 5,
      consts: [[1, "main-footer"], ["href", "javascript:;"], [1, "float-right", "d-none", "d-sm-inline-block"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ForeSpark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ". ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Copyright \xA9 ", ctx.currentYear, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 3, "Version"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.versionText, " ");
        }
      },
      pipes: [_shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_2__["LocalizePipe"]],
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/header-language-menu.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/layout/header-language-menu.component.ts ***!
    \**********************************************************/

  /*! exports provided: HeaderLanguageMenuComponent */

  /***/
  function srcAppLayoutHeaderLanguageMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderLanguageMenuComponent", function () {
      return HeaderLanguageMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @shared/app-component-base */
    "./src/shared/app-component-base.ts");
    /* harmony import */


    var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @shared/service-proxies/service-proxies */
    "./src/shared/service-proxies/service-proxies.ts");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bootstrap/dropdown */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HeaderLanguageMenuComponent_div_5_ng_container_1_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderLanguageMenuComponent_div_5_ng_container_1_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var language_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r4.changeLanguage(language_r2.name);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var language_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("d-inline-block ", language_r2.icon, " mr-1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", language_r2.displayName, " ");
      }
    }

    function HeaderLanguageMenuComponent_div_5_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderLanguageMenuComponent_div_5_ng_container_1_a_1_Template, 3, 4, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var language_r2 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", language_r2.name != ctx_r1.currentLanguage.name);
      }
    }

    function HeaderLanguageMenuComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderLanguageMenuComponent_div_5_ng_container_1_Template, 2, 1, "ng-container", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.languages);
      }
    }

    var HeaderLanguageMenuComponent = /*#__PURE__*/function (_shared_app_component7) {
      _inherits(HeaderLanguageMenuComponent, _shared_app_component7);

      var _super10 = _createSuper(HeaderLanguageMenuComponent);

      function HeaderLanguageMenuComponent(injector, _userService) {
        var _this98;

        _classCallCheck(this, HeaderLanguageMenuComponent);

        _this98 = _super10.call(this, injector);
        _this98._userService = _userService;
        return _this98;
      }

      _createClass(HeaderLanguageMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.languages = lodash__WEBPACK_IMPORTED_MODULE_3__["filter"](this.localization.languages, function (l) {
            return !l.isDisabled;
          });
          this.currentLanguage = this.localization.currentLanguage;
        }
      }, {
        key: "changeLanguage",
        value: function changeLanguage(languageName) {
          var input = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["ChangeUserLanguageDto"]();
          input.languageName = languageName;

          this._userService.changeLanguage(input).subscribe(function () {
            abp.utils.setCookieValue('Abp.Localization.CultureName', languageName, new Date(new Date().getTime() + 5 * 365 * 86400000), // 5 year
            abp.appPath);
            window.location.reload();
          });
        }
      }]);

      return HeaderLanguageMenuComponent;
    }(_shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]);

    HeaderLanguageMenuComponent.ɵfac = function HeaderLanguageMenuComponent_Factory(t) {
      return new (t || HeaderLanguageMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["UserServiceProxy"]));
    };

    HeaderLanguageMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderLanguageMenuComponent,
      selectors: [["header-language-menu"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 6,
      vars: 4,
      consts: [["dropdown", "", 1, "nav-item", "dropdown"], ["href", "javascript:;", "dropdownToggle", "", 1, "nav-link"], [1, "d-none", "d-md-inline-block", "ml-1"], ["class", "dropdown-menu dropdown-menu-right p-0", 4, "dropdownMenu"], [1, "dropdown-menu", "dropdown-menu-right", "p-0"], [4, "ngFor", "ngForOf"], ["class", "dropdown-item", "href", "javascript:;", 3, "click", 4, "ngIf"], ["href", "javascript:;", 1, "dropdown-item", 3, "click"]],
      template: function HeaderLanguageMenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderLanguageMenuComponent_div_5_Template, 2, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("d-inline-block ", ctx.currentLanguage.icon, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentLanguage.displayName, " ");
        }
      },
      directives: [ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownToggleDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownMenuDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderLanguageMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'header-language-menu',
          templateUrl: './header-language-menu.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["UserServiceProxy"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/header-left-navbar.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/layout/header-left-navbar.component.ts ***!
    \********************************************************/

  /*! exports provided: HeaderLeftNavbarComponent */

  /***/
  function srcAppLayoutHeaderLeftNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderLeftNavbarComponent", function () {
      return HeaderLeftNavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_layout_layout_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @shared/layout/layout-store.service */
    "./src/shared/layout/layout-store.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @shared/pipes/localize.pipe */
    "./src/shared/pipes/localize.pipe.ts");

    var _c0 = function _c0() {
      return ["home"];
    };

    var _c1 = function _c1() {
      return ["about"];
    };

    var HeaderLeftNavbarComponent = /*#__PURE__*/function () {
      function HeaderLeftNavbarComponent(_layoutStore) {
        _classCallCheck(this, HeaderLeftNavbarComponent);

        this._layoutStore = _layoutStore;
      }

      _createClass(HeaderLeftNavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this99 = this;

          this._layoutStore.sidebarExpanded.subscribe(function (value) {
            _this99.sidebarExpanded = value;
          });
        }
      }, {
        key: "toggleSidebar",
        value: function toggleSidebar() {
          this._layoutStore.setSidebarExpanded(!this.sidebarExpanded);
        }
      }]);

      return HeaderLeftNavbarComponent;
    }();

    HeaderLeftNavbarComponent.ɵfac = function HeaderLeftNavbarComponent_Factory(t) {
      return new (t || HeaderLeftNavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_layout_layout_store_service__WEBPACK_IMPORTED_MODULE_1__["LayoutStoreService"]));
    };

    HeaderLeftNavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderLeftNavbarComponent,
      selectors: [["header-left-navbar"]],
      decls: 12,
      vars: 10,
      consts: [[1, "navbar-nav"], [1, "nav-item"], ["href", "javascript:;", 1, "nav-link", 3, "click"], [1, "fas", "fa-bars"], [1, "nav-item", "d-none", "d-sm-inline-block"], [1, "nav-link", 3, "routerLink"]],
      template: function HeaderLeftNavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderLeftNavbarComponent_Template_a_click_2_listener() {
            return ctx.toggleSidebar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, "HomePage"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 6, "About"), " ");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      pipes: [_shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_3__["LocalizePipe"]],
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderLeftNavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'header-left-navbar',
          templateUrl: './header-left-navbar.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _shared_layout_layout_store_service__WEBPACK_IMPORTED_MODULE_1__["LayoutStoreService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/header-user-menu.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/layout/header-user-menu.component.ts ***!
    \******************************************************/

  /*! exports provided: HeaderUserMenuComponent */

  /***/
  function srcAppLayoutHeaderUserMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderUserMenuComponent", function () {
      return HeaderUserMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_auth_app_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @shared/auth/app-auth.service */
    "./src/shared/auth/app-auth.service.ts");
    /* harmony import */


    var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/dropdown */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @shared/pipes/localize.pipe */
    "./src/shared/pipes/localize.pipe.ts");

    var _c0 = function _c0() {
      return ["update-password"];
    };

    function HeaderUserMenuComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "localize");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderUserMenuComponent_div_3_Template_a_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "localize");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, "UpdatePassword"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, "Logout"), " ");
      }
    }

    var HeaderUserMenuComponent = /*#__PURE__*/function () {
      function HeaderUserMenuComponent(_authService) {
        _classCallCheck(this, HeaderUserMenuComponent);

        this._authService = _authService;
      }

      _createClass(HeaderUserMenuComponent, [{
        key: "logout",
        value: function logout() {
          this._authService.logout();
        }
      }]);

      return HeaderUserMenuComponent;
    }();

    HeaderUserMenuComponent.ɵfac = function HeaderUserMenuComponent_Factory(t) {
      return new (t || HeaderUserMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_auth_app_auth_service__WEBPACK_IMPORTED_MODULE_1__["AppAuthService"]));
    };

    HeaderUserMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderUserMenuComponent,
      selectors: [["header-user-menu"]],
      decls: 4,
      vars: 0,
      consts: [["dropdown", "", 1, "nav-item", "dropdown", "nav-user-menu"], ["href", "javascript:;", "dropdownToggle", "", 1, "nav-link"], ["src", "assets/img/user.png", "alt", "User Image", 1, "user-image", "img-circle", "elevation-2"], ["class", "dropdown-menu dropdown-menu-right", 4, "dropdownMenu"], [1, "dropdown-menu", "dropdown-menu-right"], [1, "dropdown-item", 3, "routerLink"], [1, "fas", "fa-user-edit"], ["href", "javascript:;", 1, "dropdown-item", 3, "click"], [1, "fas", "fa-sign-out-alt"]],
      template: function HeaderUserMenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderUserMenuComponent_div_3_Template, 9, 8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__["BsDropdownDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__["BsDropdownToggleDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__["BsDropdownMenuDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      pipes: [_shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_4__["LocalizePipe"]],
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderUserMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'header-user-menu',
          templateUrl: './header-user-menu.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _shared_auth_app_auth_service__WEBPACK_IMPORTED_MODULE_1__["AppAuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/layout/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppLayoutHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_left_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header-left-navbar.component */
    "./src/app/layout/header-left-navbar.component.ts");
    /* harmony import */


    var _header_language_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./header-language-menu.component */
    "./src/app/layout/header-language-menu.component.ts");
    /* harmony import */


    var _header_user_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./header-user-menu.component */
    "./src/app/layout/header-user-menu.component.ts");

    var HeaderComponent = function HeaderComponent() {
      _classCallCheck(this, HeaderComponent);
    };

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 5,
      vars: 0,
      consts: [[1, "main-header", "navbar", "navbar-expand", "navbar-white", "navbar-light"], [1, "navbar-nav", "ml-auto"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "header-left-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "header-language-menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "header-user-menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_header_left_navbar_component__WEBPACK_IMPORTED_MODULE_1__["HeaderLeftNavbarComponent"], _header_language_menu_component__WEBPACK_IMPORTED_MODULE_2__["HeaderLanguageMenuComponent"], _header_user_menu_component__WEBPACK_IMPORTED_MODULE_3__["HeaderUserMenuComponent"]],
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/sidebar-logo.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/layout/sidebar-logo.component.ts ***!
    \**************************************************/

  /*! exports provided: SidebarLogoComponent */

  /***/
  function srcAppLayoutSidebarLogoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarLogoComponent", function () {
      return SidebarLogoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["home"];
    };

    var SidebarLogoComponent = function SidebarLogoComponent() {
      _classCallCheck(this, SidebarLogoComponent);
    };

    SidebarLogoComponent.ɵfac = function SidebarLogoComponent_Factory(t) {
      return new (t || SidebarLogoComponent)();
    };

    SidebarLogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidebarLogoComponent,
      selectors: [["sidebar-logo"]],
      decls: 4,
      vars: 2,
      consts: [[1, "brand-link", 3, "routerLink"], ["src", "assets/img/logo.png", "alt", "Logo", 1, "brand-image", "img-circle", "elevation-3", 2, "opacity", "0.8"], [1, "brand-text", "font-weight-light"]],
      template: function SidebarLogoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ForeSpark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarLogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'sidebar-logo',
          templateUrl: './sidebar-logo.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/sidebar-menu.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/layout/sidebar-menu.component.ts ***!
    \**************************************************/

  /*! exports provided: SidebarMenuComponent */

  /***/
  function srcAppLayoutSidebarMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarMenuComponent", function () {
      return SidebarMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @shared/app-component-base */
    "./src/shared/app-component-base.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_layout_menu_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @shared/layout/menu-item */
    "./src/shared/layout/menu-item.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-bootstrap/collapse */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/collapse/fesm2015/ngx-bootstrap-collapse.js");

    function SidebarMenuComponent_ng_container_2_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        item: a0
      };
    };

    function SidebarMenuComponent_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarMenuComponent_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r3));
      }
    }

    function SidebarMenuComponent_ng_template_3_li_0_a_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).item;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", item_r5.isActive);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r5.route);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("nav-icon ", item_r5.icon, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r5.label, " ");
      }
    }

    function SidebarMenuComponent_ng_template_3_li_0_a_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).item;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r5.route, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("nav-icon ", item_r5.icon, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r5.label, " ");
      }
    }

    function SidebarMenuComponent_ng_template_3_li_0_a_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarMenuComponent_ng_template_3_li_0_a_3_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).item;

          return item_r5.isCollapsed = !item_r5.isCollapsed;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).item;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", item_r5.isActive);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("nav-icon ", item_r5.icon, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r5.label, " ");
      }
    }

    function SidebarMenuComponent_ng_template_3_li_0_ul_4_ng_container_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function SidebarMenuComponent_ng_template_3_li_0_ul_4_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarMenuComponent_ng_template_3_li_0_ul_4_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r18 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r18));
      }
    }

    function SidebarMenuComponent_ng_template_3_li_0_ul_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarMenuComponent_ng_template_3_li_0_ul_4_ng_container_1_Template, 2, 4, "ng-container", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).item;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapse", item_r5.isCollapsed)("isAnimated", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r5.children);
      }
    }

    function SidebarMenuComponent_ng_template_3_li_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarMenuComponent_ng_template_3_li_0_a_1_Template, 4, 7, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidebarMenuComponent_ng_template_3_li_0_a_2_Template, 4, 5, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidebarMenuComponent_ng_template_3_li_0_a_3_Template, 5, 6, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidebarMenuComponent_ng_template_3_li_0_ul_4_Template, 2, 3, "ul", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().item;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("menu-open", !item_r5.isCollapsed)("has-treeview", item_r5.children);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r5.route && item_r5.route.indexOf("http") != 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r5.route && item_r5.route.indexOf("http") == 0 && !item_r5.children);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r5.route && item_r5.children);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r5.children);
      }
    }

    function SidebarMenuComponent_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SidebarMenuComponent_ng_template_3_li_0_Template, 5, 8, "li", 5);
      }

      if (rf & 2) {
        var item_r5 = ctx.item;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isMenuItemVisible(item_r5));
      }
    }

    var SidebarMenuComponent = /*#__PURE__*/function (_shared_app_component8) {
      _inherits(SidebarMenuComponent, _shared_app_component8);

      var _super11 = _createSuper(SidebarMenuComponent);

      function SidebarMenuComponent(injector, router) {
        var _this100;

        _classCallCheck(this, SidebarMenuComponent);

        _this100 = _super11.call(this, injector);
        _this100.router = router;
        _this100.menuItemsMap = {};
        _this100.activatedMenuItems = [];
        _this100.routerEvents = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](undefined);
        _this100.homeRoute = '/app/home';

        _this100.router.events.subscribe(_this100.routerEvents);

        return _this100;
      }

      _createClass(SidebarMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this101 = this;

          this.menuItems = this.getMenuItems();
          this.patchMenuItems(this.menuItems);
          this.routerEvents.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"];
          })).subscribe(function (event) {
            var currentUrl = event.url !== '/' ? event.url : _this101.homeRoute;

            var primaryUrlSegmentGroup = _this101.router.parseUrl(currentUrl).root.children[_angular_router__WEBPACK_IMPORTED_MODULE_2__["PRIMARY_OUTLET"]];

            if (primaryUrlSegmentGroup) {
              _this101.activateMenuItems('/' + primaryUrlSegmentGroup.toString());
            }
          });
        }
      }, {
        key: "getMenuItems",
        value: function getMenuItems() {
          return [new _shared_layout_menu_item__WEBPACK_IMPORTED_MODULE_5__["MenuItem"](this.l('HomePage'), '/app/home', 'fas fa-home'), new _shared_layout_menu_item__WEBPACK_IMPORTED_MODULE_5__["MenuItem"](this.l('Tenants'), '/app/tenants', 'fas fa-building', 'Pages.Tenants'), new _shared_layout_menu_item__WEBPACK_IMPORTED_MODULE_5__["MenuItem"](this.l('Users'), '/app/users', 'fas fa-users', 'Pages.Users'), new _shared_layout_menu_item__WEBPACK_IMPORTED_MODULE_5__["MenuItem"](this.l('Roles'), '/app/roles', 'fas fa-theater-masks', 'Pages.Roles'), new _shared_layout_menu_item__WEBPACK_IMPORTED_MODULE_5__["MenuItem"](this.l('Requests'), '', 'fab fa-product-hunt', 'Pages.Requests', [new _shared_layout_menu_item__WEBPACK_IMPORTED_MODULE_5__["MenuItem"](this.l('Pending'), '/app/requests/pending', 'fab fa-product-hunt', 'Pages.Requests'), new _shared_layout_menu_item__WEBPACK_IMPORTED_MODULE_5__["MenuItem"](this.l('Approved'), '/app/requests/approved', 'fab fa-product-hunt', 'Pages.Requests'), new _shared_layout_menu_item__WEBPACK_IMPORTED_MODULE_5__["MenuItem"](this.l('Declined'), '/app/requests/declined', 'fab fa-product-hunt', 'Pages.Requests')]), new _shared_layout_menu_item__WEBPACK_IMPORTED_MODULE_5__["MenuItem"](this.l('Installations'), '/app/installations', 'fa fa-camera', 'Pages.Installations')
          /*,
          new MenuItem(this.l('About'), '/app/about', 'fas fa-info-circle'),
          new MenuItem(this.l('MultiLevelMenu'), '', 'fas fa-circle', '', [
            new MenuItem('ASP.NET Boilerplate', '', 'fas fa-dot-circle', '', [
              new MenuItem(
                'Home',
                'https://aspnetboilerplate.com?ref=abptmpl',
                'far fa-circle'
              ),
              new MenuItem(
                'Templates',
                'https://aspnetboilerplate.com/Templates?ref=abptmpl',
                'far fa-circle'
              ),
              new MenuItem(
                'Samples',
                'https://aspnetboilerplate.com/Samples?ref=abptmpl',
                'far fa-circle'
              ),
              new MenuItem(
                'Documents',
                'https://aspnetboilerplate.com/Pages/Documents?ref=abptmpl',
                'far fa-circle'
              ),
            ]),
            new MenuItem('ASP.NET Zero', '', 'fas fa-dot-circle', '', [
              new MenuItem(
                'Home',
                'https://aspnetzero.com?ref=abptmpl',
                'far fa-circle'
              ),
              new MenuItem(
                'Features',
                'https://aspnetzero.com/Features?ref=abptmpl',
                'far fa-circle'
              ),
              new MenuItem(
                'Pricing',
                'https://aspnetzero.com/Pricing?ref=abptmpl#pricing',
                'far fa-circle'
              ),
              new MenuItem(
                'Faq',
                'https://aspnetzero.com/Faq?ref=abptmpl',
                'far fa-circle'
              ),
              new MenuItem(
                'Documents',
                'https://aspnetzero.com/Documents?ref=abptmpl',
                'far fa-circle'
              )
            ])
          ])**/
          ];
        }
      }, {
        key: "patchMenuItems",
        value: function patchMenuItems(items, parentId) {
          var _this102 = this;

          items.forEach(function (item, index) {
            item.id = parentId ? Number(parentId + '' + (index + 1)) : index + 1;

            if (parentId) {
              item.parentId = parentId;
            }

            if (parentId || item.children) {
              _this102.menuItemsMap[item.id] = item;
            }

            if (item.children) {
              _this102.patchMenuItems(item.children, item.id);
            }
          });
        }
      }, {
        key: "activateMenuItems",
        value: function activateMenuItems(url) {
          var _this103 = this;

          this.deactivateMenuItems(this.menuItems);
          this.activatedMenuItems = [];
          var foundedItems = this.findMenuItemsByUrl(url, this.menuItems);
          foundedItems.forEach(function (item) {
            _this103.activateMenuItem(item);
          });
        }
      }, {
        key: "deactivateMenuItems",
        value: function deactivateMenuItems(items) {
          var _this104 = this;

          items.forEach(function (item) {
            item.isActive = false;
            item.isCollapsed = true;

            if (item.children) {
              _this104.deactivateMenuItems(item.children);
            }
          });
        }
      }, {
        key: "findMenuItemsByUrl",
        value: function findMenuItemsByUrl(url, items) {
          var _this105 = this;

          var foundedItems = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
          items.forEach(function (item) {
            if (item.route === url) {
              foundedItems.push(item);
            } else if (item.children) {
              _this105.findMenuItemsByUrl(url, item.children, foundedItems);
            }
          });
          return foundedItems;
        }
      }, {
        key: "activateMenuItem",
        value: function activateMenuItem(item) {
          item.isActive = true;

          if (item.children) {
            item.isCollapsed = false;
          }

          this.activatedMenuItems.push(item);

          if (item.parentId) {
            this.activateMenuItem(this.menuItemsMap[item.parentId]);
          }
        }
      }, {
        key: "isMenuItemVisible",
        value: function isMenuItemVisible(item) {
          if (!item.permissionName) {
            return true;
          }

          return this.permission.isGranted(item.permissionName);
        }
      }]);

      return SidebarMenuComponent;
    }(_shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]);

    SidebarMenuComponent.ɵfac = function SidebarMenuComponent_Factory(t) {
      return new (t || SidebarMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    SidebarMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidebarMenuComponent,
      selectors: [["sidebar-menu"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 5,
      vars: 1,
      consts: [[1, "mt-2"], ["data-widget", "treeview", "role", "menu", "data-accordion", "false", 1, "nav", "nav-pills", "nav-sidebar", "flex-column", "nav-flat"], [4, "ngFor", "ngForOf"], ["sidebarInner", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "nav-item", 3, "menu-open", "has-treeview", 4, "ngIf"], [1, "nav-item"], ["class", "nav-link", 3, "routerLink", "active", 4, "ngIf"], ["class", "nav-link", "target", "_blank", 3, "href", 4, "ngIf"], ["class", "nav-link", "href", "javascript:;", 3, "active", "click", 4, "ngIf"], ["class", "nav nav-treeview", 3, "collapse", "isAnimated", 4, "ngIf"], [1, "nav-link", 3, "routerLink"], ["target", "_blank", 1, "nav-link", 3, "href"], ["href", "javascript:;", 1, "nav-link", 3, "click"], [1, "right", "fas", "fa-angle-left"], [1, "nav", "nav-treeview", 3, "collapse", "isAnimated"]],
      template: function SidebarMenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidebarMenuComponent_ng_container_2_Template, 2, 4, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidebarMenuComponent_ng_template_3_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__["CollapseDirective"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'sidebar-menu',
          templateUrl: './sidebar-menu.component.html'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/sidebar-user-panel.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/layout/sidebar-user-panel.component.ts ***!
    \********************************************************/

  /*! exports provided: SidebarUserPanelComponent */

  /***/
  function srcAppLayoutSidebarUserPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarUserPanelComponent", function () {
      return SidebarUserPanelComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @shared/app-component-base */
    "./src/shared/app-component-base.ts");

    var SidebarUserPanelComponent = /*#__PURE__*/function (_shared_app_component9) {
      _inherits(SidebarUserPanelComponent, _shared_app_component9);

      var _super12 = _createSuper(SidebarUserPanelComponent);

      function SidebarUserPanelComponent(injector) {
        var _this106;

        _classCallCheck(this, SidebarUserPanelComponent);

        _this106 = _super12.call(this, injector);
        _this106.shownLoginName = '';
        return _this106;
      }

      _createClass(SidebarUserPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.shownLoginName = this.appSession.getShownLoginName();
        }
      }]);

      return SidebarUserPanelComponent;
    }(_shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]);

    SidebarUserPanelComponent.ɵfac = function SidebarUserPanelComponent_Factory(t) {
      return new (t || SidebarUserPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]));
    };

    SidebarUserPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidebarUserPanelComponent,
      selectors: [["sidebar-user-panel"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 6,
      vars: 1,
      consts: [[1, "user-panel", "mt-3", "pb-3", "mb-3", "d-flex"], [1, "image"], ["src", "assets/img/user.png", "alt", "User Image", 1, "img-circle", "elevation-2"], [1, "info"], ["href", "javascript:;", 1, "d-block"]],
      template: function SidebarUserPanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.shownLoginName);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarUserPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'sidebar-user-panel',
          templateUrl: './sidebar-user-panel.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/sidebar.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/layout/sidebar.component.ts ***!
    \*********************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppLayoutSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_layout_layout_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @shared/layout/layout-store.service */
    "./src/shared/layout/layout-store.service.ts");
    /* harmony import */


    var _sidebar_logo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./sidebar-logo.component */
    "./src/app/layout/sidebar-logo.component.ts");
    /* harmony import */


    var _sidebar_user_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sidebar-user-panel.component */
    "./src/app/layout/sidebar-user-panel.component.ts");
    /* harmony import */


    var _sidebar_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./sidebar-menu.component */
    "./src/app/layout/sidebar-menu.component.ts");

    var SidebarComponent = /*#__PURE__*/function () {
      function SidebarComponent(renderer, _layoutStore) {
        _classCallCheck(this, SidebarComponent);

        this.renderer = renderer;
        this._layoutStore = _layoutStore;
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this107 = this;

          this._layoutStore.sidebarExpanded.subscribe(function (value) {
            _this107.sidebarExpanded = value;

            _this107.toggleSidebar();
          });
        }
      }, {
        key: "toggleSidebar",
        value: function toggleSidebar() {
          if (this.sidebarExpanded) {
            this.hideSidebar();
          } else {
            this.showSidebar();
          }
        }
      }, {
        key: "showSidebar",
        value: function showSidebar() {
          this.renderer.removeClass(document.body, 'sidebar-collapse');
          this.renderer.addClass(document.body, 'sidebar-open');
        }
      }, {
        key: "hideSidebar",
        value: function hideSidebar() {
          this.renderer.removeClass(document.body, 'sidebar-open');
          this.renderer.addClass(document.body, 'sidebar-collapse');
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
      return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_layout_layout_store_service__WEBPACK_IMPORTED_MODULE_1__["LayoutStoreService"]));
    };

    SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidebarComponent,
      selectors: [["sidebar"]],
      decls: 5,
      vars: 0,
      consts: [[1, "main-sidebar", "sidebar-dark-primary", "elevation-4"], [1, "sidebar"]],
      template: function SidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aside", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "sidebar-logo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "sidebar-user-panel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "sidebar-menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_sidebar_logo_component__WEBPACK_IMPORTED_MODULE_2__["SidebarLogoComponent"], _sidebar_user_panel_component__WEBPACK_IMPORTED_MODULE_3__["SidebarUserPanelComponent"], _sidebar_menu_component__WEBPACK_IMPORTED_MODULE_4__["SidebarMenuComponent"]],
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          // tslint:disable-next-line:component-selector
          selector: 'sidebar',
          templateUrl: './sidebar.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _shared_layout_layout_store_service__WEBPACK_IMPORTED_MODULE_1__["LayoutStoreService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/map/map.component.ts":
  /*!**************************************!*\
    !*** ./src/app/map/map.component.ts ***!
    \**************************************/

  /*! exports provided: MapComponent */

  /***/
  function srcAppMapMapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapComponent", function () {
      return MapComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @shared/app-component-base */
    "./src/shared/app-component-base.ts");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/components/modal/abp-modal-header.component */
    "./src/shared/components/modal/abp-modal-header.component.ts");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/components/modal/abp-modal-footer.component */
    "./src/shared/components/modal/abp-modal-footer.component.ts");
    /* harmony import */


    var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @shared/pipes/localize.pipe */
    "./src/shared/pipes/localize.pipe.ts");

    function MapComponent_agm_marker_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "agm-marker", 7);
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx_r1.lat)("longitude", ctx_r1.lng);
      }
    }

    var MapComponent = /*#__PURE__*/function (_shared_app_component10) {
      _inherits(MapComponent, _shared_app_component10);

      var _super13 = _createSuper(MapComponent);

      function MapComponent(injector, bsModalRef) {
        var _this108;

        _classCallCheck(this, MapComponent);

        _this108 = _super13.call(this, injector);
        _this108.bsModalRef = bsModalRef;
        _this108.lat = 30.0497935;
        _this108.lng = 60.3349021;
        _this108.displayMarker = false;
        _this108.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this108;
      }

      _createClass(MapComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "mapClick",
        value: function mapClick(event) {
          this.lat = event.coords.lat;
          this.lng = event.coords.lng;
          this.displayMarker = true;
        }
      }, {
        key: "save",
        value: function save() {
          this.onSave.emit({
            lat: this.lat,
            lng: this.lng
          });
          this.bsModalRef.hide();
        }
      }]);

      return MapComponent;
    }(_shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]);

    MapComponent.ɵfac = function MapComponent_Factory(t) {
      return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]));
    };

    MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MapComponent,
      selectors: [["app-map"]],
      outputs: {
        onSave: "onSave"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 8,
      vars: 8,
      consts: [["autocomplete", "off", 1, "form-horizontal", 3, "ngSubmit"], ["createRequestForm", "ngForm"], [3, "title", "onCloseClick"], [1, "modal-body"], [3, "latitude", "longitude", "zoom", "mapClick"], [3, "latitude", "longitude", 4, "ngIf"], [3, "saveDisabled", "onCancelClick"], [3, "latitude", "longitude"]],
      template: function MapComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MapComponent_Template_form_ngSubmit_0_listener() {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "abp-modal-header", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCloseClick", function MapComponent_Template_abp_modal_header_onCloseClick_2_listener() {
            return ctx.bsModalRef.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "agm-map", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mapClick", function MapComponent_Template_agm_map_mapClick_5_listener($event) {
            return ctx.mapClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MapComponent_agm_marker_6_Template, 1, 2, "agm-marker", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "abp-modal-footer", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCancelClick", function MapComponent_Template_abp_modal_footer_onCancelClick_7_listener() {
            return ctx.bsModalRef.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, "CreateNewRequest"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng)("zoom", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayMarker);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("saveDisabled", !_r0.form.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _shared_components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_4__["AbpModalHeaderComponent"], _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmMap"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_7__["AbpModalFooterComponent"], _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmMarker"]],
      pipes: [_shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_8__["LocalizePipe"]],
      styles: ["agm-map[_ngcontent-%COMP%] {\r\n    height: 50vh;\r\n    width: 50vw;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7RUFDYiIsImZpbGUiOiJzcmMvYXBwL21hcC9tYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xyXG4gICAgaGVpZ2h0OiA1MHZoO1xyXG4gICAgd2lkdGg6IDUwdnc7XHJcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-map',
          templateUrl: './map.component.html',
          styleUrls: ['./map.component.css']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]
        }];
      }, {
        onSave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/requests/create-request/create-request.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/requests/create-request/create-request.component.ts ***!
    \*********************************************************************/

  /*! exports provided: CreateRequestComponent */

  /***/
  function srcAppRequestsCreateRequestCreateRequestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateRequestComponent", function () {
      return CreateRequestComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @shared/app-component-base */
    "./src/shared/app-component-base.ts");
    /* harmony import */


    var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @shared/service-proxies/service-proxies */
    "./src/shared/service-proxies/service-proxies.ts");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_map_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/map/map.component */
    "./src/app/map/map.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../shared/components/modal/abp-modal-header.component */
    "./src/shared/components/modal/abp-modal-header.component.ts");
    /* harmony import */


    var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-bootstrap/tabs */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js");
    /* harmony import */


    var _shared_components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../shared/components/validation/abp-validation.summary.component */
    "./src/shared/components/validation/abp-validation.summary.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../shared/components/modal/abp-modal-footer.component */
    "./src/shared/components/modal/abp-modal-footer.component.ts");
    /* harmony import */


    var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @shared/pipes/localize.pipe */
    "./src/shared/pipes/localize.pipe.ts");

    function CreateRequestComponent_option_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var city_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", city_r11.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](city_r11.name);
      }
    }

    var CreateRequestComponent = /*#__PURE__*/function (_shared_app_component11) {
      _inherits(CreateRequestComponent, _shared_app_component11);

      var _super14 = _createSuper(CreateRequestComponent);

      function CreateRequestComponent(injector, _requestService, bsModalRef, _installationService, _modalService) {
        var _this109;

        _classCallCheck(this, CreateRequestComponent);

        _this109 = _super14.call(this, injector);
        _this109._requestService = _requestService;
        _this109.bsModalRef = bsModalRef;
        _this109._installationService = _installationService;
        _this109._modalService = _modalService;
        _this109.saving = false;
        _this109.request = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["CreateRequestDto"]();
        _this109.files = [];
        _this109.cities = [];
        _this109.selectedCity = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["CitiesDto"]();
        _this109.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this109.request.cityId = 0;
        _this109.selectedCity.lat = 33.6845867;
        _this109.selectedCity.lng = 73.0304453;
        return _this109;
      }

      _createClass(CreateRequestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this110 = this;

          this._installationService.getAllCities().subscribe(function (result) {
            _this110.cities = result.items;
          });
        }
      }, {
        key: "cityChanged",
        value: function cityChanged(value) {
          this.selectedCity = this.cities.find(function (x) {
            return x.id === Number(value);
          });
        }
      }, {
        key: "save",
        value: function save() {
          var _this111 = this;

          this.saving = true;
          var formData = new FormData();
          formData.append('requestForm', JSON.stringify(this.request));

          for (var i = 0; i < this.files.length; i++) {
            formData.append('image_' + i, this.files[i], this.files[i].name);
          }

          this._requestService.createNewRequest(formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            _this111.saving = false;
          })).subscribe(function () {
            _this111.notify.info(_this111.l('SavedSuccessfully'));

            _this111.bsModalRef.hide();

            _this111.onSave.emit();
          });
        }
      }, {
        key: "onFileChanged",
        value: function onFileChanged($event) {
          this.files = $event.target.files;
        }
      }, {
        key: "pointLocationOnMap",
        value: function pointLocationOnMap() {
          var _this112 = this;

          var createOrEditRequestDialog;
          createOrEditRequestDialog = this._modalService.show(_app_map_map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"], {
            "class": 'modal-lg',
            initialState: {
              lat: this.selectedCity.lat,
              lng: this.selectedCity.lng
            }
          });
          createOrEditRequestDialog.content.onSave.subscribe(function (latlng) {
            _this112.request.lat = latlng.lat;
            _this112.request.lng = latlng.lng;
          });
        }
      }]);

      return CreateRequestComponent;
    }(_shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]);

    CreateRequestComponent.ɵfac = function CreateRequestComponent_Factory(t) {
      return new (t || CreateRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["RequestServiceProxy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["InstallationsServiceProxy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]));
    };

    CreateRequestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CreateRequestComponent,
      selectors: [["app-create-request"]],
      outputs: {
        onSave: "onSave"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 78,
      vars: 54,
      consts: [["autocomplete", "off", 1, "form-horizontal", 3, "ngSubmit"], ["createRequestForm", "ngForm"], [3, "title", "onCloseClick"], [1, "modal-body"], [1, "pt-3", "px-2", 3, "heading"], [1, "form-group", "row", "required"], ["for", "cnic", 1, "col-md-3", "col-form-label"], [1, "col-md-9"], ["type", "number", "name", "cnic", "id", "cnic", "required", "", "minlength", "13", "maxlength", "13", 1, "form-control", 3, "ngModel", "ngModelChange"], ["cnicModel", "ngModel", "cnicEl", ""], [3, "control", "controlEl"], ["for", "name", 1, "col-md-3", "col-form-label"], ["type", "text", "name", "name", "id", "name", "required", "", "minlength", "2", "maxlength", "32", 1, "form-control", 3, "ngModel", "ngModelChange"], ["nameModel", "ngModel", "nameEl", ""], ["for", "address", 1, "col-md-3", "col-form-label"], ["type", "text", "name", "address", "id", "address", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "city", 1, "col-md-3", "col-form-label"], [1, "col-md-5"], ["name", "city", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["city", ""], [3, "value", "disabled"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "lat", 1, "col-md-3", "col-form-label"], ["type", "number", "name", "lat", "id", "lat", "required", "", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["latModel", "ngModel", "latEl", ""], [1, "col-md-4"], ["href", "javascript:void(0);", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-map-marker-alt"], ["for", "lng", 1, "col-md-3", "col-form-label"], ["type", "number", "name", "lng", "id", "lng", "required", "", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["lngModel", "ngModel", "lngEl", ""], [1, "form-group", "row", "mb-0"], ["for", "description", 1, "col-md-3", "col-form-label"], ["type", "text", "name", "description", "id", "description", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "file", "multiple", "multiple", 3, "change"], [3, "cancelDisabled", "saveDisabled", "onCancelClick"], [3, "value"]],
      template: function CreateRequestComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreateRequestComponent_Template_form_ngSubmit_0_listener() {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "abp-modal-header", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCloseClick", function CreateRequestComponent_Template_abp_modal_header_onCloseClick_2_listener() {
            return ctx.bsModalRef.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tabset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tab", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateRequestComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.request.cnic = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "abp-validation-summary", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateRequestComponent_Template_input_ngModelChange_22_listener($event) {
            return ctx.request.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "abp-validation-summary", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "textarea", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateRequestComponent_Template_textarea_ngModelChange_31_listener($event) {
            return ctx.request.address = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "select", 18, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateRequestComponent_Template_select_ngModelChange_38_listener($event) {
            return ctx.request.cityId = $event;
          })("change", function CreateRequestComponent_Template_select_change_38_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);

            return ctx.cityChanged(_r5.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "--Select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, CreateRequestComponent_option_42_Template, 2, 2, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "abp-validation-summary", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 23, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateRequestComponent_Template_input_ngModelChange_49_listener($event) {
            return ctx.request.lat = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "abp-validation-summary", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateRequestComponent_Template_a_click_54_listener() {
            return ctx.pointLocationOnMap();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Point location on Map \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "input", 29, 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateRequestComponent_Template_input_ngModelChange_62_listener($event) {
            return ctx.request.lng = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "abp-validation-summary", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](69, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "textarea", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateRequestComponent_Template_textarea_ngModelChange_71_listener($event) {
            return ctx.request.description = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "              ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "tab", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](74, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateRequestComponent_Template_input_change_76_listener($event) {
            return ctx.onFileChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "abp-modal-footer", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCancelClick", function CreateRequestComponent_Template_abp_modal_footer_onCancelClick_77_listener() {
            return ctx.bsModalRef.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50);

          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](51);

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](63);

          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 34, "CreateNewRequest"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("heading", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 36, "Details"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 38, "CNIC"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.request.cnic);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", _r1)("controlEl", _r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 40, "Name"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.request.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", _r3)("controlEl", _r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 42, "Address"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.request.address);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 44, "City"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.request.cityId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 0)("disabled", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cities);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", _r9)("controlEl", _r10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 46, "Lat"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.request.lat)("disabled", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", _r7)("controlEl", _r8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](60, 48, "Lng"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.request.lng)("disabled", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", _r9)("controlEl", _r10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](69, 50, "RequestDescription"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.request.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("heading", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](74, 52, "Request metadata"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cancelDisabled", ctx.saving)("saveDisabled", !_r0.form.valid || ctx.saving);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _shared_components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_7__["AbpModalHeaderComponent"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__["TabsetComponent"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__["TabDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _shared_components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_9__["AbpValidationSummaryComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _shared_components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_11__["AbpModalFooterComponent"]],
      pipes: [_shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_12__["LocalizePipe"]],
      styles: [".modal-body[_ngcontent-%COMP%]{\r\n    max-height: calc(80vh - 200px);\r\n    overflow-y: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVxdWVzdHMvY3JlYXRlLXJlcXVlc3QvY3JlYXRlLXJlcXVlc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtJQUM5QixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9yZXF1ZXN0cy9jcmVhdGUtcmVxdWVzdC9jcmVhdGUtcmVxdWVzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWJvZHl7XHJcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDgwdmggLSAyMDBweCk7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateRequestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-create-request',
          templateUrl: './create-request.component.html',
          styleUrls: ['./create-request.component.css']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["RequestServiceProxy"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"]
        }, {
          type: _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["InstallationsServiceProxy"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]
        }];
      }, {
        onSave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/requests/edit-request/edit-request.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/requests/edit-request/edit-request.component.ts ***!
    \*****************************************************************/

  /*! exports provided: EditRequestComponent */

  /***/
  function srcAppRequestsEditRequestEditRequestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditRequestComponent", function () {
      return EditRequestComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @shared/service-proxies/service-proxies */
    "./src/shared/service-proxies/service-proxies.ts");
    /* harmony import */


    var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @shared/app-component-base */
    "./src/shared/app-component-base.ts");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../shared/components/modal/abp-modal-header.component */
    "./src/shared/components/modal/abp-modal-header.component.ts");
    /* harmony import */


    var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-bootstrap/tabs */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js");
    /* harmony import */


    var _shared_components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../shared/components/validation/abp-validation.summary.component */
    "./src/shared/components/validation/abp-validation.summary.component.ts");
    /* harmony import */


    var _shared_components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../shared/components/modal/abp-modal-footer.component */
    "./src/shared/components/modal/abp-modal-footer.component.ts");
    /* harmony import */


    var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @shared/pipes/localize.pipe */
    "./src/shared/pipes/localize.pipe.ts");

    var EditRequestComponent = /*#__PURE__*/function (_shared_app_component12) {
      _inherits(EditRequestComponent, _shared_app_component12);

      var _super15 = _createSuper(EditRequestComponent);

      function EditRequestComponent(injector, _requestService, bsModalRef) {
        var _this113;

        _classCallCheck(this, EditRequestComponent);

        _this113 = _super15.call(this, injector);
        _this113._requestService = _requestService;
        _this113.bsModalRef = bsModalRef;
        _this113.saving = false;
        _this113.request = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_1__["RequestDto"]();
        _this113.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this113;
      }

      _createClass(EditRequestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this114 = this;

          this._requestService.get(this.id).subscribe(function (result) {
            _this114.request = result;
          });
        }
      }, {
        key: "save",
        value: function save() {
          var _this115 = this;

          this.saving = true;
          var request = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_1__["RequestDto"]();
          request.init(this.request);

          this._requestService.update(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            _this115.saving = false;
          })).subscribe(function () {
            _this115.notify.info(_this115.l('SavedSuccessfully'));

            _this115.bsModalRef.hide();

            _this115.onSave.emit();
          });
        }
      }]);

      return EditRequestComponent;
    }(_shared_app_component_base__WEBPACK_IMPORTED_MODULE_2__["AppComponentBase"]);

    EditRequestComponent.ɵfac = function EditRequestComponent_Factory(t) {
      return new (t || EditRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_1__["RequestServiceProxy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"]));
    };

    EditRequestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditRequestComponent,
      selectors: [["app-edit-request"]],
      outputs: {
        onSave: "onSave"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 34,
      vars: 24,
      consts: [["autocomplete", "off", 1, "form-horizontal", 3, "ngSubmit"], ["editRequestForm", "ngForm"], [3, "title", "onCloseClick"], [1, "modal-body"], [1, "pt-3", "px-2", 3, "heading"], [1, "form-group", "row", "required"], ["for", "cnic", 1, "col-md-3", "col-form-label"], [1, "col-md-9"], ["type", "number", "name", "cnic", "id", "cnic", "minlength", "13", "maxlength", "13", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["cnicModel", "ngModel", "cnicEl", ""], [3, "control", "controlEl"], ["for", "name", 1, "col-md-3", "col-form-label"], ["type", "text", "name", "name", "id", "name", "required", "", "minlength", "2", "maxlength", "32", 1, "form-control", 3, "ngModel", "ngModelChange"], ["nameModel", "ngModel", "nameEl", ""], [1, "form-group", "row", "mb-0"], ["for", "description", 1, "col-md-3", "col-form-label"], ["type", "text", "name", "description", "id", "description", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "cancelDisabled", "saveDisabled", "onCancelClick"]],
      template: function EditRequestComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditRequestComponent_Template_form_ngSubmit_0_listener() {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "abp-modal-header", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCloseClick", function EditRequestComponent_Template_abp_modal_header_onCloseClick_2_listener() {
            return ctx.bsModalRef.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tabset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tab", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditRequestComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.request.cnic = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "abp-validation-summary", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditRequestComponent_Template_input_ngModelChange_22_listener($event) {
            return ctx.request.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "abp-validation-summary", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "textarea", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditRequestComponent_Template_textarea_ngModelChange_31_listener($event) {
            return ctx.request.description = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "              ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "abp-modal-footer", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCancelClick", function EditRequestComponent_Template_abp_modal_footer_onCancelClick_33_listener() {
            return ctx.bsModalRef.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 14, "EditRequest"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("heading", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 16, "Details"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 18, "CNIC"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.request.cnic);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", _r1)("controlEl", _r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 20, "Name"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.request.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", _r3)("controlEl", _r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 22, "RequestDescription"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.request.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cancelDisabled", ctx.saving)("saveDisabled", !_r0.form.valid || ctx.saving);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _shared_components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_6__["AbpModalHeaderComponent"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__["TabsetComponent"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__["TabDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _shared_components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_8__["AbpValidationSummaryComponent"], _shared_components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_9__["AbpModalFooterComponent"]],
      pipes: [_shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_10__["LocalizePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcXVlc3RzL2VkaXQtcmVxdWVzdC9lZGl0LXJlcXVlc3QuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditRequestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edit-request',
          templateUrl: './edit-request.component.html',
          styleUrls: ['./edit-request.component.css']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_1__["RequestServiceProxy"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"]
        }];
      }, {
        onSave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/requests/request-details/request-details.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/requests/request-details/request-details.component.ts ***!
    \***********************************************************************/

  /*! exports provided: RequestDetailsComponent */

  /***/
  function srcAppRequestsRequestDetailsRequestDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestDetailsComponent", function () {
      return RequestDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @shared/app-component-base */
    "./src/shared/app-component-base.ts");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @shared/service-proxies/service-proxies */
    "./src/shared/service-proxies/service-proxies.ts");
    /* harmony import */


    var _shared_components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/components/modal/abp-modal-header.component */
    "./src/shared/components/modal/abp-modal-header.component.ts");
    /* harmony import */


    var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-bootstrap/tabs */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @shared/pipes/localize.pipe */
    "./src/shared/pipes/localize.pipe.ts");

    function RequestDetailsComponent_div_9_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var image_r2 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", image_r2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.requestImageUrl + ctx_r1.request.id + "/" + image_r2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function RequestDetailsComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RequestDetailsComponent_div_9_div_1_Template, 4, 2, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.requestDetails.images);
      }
    }

    var RequestDetailsComponent = /*#__PURE__*/function (_shared_app_component13) {
      _inherits(RequestDetailsComponent, _shared_app_component13);

      var _super16 = _createSuper(RequestDetailsComponent);

      function RequestDetailsComponent(injector, _requestService, bsModalRef) {
        var _this116;

        _classCallCheck(this, RequestDetailsComponent);

        _this116 = _super16.call(this, injector);
        _this116._requestService = _requestService;
        _this116.bsModalRef = bsModalRef;
        _this116.requestDetails = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["RequestDetailsDto"]();
        _this116.loaded = false;
        return _this116;
      }

      _createClass(RequestDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this117 = this;

          this._requestService.getRequestDetails(this.request.id).subscribe(function (result) {
            _this117.requestDetails = result;
            _this117.loaded = true;
          });
        }
      }]);

      return RequestDetailsComponent;
    }(_shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]);

    RequestDetailsComponent.ɵfac = function RequestDetailsComponent_Factory(t) {
      return new (t || RequestDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["RequestServiceProxy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]));
    };

    RequestDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RequestDetailsComponent,
      selectors: [["app-request-details"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 14,
      vars: 12,
      consts: [[3, "title", "onCloseClick"], [1, "modal-body"], [1, "pt-3", "px-2", 3, "heading"], [1, "container"], ["class", "row", 4, "ngIf"], [1, "modal-footer", "justify-content-between"], ["type", "button", 1, "btn", "btn-default", 3, "click"], [1, "row"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [1, "thumbnail"], ["target", "_blank", 3, "href"], ["alt", "Lights", 1, "img-rounded", "set-img", 3, "src"]],
      template: function RequestDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "abp-modal-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCloseClick", function RequestDetailsComponent_Template_abp_modal_header_onCloseClick_0_listener() {
            return ctx.bsModalRef.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tabset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tab", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tab", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RequestDetailsComponent_div_9_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RequestDetailsComponent_Template_button_click_11_listener() {
            return ctx.bsModalRef.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.l("RequestDetails", ctx.request.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("heading", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, "Description"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.requestDetails.description, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("heading", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 8, "Images"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaded == true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 10, "Close"), " ");
        }
      },
      directives: [_shared_components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_4__["AbpModalHeaderComponent"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__["TabsetComponent"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__["TabDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
      pipes: [_shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_7__["LocalizePipe"]],
      styles: [".modal-body[_ngcontent-%COMP%]{\r\n    max-height: calc(80vh - 200px);\r\n    overflow-y: auto;\r\n}\r\n.set-img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding-bottom: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVxdWVzdHMvcmVxdWVzdC1kZXRhaWxzL3JlcXVlc3QtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7RUFDRTtJQUNFLDhCQUE4QjtJQUM5QixnQkFBZ0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9yZXF1ZXN0cy9yZXF1ZXN0LWRldGFpbHMvcmVxdWVzdC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAubW9kYWwtYm9keXtcclxuICAgIG1heC1oZWlnaHQ6IGNhbGMoODB2aCAtIDIwMHB4KTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuLnNldC1pbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-request-details',
          templateUrl: './request-details.component.html',
          styleUrls: ['./request-details.component.css']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["RequestServiceProxy"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/requests/requests.component.ts":
  /*!************************************************!*\
    !*** ./src/app/requests/requests.component.ts ***!
    \************************************************/

  /*! exports provided: RequestsComponent */

  /***/
  function srcAppRequestsRequestsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestsComponent", function () {
      return RequestsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @shared/animations/routerTransition */
    "./src/shared/animations/routerTransition.ts");
    /* harmony import */


    var _shared_paged_listing_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @shared/paged-listing-component-base */
    "./src/shared/paged-listing-component-base.ts");
    /* harmony import */


    var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @shared/service-proxies/service-proxies */
    "./src/shared/service-proxies/service-proxies.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _create_request_create_request_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./create-request/create-request.component */
    "./src/app/requests/create-request/create-request.component.ts");
    /* harmony import */


    var _edit_request_edit_request_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./edit-request/edit-request.component */
    "./src/app/requests/edit-request/edit-request.component.ts");
    /* harmony import */


    var _request_details_request_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./request-details/request-details.component */
    "./src/app/requests/request-details/request-details.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_directives_busy_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../shared/directives/busy.directive */
    "./src/shared/directives/busy.directive.ts");
    /* harmony import */


    var _shared_components_pagination_abp_pagination_controls_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../shared/components/pagination/abp-pagination-controls.component */
    "./src/shared/components/pagination/abp-pagination-controls.component.ts");
    /* harmony import */


    var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @shared/pipes/localize.pipe */
    "./src/shared/pipes/localize.pipe.ts");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");

    function RequestsComponent_option_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var city_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", city_r2.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](city_r2.name);
      }
    }

    function RequestsComponent_tr_51_span_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var request_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", request_r3.status.status, " ");
      }
    }

    function RequestsComponent_tr_51_span_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var request_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", request_r3.status.status, " ");
      }
    }

    function RequestsComponent_tr_51_span_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var request_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", request_r3.status.status, " ");
      }
    }

    function RequestsComponent_tr_51_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RequestsComponent_tr_51_span_10_Template, 2, 1, "span", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RequestsComponent_tr_51_span_11_Template, 2, 1, "span", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RequestsComponent_tr_51_span_12_Template, 2, 1, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RequestsComponent_tr_51_Template_a_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var request_r3 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.approveRequest(request_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "localize");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RequestsComponent_tr_51_Template_a_click_22_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var request_r3 = ctx.$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.declineRequest(request_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "localize");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RequestsComponent_tr_51_Template_a_click_26_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var request_r3 = ctx.$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.getDetails(request_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "localize");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var request_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](request_r3.cnic);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](request_r3.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](request_r3.lat);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](request_r3.lng);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r3.status.id == 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r3.status.id == 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r3.status.id == 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 10, "Approve"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 12, "Decline"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 14, "Details"), "");
      }
    }

    var _c0 = function _c0(a1, a2, a3) {
      return {
        id: "server",
        itemsPerPage: a1,
        currentPage: a2,
        totalItems: a3
      };
    };

    var PagedRequestsRequestDto = /*#__PURE__*/function (_shared_paged_listing3) {
      _inherits(PagedRequestsRequestDto, _shared_paged_listing3);

      var _super17 = _createSuper(PagedRequestsRequestDto);

      function PagedRequestsRequestDto() {
        _classCallCheck(this, PagedRequestsRequestDto);

        return _super17.apply(this, arguments);
      }

      return PagedRequestsRequestDto;
    }(_shared_paged_listing_component_base__WEBPACK_IMPORTED_MODULE_2__["PagedRequestDto"]);

    var RequestsComponent = /*#__PURE__*/function (_shared_paged_listing4) {
      _inherits(RequestsComponent, _shared_paged_listing4);

      var _super18 = _createSuper(RequestsComponent);

      function RequestsComponent(injector, _requestService, _modalService, route, _installationService) {
        var _this118;

        _classCallCheck(this, RequestsComponent);

        _this118 = _super18.call(this, injector);
        _this118._requestService = _requestService;
        _this118._modalService = _modalService;
        _this118.route = route;
        _this118._installationService = _installationService;
        _this118.requests = [];
        _this118.cities = [];
        _this118.keyword = '';
        _this118.selectedCity = 1;

        _this118.route.params.subscribe(function (param) {
          _this118.status = param.status;

          _this118.refresh();
        });

        return _this118;
      }

      _createClass(RequestsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this119 = this;

          this._installationService.getAllCities().subscribe(function (result) {
            _this119.cities = result.items;
          });
        }
      }, {
        key: "list",
        value: function list(request, pageNumber, finishedCallback) {
          var _this120 = this;

          request.keyword = this.keyword;

          this._requestService.getAll(request.keyword, this.status, this.selectedCity, request.skipCount, request.maxResultCount).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            finishedCallback();
          })).subscribe(function (result) {
            _this120.requests = result.items;

            _this120.showPaging(result, pageNumber);
          });
        }
      }, {
        key: "delete",
        value: function _delete(request) {
          var _this121 = this;

          abp.message.confirm(this.l('RequestDeleteWarningMessage', request.name), undefined, function (result) {
            if (result) {
              _this121._requestService["delete"](request.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
                abp.notify.success(_this121.l('SuccessfullyDeleted'));

                _this121.refresh();
              })).subscribe(function () {});
            }
          });
        }
      }, {
        key: "listCityChange",
        value: function listCityChange() {
          this.refresh();
        }
      }, {
        key: "createRequest",
        value: function createRequest() {
          this.showCreateOrEditRequestDialog();
        }
      }, {
        key: "editRequest",
        value: function editRequest(request) {
          this.showCreateOrEditRequestDialog(request.id);
        }
      }, {
        key: "showCreateOrEditRequestDialog",
        value: function showCreateOrEditRequestDialog(id) {
          var _this122 = this;

          var createOrEditRequestDialog;

          if (!id) {
            createOrEditRequestDialog = this._modalService.show(_create_request_create_request_component__WEBPACK_IMPORTED_MODULE_6__["CreateRequestComponent"], {
              "class": 'modal-lg'
            });
          } else {
            createOrEditRequestDialog = this._modalService.show(_edit_request_edit_request_component__WEBPACK_IMPORTED_MODULE_7__["EditRequestComponent"], {
              "class": 'modal-lg',
              initialState: {
                id: id
              }
            });
          }

          createOrEditRequestDialog.content.onSave.subscribe(function () {
            _this122.refresh();
          });
        }
      }, {
        key: "approveRequest",
        value: function approveRequest(request) {
          var _this123 = this;

          abp.message.confirm(this.l('RequestApproveWarningMessage', 'R#' + request.id), undefined, function (result) {
            if (result) {
              _this123._requestService.approveRequest(request.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
                abp.notify.success(_this123.l('ApprovedSuccessfully'));

                _this123.refresh();
              })).subscribe(function () {});
            }
          });
        }
      }, {
        key: "declineRequest",
        value: function declineRequest(request) {
          var _this124 = this;

          abp.message.confirm(this.l('RequestDeclineWarningMessage', 'R#' + request.id), undefined, function (result) {
            if (result) {
              _this124._requestService.declineRequest(request.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
                abp.notify.success(_this124.l('DeclinedSuccessfully'));

                _this124.refresh();
              })).subscribe(function () {});
            }
          });
        }
      }, {
        key: "getDetails",
        value: function getDetails(request) {
          this._modalService.show(_request_details_request_details_component__WEBPACK_IMPORTED_MODULE_8__["RequestDetailsComponent"], {
            "class": 'modal-lg',
            initialState: {
              request: request
            }
          });
        }
      }]);

      return RequestsComponent;
    }(_shared_paged_listing_component_base__WEBPACK_IMPORTED_MODULE_2__["PagedListingComponentBase"]);

    RequestsComponent.ɵfac = function RequestsComponent_Factory(t) {
      return new (t || RequestsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["RequestServiceProxy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["InstallationsServiceProxy"]));
    };

    RequestsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RequestsComponent,
      selectors: [["app-requests"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 65,
      vars: 44,
      consts: [[1, "content-header"], [1, "container-fluid"], [1, "row"], [1, "col-6"], [1, "col-6", "text-right"], [1, "col-10", "text-right"], ["name", "city", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-2", "text-right"], ["href", "javascript:;", 1, "btn", "bg-blue", 3, "click"], [1, "fa", "fa-plus-square"], [1, "content", "px-2"], [1, "card"], [1, "card-header"], [1, "input-group"], [1, "input-group-prepend"], ["type", "button", 1, "btn", "bg-blue", 3, "click"], [1, "fas", "fa-search"], ["type", "text", "name", "keyword", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange", "keyup.enter"], [1, "card-body", "table-responsive", "p-0"], [1, "table", "table-hover", "text-nowrap", 3, "busy"], [1, "bg-light"], [4, "ngFor", "ngForOf"], [1, "card-footer", "bg-light", "border-top"], [1, "col-sm-4", "col-12", "text-sm-left", "text-center"], [1, "btn", "btn-secondary", 3, "click"], [1, "fas", "fa-redo-alt"], [1, "col-sm-4", "col-12", "text-center"], [1, "mb-0", "my-2"], [1, "col-sm-4", "col-12"], [1, "float-sm-right", "m-auto"], ["id", "server", 3, "pageChange"], [3, "value"], ["class", "badge badge-info mx-1", 4, "ngIf"], ["class", "badge badge-success mx-1", 4, "ngIf"], ["class", "badge badge-danger mx-1", 4, "ngIf"], [1, "dropdown"], ["type", "button", "id", "dropdownMenu2", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false"], [1, "fas", "fa-ellipsis-v"], [1, "dropdown-menu", "dropdown-primary"], [1, "dropdown-item", 3, "click"], [1, "fa", "fa-check"], [1, "fa", "fa-times"], [1, "fa", "fa-info"], [1, "badge", "badge-info", "mx-1"], [1, "badge", "badge-success", "mx-1"], [1, "badge", "badge-danger", "mx-1"]],
      template: function RequestsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RequestsComponent_Template_select_change_11_listener() {
            return ctx.listCityChange();
          })("ngModelChange", function RequestsComponent_Template_select_ngModelChange_11_listener($event) {
            return ctx.selectedCity = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RequestsComponent_option_12_Template, 2, 2, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RequestsComponent_Template_a_click_14_listener() {
            return ctx.createRequest();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "section", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RequestsComponent_Template_button_click_24_listener() {
            return ctx.getDataPage(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RequestsComponent_Template_input_ngModelChange_26_listener($event) {
            return ctx.keyword = $event;
          })("keyup.enter", function RequestsComponent_Template_input_keyup_enter_26_listener() {
            return ctx.getDataPage(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "table", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "thead", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, RequestsComponent_tr_51_Template, 30, 16, "tr", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "paginate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RequestsComponent_Template_button_click_56_listener() {
            return ctx.refresh();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](61, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "abp-pagination-controls", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function RequestsComponent_Template_abp_pagination_controls_pageChange_64_listener($event) {
            return ctx.getDataPage($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routerTransition", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 16, "Requests"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedCity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cities);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 18, "Create"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 20, "SearchWithThreeDot"))("ngModel", ctx.keyword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("busy", ctx.isTableLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 22, "CNIC"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 24, "Name"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 26, "Lat"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 28, "Lng"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 30, "Status"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 32, "Actions"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](52, 34, ctx.requests, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](40, _c0, ctx.pageSize, ctx.pageNumber, ctx.totalItems)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](61, 37, "TotalRecordsCount", ctx.totalItems), " ");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _shared_directives_busy_directive__WEBPACK_IMPORTED_MODULE_12__["BusyDirective"], _shared_components_pagination_abp_pagination_controls_component__WEBPACK_IMPORTED_MODULE_13__["AbpPaginationControlsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"]],
      pipes: [_shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_14__["LocalizePipe"], ngx_pagination__WEBPACK_IMPORTED_MODULE_15__["PaginatePipe"]],
      encapsulation: 2,
      data: {
        animation: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_1__["appModuleAnimation"])()]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-requests',
          templateUrl: './requests.component.html',
          animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_1__["appModuleAnimation"])()]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["RequestServiceProxy"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
        }, {
          type: _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["InstallationsServiceProxy"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/roles/create-role/create-role-dialog.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/roles/create-role/create-role-dialog.component.ts ***!
    \*******************************************************************/

  /*! exports provided: CreateRoleDialogComponent */

  /***/
  function srcAppRolesCreateRoleCreateRoleDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateRoleDialogComponent", function () {
      return CreateRoleDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @shared/app-component-base */
    "./src/shared/app-component-base.ts");
    /* harmony import */


    var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @shared/service-proxies/service-proxies */
    "./src/shared/service-proxies/service-proxies.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../shared/components/modal/abp-modal-header.component */
    "./src/shared/components/modal/abp-modal-header.component.ts");
    /* harmony import */


    var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-bootstrap/tabs */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js");
    /* harmony import */


    var _shared_components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../shared/components/validation/abp-validation.summary.component */
    "./src/shared/components/validation/abp-validation.summary.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../shared/components/modal/abp-modal-footer.component */
    "./src/shared/components/modal/abp-modal-footer.component.ts");
    /* harmony import */


    var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @shared/pipes/localize.pipe */
    "./src/shared/pipes/localize.pipe.ts");

    function CreateRoleDialogComponent_ng_container_36_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateRoleDialogComponent_ng_container_36_Template_input_change_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var permission_r6 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.onPermissionChange(permission_r6, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var permission_r6 = ctx.$implicit;
        var i_r7 = ctx.index;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "permission_" + i_r7)("checked", ctx_r5.isPermissionChecked(permission_r6.name));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "permission_" + i_r7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", permission_r6.displayName, " ");
      }
    }

    var CreateRoleDialogComponent = /*#__PURE__*/function (_shared_app_component14) {
      _inherits(CreateRoleDialogComponent, _shared_app_component14);

      var _super19 = _createSuper(CreateRoleDialogComponent);

      function CreateRoleDialogComponent(injector, _roleService, bsModalRef) {
        var _this125;

        _classCallCheck(this, CreateRoleDialogComponent);

        _this125 = _super19.call(this, injector);
        _this125._roleService = _roleService;
        _this125.bsModalRef = bsModalRef;
        _this125.saving = false;
        _this125.role = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["RoleDto"]();
        _this125.permissions = [];
        _this125.checkedPermissionsMap = {};
        _this125.defaultPermissionCheckedStatus = true;
        _this125.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this125;
      }

      _createClass(CreateRoleDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this126 = this;

          this._roleService.getAllPermissions().subscribe(function (result) {
            _this126.permissions = result.items;

            _this126.setInitialPermissionsStatus();
          });
        }
      }, {
        key: "setInitialPermissionsStatus",
        value: function setInitialPermissionsStatus() {
          var _this127 = this;

          lodash__WEBPACK_IMPORTED_MODULE_3__["map"](this.permissions, function (item) {
            _this127.checkedPermissionsMap[item.name] = _this127.isPermissionChecked(item.name);
          });
        }
      }, {
        key: "isPermissionChecked",
        value: function isPermissionChecked(permissionName) {
          // just return default permission checked status
          // it's better to use a setting
          return this.defaultPermissionCheckedStatus;
        }
      }, {
        key: "onPermissionChange",
        value: function onPermissionChange(permission, $event) {
          this.checkedPermissionsMap[permission.name] = $event.target.checked;
        }
      }, {
        key: "getCheckedPermissions",
        value: function getCheckedPermissions() {
          var permissions = [];
          lodash__WEBPACK_IMPORTED_MODULE_3__["forEach"](this.checkedPermissionsMap, function (value, key) {
            if (value) {
              permissions.push(key);
            }
          });
          return permissions;
        }
      }, {
        key: "save",
        value: function save() {
          var _this128 = this;

          this.saving = true;
          var role = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["CreateRoleDto"]();
          role.init(this.role);
          role.grantedPermissions = this.getCheckedPermissions();

          this._roleService.create(role).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
            _this128.saving = false;
          })).subscribe(function () {
            _this128.notify.info(_this128.l('SavedSuccessfully'));

            _this128.bsModalRef.hide();

            _this128.onSave.emit();
          });
        }
      }]);

      return CreateRoleDialogComponent;
    }(_shared_app_component_base__WEBPACK_IMPORTED_MODULE_4__["AppComponentBase"]);

    CreateRoleDialogComponent.ɵfac = function CreateRoleDialogComponent_Factory(t) {
      return new (t || CreateRoleDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["RoleServiceProxy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]));
    };

    CreateRoleDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CreateRoleDialogComponent,
      selectors: [["ng-component"]],
      outputs: {
        onSave: "onSave"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 38,
      vars: 28,
      consts: [["autocomplete", "off", 1, "form-horizontal", 3, "ngSubmit"], ["createRoleForm", "ngForm"], [3, "title", "onCloseClick"], [1, "modal-body"], [1, "pt-3", "px-2", 3, "heading"], [1, "form-group", "row", "required"], ["for", "name", 1, "col-md-3", "col-form-label"], [1, "col-md-9"], ["type", "text", "name", "name", "id", "name", "required", "", "minlength", "2", "maxlength", "32", 1, "form-control", 3, "ngModel", "ngModelChange"], ["nameModel", "ngModel", "nameEl", ""], [3, "control", "controlEl"], ["for", "displayName", 1, "col-md-3", "col-form-label"], ["type", "text", "name", "displayName", "id", "displayName", "required", "", "minlength", "2", "maxlength", "32", 1, "form-control", 3, "ngModel", "ngModelChange"], ["displayNameModel", "ngModel", "displayNameEl", ""], [1, "form-group", "row", "mb-0"], ["for", "description", 1, "col-md-3", "col-form-label"], ["type", "text", "name", "description", "id", "description", 1, "form-control", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], [3, "cancelDisabled", "saveDisabled", "onCancelClick"], [1, "col-md-6"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", 1, "custom-control-input", 3, "id", "checked", "change"], [1, "custom-control-label", 3, "for"]],
      template: function CreateRoleDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreateRoleDialogComponent_Template_form_ngSubmit_0_listener() {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "abp-modal-header", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCloseClick", function CreateRoleDialogComponent_Template_abp_modal_header_onCloseClick_2_listener() {
            return ctx.bsModalRef.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tabset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tab", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateRoleDialogComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.role.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "abp-validation-summary", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateRoleDialogComponent_Template_input_ngModelChange_22_listener($event) {
            return ctx.role.displayName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "abp-validation-summary", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "textarea", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateRoleDialogComponent_Template_textarea_ngModelChange_31_listener($event) {
            return ctx.role.description = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tab", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, CreateRoleDialogComponent_ng_container_36_Template, 6, 4, "ng-container", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "abp-modal-footer", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCancelClick", function CreateRoleDialogComponent_Template_abp_modal_footer_onCancelClick_37_listener() {
            return ctx.bsModalRef.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 16, "CreateNewRole"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("heading", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 18, "Details"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 20, "Name"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.role.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", _r1)("controlEl", _r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 22, "DisplayName"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.role.displayName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", _r3)("controlEl", _r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 24, "RoleDescription"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.role.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("heading", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 26, "Permissions"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.permissions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cancelDisabled", ctx.saving)("saveDisabled", !_r0.form.valid || ctx.saving);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _shared_components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_7__["AbpModalHeaderComponent"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__["TabsetComponent"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__["TabDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _shared_components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_9__["AbpValidationSummaryComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _shared_components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_11__["AbpModalFooterComponent"]],
      pipes: [_shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_12__["LocalizePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateRoleDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: 'create-role-dialog.component.html'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["RoleServiceProxy"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]
        }];
      }, {
        onSave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/roles/edit-role/edit-role-dialog.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/roles/edit-role/edit-role-dialog.component.ts ***!
    \***************************************************************/

  /*! exports provided: EditRoleDialogComponent */

  /***/
  function srcAppRolesEditRoleEditRoleDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditRoleDialogComponent", function () {
      return EditRoleDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @shared/app-component-base */
    "./src/shared/app-component-base.ts");
    /* harmony import */


    var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @shared/service-proxies/service-proxies */
    "./src/shared/service-proxies/service-proxies.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../shared/components/modal/abp-modal-header.component */
    "./src/shared/components/modal/abp-modal-header.component.ts");
    /* harmony import */


    var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-bootstrap/tabs */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js");
    /* harmony import */


    var _shared_components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../shared/components/validation/abp-validation.summary.component */
    "./src/shared/components/validation/abp-validation.summary.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../shared/components/modal/abp-modal-footer.component */
    "./src/shared/components/modal/abp-modal-footer.component.ts");
    /* harmony import */


    var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @shared/pipes/localize.pipe */
    "./src/shared/pipes/localize.pipe.ts");

    function EditRoleDialogComponent_ng_container_36_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditRoleDialogComponent_ng_container_36_Template_input_change_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var permission_r6 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.onPermissionChange(permission_r6, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var permission_r6 = ctx.$implicit;
        var i_r7 = ctx.index;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "permission_" + i_r7)("checked", ctx_r5.isPermissionChecked(permission_r6.name))("disabled", ctx_r5.role.isStatic);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "permission_" + i_r7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", permission_r6.displayName, " ");
      }
    }

    var EditRoleDialogComponent = /*#__PURE__*/function (_shared_app_component15) {
      _inherits(EditRoleDialogComponent, _shared_app_component15);

      var _super20 = _createSuper(EditRoleDialogComponent);

      function EditRoleDialogComponent(injector, _roleService, bsModalRef) {
        var _this129;

        _classCallCheck(this, EditRoleDialogComponent);

        _this129 = _super20.call(this, injector);
        _this129._roleService = _roleService;
        _this129.bsModalRef = bsModalRef;
        _this129.saving = false;
        _this129.role = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["RoleEditDto"]();
        _this129.checkedPermissionsMap = {};
        _this129.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this129;
      }

      _createClass(EditRoleDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this130 = this;

          this._roleService.getRoleForEdit(this.id).subscribe(function (result) {
            _this130.role = result.role;
            _this130.permissions = result.permissions;
            _this130.grantedPermissionNames = result.grantedPermissionNames;

            _this130.setInitialPermissionsStatus();
          });
        }
      }, {
        key: "setInitialPermissionsStatus",
        value: function setInitialPermissionsStatus() {
          var _this131 = this;

          lodash__WEBPACK_IMPORTED_MODULE_3__["map"](this.permissions, function (item) {
            _this131.checkedPermissionsMap[item.name] = _this131.isPermissionChecked(item.name);
          });
        }
      }, {
        key: "isPermissionChecked",
        value: function isPermissionChecked(permissionName) {
          return lodash__WEBPACK_IMPORTED_MODULE_3__["includes"](this.grantedPermissionNames, permissionName);
        }
      }, {
        key: "onPermissionChange",
        value: function onPermissionChange(permission, $event) {
          this.checkedPermissionsMap[permission.name] = $event.target.checked;
        }
      }, {
        key: "getCheckedPermissions",
        value: function getCheckedPermissions() {
          var permissions = [];
          lodash__WEBPACK_IMPORTED_MODULE_3__["forEach"](this.checkedPermissionsMap, function (value, key) {
            if (value) {
              permissions.push(key);
            }
          });
          return permissions;
        }
      }, {
        key: "save",
        value: function save() {
          var _this132 = this;

          this.saving = true;
          var role = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["RoleDto"]();
          role.init(this.role);
          role.grantedPermissions = this.getCheckedPermissions();

          this._roleService.update(role).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
            _this132.saving = false;
          })).subscribe(function () {
            _this132.notify.info(_this132.l('SavedSuccessfully'));

            _this132.bsModalRef.hide();

            _this132.onSave.emit();
          });
        }
      }]);

      return EditRoleDialogComponent;
    }(_shared_app_component_base__WEBPACK_IMPORTED_MODULE_4__["AppComponentBase"]);

    EditRoleDialogComponent.ɵfac = function EditRoleDialogComponent_Factory(t) {
      return new (t || EditRoleDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["RoleServiceProxy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]));
    };

    EditRoleDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditRoleDialogComponent,
      selectors: [["ng-component"]],
      outputs: {
        onSave: "onSave"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 38,
      vars: 28,
      consts: [["autocomplete", "off", 1, "form-horizontal", 3, "ngSubmit"], ["editRoleForm", "ngForm"], [3, "title", "onCloseClick"], [1, "modal-body"], [1, "pt-3", "px-2", 3, "heading"], [1, "form-group", "row", "required"], ["for", "name", 1, "col-md-3", "col-form-label"], [1, "col-md-9"], ["type", "text", "name", "name", "id", "name", "required", "", "minlength", "2", "maxlength", "32", 1, "form-control", 3, "ngModel", "ngModelChange"], ["nameModel", "ngModel", "nameEl", ""], [3, "control", "controlEl"], ["for", "displayName", 1, "col-md-3", "col-form-label"], ["type", "text", "name", "displayName", "id", "displayName", "required", "", "minlength", "2", "maxlength", "32", 1, "form-control", 3, "ngModel", "ngModelChange"], ["displayNameModel", "ngModel", "displayNameEl", ""], [1, "form-group", "row", "mb-0"], ["for", "description", 1, "col-md-3", "col-form-label"], ["type", "text", "name", "description", "id", "description", 1, "form-control", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], [3, "cancelDisabled", "saveDisabled", "onCancelClick"], [1, "col-md-6"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", 1, "custom-control-input", 3, "id", "checked", "disabled", "change"], [1, "custom-control-label", 3, "for"]],
      template: function EditRoleDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditRoleDialogComponent_Template_form_ngSubmit_0_listener() {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "abp-modal-header", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCloseClick", function EditRoleDialogComponent_Template_abp_modal_header_onCloseClick_2_listener() {
            return ctx.bsModalRef.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tabset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tab", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditRoleDialogComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.role.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "abp-validation-summary", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditRoleDialogComponent_Template_input_ngModelChange_22_listener($event) {
            return ctx.role.displayName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "abp-validation-summary", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "textarea", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditRoleDialogComponent_Template_textarea_ngModelChange_31_listener($event) {
            return ctx.role.description = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tab", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, EditRoleDialogComponent_ng_container_36_Template, 6, 5, "ng-container", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "abp-modal-footer", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCancelClick", function EditRoleDialogComponent_Template_abp_modal_footer_onCancelClick_37_listener() {
            return ctx.bsModalRef.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 16, "EditRole"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("heading", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 18, "Details"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 20, "Name"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.role.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", _r1)("controlEl", _r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 22, "DisplayName"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.role.displayName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", _r3)("controlEl", _r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 24, "RoleDescription"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.role.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("heading", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 26, "Permissions"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.permissions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cancelDisabled", ctx.saving)("saveDisabled", !_r0.form.valid || ctx.saving);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _shared_components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_7__["AbpModalHeaderComponent"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__["TabsetComponent"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__["TabDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _shared_components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_9__["AbpValidationSummaryComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _shared_components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_11__["AbpModalFooterComponent"]],
      pipes: [_shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_12__["LocalizePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditRoleDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: 'edit-role-dialog.component.html'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["RoleServiceProxy"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]
        }];
      }, {
        onSave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/roles/roles.component.ts":
  /*!******************************************!*\
    !*** ./src/app/roles/roles.component.ts ***!
    \******************************************/

  /*! exports provided: RolesComponent */

  /***/
  function srcAppRolesRolesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RolesComponent", function () {
      return RolesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @shared/animations/routerTransition */
    "./src/shared/animations/routerTransition.ts");
    /* harmony import */


    var _shared_paged_listing_component_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @shared/paged-listing-component-base */
    "./src/shared/paged-listing-component-base.ts");
    /* harmony import */


    var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @shared/service-proxies/service-proxies */
    "./src/shared/service-proxies/service-proxies.ts");
    /* harmony import */


    var _create_role_create_role_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./create-role/create-role-dialog.component */
    "./src/app/roles/create-role/create-role-dialog.component.ts");
    /* harmony import */


    var _edit_role_edit_role_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./edit-role/edit-role-dialog.component */
    "./src/app/roles/edit-role/edit-role-dialog.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_directives_busy_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shared/directives/busy.directive */
    "./src/shared/directives/busy.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_components_pagination_abp_pagination_controls_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../shared/components/pagination/abp-pagination-controls.component */
    "./src/shared/components/pagination/abp-pagination-controls.component.ts");
    /* harmony import */


    var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @shared/pipes/localize.pipe */
    "./src/shared/pipes/localize.pipe.ts");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");

    function RolesComponent_tr_37_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolesComponent_tr_37_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var role_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.editRole(role_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "localize");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolesComponent_tr_37_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var role_r1 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4["delete"](role_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "localize");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var role_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](role_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](role_r1.displayName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 4, "Edit"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 6, "Delete"), " ");
      }
    }

    var _c0 = function _c0(a1, a2, a3) {
      return {
        id: "server",
        itemsPerPage: a1,
        currentPage: a2,
        totalItems: a3
      };
    };

    var PagedRolesRequestDto = /*#__PURE__*/function (_shared_paged_listing5) {
      _inherits(PagedRolesRequestDto, _shared_paged_listing5);

      var _super21 = _createSuper(PagedRolesRequestDto);

      function PagedRolesRequestDto() {
        _classCallCheck(this, PagedRolesRequestDto);

        return _super21.apply(this, arguments);
      }

      return PagedRolesRequestDto;
    }(_shared_paged_listing_component_base__WEBPACK_IMPORTED_MODULE_4__["PagedRequestDto"]);

    var RolesComponent = /*#__PURE__*/function (_shared_paged_listing6) {
      _inherits(RolesComponent, _shared_paged_listing6);

      var _super22 = _createSuper(RolesComponent);

      function RolesComponent(injector, _rolesService, _modalService) {
        var _this133;

        _classCallCheck(this, RolesComponent);

        _this133 = _super22.call(this, injector);
        _this133._rolesService = _rolesService;
        _this133._modalService = _modalService;
        _this133.roles = [];
        _this133.keyword = '';
        return _this133;
      }

      _createClass(RolesComponent, [{
        key: "list",
        value: function list(request, pageNumber, finishedCallback) {
          var _this134 = this;

          request.keyword = this.keyword;

          this._rolesService.getAll(request.keyword, request.skipCount, request.maxResultCount).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
            finishedCallback();
          })).subscribe(function (result) {
            _this134.roles = result.items;

            _this134.showPaging(result, pageNumber);
          });
        }
      }, {
        key: "delete",
        value: function _delete(role) {
          var _this135 = this;

          abp.message.confirm(this.l('RoleDeleteWarningMessage', role.displayName), undefined, function (result) {
            if (result) {
              _this135._rolesService["delete"](role.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
                abp.notify.success(_this135.l('SuccessfullyDeleted'));

                _this135.refresh();
              })).subscribe(function () {});
            }
          });
        }
      }, {
        key: "createRole",
        value: function createRole() {
          this.showCreateOrEditRoleDialog();
        }
      }, {
        key: "editRole",
        value: function editRole(role) {
          this.showCreateOrEditRoleDialog(role.id);
        }
      }, {
        key: "showCreateOrEditRoleDialog",
        value: function showCreateOrEditRoleDialog(id) {
          var _this136 = this;

          var createOrEditRoleDialog;

          if (!id) {
            createOrEditRoleDialog = this._modalService.show(_create_role_create_role_dialog_component__WEBPACK_IMPORTED_MODULE_6__["CreateRoleDialogComponent"], {
              "class": 'modal-lg'
            });
          } else {
            createOrEditRoleDialog = this._modalService.show(_edit_role_edit_role_dialog_component__WEBPACK_IMPORTED_MODULE_7__["EditRoleDialogComponent"], {
              "class": 'modal-lg',
              initialState: {
                id: id
              }
            });
          }

          createOrEditRoleDialog.content.onSave.subscribe(function () {
            _this136.refresh();
          });
        }
      }]);

      return RolesComponent;
    }(_shared_paged_listing_component_base__WEBPACK_IMPORTED_MODULE_4__["PagedListingComponentBase"]);

    RolesComponent.ɵfac = function RolesComponent_Factory(t) {
      return new (t || RolesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["RoleServiceProxy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]));
    };

    RolesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RolesComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 51,
      vars: 33,
      consts: [[1, "content-header"], [1, "container-fluid"], [1, "row"], [1, "col-6"], [1, "col-6", "text-right"], ["href", "javascript:;", 1, "btn", "bg-blue", 3, "click"], [1, "fa", "fa-plus-square"], [1, "content", "px-2"], [1, "card"], [1, "card-header"], [1, "input-group"], [1, "input-group-prepend"], ["type", "button", 1, "btn", "bg-blue", 3, "click"], [1, "fas", "fa-search"], ["type", "text", "name", "keyword", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange", "keyup.enter"], [1, "card-body", "table-responsive", "p-0"], [1, "table", "table-hover", "text-nowrap", 3, "busy"], [1, "bg-light"], [2, "width", "200px"], [4, "ngFor", "ngForOf"], [1, "card-footer", "bg-light", "border-top"], [1, "col-sm-4", "col-12", "text-sm-left", "text-center"], [1, "btn", "btn-secondary", 3, "click"], [1, "fas", "fa-redo-alt"], [1, "col-sm-4", "col-12", "text-center"], [1, "mb-0", "my-2"], [1, "col-sm-4", "col-12"], [1, "float-sm-right", "m-auto"], ["id", "server", 3, "pageChange"], ["type", "button", 1, "btn", "btn-sm", "bg-secondary", 3, "click"], [1, "fas", "fa-pencil-alt"], ["type", "button", 1, "btn", "btn-sm", "bg-danger", "mx-2", 3, "click"], [1, "fas", "fa-trash"]],
      template: function RolesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolesComponent_Template_a_click_9_listener() {
            return ctx.createRole();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolesComponent_Template_button_click_19_listener() {
            return ctx.getDataPage(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RolesComponent_Template_input_ngModelChange_21_listener($event) {
            return ctx.keyword = $event;
          })("keyup.enter", function RolesComponent_Template_input_keyup_enter_21_listener() {
            return ctx.getDataPage(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "table", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "thead", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, RolesComponent_tr_37_Template, 14, 8, "tr", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "paginate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolesComponent_Template_button_click_42_listener() {
            return ctx.refresh();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "abp-pagination-controls", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function RolesComponent_Template_abp_pagination_controls_pageChange_50_listener($event) {
            return ctx.getDataPage($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routerTransition", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 11, "Roles"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 13, "Create"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 15, "SearchWithThreeDot"))("ngModel", ctx.keyword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("busy", ctx.isTableLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 17, "RoleName"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 19, "DisplayName"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 21, "Actions"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](38, 23, ctx.roles, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](29, _c0, ctx.pageSize, ctx.pageNumber, ctx.totalItems)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](47, 26, "TotalRecordsCount", ctx.totalItems), " ");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _shared_directives_busy_directive__WEBPACK_IMPORTED_MODULE_9__["BusyDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _shared_components_pagination_abp_pagination_controls_component__WEBPACK_IMPORTED_MODULE_11__["AbpPaginationControlsComponent"]],
      pipes: [_shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_12__["LocalizePipe"], ngx_pagination__WEBPACK_IMPORTED_MODULE_13__["PaginatePipe"]],
      encapsulation: 2,
      data: {
        animation: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_3__["appModuleAnimation"])()]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RolesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './roles.component.html',
          animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_3__["appModuleAnimation"])()]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["RoleServiceProxy"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/tenants/create-tenant/create-tenant-dialog.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/tenants/create-tenant/create-tenant-dialog.component.ts ***!
    \*************************************************************************/

  /*! exports provided: CreateTenantDialogComponent */

  /***/
  function srcAppTenantsCreateTenantCreateTenantDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateTenantDialogComponent", function () {
      return CreateTenantDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @shared/app-component-base */
    "./src/shared/app-component-base.ts");
    /* harmony import */


    var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @shared/service-proxies/service-proxies */
    "./src/shared/service-proxies/service-proxies.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../shared/components/modal/abp-modal-header.component */
    "./src/shared/components/modal/abp-modal-header.component.ts");
    /* harmony import */


    var _shared_components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../shared/components/validation/abp-validation.summary.component */
    "./src/shared/components/validation/abp-validation.summary.component.ts");
    /* harmony import */


    var _shared_components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../shared/components/modal/abp-modal-footer.component */
    "./src/shared/components/modal/abp-modal-footer.component.ts");
    /* harmony import */


    var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @shared/pipes/localize.pipe */
    "./src/shared/pipes/localize.pipe.ts");

    var CreateTenantDialogComponent = /*#__PURE__*/function (_shared_app_component16) {
      _inherits(CreateTenantDialogComponent, _shared_app_component16);

      var _super23 = _createSuper(CreateTenantDialogComponent);

      function CreateTenantDialogComponent(injector, _tenantService, bsModalRef) {
        var _this137;

        _classCallCheck(this, CreateTenantDialogComponent);

        _this137 = _super23.call(this, injector);
        _this137._tenantService = _tenantService;
        _this137.bsModalRef = bsModalRef;
        _this137.saving = false;
        _this137.tenant = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["CreateTenantDto"]();
        _this137.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this137;
      }

      _createClass(CreateTenantDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.tenant.isActive = true;
        }
      }, {
        key: "save",
        value: function save() {
          var _this138 = this;

          this.saving = true;

          this._tenantService.create(this.tenant).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
            _this138.saving = false;
          })).subscribe(function () {
            _this138.notify.info(_this138.l('SavedSuccessfully'));

            _this138.bsModalRef.hide();

            _this138.onSave.emit();
          });
        }
      }]);

      return CreateTenantDialogComponent;
    }(_shared_app_component_base__WEBPACK_IMPORTED_MODULE_3__["AppComponentBase"]);

    CreateTenantDialogComponent.ɵfac = function CreateTenantDialogComponent_Factory(t) {
      return new (t || CreateTenantDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["TenantServiceProxy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]));
    };

    CreateTenantDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CreateTenantDialogComponent,
      selectors: [["ng-component"]],
      outputs: {
        onSave: "onSave"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 50,
      vars: 35,
      consts: [["autocomplete", "off", 1, "form-horizontal", 3, "ngSubmit"], ["createTenantForm", "ngForm"], [3, "title", "onCloseClick"], [1, "modal-body"], [1, "form-group", "row", "required"], ["for", "tenancyName", 1, "col-md-3", "col-form-label"], [1, "col-md-9"], ["type", "text", "name", "tenancyName", "id", "tenancyName", "minlength", "2", "maxlength", "64", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["tenancyNameModel", "ngModel", "tenancyNameEl", ""], [3, "control", "controlEl"], ["for", "name", 1, "col-md-3", "col-form-label"], ["type", "text", "name", "name", "id", "name", "maxlength", "128", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["nameModel", "ngModel", "nameEl", ""], [1, "form-group", "row"], ["for", "connectionString", 1, "col-md-3", "col-form-label"], ["type", "text", "name", "connectionString", "id", "connectionString", "maxlength", "1024", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "adminEmailAddress", 1, "col-md-3", "col-form-label"], ["type", "email", "name", "adminEmailAddress", "id", "adminEmailAddress", "pattern", "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{1,})+$", "maxlength", "256", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["adminEmailAddressModel", "ngModel", "adminEmailAddressEl", ""], [1, "form-group", "row", "mb-0"], [1, "col-md-3", "col-form-label"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "name", "isActive", "id", "isActive", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "isActive", 1, "custom-control-label", "mt-2"], [1, "text-center", "text-info", "mb-0"], [3, "cancelDisabled", "saveDisabled", "onCancelClick"]],
      template: function CreateTenantDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreateTenantDialogComponent_Template_form_ngSubmit_0_listener() {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "abp-modal-header", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCloseClick", function CreateTenantDialogComponent_Template_abp_modal_header_onCloseClick_2_listener() {
            return ctx.bsModalRef.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateTenantDialogComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.tenant.tenancyName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "abp-validation-summary", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateTenantDialogComponent_Template_input_ngModelChange_19_listener($event) {
            return ctx.tenant.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "abp-validation-summary", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateTenantDialogComponent_Template_input_ngModelChange_28_listener($event) {
            return ctx.tenant.connectionString = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 17, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateTenantDialogComponent_Template_input_ngModelChange_34_listener($event) {
            return ctx.tenant.adminEmailAddress = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "abp-validation-summary", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateTenantDialogComponent_Template_input_ngModelChange_44_listener($event) {
            return ctx.tenant.isActive = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "abp-modal-footer", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCancelClick", function CreateTenantDialogComponent_Template_abp_modal_footer_onCancelClick_49_listener() {
            return ctx.bsModalRef.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 20, "CreateNewTenant"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 22, "TenancyName"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.tenant.tenancyName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", _r1)("controlEl", _r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 24, "Name"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.tenant.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", _r3)("controlEl", _r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 26, "DatabaseConnectionString"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.tenant.connectionString);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 28, "AdminEmailAddress"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.tenant.adminEmailAddress);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", _r5)("controlEl", _r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 30, "IsActive"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.tenant.isActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](48, 32, "DefaultPasswordIs", "123qwe"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cancelDisabled", ctx.saving)("saveDisabled", !_r0.form.valid || ctx.saving);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _shared_components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_6__["AbpModalHeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _shared_components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_7__["AbpValidationSummaryComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"], _shared_components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_8__["AbpModalFooterComponent"]],
      pipes: [_shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_9__["LocalizePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateTenantDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: 'create-tenant-dialog.component.html'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["TenantServiceProxy"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]
        }];
      }, {
        onSave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/tenants/edit-tenant/edit-tenant-dialog.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/tenants/edit-tenant/edit-tenant-dialog.component.ts ***!
    \*********************************************************************/

  /*! exports provided: EditTenantDialogComponent */

  /***/
  function srcAppTenantsEditTenantEditTenantDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditTenantDialogComponent", function () {
      return EditTenantDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @shared/app-component-base */
    "./src/shared/app-component-base.ts");
    /* harmony import */


    var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @shared/service-proxies/service-proxies */
    "./src/shared/service-proxies/service-proxies.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../shared/components/modal/abp-modal-header.component */
    "./src/shared/components/modal/abp-modal-header.component.ts");
    /* harmony import */


    var _shared_components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../shared/components/validation/abp-validation.summary.component */
    "./src/shared/components/validation/abp-validation.summary.component.ts");
    /* harmony import */


    var _shared_components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../shared/components/modal/abp-modal-footer.component */
    "./src/shared/components/modal/abp-modal-footer.component.ts");
    /* harmony import */


    var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @shared/pipes/localize.pipe */
    "./src/shared/pipes/localize.pipe.ts");

    var EditTenantDialogComponent = /*#__PURE__*/function (_shared_app_component17) {
      _inherits(EditTenantDialogComponent, _shared_app_component17);

      var _super24 = _createSuper(EditTenantDialogComponent);

      function EditTenantDialogComponent(injector, _tenantService, bsModalRef) {
        var _this139;

        _classCallCheck(this, EditTenantDialogComponent);

        _this139 = _super24.call(this, injector);
        _this139._tenantService = _tenantService;
        _this139.bsModalRef = bsModalRef;
        _this139.saving = false;
        _this139.tenant = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["TenantDto"]();
        _this139.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this139;
      }

      _createClass(EditTenantDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this140 = this;

          this._tenantService.get(this.id).subscribe(function (result) {
            _this140.tenant = result;
          });
        }
      }, {
        key: "save",
        value: function save() {
          var _this141 = this;

          this.saving = true;

          this._tenantService.update(this.tenant).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
            _this141.saving = false;
          })).subscribe(function () {
            _this141.notify.info(_this141.l('SavedSuccessfully'));

            _this141.bsModalRef.hide();

            _this141.onSave.emit();
          });
        }
      }]);

      return EditTenantDialogComponent;
    }(_shared_app_component_base__WEBPACK_IMPORTED_MODULE_3__["AppComponentBase"]);

    EditTenantDialogComponent.ɵfac = function EditTenantDialogComponent_Factory(t) {
      return new (t || EditTenantDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["TenantServiceProxy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]));
    };

    EditTenantDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditTenantDialogComponent,
      selectors: [["ng-component"]],
      outputs: {
        onSave: "onSave"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 32,
      vars: 21,
      consts: [["autocomplete", "off", 1, "form-horizontal", 3, "ngSubmit"], ["editTenantForm", "ngForm"], [3, "title", "onCloseClick"], [1, "modal-body"], [1, "form-group", "row", "required"], ["for", "tenancyName", 1, "col-md-3", "col-form-label"], [1, "col-md-9"], ["type", "text", "name", "tenancyName", "id", "tenancyName", "minlength", "2", "maxlength", "64", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["tenancyNameModel", "ngModel", "tenancyNameEl", ""], [3, "control", "controlEl"], ["for", "name", 1, "col-md-3", "col-form-label"], ["type", "text", "name", "name", "id", "name", "maxlength", "128", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["nameModel", "ngModel", "nameEl", ""], [1, "form-group", "row", "mb-0"], [1, "col-md-3", "col-form-label"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "name", "isActive", "id", "isActive", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "isActive", 1, "custom-control-label", "mt-2"], [3, "cancelDisabled", "saveDisabled", "onCancelClick"]],
      template: function EditTenantDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditTenantDialogComponent_Template_form_ngSubmit_0_listener() {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "abp-modal-header", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCloseClick", function EditTenantDialogComponent_Template_abp_modal_header_onCloseClick_2_listener() {
            return ctx.bsModalRef.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditTenantDialogComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.tenant.tenancyName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "abp-validation-summary", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditTenantDialogComponent_Template_input_ngModelChange_19_listener($event) {
            return ctx.tenant.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "abp-validation-summary", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditTenantDialogComponent_Template_input_ngModelChange_29_listener($event) {
            return ctx.tenant.isActive = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "abp-modal-footer", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCancelClick", function EditTenantDialogComponent_Template_abp_modal_footer_onCancelClick_31_listener() {
            return ctx.bsModalRef.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 13, "EditTenant"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 15, "TenancyName"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.tenant.tenancyName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", _r1)("controlEl", _r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 17, "Name"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.tenant.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", _r3)("controlEl", _r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 19, "IsActive"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.tenant.isActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cancelDisabled", ctx.saving)("saveDisabled", !_r0.form.valid || ctx.saving);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _shared_components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_6__["AbpModalHeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _shared_components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_7__["AbpValidationSummaryComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"], _shared_components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_8__["AbpModalFooterComponent"]],
      pipes: [_shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_9__["LocalizePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditTenantDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: 'edit-tenant-dialog.component.html'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["TenantServiceProxy"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]
        }];
      }, {
        onSave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/tenants/tenants.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/tenants/tenants.component.ts ***!
    \**********************************************/

  /*! exports provided: TenantsComponent */

  /***/
  function srcAppTenantsTenantsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TenantsComponent", function () {
      return TenantsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @shared/animations/routerTransition */
    "./src/shared/animations/routerTransition.ts");
    /* harmony import */


    var _shared_paged_listing_component_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @shared/paged-listing-component-base */
    "./src/shared/paged-listing-component-base.ts");
    /* harmony import */


    var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @shared/service-proxies/service-proxies */
    "./src/shared/service-proxies/service-proxies.ts");
    /* harmony import */


    var _create_tenant_create_tenant_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./create-tenant/create-tenant-dialog.component */
    "./src/app/tenants/create-tenant/create-tenant-dialog.component.ts");
    /* harmony import */


    var _edit_tenant_edit_tenant_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./edit-tenant/edit-tenant-dialog.component */
    "./src/app/tenants/edit-tenant/edit-tenant-dialog.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_directives_busy_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../shared/directives/busy.directive */
    "./src/shared/directives/busy.directive.ts");
    /* harmony import */


    var _shared_components_pagination_abp_pagination_controls_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../shared/components/pagination/abp-pagination-controls.component */
    "./src/shared/components/pagination/abp-pagination-controls.component.ts");
    /* harmony import */


    var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @shared/pipes/localize.pipe */
    "./src/shared/pipes/localize.pipe.ts");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");

    function TenantsComponent_div_26_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "localize");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TenantsComponent_div_26_Template_input_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.isActive = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "localize");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TenantsComponent_div_26_Template_input_ngModelChange_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.isActive = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "localize");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TenantsComponent_div_26_Template_input_ngModelChange_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.isActive = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "localize");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TenantsComponent_div_26_Template_button_click_26_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.getDataPage(1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "localize");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TenantsComponent_div_26_Template_button_click_29_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.clearFilters();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "localize");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 12, "IsActive"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.isActive)("value", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 14, "All"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.isActive)("value", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 16, "Yes"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.isActive)("value", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 18, "No"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 20, "Search"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 22, "Clear"), " ");
      }
    }

    function TenantsComponent_tr_44_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "label", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TenantsComponent_tr_44_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var tenant_r8 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.editTenant(tenant_r8);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "localize");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TenantsComponent_tr_44_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var tenant_r8 = ctx.$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11["delete"](tenant_r8);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "localize");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tenant_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tenant_r8.tenancyName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tenant_r8.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", tenant_r8.isActive);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 5, "Edit"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 7, "Delete"), " ");
      }
    }

    var _c0 = function _c0(a1, a2, a3) {
      return {
        id: "server",
        itemsPerPage: a1,
        currentPage: a2,
        totalItems: a3
      };
    };

    var PagedTenantsRequestDto = /*#__PURE__*/function (_shared_paged_listing7) {
      _inherits(PagedTenantsRequestDto, _shared_paged_listing7);

      var _super25 = _createSuper(PagedTenantsRequestDto);

      function PagedTenantsRequestDto() {
        _classCallCheck(this, PagedTenantsRequestDto);

        return _super25.apply(this, arguments);
      }

      return PagedTenantsRequestDto;
    }(_shared_paged_listing_component_base__WEBPACK_IMPORTED_MODULE_4__["PagedRequestDto"]);

    var TenantsComponent = /*#__PURE__*/function (_shared_paged_listing8) {
      _inherits(TenantsComponent, _shared_paged_listing8);

      var _super26 = _createSuper(TenantsComponent);

      function TenantsComponent(injector, _tenantService, _modalService) {
        var _this142;

        _classCallCheck(this, TenantsComponent);

        _this142 = _super26.call(this, injector);
        _this142._tenantService = _tenantService;
        _this142._modalService = _modalService;
        _this142.tenants = [];
        _this142.keyword = '';
        _this142.advancedFiltersVisible = false;
        return _this142;
      }

      _createClass(TenantsComponent, [{
        key: "list",
        value: function list(request, pageNumber, finishedCallback) {
          var _this143 = this;

          request.keyword = this.keyword;
          request.isActive = this.isActive;

          this._tenantService.getAll(request.keyword, request.isActive, request.skipCount, request.maxResultCount).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
            finishedCallback();
          })).subscribe(function (result) {
            _this143.tenants = result.items;

            _this143.showPaging(result, pageNumber);
          });
        }
      }, {
        key: "delete",
        value: function _delete(tenant) {
          var _this144 = this;

          abp.message.confirm(this.l('TenantDeleteWarningMessage', tenant.name), undefined, function (result) {
            if (result) {
              _this144._tenantService["delete"](tenant.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
                abp.notify.success(_this144.l('SuccessfullyDeleted'));

                _this144.refresh();
              })).subscribe(function () {});
            }
          });
        }
      }, {
        key: "createTenant",
        value: function createTenant() {
          this.showCreateOrEditTenantDialog();
        }
      }, {
        key: "editTenant",
        value: function editTenant(tenant) {
          this.showCreateOrEditTenantDialog(tenant.id);
        }
      }, {
        key: "showCreateOrEditTenantDialog",
        value: function showCreateOrEditTenantDialog(id) {
          var _this145 = this;

          var createOrEditTenantDialog;

          if (!id) {
            createOrEditTenantDialog = this._modalService.show(_create_tenant_create_tenant_dialog_component__WEBPACK_IMPORTED_MODULE_6__["CreateTenantDialogComponent"], {
              "class": 'modal-lg'
            });
          } else {
            createOrEditTenantDialog = this._modalService.show(_edit_tenant_edit_tenant_dialog_component__WEBPACK_IMPORTED_MODULE_7__["EditTenantDialogComponent"], {
              "class": 'modal-lg',
              initialState: {
                id: id
              }
            });
          }

          createOrEditTenantDialog.content.onSave.subscribe(function () {
            _this145.refresh();
          });
        }
      }, {
        key: "clearFilters",
        value: function clearFilters() {
          this.keyword = '';
          this.isActive = undefined;
          this.getDataPage(1);
        }
      }]);

      return TenantsComponent;
    }(_shared_paged_listing_component_base__WEBPACK_IMPORTED_MODULE_4__["PagedListingComponentBase"]);

    TenantsComponent.ɵfac = function TenantsComponent_Factory(t) {
      return new (t || TenantsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["TenantServiceProxy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]));
    };

    TenantsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TenantsComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 58,
      vars: 41,
      consts: [[1, "content-header"], [1, "container-fluid"], [1, "row"], [1, "col-6"], [1, "col-6", "text-right"], ["href", "javascript:;", 1, "btn", "bg-blue", 3, "click"], [1, "fa", "fa-plus-square"], [1, "content", "px-2"], [1, "card"], [1, "card-header"], [1, "input-group"], [1, "input-group-prepend"], ["type", "button", 1, "btn", "bg-blue", 3, "click"], [1, "fas", "fa-search"], ["type", "text", "name", "keyword", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange", "keyup.enter"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-default", 3, "click"], [1, "fas"], ["class", "card mb-0 mt-1", 4, "ngIf"], [1, "card-body", "table-responsive", "p-0"], [1, "table", "table-hover", "text-nowrap", 3, "busy"], [1, "bg-light"], [2, "width", "200px"], [4, "ngFor", "ngForOf"], [1, "card-footer", "bg-light", "border-top"], [1, "col-sm-4", "col-12", "text-sm-left", "text-center"], [1, "btn", "btn-secondary", 3, "click"], [1, "fas", "fa-redo-alt"], [1, "col-sm-4", "col-12", "text-center"], [1, "mb-0", "my-2"], [1, "col-sm-4", "col-12"], [1, "float-sm-right", "m-auto"], ["id", "server", 3, "pageChange"], [1, "card", "mb-0", "mt-1"], [1, "card-body"], [1, "form-horizontal"], [1, "col-md-6"], [1, "form-group", "row", "mb-0"], [1, "col-md-3", "col-form-label"], [1, "col-md-9", "pt-2"], [1, "custom-control", "custom-radio", "d-inline"], ["type", "radio", "id", "isActiveAll", "name", "isActive", "checked", "", 1, "custom-control-input", 3, "ngModel", "value", "ngModelChange"], ["for", "isActiveAll", 1, "custom-control-label"], [1, "custom-control", "custom-radio", "d-inline", "mx-3"], ["type", "radio", "id", "isActiveActive", "name", "isActive", 1, "custom-control-input", 3, "ngModel", "value", "ngModelChange"], ["for", "isActiveActive", 1, "custom-control-label"], ["type", "radio", "id", "isActivePassive", "name", "isActive", 1, "custom-control-input", 3, "ngModel", "value", "ngModelChange"], ["for", "isActivePassive", 1, "custom-control-label"], [1, "card-footer"], ["type", "button", 1, "btn", "btn-default", "float-right", 3, "click"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "disabled", "", 1, "custom-control-input", 3, "checked"], [1, "custom-control-label"], ["type", "button", 1, "btn", "btn-sm", "bg-secondary", 3, "click"], [1, "fas", "fa-pencil-alt"], ["type", "button", 1, "btn", "btn-sm", "bg-danger", "mx-2", 3, "click"], [1, "fas", "fa-trash"]],
      template: function TenantsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TenantsComponent_Template_a_click_9_listener() {
            return ctx.createTenant();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TenantsComponent_Template_button_click_19_listener() {
            return ctx.getDataPage(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TenantsComponent_Template_input_ngModelChange_21_listener($event) {
            return ctx.keyword = $event;
          })("keyup.enter", function TenantsComponent_Template_input_keyup_enter_21_listener() {
            return ctx.getDataPage(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TenantsComponent_Template_button_click_24_listener() {
            return ctx.advancedFiltersVisible = !ctx.advancedFiltersVisible;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, TenantsComponent_div_26_Template, 32, 24, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "table", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "thead", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, TenantsComponent_tr_44_Template, 18, 9, "tr", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "paginate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TenantsComponent_Template_button_click_49_listener() {
            return ctx.refresh();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "abp-pagination-controls", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function TenantsComponent_Template_abp_pagination_controls_pageChange_57_listener($event) {
            return ctx.getDataPage($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routerTransition", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 17, "Tenants"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 19, "Create"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 21, "SearchWithThreeDot"))("ngModel", ctx.keyword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("fa-angle-up", ctx.advancedFiltersVisible)("fa-angle-down", !ctx.advancedFiltersVisible);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.advancedFiltersVisible);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("busy", ctx.isTableLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 23, "TenancyName"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 25, "Name"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 27, "IsActive"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 29, "Actions"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](45, 31, ctx.tenants, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](37, _c0, ctx.pageSize, ctx.pageNumber, ctx.totalItems)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](54, 34, "TotalRecordsCount", ctx.totalItems), " ");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _shared_directives_busy_directive__WEBPACK_IMPORTED_MODULE_10__["BusyDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _shared_components_pagination_abp_pagination_controls_component__WEBPACK_IMPORTED_MODULE_11__["AbpPaginationControlsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RadioControlValueAccessor"]],
      pipes: [_shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_12__["LocalizePipe"], ngx_pagination__WEBPACK_IMPORTED_MODULE_13__["PaginatePipe"]],
      encapsulation: 2,
      data: {
        animation: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_3__["appModuleAnimation"])()]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TenantsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './tenants.component.html',
          animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_3__["appModuleAnimation"])()]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["TenantServiceProxy"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/users/change-password/change-password.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/users/change-password/change-password.component.ts ***!
    \********************************************************************/

  /*! exports provided: ChangePasswordComponent */

  /***/
  function srcAppUsersChangePasswordChangePasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function () {
      return ChangePasswordComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @shared/animations/routerTransition */
    "./src/shared/animations/routerTransition.ts");
    /* harmony import */


    var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @shared/app-component-base */
    "./src/shared/app-component-base.ts");
    /* harmony import */


    var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @shared/service-proxies/service-proxies */
    "./src/shared/service-proxies/service-proxies.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../shared/components/validation/abp-validation.summary.component */
    "./src/shared/components/validation/abp-validation.summary.component.ts");
    /* harmony import */


    var _shared_directives_equal_validator_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../shared/directives/equal-validator.directive */
    "./src/shared/directives/equal-validator.directive.ts");
    /* harmony import */


    var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @shared/pipes/localize.pipe */
    "./src/shared/pipes/localize.pipe.ts");

    var ChangePasswordComponent = /*#__PURE__*/function (_shared_app_component18) {
      _inherits(ChangePasswordComponent, _shared_app_component18);

      var _super27 = _createSuper(ChangePasswordComponent);

      function ChangePasswordComponent(injector, userServiceProxy, router) {
        var _this146;

        _classCallCheck(this, ChangePasswordComponent);

        _this146 = _super27.call(this, injector);
        _this146.userServiceProxy = userServiceProxy;
        _this146.router = router;
        _this146.saving = false;
        _this146.changePasswordDto = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordDto"]();
        _this146.newPasswordValidationErrors = [{
          name: 'pattern',
          localizationKey: 'PasswordsMustBeAtLeast8CharactersContainLowercaseUppercaseNumber'
        }];
        _this146.confirmNewPasswordValidationErrors = [{
          name: 'validateEqual',
          localizationKey: 'PasswordsDoNotMatch'
        }];
        return _this146;
      }

      _createClass(ChangePasswordComponent, [{
        key: "changePassword",
        value: function changePassword() {
          var _this147 = this;

          this.saving = true;
          this.userServiceProxy.changePassword(this.changePasswordDto).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
            _this147.saving = false;
          })).subscribe(function (success) {
            if (success) {
              abp.message.success('Password changed successfully', 'Success');

              _this147.router.navigate(['/']);
            }
          });
        }
      }]);

      return ChangePasswordComponent;
    }(_shared_app_component_base__WEBPACK_IMPORTED_MODULE_4__["AppComponentBase"]);

    ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) {
      return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["UserServiceProxy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    ChangePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChangePasswordComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 46,
      vars: 27,
      consts: [[1, "content-header"], [1, "container-fluid"], [1, "row"], [1, "col-6"], [1, "content", "px-2"], [1, "card"], ["autocomplete", "off", 1, "form-horizontal", 3, "ngSubmit"], ["changePasswordForm", "ngForm"], [1, "card-body"], [1, "modal-body"], [1, "form-group", "row", "required"], ["for", "currentPassword", 1, "col-md-3", "col-form-label"], [1, "col-md-9"], ["type", "password", "name", "currentPassword", "id", "currentPassword", "required", "", "minlength", "2", "maxlength", "32", 1, "form-control", 3, "ngModel", "ngModelChange"], ["currentPasswordModel", "ngModel", "currentPasswordEl", ""], [3, "control", "controlEl"], ["for", "newPassword", 1, "col-md-3", "col-form-label"], ["type", "password", "name", "newPassword", "id", "newPassword", "required", "", "minlength", "2", "maxlength", "32", "validateEqual", "confirmNewPassword", "reverse", "true", "pattern", "(?=^.{8,}$)(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s)[0-9a-zA-Z!@#$%^&*()]*$", 1, "form-control", 3, "ngModel", "ngModelChange"], ["newPasswordModel", "ngModel", "newPasswordEl", ""], [3, "control", "controlEl", "customValidationErrors"], ["for", "confirmNewPassword", 1, "col-md-3", "col-form-label"], ["type", "password", "name", "confirmNewPassword", "id", "confirmNewPassword", "required", "", "minlength", "2", "maxlength", "32", "validateEqual", "newPassword", "reverse", "false", "ngModel", "", 1, "form-control"], ["confirmNewPasswordModel", "ngModel", "confirmNewPasswordEl", ""], [1, "card-footer", "justify-content-between"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]],
      template: function ChangePasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ChangePasswordComponent_Template_form_ngSubmit_11_listener() {
            return ctx.changePassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChangePasswordComponent_Template_input_ngModelChange_20_listener($event) {
            return ctx.changePasswordDto.currentPassword = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "abp-validation-summary", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 17, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChangePasswordComponent_Template_input_ngModelChange_29_listener($event) {
            return ctx.changePasswordDto.newPassword = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "abp-validation-summary", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 21, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "abp-validation-summary", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routerTransition", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 17, "UpdatePassword"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 19, "CurrentPassword"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.changePasswordDto.currentPassword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", _r1)("controlEl", _r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 21, "NewPassword"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.changePasswordDto.newPassword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", _r3)("controlEl", _r4)("customValidationErrors", ctx.newPasswordValidationErrors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 23, "ConfirmNewPassword"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", _r5)("controlEl", _r6)("customValidationErrors", ctx.confirmNewPasswordValidationErrors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid || ctx.saving);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 25, "Save"), " ");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _shared_components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_7__["AbpValidationSummaryComponent"], _shared_directives_equal_validator_directive__WEBPACK_IMPORTED_MODULE_8__["EqualValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["PatternValidator"]],
      pipes: [_shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_9__["LocalizePipe"]],
      encapsulation: 2,
      data: {
        animation: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_3__["appModuleAnimation"])()]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangePasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './change-password.component.html',
          animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_3__["appModuleAnimation"])()]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["UserServiceProxy"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/users/create-user/create-user-dialog.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/users/create-user/create-user-dialog.component.ts ***!
    \*******************************************************************/

  /*! exports provided: CreateUserDialogComponent */

  /***/
  function srcAppUsersCreateUserCreateUserDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateUserDialogComponent", function () {
      return CreateUserDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @shared/app-component-base */
    "./src/shared/app-component-base.ts");
    /* harmony import */


    var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @shared/service-proxies/service-proxies */
    "./src/shared/service-proxies/service-proxies.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../shared/components/modal/abp-modal-header.component */
    "./src/shared/components/modal/abp-modal-header.component.ts");
    /* harmony import */


    var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-bootstrap/tabs */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js");
    /* harmony import */


    var _shared_components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../shared/components/validation/abp-validation.summary.component */
    "./src/shared/components/validation/abp-validation.summary.component.ts");
    /* harmony import */


    var _shared_directives_equal_validator_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../shared/directives/equal-validator.directive */
    "./src/shared/directives/equal-validator.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../shared/components/modal/abp-modal-footer.component */
    "./src/shared/components/modal/abp-modal-footer.component.ts");
    /* harmony import */


    var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @shared/pipes/localize.pipe */
    "./src/shared/pipes/localize.pipe.ts");

    function CreateUserDialogComponent_ng_container_82_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateUserDialogComponent_ng_container_82_Template_input_change_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var role_r16 = ctx.$implicit;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.onRoleChange(role_r16, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var role_r16 = ctx.$implicit;
        var i_r17 = ctx.index;

        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "role_" + i_r17)("checked", ctx_r15.isRoleChecked(role_r16.normalizedName));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "role_" + i_r17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", role_r16.name, " ");
      }
    }

    var CreateUserDialogComponent = /*#__PURE__*/function (_shared_app_component19) {
      _inherits(CreateUserDialogComponent, _shared_app_component19);

      var _super28 = _createSuper(CreateUserDialogComponent);

      function CreateUserDialogComponent(injector, _userService, bsModalRef) {
        var _this148;

        _classCallCheck(this, CreateUserDialogComponent);

        _this148 = _super28.call(this, injector);
        _this148._userService = _userService;
        _this148.bsModalRef = bsModalRef;
        _this148.saving = false;
        _this148.user = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["CreateUserDto"]();
        _this148.roles = [];
        _this148.checkedRolesMap = {};
        _this148.defaultRoleCheckedStatus = false;
        _this148.passwordValidationErrors = [{
          name: 'pattern',
          localizationKey: 'PasswordsMustBeAtLeast8CharactersContainLowercaseUppercaseNumber'
        }];
        _this148.confirmPasswordValidationErrors = [{
          name: 'validateEqual',
          localizationKey: 'PasswordsDoNotMatch'
        }];
        _this148.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this148;
      }

      _createClass(CreateUserDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this149 = this;

          this.user.isActive = true;

          this._userService.getRoles().subscribe(function (result) {
            _this149.roles = result.items;

            _this149.setInitialRolesStatus();
          });
        }
      }, {
        key: "setInitialRolesStatus",
        value: function setInitialRolesStatus() {
          var _this150 = this;

          lodash__WEBPACK_IMPORTED_MODULE_3__["map"](this.roles, function (item) {
            _this150.checkedRolesMap[item.normalizedName] = _this150.isRoleChecked(item.normalizedName);
          });
        }
      }, {
        key: "isRoleChecked",
        value: function isRoleChecked(normalizedName) {
          // just return default role checked status
          // it's better to use a setting
          return this.defaultRoleCheckedStatus;
        }
      }, {
        key: "onRoleChange",
        value: function onRoleChange(role, $event) {
          this.checkedRolesMap[role.normalizedName] = $event.target.checked;
        }
      }, {
        key: "getCheckedRoles",
        value: function getCheckedRoles() {
          var roles = [];
          lodash__WEBPACK_IMPORTED_MODULE_3__["forEach"](this.checkedRolesMap, function (value, key) {
            if (value) {
              roles.push(key);
            }
          });
          return roles;
        }
      }, {
        key: "save",
        value: function save() {
          var _this151 = this;

          this.saving = true;
          this.user.roleNames = this.getCheckedRoles();

          this._userService.create(this.user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
            _this151.saving = false;
          })).subscribe(function () {
            _this151.notify.info(_this151.l('SavedSuccessfully'));

            _this151.bsModalRef.hide();

            _this151.onSave.emit();
          });
        }
      }]);

      return CreateUserDialogComponent;
    }(_shared_app_component_base__WEBPACK_IMPORTED_MODULE_4__["AppComponentBase"]);

    CreateUserDialogComponent.ɵfac = function CreateUserDialogComponent_Factory(t) {
      return new (t || CreateUserDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["UserServiceProxy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]));
    };

    CreateUserDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CreateUserDialogComponent,
      selectors: [["ng-component"]],
      outputs: {
        onSave: "onSave"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 84,
      vars: 59,
      consts: [["autocomplete", "off", 1, "form-horizontal", 3, "ngSubmit"], ["createUserModal", "ngForm"], [3, "title", "onCloseClick"], [1, "modal-body"], [1, "pt-3", "px-2", 3, "heading"], [1, "form-group", "row", "required"], ["for", "cnic", 1, "col-md-3", "col-form-label"], [1, "col-md-9"], ["type", "number", "name", "cnic", "id", "cnic", "required", "", "maxlength", "13", "minlength", "13", 1, "form-control", 3, "ngModel", "ngModelChange"], ["cnicModel", "ngModel", "cnicEl", ""], [3, "control", "controlEl"], ["for", "name", 1, "col-md-3", "col-form-label"], ["type", "text", "name", "name", "id", "name", "required", "", "maxlength", "32", 1, "form-control", 3, "ngModel", "ngModelChange"], ["nameModel", "ngModel", "nameEl", ""], ["for", "surname", 1, "col-md-3", "col-form-label"], ["type", "text", "name", "surname", "id", "surname", "required", "", "maxlength", "32", 1, "form-control", 3, "ngModel", "ngModelChange"], ["surnameModel", "ngModel", "surnameEl", ""], ["for", "userName", 1, "col-md-3", "col-form-label"], ["type", "text", "name", "userName", "id", "userName", "required", "", "minlength", "2", "maxlength", "32", 1, "form-control", 3, "ngModel", "ngModelChange"], ["userNameModel", "ngModel", "userNameEl", ""], ["for", "password", 1, "col-md-3", "col-form-label"], ["type", "password", "name", "password", "id", "password", "required", "", "maxlength", "32", "validateEqual", "confirmPassword", "reverse", "true", "pattern", "(?=^.{8,}$)(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s)[0-9a-zA-Z!@#$%^&*()]*$", 1, "form-control", 3, "ngModel", "ngModelChange"], ["passwordModel", "ngModel", "passwordEl", ""], [3, "control", "controlEl", "customValidationErrors"], ["for", "confirmPassword", 1, "col-md-3", "col-form-label"], ["type", "password", "name", "confirmPassword", "id", "confirmPassword", "required", "", "maxlength", "32", "validateEqual", "password", "reverse", "false", "ngModel", "", 1, "form-control"], ["confirmPasswordModel", "ngModel", "confirmPasswordEl", ""], ["for", "emailAddress", 1, "col-md-3", "col-form-label"], ["type", "email", "name", "emailAddress", "id", "emailAddress", "required", "", "maxlength", "256", "pattern", "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{1,})+$", 1, "form-control", 3, "ngModel", "ngModelChange"], ["emailAddressModel", "ngModel", "emailAddressEl", ""], [1, "form-group", "row", "mb-0"], [1, "col-md-3", "col-form-label"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "name", "isActive", "id", "isActive", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "isActive", 1, "custom-control-label", "mt-2"], [4, "ngFor", "ngForOf"], [3, "cancelDisabled", "saveDisabled", "onCancelClick"], [1, "col-md-6"], ["type", "checkbox", 1, "custom-control-input", 3, "id", "checked", "change"], [1, "custom-control-label", 3, "for"]],
      template: function CreateUserDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreateUserDialogComponent_Template_form_ngSubmit_0_listener() {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "abp-modal-header", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCloseClick", function CreateUserDialogComponent_Template_abp_modal_header_onCloseClick_2_listener() {
            return ctx.bsModalRef.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tabset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tab", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateUserDialogComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.user.cnic = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "abp-validation-summary", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateUserDialogComponent_Template_input_ngModelChange_22_listener($event) {
            return ctx.user.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "abp-validation-summary", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 15, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateUserDialogComponent_Template_input_ngModelChange_31_listener($event) {
            return ctx.user.surname = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "abp-validation-summary", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 18, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateUserDialogComponent_Template_input_ngModelChange_40_listener($event) {
            return ctx.user.userName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "abp-validation-summary", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 21, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateUserDialogComponent_Template_input_ngModelChange_49_listener($event) {
            return ctx.user.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "abp-validation-summary", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](56, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 25, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "abp-validation-summary", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](65, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "input", 28, 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateUserDialogComponent_Template_input_ngModelChange_67_listener($event) {
            return ctx.user.emailAddress = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "abp-validation-summary", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](74, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateUserDialogComponent_Template_input_ngModelChange_77_listener($event) {
            return ctx.user.isActive = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "label", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "tab", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](80, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, CreateUserDialogComponent_ng_container_82_Template, 6, 4, "ng-container", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "abp-modal-footer", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCancelClick", function CreateUserDialogComponent_Template_abp_modal_footer_onCancelClick_83_listener() {
            return ctx.bsModalRef.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);

          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42);

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50);

          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](51);

          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](59);

          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](60);

          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](68);

          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 37, "CreateNewUser"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("heading", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 39, "UserDetails"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 41, "CNIC"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.cnic);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", _r1)("controlEl", _r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 43, "Name"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", _r3)("controlEl", _r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 45, "Surname"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.surname);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", _r5)("controlEl", _r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 47, "UserName"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.userName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", _r7)("controlEl", _r8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 49, "Password"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", _r9)("controlEl", _r10)("customValidationErrors", ctx.passwordValidationErrors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](56, 51, "ConfirmPassword"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", _r11)("controlEl", _r12)("customValidationErrors", ctx.confirmPasswordValidationErrors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](65, 53, "EmailAddress"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.emailAddress);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", _r13)("controlEl", _r14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](74, 55, "IsActive"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.isActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("heading", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](80, 57, "UserRoles"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.roles);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cancelDisabled", ctx.saving)("saveDisabled", !_r0.form.valid || ctx.saving);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _shared_components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_7__["AbpModalHeaderComponent"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__["TabsetComponent"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__["TabDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _shared_components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_9__["AbpValidationSummaryComponent"], _shared_directives_equal_validator_directive__WEBPACK_IMPORTED_MODULE_10__["EqualValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _shared_components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_12__["AbpModalFooterComponent"]],
      pipes: [_shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_13__["LocalizePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateUserDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './create-user-dialog.component.html'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["UserServiceProxy"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]
        }];
      }, {
        onSave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/users/edit-user/edit-user-dialog.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/users/edit-user/edit-user-dialog.component.ts ***!
    \***************************************************************/

  /*! exports provided: EditUserDialogComponent */

  /***/
  function srcAppUsersEditUserEditUserDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditUserDialogComponent", function () {
      return EditUserDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @shared/app-component-base */
    "./src/shared/app-component-base.ts");
    /* harmony import */


    var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @shared/service-proxies/service-proxies */
    "./src/shared/service-proxies/service-proxies.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../shared/components/modal/abp-modal-header.component */
    "./src/shared/components/modal/abp-modal-header.component.ts");
    /* harmony import */


    var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-bootstrap/tabs */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js");
    /* harmony import */


    var _shared_components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../shared/components/validation/abp-validation.summary.component */
    "./src/shared/components/validation/abp-validation.summary.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../shared/components/modal/abp-modal-footer.component */
    "./src/shared/components/modal/abp-modal-footer.component.ts");
    /* harmony import */


    var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @shared/pipes/localize.pipe */
    "./src/shared/pipes/localize.pipe.ts");

    function EditUserDialogComponent_ng_container_55_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditUserDialogComponent_ng_container_55_Template_input_change_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var role_r10 = ctx.$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.onRoleChange(role_r10, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var role_r10 = ctx.$implicit;
        var i_r11 = ctx.index;

        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "role_" + i_r11)("checked", ctx_r9.isRoleChecked(role_r10.normalizedName));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "role_" + i_r11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", role_r10.name, " ");
      }
    }

    var EditUserDialogComponent = /*#__PURE__*/function (_shared_app_component20) {
      _inherits(EditUserDialogComponent, _shared_app_component20);

      var _super29 = _createSuper(EditUserDialogComponent);

      function EditUserDialogComponent(injector, _userService, bsModalRef) {
        var _this152;

        _classCallCheck(this, EditUserDialogComponent);

        _this152 = _super29.call(this, injector);
        _this152._userService = _userService;
        _this152.bsModalRef = bsModalRef;
        _this152.saving = false;
        _this152.user = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["UserDto"]();
        _this152.roles = [];
        _this152.checkedRolesMap = {};
        _this152.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this152;
      }

      _createClass(EditUserDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this153 = this;

          this._userService.get(this.id).subscribe(function (result) {
            _this153.user = result;

            _this153._userService.getRoles().subscribe(function (result2) {
              _this153.roles = result2.items;

              _this153.setInitialRolesStatus();
            });
          });
        }
      }, {
        key: "setInitialRolesStatus",
        value: function setInitialRolesStatus() {
          var _this154 = this;

          lodash__WEBPACK_IMPORTED_MODULE_3__["map"](this.roles, function (item) {
            _this154.checkedRolesMap[item.normalizedName] = _this154.isRoleChecked(item.normalizedName);
          });
        }
      }, {
        key: "isRoleChecked",
        value: function isRoleChecked(normalizedName) {
          return lodash__WEBPACK_IMPORTED_MODULE_3__["includes"](this.user.roleNames, normalizedName);
        }
      }, {
        key: "onRoleChange",
        value: function onRoleChange(role, $event) {
          this.checkedRolesMap[role.normalizedName] = $event.target.checked;
        }
      }, {
        key: "getCheckedRoles",
        value: function getCheckedRoles() {
          var roles = [];
          lodash__WEBPACK_IMPORTED_MODULE_3__["forEach"](this.checkedRolesMap, function (value, key) {
            if (value) {
              roles.push(key);
            }
          });
          return roles;
        }
      }, {
        key: "save",
        value: function save() {
          var _this155 = this;

          this.saving = true;
          this.user.roleNames = this.getCheckedRoles();

          this._userService.update(this.user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
            _this155.saving = false;
          })).subscribe(function () {
            _this155.notify.info(_this155.l('SavedSuccessfully'));

            _this155.bsModalRef.hide();

            _this155.onSave.emit();
          });
        }
      }]);

      return EditUserDialogComponent;
    }(_shared_app_component_base__WEBPACK_IMPORTED_MODULE_4__["AppComponentBase"]);

    EditUserDialogComponent.ɵfac = function EditUserDialogComponent_Factory(t) {
      return new (t || EditUserDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["UserServiceProxy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]));
    };

    EditUserDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditUserDialogComponent,
      selectors: [["ng-component"]],
      outputs: {
        onSave: "onSave"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 57,
      vars: 40,
      consts: [["autocomplete", "off", 1, "form-horizontal", 3, "ngSubmit"], ["editUserModal", "ngForm"], [3, "title", "onCloseClick"], [1, "modal-body"], [1, "pt-3", "px-2", 3, "heading"], [1, "form-group", "row", "required"], ["for", "name", 1, "col-md-3", "col-form-label"], [1, "col-md-9"], ["type", "text", "name", "name", "id", "name", "required", "", "maxlength", "32", 1, "form-control", 3, "ngModel", "ngModelChange"], ["nameModel", "ngModel", "nameEl", ""], [3, "control", "controlEl"], ["for", "surname", 1, "col-md-3", "col-form-label"], ["type", "text", "name", "surname", "id", "surname", "required", "", "maxlength", "32", 1, "form-control", 3, "ngModel", "ngModelChange"], ["surnameModel", "ngModel", "surnameEl", ""], ["for", "userName", 1, "col-md-3", "col-form-label"], ["type", "text", "name", "userName", "id", "userName", "required", "", "minlength", "2", "maxlength", "32", 1, "form-control", 3, "ngModel", "ngModelChange"], ["userNameModel", "ngModel", "userNameEl", ""], ["for", "emailAddress", 1, "col-md-3", "col-form-label"], ["type", "email", "name", "emailAddress", "id", "emailAddress", "required", "", "maxlength", "256", "pattern", "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{1,})+$", 1, "form-control", 3, "ngModel", "ngModelChange"], ["emailAddressModel", "ngModel", "emailAddressEl", ""], [1, "form-group", "row", "mb-0"], [1, "col-md-3", "col-form-label"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "name", "isActive", "id", "isActive", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "isActive", 1, "custom-control-label", "mt-2"], [4, "ngFor", "ngForOf"], [3, "cancelDisabled", "saveDisabled", "onCancelClick"], [1, "col-md-6"], ["type", "checkbox", 1, "custom-control-input", 3, "id", "checked", "change"], [1, "custom-control-label", 3, "for"]],
      template: function EditUserDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditUserDialogComponent_Template_form_ngSubmit_0_listener() {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "abp-modal-header", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCloseClick", function EditUserDialogComponent_Template_abp_modal_header_onCloseClick_2_listener() {
            return ctx.bsModalRef.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tabset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tab", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditUserDialogComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.user.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "abp-validation-summary", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditUserDialogComponent_Template_input_ngModelChange_22_listener($event) {
            return ctx.user.surname = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "abp-validation-summary", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 15, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditUserDialogComponent_Template_input_ngModelChange_31_listener($event) {
            return ctx.user.userName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "abp-validation-summary", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 18, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditUserDialogComponent_Template_input_ngModelChange_40_listener($event) {
            return ctx.user.emailAddress = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "abp-validation-summary", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditUserDialogComponent_Template_input_ngModelChange_50_listener($event) {
            return ctx.user.isActive = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tab", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, EditUserDialogComponent_ng_container_55_Template, 6, 4, "ng-container", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "abp-modal-footer", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCancelClick", function EditUserDialogComponent_Template_abp_modal_footer_onCancelClick_56_listener() {
            return ctx.bsModalRef.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);

          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 24, "EditUser"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("heading", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 26, "UserDetails"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 28, "Name"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", _r1)("controlEl", _r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 30, "Surname"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.surname);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", _r3)("controlEl", _r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 32, "UserName"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.userName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", _r5)("controlEl", _r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 34, "EmailAddress"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.emailAddress);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", _r7)("controlEl", _r8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 36, "IsActive"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.isActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("heading", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 38, "UserRoles"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.roles);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cancelDisabled", ctx.saving)("saveDisabled", !_r0.form.valid || ctx.saving);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _shared_components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_7__["AbpModalHeaderComponent"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__["TabsetComponent"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__["TabDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _shared_components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_9__["AbpValidationSummaryComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _shared_components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_11__["AbpModalFooterComponent"]],
      pipes: [_shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_12__["LocalizePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditUserDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './edit-user-dialog.component.html'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["UserServiceProxy"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]
        }];
      }, {
        onSave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/users/reset-password/reset-password.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/users/reset-password/reset-password.component.ts ***!
    \******************************************************************/

  /*! exports provided: ResetPasswordDialogComponent */

  /***/
  function srcAppUsersResetPasswordResetPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetPasswordDialogComponent", function () {
      return ResetPasswordDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @shared/app-component-base */
    "./src/shared/app-component-base.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @shared/service-proxies/service-proxies */
    "./src/shared/service-proxies/service-proxies.ts");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../shared/components/modal/abp-modal-header.component */
    "./src/shared/components/modal/abp-modal-header.component.ts");
    /* harmony import */


    var _shared_components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../shared/components/validation/abp-validation.summary.component */
    "./src/shared/components/validation/abp-validation.summary.component.ts");
    /* harmony import */


    var _shared_components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../shared/components/modal/abp-modal-footer.component */
    "./src/shared/components/modal/abp-modal-footer.component.ts");
    /* harmony import */


    var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @shared/pipes/localize.pipe */
    "./src/shared/pipes/localize.pipe.ts");

    var ResetPasswordDialogComponent = /*#__PURE__*/function (_shared_app_component21) {
      _inherits(ResetPasswordDialogComponent, _shared_app_component21);

      var _super30 = _createSuper(ResetPasswordDialogComponent);

      function ResetPasswordDialogComponent(injector, _userService, bsModalRef) {
        var _this156;

        _classCallCheck(this, ResetPasswordDialogComponent);

        _this156 = _super30.call(this, injector);
        _this156._userService = _userService;
        _this156.bsModalRef = bsModalRef;
        _this156.isLoading = false;
        return _this156;
      }

      _createClass(ResetPasswordDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isLoading = true;
          this.resetPasswordDto = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordDto"]();
          this.resetPasswordDto.userId = this.id;
          this.resetPasswordDto.newPassword = Math.random().toString(36).substr(2, 10);
          this.isLoading = false;
        }
      }, {
        key: "resetPassword",
        value: function resetPassword() {
          var _this157 = this;

          this.isLoading = true;

          this._userService.resetPassword(this.resetPasswordDto).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
            _this157.isLoading = false;
          })).subscribe(function () {
            _this157.notify.info('Password Reset');

            _this157.bsModalRef.hide();
          });
        }
      }]);

      return ResetPasswordDialogComponent;
    }(_shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]);

    ResetPasswordDialogComponent.ɵfac = function ResetPasswordDialogComponent_Factory(t) {
      return new (t || ResetPasswordDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["UserServiceProxy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"]));
    };

    ResetPasswordDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResetPasswordDialogComponent,
      selectors: [["app-reset-password"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 31,
      vars: 21,
      consts: [["autocomplete", "off", 1, "form-horizontal", 3, "ngSubmit"], ["resetPasswordModal", "ngForm"], [3, "title", "onCloseClick"], [1, "modal-body"], [1, "row"], [1, "col-md-9", "offset-md-3"], [1, "text-info", "mb-1"], [1, "form-group", "row", "required"], ["for", "adminPassword", 1, "col-md-3", "col-form-label"], [1, "col-md-9"], ["type", "password", "id", "adminPassword", "name", "adminPassword", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["adminPasswordModel", "ngModel", "adminPasswordEl", ""], [3, "control", "controlEl"], [1, "form-group", "row"], ["for", "newPassword", 1, "col-md-3", "col-form-label"], ["type", "text", "name", "NewPassword", "id", "newPassword", "readonly", "", 1, "form-control", 3, "ngModel"], [3, "cancelDisabled", "saveDisabled", "onCancelClick"]],
      template: function ResetPasswordDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ResetPasswordDialogComponent_Template_form_ngSubmit_0_listener() {
            return ctx.resetPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "abp-modal-header", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCloseClick", function ResetPasswordDialogComponent_Template_abp_modal_header_onCloseClick_2_listener() {
            return ctx.bsModalRef.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResetPasswordDialogComponent_Template_input_ngModelChange_15_listener($event) {
            return ctx.resetPasswordDto.adminPassword = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "abp-validation-summary", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "abp-modal-footer", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCancelClick", function ResetPasswordDialogComponent_Template_abp_modal_footer_onCancelClick_30_listener() {
            return ctx.bsModalRef.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 11, "ResetPassword"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 13, "ResetPasswordStepOneInfo"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 15, "AdminPassword"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.resetPasswordDto.adminPassword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", _r1)("controlEl", _r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 17, "ResetPasswordStepTwoInfo"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 19, "NewPassword"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.resetPasswordDto.newPassword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cancelDisabled", ctx.isLoading)("saveDisabled", !_r0.form.valid || ctx.isLoading);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _shared_components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_6__["AbpModalHeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _shared_components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_7__["AbpValidationSummaryComponent"], _shared_components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_8__["AbpModalFooterComponent"]],
      pipes: [_shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_9__["LocalizePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetPasswordDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-reset-password',
          templateUrl: './reset-password.component.html'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["UserServiceProxy"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/users/users.component.ts":
  /*!******************************************!*\
    !*** ./src/app/users/users.component.ts ***!
    \******************************************/

  /*! exports provided: UsersComponent */

  /***/
  function srcAppUsersUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersComponent", function () {
      return UsersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @shared/animations/routerTransition */
    "./src/shared/animations/routerTransition.ts");
    /* harmony import */


    var shared_paged_listing_component_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! shared/paged-listing-component-base */
    "./src/shared/paged-listing-component-base.ts");
    /* harmony import */


    var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @shared/service-proxies/service-proxies */
    "./src/shared/service-proxies/service-proxies.ts");
    /* harmony import */


    var _create_user_create_user_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./create-user/create-user-dialog.component */
    "./src/app/users/create-user/create-user-dialog.component.ts");
    /* harmony import */


    var _edit_user_edit_user_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./edit-user/edit-user-dialog.component */
    "./src/app/users/edit-user/edit-user-dialog.component.ts");
    /* harmony import */


    var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./reset-password/reset-password.component */
    "./src/app/users/reset-password/reset-password.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_directives_busy_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../shared/directives/busy.directive */
    "./src/shared/directives/busy.directive.ts");
    /* harmony import */


    var _shared_components_pagination_abp_pagination_controls_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../shared/components/pagination/abp-pagination-controls.component */
    "./src/shared/components/pagination/abp-pagination-controls.component.ts");
    /* harmony import */


    var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @shared/pipes/localize.pipe */
    "./src/shared/pipes/localize.pipe.ts");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");

    function UsersComponent_div_26_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "localize");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersComponent_div_26_Template_input_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.isActive = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "localize");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersComponent_div_26_Template_input_ngModelChange_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.isActive = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "localize");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersComponent_div_26_Template_input_ngModelChange_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.isActive = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "localize");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_div_26_Template_button_click_26_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.getDataPage(1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "localize");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_div_26_Template_button_click_29_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.clearFilters();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "localize");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 12, "IsActive"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.isActive)("value", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 14, "All"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.isActive)("value", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 16, "Yes"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.isActive)("value", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 18, "No"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 20, "Search"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 22, "Clear"), " ");
      }
    }

    function UsersComponent_tr_47_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "label", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_tr_47_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var user_r8 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.editUser(user_r8);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "localize");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_tr_47_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var user_r8 = ctx.$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11["delete"](user_r8);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "localize");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_tr_47_Template_button_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var user_r8 = ctx.$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.resetPassword(user_r8);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "localize");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r8.userName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r8.fullName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r8.emailAddress);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", user_r8.isActive);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 7, "Edit"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 9, "Delete"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 11, "ResetPassword"), " ");
      }
    }

    var _c0 = function _c0(a1, a2, a3) {
      return {
        id: "server",
        itemsPerPage: a1,
        currentPage: a2,
        totalItems: a3
      };
    };

    var PagedUsersRequestDto = /*#__PURE__*/function (_shared_paged_listing9) {
      _inherits(PagedUsersRequestDto, _shared_paged_listing9);

      var _super31 = _createSuper(PagedUsersRequestDto);

      function PagedUsersRequestDto() {
        _classCallCheck(this, PagedUsersRequestDto);

        return _super31.apply(this, arguments);
      }

      return PagedUsersRequestDto;
    }(shared_paged_listing_component_base__WEBPACK_IMPORTED_MODULE_4__["PagedRequestDto"]);

    var UsersComponent = /*#__PURE__*/function (_shared_paged_listing10) {
      _inherits(UsersComponent, _shared_paged_listing10);

      var _super32 = _createSuper(UsersComponent);

      function UsersComponent(injector, _userService, _modalService) {
        var _this158;

        _classCallCheck(this, UsersComponent);

        _this158 = _super32.call(this, injector);
        _this158._userService = _userService;
        _this158._modalService = _modalService;
        _this158.users = [];
        _this158.keyword = '';
        _this158.advancedFiltersVisible = false;
        return _this158;
      }

      _createClass(UsersComponent, [{
        key: "createUser",
        value: function createUser() {
          this.showCreateOrEditUserDialog();
        }
      }, {
        key: "editUser",
        value: function editUser(user) {
          this.showCreateOrEditUserDialog(user.id);
        }
      }, {
        key: "resetPassword",
        value: function resetPassword(user) {
          this.showResetPasswordUserDialog(user.id);
        }
      }, {
        key: "clearFilters",
        value: function clearFilters() {
          this.keyword = '';
          this.isActive = undefined;
          this.getDataPage(1);
        }
      }, {
        key: "list",
        value: function list(request, pageNumber, finishedCallback) {
          var _this159 = this;

          request.keyword = this.keyword;
          request.isActive = this.isActive;

          this._userService.getAll(request.keyword, request.isActive, request.skipCount, request.maxResultCount).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
            finishedCallback();
          })).subscribe(function (result) {
            _this159.users = result.items;

            _this159.showPaging(result, pageNumber);
          });
        }
      }, {
        key: "delete",
        value: function _delete(user) {
          var _this160 = this;

          abp.message.confirm(this.l('UserDeleteWarningMessage', user.fullName), undefined, function (result) {
            if (result) {
              _this160._userService["delete"](user.id).subscribe(function () {
                abp.notify.success(_this160.l('SuccessfullyDeleted'));

                _this160.refresh();
              });
            }
          });
        }
      }, {
        key: "showResetPasswordUserDialog",
        value: function showResetPasswordUserDialog(id) {
          this._modalService.show(_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_8__["ResetPasswordDialogComponent"], {
            "class": 'modal-lg',
            initialState: {
              id: id
            }
          });
        }
      }, {
        key: "showCreateOrEditUserDialog",
        value: function showCreateOrEditUserDialog(id) {
          var _this161 = this;

          var createOrEditUserDialog;

          if (!id) {
            createOrEditUserDialog = this._modalService.show(_create_user_create_user_dialog_component__WEBPACK_IMPORTED_MODULE_6__["CreateUserDialogComponent"], {
              "class": 'modal-lg'
            });
          } else {
            createOrEditUserDialog = this._modalService.show(_edit_user_edit_user_dialog_component__WEBPACK_IMPORTED_MODULE_7__["EditUserDialogComponent"], {
              "class": 'modal-lg',
              initialState: {
                id: id
              }
            });
          }

          createOrEditUserDialog.content.onSave.subscribe(function () {
            _this161.refresh();
          });
        }
      }]);

      return UsersComponent;
    }(shared_paged_listing_component_base__WEBPACK_IMPORTED_MODULE_4__["PagedListingComponentBase"]);

    UsersComponent.ɵfac = function UsersComponent_Factory(t) {
      return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["UserServiceProxy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]));
    };

    UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UsersComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 61,
      vars: 44,
      consts: [[1, "content-header"], [1, "container-fluid"], [1, "row"], [1, "col-6"], [1, "col-6", "text-right"], ["href", "javascript:;", 1, "btn", "bg-blue", 3, "click"], [1, "fa", "fa-plus-square"], [1, "content", "px-2"], [1, "card"], [1, "card-header"], [1, "input-group"], [1, "input-group-prepend"], ["type", "button", 1, "btn", "bg-blue", 3, "click"], [1, "fas", "fa-search"], ["type", "text", "name", "keyword", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange", "keyup.enter"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-default", 3, "click"], [1, "fas"], ["class", "card mb-0 mt-1", 4, "ngIf"], [1, "card-body", "table-responsive", "p-0"], [1, "table", "table-hover", "text-nowrap", 3, "busy"], [1, "bg-light"], [2, "width", "310px"], [4, "ngFor", "ngForOf"], [1, "card-footer", "bg-light", "border-top"], [1, "col-sm-4", "col-12", "text-sm-left", "text-center"], [1, "btn", "btn-secondary", 3, "click"], [1, "fas", "fa-redo-alt"], [1, "col-sm-4", "col-12", "text-center"], [1, "mb-0", "my-2"], [1, "col-sm-4", "col-12"], [1, "float-sm-right", "m-auto"], ["id", "server", 3, "pageChange"], [1, "card", "mb-0", "mt-1"], [1, "card-body"], [1, "form-horizontal"], [1, "col-md-6"], [1, "form-group", "row", "mb-0"], [1, "col-md-3", "col-form-label"], [1, "col-md-9", "pt-2"], [1, "custom-control", "custom-radio", "d-inline"], ["type", "radio", "id", "isActiveAll", "name", "isActive", "checked", "", 1, "custom-control-input", 3, "ngModel", "value", "ngModelChange"], ["for", "isActiveAll", 1, "custom-control-label"], [1, "custom-control", "custom-radio", "d-inline", "mx-3"], ["type", "radio", "id", "isActiveActive", "name", "isActive", 1, "custom-control-input", 3, "ngModel", "value", "ngModelChange"], ["for", "isActiveActive", 1, "custom-control-label"], ["type", "radio", "id", "isActivePassive", "name", "isActive", 1, "custom-control-input", 3, "ngModel", "value", "ngModelChange"], ["for", "isActivePassive", 1, "custom-control-label"], [1, "card-footer"], ["type", "button", 1, "btn", "btn-default", "float-right", 3, "click"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "disabled", "", 1, "custom-control-input", 3, "checked"], [1, "custom-control-label"], ["type", "button", 1, "btn", "btn-sm", "bg-secondary", 3, "click"], [1, "fas", "fa-pencil-alt"], ["type", "button", 1, "btn", "btn-sm", "bg-danger", "mx-2", 3, "click"], [1, "fas", "fa-trash"], [1, "fas", "fa-lock"]],
      template: function UsersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_Template_a_click_9_listener() {
            return ctx.createUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_19_listener() {
            return ctx.getDataPage(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersComponent_Template_input_ngModelChange_21_listener($event) {
            return ctx.keyword = $event;
          })("keyup.enter", function UsersComponent_Template_input_keyup_enter_21_listener() {
            return ctx.getDataPage(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_24_listener() {
            return ctx.advancedFiltersVisible = !ctx.advancedFiltersVisible;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, UsersComponent_div_26_Template, 32, 24, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "table", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "thead", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, UsersComponent_tr_47_Template, 24, 13, "tr", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "paginate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_52_listener() {
            return ctx.refresh();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](57, "localize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "abp-pagination-controls", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function UsersComponent_Template_abp_pagination_controls_pageChange_60_listener($event) {
            return ctx.getDataPage($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routerTransition", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 18, "Users"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 20, "Create"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 22, "SearchWithThreeDot"))("ngModel", ctx.keyword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("fa-angle-up", ctx.advancedFiltersVisible)("fa-angle-down", !ctx.advancedFiltersVisible);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.advancedFiltersVisible);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("busy", ctx.isTableLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 24, "UserName"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 26, "FullName"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 28, "EmailAddress"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 30, "IsActive"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 32, "Actions"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](48, 34, ctx.users, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](40, _c0, ctx.pageSize, ctx.pageNumber, ctx.totalItems)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](57, 37, "TotalRecordsCount", ctx.totalItems), " ");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _shared_directives_busy_directive__WEBPACK_IMPORTED_MODULE_11__["BusyDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _shared_components_pagination_abp_pagination_controls_component__WEBPACK_IMPORTED_MODULE_12__["AbpPaginationControlsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RadioControlValueAccessor"]],
      pipes: [_shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_13__["LocalizePipe"], ngx_pagination__WEBPACK_IMPORTED_MODULE_14__["PaginatePipe"]],
      encapsulation: 2,
      data: {
        animation: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_3__["appModuleAnimation"])()]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './users.component.html',
          animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_3__["appModuleAnimation"])()]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["UserServiceProxy"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/shared/helpers/SignalRAspNetCoreHelper.ts":
  /*!*******************************************************!*\
    !*** ./src/shared/helpers/SignalRAspNetCoreHelper.ts ***!
    \*******************************************************/

  /*! exports provided: SignalRAspNetCoreHelper */

  /***/
  function srcSharedHelpersSignalRAspNetCoreHelperTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignalRAspNetCoreHelper", function () {
      return SignalRAspNetCoreHelper;
    });
    /* harmony import */


    var _shared_AppConsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @shared/AppConsts */
    "./src/shared/AppConsts.ts");
    /* harmony import */


    var abp_ng2_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! abp-ng2-module */
    "./node_modules/abp-ng2-module/__ivy_ngcc__/fesm2015/abp-ng2-module.js");

    var SignalRAspNetCoreHelper = /*#__PURE__*/function () {
      function SignalRAspNetCoreHelper() {
        _classCallCheck(this, SignalRAspNetCoreHelper);
      }

      _createClass(SignalRAspNetCoreHelper, null, [{
        key: "initSignalR",
        value: function initSignalR(callback) {
          var encryptedAuthToken = new abp_ng2_module__WEBPACK_IMPORTED_MODULE_1__["UtilsService"]().getCookieValue(_shared_AppConsts__WEBPACK_IMPORTED_MODULE_0__["AppConsts"].authorization.encryptedAuthTokenName);
          abp.signalr = {
            autoConnect: true,
            connect: undefined,
            hubs: undefined,
            qs: _shared_AppConsts__WEBPACK_IMPORTED_MODULE_0__["AppConsts"].authorization.encryptedAuthTokenName + '=' + encodeURIComponent(encryptedAuthToken),
            remoteServiceBaseUrl: _shared_AppConsts__WEBPACK_IMPORTED_MODULE_0__["AppConsts"].remoteServiceBaseUrl,
            startConnection: undefined,
            url: '/signalr'
          };
          var script = document.createElement('script');

          if (callback) {
            script.onload = function () {
              callback();
            };
          }

          script.src = _shared_AppConsts__WEBPACK_IMPORTED_MODULE_0__["AppConsts"].appBaseUrl + '/assets/abp/abp.signalr-client.js';
          document.head.appendChild(script);
        }
      }]);

      return SignalRAspNetCoreHelper;
    }();
    /***/

  },

  /***/
  "./src/shared/layout/menu-item.ts":
  /*!****************************************!*\
    !*** ./src/shared/layout/menu-item.ts ***!
    \****************************************/

  /*! exports provided: MenuItem */

  /***/
  function srcSharedLayoutMenuItemTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuItem", function () {
      return MenuItem;
    });

    var MenuItem = function MenuItem(label, route, icon) {
      var permissionName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var children = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

      _classCallCheck(this, MenuItem);

      this.label = label;
      this.route = route;
      this.icon = icon;
      this.permissionName = permissionName;
      this.children = children;
    };
    /***/

  },

  /***/
  "./src/shared/paged-listing-component-base.ts":
  /*!****************************************************!*\
    !*** ./src/shared/paged-listing-component-base.ts ***!
    \****************************************************/

  /*! exports provided: PagedResultDto, EntityDto, PagedRequestDto, PagedListingComponentBase */

  /***/
  function srcSharedPagedListingComponentBaseTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagedResultDto", function () {
      return PagedResultDto;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EntityDto", function () {
      return EntityDto;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagedRequestDto", function () {
      return PagedRequestDto;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagedListingComponentBase", function () {
      return PagedListingComponentBase;
    });
    /* harmony import */


    var shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! shared/app-component-base */
    "./src/shared/app-component-base.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PagedResultDto = function PagedResultDto() {
      _classCallCheck(this, PagedResultDto);
    };

    var EntityDto = function EntityDto() {
      _classCallCheck(this, EntityDto);
    };

    var PagedRequestDto = function PagedRequestDto() {
      _classCallCheck(this, PagedRequestDto);
    };

    var PagedListingComponentBase = /*#__PURE__*/function (_shared_app_component22) {
      _inherits(PagedListingComponentBase, _shared_app_component22);

      var _super33 = _createSuper(PagedListingComponentBase);

      function PagedListingComponentBase(injector) {
        var _this162;

        _classCallCheck(this, PagedListingComponentBase);

        _this162 = _super33.call(this, injector);
        _this162.pageSize = 10;
        _this162.pageNumber = 1;
        _this162.totalPages = 1;
        _this162.isTableLoading = false;
        return _this162;
      }

      _createClass(PagedListingComponentBase, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.refresh();
        }
      }, {
        key: "refresh",
        value: function refresh() {
          this.getDataPage(this.pageNumber);
        }
      }, {
        key: "showPaging",
        value: function showPaging(result, pageNumber) {
          this.totalPages = (result.totalCount - result.totalCount % this.pageSize) / this.pageSize + 1;
          this.totalItems = result.totalCount;
          this.pageNumber = pageNumber;
        }
      }, {
        key: "getDataPage",
        value: function getDataPage(page) {
          var _this163 = this;

          var req = new PagedRequestDto();
          req.maxResultCount = this.pageSize;
          req.skipCount = (page - 1) * this.pageSize;
          this.isTableLoading = true;
          this.list(req, page, function () {
            _this163.isTableLoading = false;
          });
        }
      }]);

      return PagedListingComponentBase;
    }(shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__["AppComponentBase"]);

    PagedListingComponentBase.ɵfac = function PagedListingComponentBase_Factory(t) {
      return new (t || PagedListingComponentBase)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]));
    };

    PagedListingComponentBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: PagedListingComponentBase,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });
    /***/
  }
}]);
//# sourceMappingURL=app-app-module-es5.js.map