"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
var JsSIP_1 = require("jssip/lib/JsSIP");
var lit_1 = require("lit");
require("./editor");
var decorators_js_1 = require("lit/decorators.js");
require("./audioVisualizer");
var audioVisualizer_1 = require("./audioVisualizer");
var SipJsCard = function () {
    var _classDecorators = [(0, decorators_js_1.customElement)('sipjs-card')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = lit_1.LitElement;
    var SipJsCard = _classThis = /** @class */ (function (_super) {
        __extends(SipJsCard_1, _super);
        function SipJsCard_1() {
            var _this = _super.call(this) || this;
            _this.timerElement = "00:00";
            _this.popup = false;
            _this.error = null;
            _this.callStatus = "Idle";
            _this.user_extension = "None";
            _this.card_title = "Unknown";
            _this.connected = false;
            _this.sipPhoneSession = null;
            return _this;
        }
        Object.defineProperty(SipJsCard_1, "properties", {
            get: function () {
                return {
                    hass: {},
                    config: {},
                    popup: {
                        type: Boolean
                    },
                    timerElement: {},
                    currentCamera: {}
                };
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SipJsCard_1, "styles", {
            get: function () {
                return (0, lit_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            .wrapper {\n                padding: 8px;\n                padding-top: 0px;\n                padding-bottom: 2px;\n            }\n            .flex {\n                flex: 1;\n                margin-top: 6px;\n                margin-bottom: 6px;\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                min-width: 0;\n            }\n            .info, .info > * {\n                white-space: nowrap;\n                overflow: hidden;\n                text-overflow: ellipsis;\n            }\n            .info {\n                flex: 1 1 30%;\n                cursor: pointer;\n                margin-left: 16px;\n                margin-right: 8px;\n            }\n            ha-card {\n                cursor: pointer;\n            }\n            .good {\n                color: var(--label-badge-green);\n            }\n            .warning {\n                color: var(--label-badge-yellow);\n            }\n            .critical {\n                color: var(--label-badge-red);\n            }\n            .icon {\n                padding: 0px 18px 0px 8px;\n              }\n            #phone .content {\n                color: white;\n            }\n            video {\n                display: block;\n                min-height: 20em;\n                height: 100%;\n                width: 100%;\n            }\n            .visualizer-container {\n                position: absolute;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                top: 0;\n                display: flex;\n                align-items: center;\n            }\n            .visualizer-bar {\n                display: inline-block;\n                background: white;\n                margin: 0 2px;\n                width: 25px;\n                min-height: 5px;\n            }\n            .box {\n                /* start paper-font-common-nowrap style */\n                white-space: nowrap;\n                overflow: hidden;\n                text-overflow: ellipsis;\n                /* end paper-font-common-nowrap style */\n                left: 0;\n                right: 0;\n                bottom: 0;\n                background-color: var(\n                  --ha-picture-card-background-color,\n                  rgba(0, 0, 0, 0.3)\n                );\n                padding: 4px 8px;\n                font-size: 16px;\n                line-height: 40px;\n                color: var(--ha-picture-card-text-color, white);\n                display: flex;\n                justify-content: space-between;\n                flex-direction: row;\n                margin-top: -70px;\n                min-height: 62px;\n            }\n            .box .title {\n                font-weight: 500;\n                margin-left: 8px;\n            }\n            .row {\n                display: flex;\n                flex-direction: row;\n            }\n            .container {\n                transition: filter 0.2s linear 0s;\n                width: 80vw;\n            }\n            .box, ha-icon {\n                display: flex;\n                align-items: center;\n            }\n            .accept-btn {\n                color: var(--label-badge-green);\n            }\n            .hangup-btn {\n                color: var(--label-badge-red);\n            }\n            #time, .title {\n                margin-right: 8px;\n                display: flex;\n                align-items: center;\n            }\n            ha-camera-stream {\n                height: auto;\n                width: 100%;\n                display: block;\n            }\n\n            .card-header {\n                display: flex;\n                justify-content: space-between;\n            }\n\n            .mdc-dialog__surface {\n                position: relative;\n                display: flex;\n                flex-direction: column;\n                flex-grow: 0;\n                flex-shrink: 0;\n                box-sizing: border-box;\n                max-width: 100%;\n                max-height: 100%;\n                pointer-events: auto;\n                overflow-y: auto;\n            }\n\n            .mdc-dialog__container {\n                display: flex;\n                flex-direction: row;\n                align-items: center;\n                justify-content: space-around;\n                box-sizing: border-box;\n                height: 100%;\n                transform: scale(0.8);\n                opacity: 0;\n                pointer-events: none;\n            }\n\n            ha-dialog[data-domain=\"camera\"] {\n                --dialog-content-padding: 0;\n            }\n\n            ha-dialog[data-domain=\"camera\"] .content, ha-dialog[data-domain=\"camera\"] ha-header-bar {\n                width: auto;\n            }\n\n            ha-dialog {\n                --dialog-surface-position: static;\n                --mdc-dialog-max-width: 90vw !important;\n                --mdc-dialog-min-width: 400px;\n                --mdc-dialog-heading-ink-color: var(--primary-text-color);\n                --mdc-dialog-content-ink-color: var(--primary-text-color);\n                --justify-action-buttons: space-between;\n            }\n\n            #audioVisualizer {\n                min-height: 20em;\n                height: 100%;\n                white-space: nowrap;\n                align-items: center;\n                display: flex;\n                justify-content: center;\n            }\n\n            #audioVisualizer div {\n                display: inline-block;\n                width: 3px;\n                height: 100px;\n                margin: 0 7px;\n                background: currentColor;\n                transform: scaleY( .5 );\n                opacity: .25;\n            }\n            ha-header-bar {\n                --mdc-theme-on-primary: var(--primary-text-color);\n                --mdc-theme-primary: var(--mdc-theme-surface);\n                flex-shrink: 0;\n                display: block;\n            }\n            .content {\n                outline: none;\n                align-self: stretch;\n                flex-grow: 1;\n                display: flex;\n                flex-flow: column;\n                background-color: var(--secondary-background-color);\n            }\n            @media all and (max-width: 450px), all and (max-height: 500px) {\n                ha-header-bar {\n                    --mdc-theme-primary: var(--app-header-background-color);\n                    --mdc-theme-on-primary: var(--app-header-text-color, white);\n                    border-bottom: none;\n                }\n            }\n\n            @media all and (max-width: 600px) {\n                .heading {\n                    border-bottom: 1px solid var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12))\n                }\n            }\n\n            .heading {\n                border-bottom: 1px solid\n                    var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12));\n            }\n            :host([large]) ha-dialog[data-domain=\"camera\"] .content,\n            :host([large]) ha-header-bar {\n                width: 90vw;\n            }\n            @media (max-width: 450px), (max-height: 500px) {\n                ha-dialog {\n                    --mdc-dialog-min-width: calc( 100vw - env(safe-area-inset-right) - env(safe-area-inset-left) );\n                    --mdc-dialog-max-width: calc( 100vw - env(safe-area-inset-right) - env(safe-area-inset-left) );\n                    --mdc-dialog-min-height: 94%;\n                    --mdc-dialog-max-height: 94%;\n                    --vertial-align-dialog: flex-end;\n                    --ha-dialog-border-radius: 0px;\n                }\n            }\n\n            .header-text {\n                -webkit-font-smoothing: antialiased;\n                font-family: var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n                font-size: var(--mdc-typography-headline6-font-size, 1.25rem);\n                line-height: var(--mdc-typography-headline6-line-height, 2rem);\n                font-weight: var(--mdc-typography-headline6-font-weight, 500);\n                letter-spacing: var(--mdc-typography-headline6-letter-spacing, 0.0125em);\n                text-decoration: var(--mdc-typography-headline6-text-decoration, inherit);\n                text-transform: var(--mdc-typography-headline6-text-transform, inherit);\n                padding-left: 20px;\n                padding-right: 0px;\n                text-overflow: ellipsis;\n                white-space: nowrap;\n                overflow: hidden;\n                z-index: 1;\n            }\n            \n            .popup {\n                display: flex;\n                flex-wrap: wrap;\n                flex-direction: column;\n                height: 100%;\n            }\n\n            .editField {\n                width: 100%;\n                margin-left: 16px;\n                margin-right: 8px;\n            }\n        "], ["\n            .wrapper {\n                padding: 8px;\n                padding-top: 0px;\n                padding-bottom: 2px;\n            }\n            .flex {\n                flex: 1;\n                margin-top: 6px;\n                margin-bottom: 6px;\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                min-width: 0;\n            }\n            .info, .info > * {\n                white-space: nowrap;\n                overflow: hidden;\n                text-overflow: ellipsis;\n            }\n            .info {\n                flex: 1 1 30%;\n                cursor: pointer;\n                margin-left: 16px;\n                margin-right: 8px;\n            }\n            ha-card {\n                cursor: pointer;\n            }\n            .good {\n                color: var(--label-badge-green);\n            }\n            .warning {\n                color: var(--label-badge-yellow);\n            }\n            .critical {\n                color: var(--label-badge-red);\n            }\n            .icon {\n                padding: 0px 18px 0px 8px;\n              }\n            #phone .content {\n                color: white;\n            }\n            video {\n                display: block;\n                min-height: 20em;\n                height: 100%;\n                width: 100%;\n            }\n            .visualizer-container {\n                position: absolute;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                top: 0;\n                display: flex;\n                align-items: center;\n            }\n            .visualizer-bar {\n                display: inline-block;\n                background: white;\n                margin: 0 2px;\n                width: 25px;\n                min-height: 5px;\n            }\n            .box {\n                /* start paper-font-common-nowrap style */\n                white-space: nowrap;\n                overflow: hidden;\n                text-overflow: ellipsis;\n                /* end paper-font-common-nowrap style */\n                left: 0;\n                right: 0;\n                bottom: 0;\n                background-color: var(\n                  --ha-picture-card-background-color,\n                  rgba(0, 0, 0, 0.3)\n                );\n                padding: 4px 8px;\n                font-size: 16px;\n                line-height: 40px;\n                color: var(--ha-picture-card-text-color, white);\n                display: flex;\n                justify-content: space-between;\n                flex-direction: row;\n                margin-top: -70px;\n                min-height: 62px;\n            }\n            .box .title {\n                font-weight: 500;\n                margin-left: 8px;\n            }\n            .row {\n                display: flex;\n                flex-direction: row;\n            }\n            .container {\n                transition: filter 0.2s linear 0s;\n                width: 80vw;\n            }\n            .box, ha-icon {\n                display: flex;\n                align-items: center;\n            }\n            .accept-btn {\n                color: var(--label-badge-green);\n            }\n            .hangup-btn {\n                color: var(--label-badge-red);\n            }\n            #time, .title {\n                margin-right: 8px;\n                display: flex;\n                align-items: center;\n            }\n            ha-camera-stream {\n                height: auto;\n                width: 100%;\n                display: block;\n            }\n\n            .card-header {\n                display: flex;\n                justify-content: space-between;\n            }\n\n            .mdc-dialog__surface {\n                position: relative;\n                display: flex;\n                flex-direction: column;\n                flex-grow: 0;\n                flex-shrink: 0;\n                box-sizing: border-box;\n                max-width: 100%;\n                max-height: 100%;\n                pointer-events: auto;\n                overflow-y: auto;\n            }\n\n            .mdc-dialog__container {\n                display: flex;\n                flex-direction: row;\n                align-items: center;\n                justify-content: space-around;\n                box-sizing: border-box;\n                height: 100%;\n                transform: scale(0.8);\n                opacity: 0;\n                pointer-events: none;\n            }\n\n            ha-dialog[data-domain=\"camera\"] {\n                --dialog-content-padding: 0;\n            }\n\n            ha-dialog[data-domain=\"camera\"] .content, ha-dialog[data-domain=\"camera\"] ha-header-bar {\n                width: auto;\n            }\n\n            ha-dialog {\n                --dialog-surface-position: static;\n                --mdc-dialog-max-width: 90vw !important;\n                --mdc-dialog-min-width: 400px;\n                --mdc-dialog-heading-ink-color: var(--primary-text-color);\n                --mdc-dialog-content-ink-color: var(--primary-text-color);\n                --justify-action-buttons: space-between;\n            }\n\n            #audioVisualizer {\n                min-height: 20em;\n                height: 100%;\n                white-space: nowrap;\n                align-items: center;\n                display: flex;\n                justify-content: center;\n            }\n\n            #audioVisualizer div {\n                display: inline-block;\n                width: 3px;\n                height: 100px;\n                margin: 0 7px;\n                background: currentColor;\n                transform: scaleY( .5 );\n                opacity: .25;\n            }\n            ha-header-bar {\n                --mdc-theme-on-primary: var(--primary-text-color);\n                --mdc-theme-primary: var(--mdc-theme-surface);\n                flex-shrink: 0;\n                display: block;\n            }\n            .content {\n                outline: none;\n                align-self: stretch;\n                flex-grow: 1;\n                display: flex;\n                flex-flow: column;\n                background-color: var(--secondary-background-color);\n            }\n            @media all and (max-width: 450px), all and (max-height: 500px) {\n                ha-header-bar {\n                    --mdc-theme-primary: var(--app-header-background-color);\n                    --mdc-theme-on-primary: var(--app-header-text-color, white);\n                    border-bottom: none;\n                }\n            }\n\n            @media all and (max-width: 600px) {\n                .heading {\n                    border-bottom: 1px solid var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12))\n                }\n            }\n\n            .heading {\n                border-bottom: 1px solid\n                    var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12));\n            }\n            :host([large]) ha-dialog[data-domain=\"camera\"] .content,\n            :host([large]) ha-header-bar {\n                width: 90vw;\n            }\n            @media (max-width: 450px), (max-height: 500px) {\n                ha-dialog {\n                    --mdc-dialog-min-width: calc( 100vw - env(safe-area-inset-right) - env(safe-area-inset-left) );\n                    --mdc-dialog-max-width: calc( 100vw - env(safe-area-inset-right) - env(safe-area-inset-left) );\n                    --mdc-dialog-min-height: 94%;\n                    --mdc-dialog-max-height: 94%;\n                    --vertial-align-dialog: flex-end;\n                    --ha-dialog-border-radius: 0px;\n                }\n            }\n\n            .header-text {\n                -webkit-font-smoothing: antialiased;\n                font-family: var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n                font-size: var(--mdc-typography-headline6-font-size, 1.25rem);\n                line-height: var(--mdc-typography-headline6-line-height, 2rem);\n                font-weight: var(--mdc-typography-headline6-font-weight, 500);\n                letter-spacing: var(--mdc-typography-headline6-letter-spacing, 0.0125em);\n                text-decoration: var(--mdc-typography-headline6-text-decoration, inherit);\n                text-transform: var(--mdc-typography-headline6-text-transform, inherit);\n                padding-left: 20px;\n                padding-right: 0px;\n                text-overflow: ellipsis;\n                white-space: nowrap;\n                overflow: hidden;\n                z-index: 1;\n            }\n            \n            .popup {\n                display: flex;\n                flex-wrap: wrap;\n                flex-direction: column;\n                height: 100%;\n            }\n\n            .editField {\n                width: 100%;\n                margin-left: 16px;\n                margin-right: 8px;\n            }\n        "])));
            },
            enumerable: false,
            configurable: true
        });
        SipJsCard_1.prototype.closePopup = function () {
            _super.prototype.performUpdate.call(this);
            this.popup = false;
        };
        SipJsCard_1.prototype.openPopup = function () {
            _super.prototype.performUpdate.call(this);
            this.popup = true;
        };
        // allow-exoplayer
        SipJsCard_1.prototype.render = function () {
            var _this = this;
            var _a;
            return (0, lit_1.html)(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n            <audio id=\"toneAudio\" style=\"display:none\" loop controls></audio>\n            <audio id=\"remoteAudio\" style=\"display:none\"></audio>\n            ", "\n        "], ["\n            <audio id=\"toneAudio\" style=\"display:none\" loop controls></audio>\n            <audio id=\"remoteAudio\" style=\"display:none\"></audio>\n            ", "\n        "])), this.popup ? (0, lit_1.html)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n                <style>\n                    ha-icon-button {\n                        --mdc-icon-button-size: ", "px;\n                        --mdc-icon-size: ", "px;\n                    }\n                </style>\n                <div class=\"popup\">\n                    <div slot=\"heading\" class=\"heading\">\n                        <ha-header-bar>\n                            <ha-icon-button\n                                style=\"--mdc-icon-button-size: 48px; --mdc-icon-size: 23px;\"\n                                @click=\"", "\"\n                                slot=\"navigationIcon\"\n                                dialogAction=\"cancel\"\n                                ><ha-icon icon=\"mdi:window-close\"></ha-icon>\n                            </ha-icon-button>\n                            <span slot=\"title\" id=\"name\" class=\"header-text\">", "</span>\n                            <span slot=\"actionItems\" id=\"time\" class=\"header-text\">", "</span>\n                        </ha-header-bar>\n                    </div>\n                    <div class=\"content\"> \n                        ", "\n                        <div class=\"box\">\n                            <div class=\"row\">\n                                <ha-icon-button\n                                    class=\"accept-btn\"\n                                    .label=", "\n                                    @click=\"", "\"\n                                    ><ha-icon icon=\"hass:phone\"></ha-icon>\n                                </ha-icon-button>\n                            </div>\n                            <div class=\"row\">\n                                <ha-icon-button\n                                    .label=", "\n                                    @click=\"", "\"\n                                    ><ha-icon id=\"muteaudio-icon\" icon=\"hass:microphone\"></ha-icon>\n                                </ha-icon-button>\n                                <ha-icon-button style=\"display:", "\"\n                                    .label=", "\n                                    @click=\"", "\"\n                                    ><ha-icon id=\"mutevideo-icon\" icon=\"", "\"></ha-icon>\n                                </ha-icon-button>\n                            </div>\n                            <div class=\"row\">\n                                ", "\n                                ", "\n                            </div>\n                            <div class=\"row\">\n                                <ha-icon-button\n                                    class=\"hangup-btn\"\n                                    .label=", "\n                                    @click=\"", "\"\n                                ><ha-icon icon=\"hass:phone-hangup\"></ha-icon>\n                                </ha-icon-button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            "], ["\n                <style>\n                    ha-icon-button {\n                        --mdc-icon-button-size: ", "px;\n                        --mdc-icon-size: ", "px;\n                    }\n                </style>\n                <div class=\"popup\">\n                    <div slot=\"heading\" class=\"heading\">\n                        <ha-header-bar>\n                            <ha-icon-button\n                                style=\"--mdc-icon-button-size: 48px; --mdc-icon-size: 23px;\"\n                                @click=\"", "\"\n                                slot=\"navigationIcon\"\n                                dialogAction=\"cancel\"\n                                ><ha-icon icon=\"mdi:window-close\"></ha-icon>\n                            </ha-icon-button>\n                            <span slot=\"title\" id=\"name\" class=\"header-text\">", "</span>\n                            <span slot=\"actionItems\" id=\"time\" class=\"header-text\">", "</span>\n                        </ha-header-bar>\n                    </div>\n                    <div class=\"content\"> \n                        ", "\n                        <div class=\"box\">\n                            <div class=\"row\">\n                                <ha-icon-button\n                                    class=\"accept-btn\"\n                                    .label=", "\n                                    @click=\"", "\"\n                                    ><ha-icon icon=\"hass:phone\"></ha-icon>\n                                </ha-icon-button>\n                            </div>\n                            <div class=\"row\">\n                                <ha-icon-button\n                                    .label=", "\n                                    @click=\"", "\"\n                                    ><ha-icon id=\"muteaudio-icon\" icon=\"hass:microphone\"></ha-icon>\n                                </ha-icon-button>\n                                <ha-icon-button style=\"display:", "\"\n                                    .label=", "\n                                    @click=\"", "\"\n                                    ><ha-icon id=\"mutevideo-icon\" icon=\"", "\"></ha-icon>\n                                </ha-icon-button>\n                            </div>\n                            <div class=\"row\">\n                                ", "\n                                ", "\n                            </div>\n                            <div class=\"row\">\n                                <ha-icon-button\n                                    class=\"hangup-btn\"\n                                    .label=", "\n                                    @click=\"", "\"\n                                ><ha-icon icon=\"hass:phone-hangup\"></ha-icon>\n                                </ha-icon-button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            "])), this.config.button_size ? (0, lit_1.unsafeCSS)(this.config.button_size) : (0, lit_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["48"], ["48"]))), this.config.button_size ? (0, lit_1.unsafeCSS)(this.config.button_size - 25) : (0, lit_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["23"], ["23"]))), function () { return _this.closePopup(); }, this.callStatus, this.timerElement, this.currentCamera !== undefined ? (0, lit_1.html)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n                            <ha-camera-stream\n                                allow-exoplayer\n                                muted\n                                .hass=", "\n                                .stateObj=", "\n                            ></ha-camera-stream>\n                        "], ["\n                            <ha-camera-stream\n                                allow-exoplayer\n                                muted\n                                .hass=", "\n                                .stateObj=", "\n                            ></ha-camera-stream>\n                        "])), this.hass, this.hass.states[this.currentCamera]) : (0, lit_1.html)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n                            <div id=\"audioVisualizer\" style=\"display:", "\"></div>\n                            <video poster=\"noposter\" style=\"display:", "\" playsinline id=\"remoteVideo\"></video>\n                            <audio id=\"remoteAudio\" style=\"display:none\"></audio>\n                        "], ["\n                            <div id=\"audioVisualizer\" style=\"display:", "\"></div>\n                            <video poster=\"noposter\" style=\"display:", "\" playsinline id=\"remoteVideo\"></video>\n                            <audio id=\"remoteAudio\" style=\"display:none\"></audio>\n                        "])), this.config.video ? "none" : "flex", this.config.video ? "block" : "none"), "Accept Call", this._answer, "Mute audio", this._toggleMuteAudio, this.config.video ? "block" : "none", "Mute video", this._toggleMuteVideo, this.config.video ? "hass:video" : "hass:video-off", this.config.dtmfs ?
                this.config.dtmfs.map(function (dtmf) {
                    return (0, lit_1.html)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n                                            <ha-icon-button\n                                                @click=\"", "\"\n                                                .label=\"", "\"\n                                                ><ha-icon icon=\"", "\"></ha-icon>\n                                            </ha-icon-button>\n                                        "], ["\n                                            <ha-icon-button\n                                                @click=\"", "\"\n                                                .label=\"", "\"\n                                                ><ha-icon icon=\"", "\"></ha-icon>\n                                            </ha-icon-button>\n                                        "])), function () { return _this._sendDTMF(dtmf.signal); }, dtmf.name, dtmf.icon);
                }) : "", this.config.buttons ?
                this.config.buttons.map(function (button) {
                    return (0, lit_1.html)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n                                            <ha-icon-button\n                                                @click=\"", "\"\n                                                .label=\"", "\"\n                                                ><ha-icon icon=\"", "\"></ha-icon>\n                                            </ha-icon-button>\n                                        "], ["\n                                            <ha-icon-button\n                                                @click=\"", "\"\n                                                .label=\"", "\"\n                                                ><ha-icon icon=\"", "\"></ha-icon>\n                                            </ha-icon-button>\n                                        "])), function () { return _this._button(button.entity); }, button.name, button.icon);
                }) : "", "Decline Call", this._hangup) : (0, lit_1.html)(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n                <ha-card>\n                    <h1 class=\"card-header\" @click=\"", "\">\n                        <span id=\"title\" class=\"name\">", "</span>\n                        <span id=\"extension\" style=\"color: ", ";\">", "</span>\n                    </h1>\n                    <div class=\"wrapper\">\n                        ", "\n\n                        ", "\n\n                        ", "\n\n                    </div>\n                </ha-card>\n            "], ["\n                <ha-card>\n                    <h1 class=\"card-header\" @click=\"", "\">\n                        <span id=\"title\" class=\"name\">", "</span>\n                        <span id=\"extension\" style=\"color: ", ";\">", "</span>\n                    </h1>\n                    <div class=\"wrapper\">\n                        ", "\n\n                        ", "\n\n                        ", "\n\n                    </div>\n                </ha-card>\n            "])), this.openPopup, this.getTitle(), this.getConnectionCSS(), (_a = this.user) === null || _a === void 0 ? void 0 : _a.extension, (this.error !== null) ? (0, lit_1.html)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n                            <ha-alert alert-type=\"error\" .title=", ">\n                                ", "\n                            </ha-alert>\n                            "], ["\n                            <ha-alert alert-type=\"error\" .title=", ">\n                                ", "\n                            </ha-alert>\n                            "])), this.error.title, this.error.message) : '', this.config.extensions.map(function (extension) {
                var stateObj = _this.hass.states[extension.entity];
                var isMe = (_this.hass.user.id == _this.hass.states[extension.person].attributes.user_id);
                if (isMe)
                    _this.user = extension;
                if (!(isMe && _this.config.hide_me)) {
                    return (0, lit_1.html)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n                                    <div class=\"flex\">\n                                        <state-badge\n                                            .stateObj=", "\n                                            .overrideIcon=", "\n                                            .stateColor=", "\n                                        ></state-badge>\n                                        <div class=\"info\">", "</div>\n                                        <mwc-button @click=\"", "\">CALL</mwc-button>\n                                    </div>\n                                "], ["\n                                    <div class=\"flex\">\n                                        <state-badge\n                                            .stateObj=", "\n                                            .overrideIcon=", "\n                                            .stateColor=", "\n                                        ></state-badge>\n                                        <div class=\"info\">", "</div>\n                                        <mwc-button @click=\"", "\">CALL</mwc-button>\n                                    </div>\n                                "])), stateObj, extension.icon, _this.config.state_color, extension.name, function () { return _this._call(extension.extension, extension.camera); });
                }
            }), this.config.custom ?
                this.config.custom.map(function (custom) {
                    var stateObj = _this.hass.states[custom.entity];
                    var nameid = "custom_" + custom.name.toLowerCase().split(' ').join('_');
                    ;
                    if (custom.edit) {
                        return (0, lit_1.html)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n                                        <div class=\"flex\">\n                                            <state-badge\n                                                .stateObj=", "\n                                                .overrideIcon=", "\n                                                .stateColor=", "\n                                            ></state-badge>\n                                            <ha-textfield\n                                                id=\"", "\"\n                                                .value=", "\n                                                .label=", "\n                                                type=\"text\"\n                                                .inputmode=\"text\"\n                                                class=\"editField\"\n                                            ></ha-textfield>\n                                            <mwc-button @click=\"", "\">CALL</mwc-button>\n                                        </div>\n                                    "], ["\n                                        <div class=\"flex\">\n                                            <state-badge\n                                                .stateObj=", "\n                                                .overrideIcon=", "\n                                                .stateColor=", "\n                                            ></state-badge>\n                                            <ha-textfield\n                                                id=\"", "\"\n                                                .value=", "\n                                                .label=", "\n                                                type=\"text\"\n                                                .inputmode=\"text\"\n                                                class=\"editField\"\n                                            ></ha-textfield>\n                                            <mwc-button @click=\"", "\">CALL</mwc-button>\n                                        </div>\n                                    "])), stateObj, custom.icon, _this.config.state_color, nameid, custom.number, custom.name, function () { return _this._custom_call(nameid, custom.camera); });
                    }
                    else {
                        return (0, lit_1.html)(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n                                        <div class=\"flex\">\n                                            <state-badge\n                                                .stateObj=", "\n                                                .overrideIcon=", "\n                                                .stateColor=", "\n                                            ></state-badge>\n                                            <div class=\"info\">", "</div>\n                                            <mwc-button @click=\"", "\">CALL</mwc-button>\n                                        </div>\n                                    "], ["\n                                        <div class=\"flex\">\n                                            <state-badge\n                                                .stateObj=", "\n                                                .overrideIcon=", "\n                                                .stateColor=", "\n                                            ></state-badge>\n                                            <div class=\"info\">", "</div>\n                                            <mwc-button @click=\"", "\">CALL</mwc-button>\n                                        </div>\n                                    "])), stateObj, custom.icon, _this.config.state_color, custom.name, function () { return _this._call(custom.number, custom.camera); });
                    }
                }) : ""));
        };
        SipJsCard_1.prototype.firstUpdated = function () {
            this.popup = false;
            this.currentCamera = undefined;
            this.connect();
        };
        SipJsCard_1.prototype.setConfig = function (config) {
            if (!config.server) {
                throw new Error("You need to define a server!");
            }
            if (!config.port) {
                throw new Error("You need to define a port!");
            }
            if (!config.extensions) {
                throw new Error("You need to define at least one extension!");
            }
            this.config = config;
        };
        SipJsCard_1.getConfigElement = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, document.createElement("sipjs-card-editor")];
                });
            });
        };
        SipJsCard_1.getStubConfig = function () {
            return {
                server: "192.168.0.10",
                port: "8089",
                button_size: "48",
                state_color: false,
                auto_answer: false,
                hide_me: true,
                custom_title: '',
                video: false,
                custom: [
                    {
                        name: 'Custom1',
                        number: '123',
                        icon: 'mdi:phone-classic'
                    }
                ],
                dtmfs: [
                    {
                        name: 'dtmf1',
                        signal: 1,
                        icon: 'mdi:door'
                    }
                ],
                iceTimeout: 5
            };
        };
        SipJsCard_1.prototype.getCardSize = function () {
            return this.config.extensions.length + 1;
        };
        SipJsCard_1.prototype.ring = function (tone) {
            var toneAudio = this.renderRoot.querySelector('#toneAudio');
            if (this.config[tone]) {
                toneAudio.src = this.config[tone];
                toneAudio.currentTime = 0;
                toneAudio.play();
            }
            else {
                toneAudio.pause();
            }
        };
        SipJsCard_1.prototype.setCallStatus = function (text) {
            this.callStatus = text;
        };
        SipJsCard_1.prototype.getTitle = function () {
            if (this.config.custom_title != "") {
                return this.config.custom_title;
            }
            else if (this.user !== undefined && this.user.name !== undefined) {
                return this.user.name;
            }
            else {
                return "Undefined";
            }
        };
        SipJsCard_1.prototype.getConnectionCSS = function () {
            if (this.connected) {
                return 'gray';
            }
            else {
                return 'var(--mdc-theme-error, #db4437)';
            }
        };
        SipJsCard_1.prototype._call = function (extension, camera) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.openPopup();
                    this.ring("ringbacktone");
                    this.setCallStatus("Calling...");
                    this.currentCamera = (camera ? camera : undefined);
                    if (this.sipPhone) {
                        this.sipPhone.call("sip:" + extension + "@" + this.config.server, this.sipCallOptions);
                    }
                    return [2 /*return*/];
                });
            });
        };
        SipJsCard_1.prototype._custom_call = function (nameid, camera) {
            return __awaiter(this, void 0, void 0, function () {
                var number;
                return __generator(this, function (_a) {
                    console.log(this.renderRoot.querySelector('#' + nameid));
                    number = this.renderRoot.querySelector('#' + nameid).value;
                    console.log("Trying to custom call this: " + number);
                    this._call(number, camera);
                    return [2 /*return*/];
                });
            });
        };
        SipJsCard_1.prototype._answer = function () {
            var _a;
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    (_a = this.sipPhoneSession) === null || _a === void 0 ? void 0 : _a.answer();
                    return [2 /*return*/];
                });
            });
        };
        SipJsCard_1.prototype._hangup = function () {
            var _a;
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    (_a = this.sipPhoneSession) === null || _a === void 0 ? void 0 : _a.terminate();
                    return [2 /*return*/];
                });
            });
        };
        SipJsCard_1.prototype._toggleMuteAudio = function () {
            var _a, _b, _c;
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_d) {
                    if ((_a = this.sipPhoneSession) === null || _a === void 0 ? void 0 : _a.isMuted().audio) {
                        (_b = this.sipPhoneSession) === null || _b === void 0 ? void 0 : _b.unmute({ video: false, audio: true });
                        this.renderRoot.querySelector('#muteaudio-icon').icon = "hass:microphone";
                    }
                    else {
                        (_c = this.sipPhoneSession) === null || _c === void 0 ? void 0 : _c.mute({ video: false, audio: true });
                        this.renderRoot.querySelector('#muteaudio-icon').icon = "hass:microphone-off";
                    }
                    return [2 /*return*/];
                });
            });
        };
        SipJsCard_1.prototype._toggleMuteVideo = function () {
            var _a, _b, _c;
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_d) {
                    if ((_a = this.sipPhoneSession) === null || _a === void 0 ? void 0 : _a.isMuted().video) {
                        (_b = this.sipPhoneSession) === null || _b === void 0 ? void 0 : _b.unmute({ video: true, audio: false });
                        this.renderRoot.querySelector('#mutevideo-icon').icon = "hass:video";
                    }
                    else {
                        (_c = this.sipPhoneSession) === null || _c === void 0 ? void 0 : _c.mute({ video: true, audio: false });
                        this.renderRoot.querySelector('#mutevideo-icon').icon = "hass:video-off";
                    }
                    return [2 /*return*/];
                });
            });
        };
        SipJsCard_1.prototype._sendDTMF = function (signal) {
            var _a;
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    (_a = this.sipPhoneSession) === null || _a === void 0 ? void 0 : _a.sendDTMF(signal);
                    return [2 /*return*/];
                });
            });
        };
        SipJsCard_1.prototype._button = function (entity) {
            return __awaiter(this, void 0, void 0, function () {
                var domain, service;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            domain = entity.split(".")[0];
                            console.log(domain);
                            switch (domain) {
                                case "script":
                                    service = "turn_on";
                                    break;
                                case "button":
                                    service = "press";
                                    break;
                                case "scene":
                                    service = "turn_on";
                                    break;
                                case "light":
                                    service = "toggle";
                                    break;
                                case "switch":
                                    service = "toggle";
                                    break;
                                case "input_boolean":
                                    service = "toggle";
                                    break;
                                default:
                                    console.log("No supported service");
                                    return [2 /*return*/];
                            }
                            console.log(service);
                            return [4 /*yield*/, this.hass.callService(domain, service, {
                                    entity_id: entity
                                })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        SipJsCard_1.prototype.endCall = function () {
            if (!this.config.video && this.currentCamera == undefined && this.audioVisualizer !== undefined) {
                this.audioVisualizer.stop();
                this.renderRoot.querySelector('#audioVisualizer').innerHTML = '';
                this.audioVisualizer = undefined;
            }
            this.ring("pause");
            this.setCallStatus("Idle");
            clearInterval(this.intervalId);
            this.timerElement = "00:00";
            this.currentCamera = undefined;
            this.closePopup();
            this.sipPhoneSession = null;
        };
        SipJsCard_1.prototype.connect = function () {
            var _a, _b, _c, _d, _e;
            return __awaiter(this, void 0, void 0, function () {
                var socket, configuration, urlParams;
                var _this = this;
                return __generator(this, function (_f) {
                    this.timerElement = "00:00";
                    if (this.user == undefined) {
                        if (this.config.backup_extension !== undefined) {
                            this.user = {
                                name: this.config.backup_name,
                                extension: this.config.backup_extension,
                                secret: this.config.backup_secret
                            };
                        }
                        else {
                            this.error = {
                                title: "Person and backup not configured!",
                                message: "There is no extension configured for this person, and no backup extension configured. Please configure one of them."
                            };
                            this.requestUpdate();
                            throw new Error("Person and backup not configured!");
                        }
                    }
                    this.requestUpdate();
                    console.log("Connecting to ws://" + this.config.server + ":" + this.config.port + this.config.prefix + "/ws");
                    socket = new JsSIP_1.WebSocketInterface("ws://" + this.config.server + ":" + this.config.port + this.config.prefix + "/ws");
                    configuration = {
                        sockets: [socket],
                        uri: "sip:" + this.user.extension + "@" + this.config.server,
                        authorization_user: this.user.extension,
                        password: this.user.secret,
                        register: true
                    };
                    this.sipPhone = new JsSIP_1.UA(configuration);
                    this.sipCallOptions = {
                        mediaConstraints: { audio: true, video: this.config.video },
                        rtcOfferConstraints: { offerToReceiveAudio: true, offerToReceiveVideo: this.config.video },
                        pcConfig: this.config.iceConfig // we just use the config that directly comes from the YAML config in the YAML card config.
                        /* EXAMPLE config
                        {
                            iceCandidatePoolSize: 0,   //  prefetched ICE candidate pool. The default value is 0 (meaning no candidate prefetching will occur).
                            iceTransportPolicy: 'all', // 'relay' is also allowed, i.e. only candidates from TURN-servers
                            iceServers: [
                                {
                                    // Google STUN servers
                                    urls: ['stun:stun.l.google.com:19302', 'stun:stun1.l.google.com:19302'],
                                    //credentialType: 'password',
                                    //username: 'myusername',
                                    //credential: 'mypassword'
                                }
                            ],
                            rtcpMuxPolicy: 'require' // RTP and RTCP will be muxed
                        }
                        */
                    };
                    console.log('ICE config: ' + JSON.stringify(this.sipCallOptions.pcConfig, null, 2));
                    (_a = this.sipPhone) === null || _a === void 0 ? void 0 : _a.start();
                    (_b = this.sipPhone) === null || _b === void 0 ? void 0 : _b.on("registered", function () {
                        console.log('SIP-Card Registered with SIP Server');
                        _this.connected = true;
                        _super.prototype.requestUpdate.call(_this);
                        // this.renderRoot.querySelector('.extension').style.color = 'gray';
                    });
                    (_c = this.sipPhone) === null || _c === void 0 ? void 0 : _c.on("unregistered", function () {
                        console.log('SIP-Card Unregistered with SIP Server');
                        _this.connected = false;
                        _super.prototype.requestUpdate.call(_this);
                        // this.renderRoot.querySelector('.extension').style.color = 'var(--mdc-theme-primary, #03a9f4)';
                    });
                    (_d = this.sipPhone) === null || _d === void 0 ? void 0 : _d.on("registrationFailed", function () {
                        console.log('SIP-Card Failed Registeration with SIP Server');
                        _this.connected = false;
                        _super.prototype.requestUpdate.call(_this);
                        // this.renderRoot.querySelector('.extension').style.color = 'var(--mdc-theme-error, #db4437)';
                    });
                    (_e = this.sipPhone) === null || _e === void 0 ? void 0 : _e.on("newRTCSession", function (event) {
                        if (_this.sipPhoneSession !== null) {
                            event.session.terminate();
                            return;
                        }
                        console.log('Call: newRTCSession: Originator: ' + event.originator);
                        _this.sipPhoneSession = event.session;
                        _this.sipPhoneSession.on('getusermediafailed', function (DOMError) {
                            console.log('getUserMedia() failed: ' + DOMError);
                        });
                        _this.sipPhoneSession.on('peerconnection:createofferfailed', function (DOMError) {
                            console.log('createOffer() failed: ' + DOMError);
                        });
                        _this.sipPhoneSession.on('peerconnection:createanswerfailed', function (DOMError) {
                            console.log('createAnswer() failed: ' + DOMError);
                        });
                        _this.sipPhoneSession.on('peerconnection:setlocaldescriptionfailed', function (DOMError) {
                            console.log('setLocalDescription() failed: ' + DOMError);
                        });
                        _this.sipPhoneSession.on('peerconnection:setremotedescriptionfailed', function (DOMError) {
                            console.log('setRemoteDescription() failed: ' + DOMError);
                        });
                        _this.sipPhoneSession.on("confirmed", function (event) {
                            console.log('Call confirmed. Originator: ' + event.originator);
                        });
                        _this.sipPhoneSession.on("failed", function (event) {
                            console.log('Call failed. Originator: ' + event.originator);
                            _this.endCall();
                        });
                        _this.sipPhoneSession.on("ended", function (event) {
                            console.log('Call ended. Originator: ' + event.originator);
                            _this.endCall();
                        });
                        _this.sipPhoneSession.on("accepted", function (event) {
                            var _a, _b;
                            console.log('Call accepted. Originator: ' + event.originator);
                            if (!_this.config.video && _this.currentCamera == undefined) {
                                var remoteAudio = _this.renderRoot.querySelector("#remoteAudio");
                                _this.audioVisualizer = new audioVisualizer_1.AudioVisualizer(_this.renderRoot, remoteAudio.srcObject, 16);
                            }
                            _this.ring("pause");
                            if ((_a = _this.sipPhoneSession) === null || _a === void 0 ? void 0 : _a.remote_identity) {
                                _this.setCallStatus((_b = _this.sipPhoneSession) === null || _b === void 0 ? void 0 : _b.remote_identity.display_name);
                            }
                            else {
                                _this.setCallStatus("On Call");
                            }
                            var time = new Date();
                            _this.intervalId = window.setInterval(function () {
                                var delta = Math.abs(new Date().getTime() - time.getTime()) / 1000;
                                var minutes = Math.floor(delta / 60) % 60;
                                delta -= minutes * 60;
                                var seconds = delta % 60;
                                this.timerElement = (minutes + ":" + Math.round(seconds)).split(':').map(function (e) { return "0".concat(e).slice(-2); }).join(':');
                            }.bind(_this), 1000);
                        });
                        var iceCandidateTimeout = null;
                        var iceTimeout = 5;
                        if (_this.config.iceTimeout !== null && _this.config.iceTimeout !== undefined) {
                            iceTimeout = _this.config.iceTimeout;
                        }
                        console.log('ICE gathering timeout: ' + iceTimeout + " seconds");
                        _this.sipPhoneSession.on("icecandidate", function (event) {
                            console.log('ICE: candidate: ' + event.candidate.candidate);
                            if (iceCandidateTimeout != null) {
                                clearTimeout(iceCandidateTimeout);
                            }
                            iceCandidateTimeout = setTimeout(function () {
                                console.log('ICE: stop candidate gathering due to application timeout.');
                                event.ready();
                            }, iceTimeout * 1000);
                        });
                        var handleIceGatheringStateChangeEvent = function (event) {
                            var connection = event.target;
                            console.log('ICE: gathering state changed: ' + connection.iceGatheringState);
                            if (connection.iceGatheringState === 'complete') {
                                console.log('ICE: candidate gathering complete. Cancelling ICE application timeout timer...');
                                if (iceCandidateTimeout != null) {
                                    clearTimeout(iceCandidateTimeout);
                                }
                            }
                        };
                        var handleRemoteTrackEvent = function (event) { return __awaiter(_this, void 0, void 0, function () {
                            var stream, remoteAudio, err_1, remoteVideo, err_2;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        console.log('Call: peerconnection: mediatrack event: kind: ' + event.track.kind);
                                        stream = null;
                                        if (event.streams) {
                                            console.log('Call: peerconnection: mediatrack event: number of associated streams: ' + event.streams.length + ' - using first stream');
                                            stream = event.streams[0];
                                        }
                                        else {
                                            console.log('Call: peerconnection: mediatrack event: no associated stream. Creating stream...');
                                            if (!stream) {
                                                stream = new MediaStream();
                                            }
                                            stream.addTrack(event.track);
                                        }
                                        remoteAudio = this.renderRoot.querySelector("#remoteAudio");
                                        if (!(event.track.kind === 'audio' && remoteAudio.srcObject != stream)) return [3 /*break*/, 4];
                                        remoteAudio.srcObject = stream;
                                        _a.label = 1;
                                    case 1:
                                        _a.trys.push([1, 3, , 4]);
                                        return [4 /*yield*/, remoteAudio.play()];
                                    case 2:
                                        _a.sent();
                                        return [3 /*break*/, 4];
                                    case 3:
                                        err_1 = _a.sent();
                                        console.log('Error starting audio playback: ' + err_1);
                                        return [3 /*break*/, 4];
                                    case 4:
                                        remoteVideo = this.renderRoot.querySelector('#remoteVideo');
                                        if (!(this.config.video && event.track.kind === 'video' && remoteVideo.srcObject != stream)) return [3 /*break*/, 8];
                                        remoteVideo.srcObject = stream;
                                        _a.label = 5;
                                    case 5:
                                        _a.trys.push([5, 7, , 8]);
                                        return [4 /*yield*/, remoteVideo.play()];
                                    case 6:
                                        _a.sent();
                                        return [3 /*break*/, 8];
                                    case 7:
                                        err_2 = _a.sent();
                                        console.log('Error starting video playback: ' + err_2);
                                        return [3 /*break*/, 8];
                                    case 8: return [2 /*return*/];
                                }
                            });
                        }); };
                        // Typescript types for enums seem to be broken for JsSIP.
                        // See: https://github.com/versatica/JsSIP/issues/750
                        if (_this.sipPhoneSession.direction === 'incoming') {
                            var extension = _this.sipPhoneSession.remote_identity.uri.user;
                            _this.config.extensions.forEach(function (element) {
                                if (element.extension == extension) {
                                    _this.currentCamera = (element.camera ? element.camera : undefined);
                                }
                            });
                            if (typeof _this.config.custom !== 'undefined') {
                                _this.config.custom.forEach(function (element) {
                                    if (element.number == extension) {
                                        _this.currentCamera = (element.camera ? element.camera : undefined);
                                    }
                                });
                            }
                            _this.sipPhoneSession.on("peerconnection", function (event) {
                                console.log('Call: peerconnection(incoming)');
                                event.peerconnection.addEventListener("track", handleRemoteTrackEvent);
                                event.peerconnection.addEventListener("icegatheringstatechange", handleIceGatheringStateChangeEvent);
                            });
                            _this.openPopup();
                            if (_this.config.auto_answer) {
                                _this.sipPhoneSession.answer(_this.sipCallOptions);
                                return;
                            }
                            _this.ring("ringtone");
                            if (_this.sipPhoneSession.remote_identity) {
                                _this.setCallStatus("Incoming Call From " + _this.sipPhoneSession.remote_identity.display_name);
                            }
                            else {
                                _this.setCallStatus("Incoming Call");
                            }
                        }
                        else if (_this.sipPhoneSession.direction === 'outgoing') {
                            //Note: peerconnection seems to never fire for outgoing calls
                            _this.sipPhoneSession.on("peerconnection", function (event) {
                                console.log('Call: peerconnection(outgoing)');
                            });
                            _this.sipPhoneSession.connection.addEventListener("track", handleRemoteTrackEvent);
                            _this.sipPhoneSession.connection.addEventListener("icegatheringstatechange", handleIceGatheringStateChangeEvent);
                        }
                        else {
                            console.log('Call: direction was neither incoming or outgoing!');
                        }
                    });
                    urlParams = new URLSearchParams(window.location.search);
                    if (urlParams.get('call')) {
                        this.openPopup();
                        this._call(urlParams.get('call'), undefined); // TODO: Add camera here or in the _call function itself.
                    }
                    return [2 /*return*/];
                });
            });
        };
        return SipJsCard_1;
    }(_classSuper));
    __setFunctionName(_classThis, "SipJsCard");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SipJsCard = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SipJsCard = _classThis;
}();
window.customCards = window.customCards || [];
window.customCards.push({
    type: "sipjs-card",
    name: "SIP Card",
    preview: false,
    description: "A SIP card, made by Jordy Kuhne."
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14;
