import { substring } from "../../Demo/src/fable_modules/fable-library.4.0.1/String.js";
import { disposeSafe, getEnumerator } from "../../Demo/src/fable_modules/fable-library.4.0.1/Util.js";
import { createElement } from "react";
import { Record } from "../../Demo/src/fable_modules/fable-library.4.0.1/Types.js";
import { record_type, unit_type, lambda_type, array_type, int32_type, option_type, class_type, bool_type, string_type } from "../../Demo/src/fable_modules/fable-library.4.0.1/Reflection.js";

export function Object_fromFlatEntries(kvs) {
    const setProperty = (target_mut, key_mut, value_mut) => {
        setProperty:
        while (true) {
            const target = target_mut, key = key_mut, value = value_mut;
            const matchValue = key.indexOf(".") | 0;
            if (matchValue === -1) {
                target[key] = value;
            }
            else {
                const sepIdx = matchValue | 0;
                const topKey = substring(key, 0, sepIdx);
                const nestedKey = substring(key, sepIdx + 1);
                if (target[topKey] === undefined) {
                    target[topKey] = {};
                }
                target_mut = target[topKey];
                key_mut = nestedKey;
                value_mut = value;
                continue setProperty;
            }
            break;
        }
    };
    const target_1 = {};
    const enumerator = getEnumerator(kvs);
    try {
        while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
            const forLoopVar = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
            const value_1 = forLoopVar[1];
            const key_1 = forLoopVar[0];
            setProperty(target_1, key_1, value_1);
        }
    }
    finally {
        disposeSafe(enumerator);
    }
    return target_1;
}

export const ReactFlatpickrHelpers_reactElement = createElement;

export const ReactFlatpickrHelpers_reactElementTag = createElement;

export function ReactFlatpickrHelpers_createElement(el, properties) {
    return ReactFlatpickrHelpers_reactElement(el, Object_fromFlatEntries(properties));
}

export function ReactFlatpickrHelpers_createElementTag(tag, properties) {
    return ReactFlatpickrHelpers_reactElementTag(tag, Object_fromFlatEntries(properties));
}

export class FlatpickrOptions extends Record {
    "constructor"(altFormat, altInput, altInputClass, allowInput, allowInvalidPreload, appendTo, ariaDateFormat, conjunction, clickOpens, dateFormat, defaultDate, defaultHour, defaultMinute, disable, disableMobile, enable, enableTime, enableSeconds, formatDate, hourIncrement, maxDate, minDate, minuteIncrement, mode, nextArrow, noCalendar, onChange, onClose, onOpen, onReady, parseDate, position, positionElement, prevArrow, shorthandCurrentMonth, showMonths, time_24hr, weekNumbers, wrap, monthSelectorType) {
        super();
        this.altFormat = altFormat;
        this.altInput = altInput;
        this.altInputClass = altInputClass;
        this.allowInput = allowInput;
        this.allowInvalidPreload = allowInvalidPreload;
        this.appendTo = appendTo;
        this.ariaDateFormat = ariaDateFormat;
        this.conjunction = conjunction;
        this.clickOpens = clickOpens;
        this.dateFormat = dateFormat;
        this.defaultDate = defaultDate;
        this.defaultHour = (defaultHour | 0);
        this.defaultMinute = (defaultMinute | 0);
        this.disable = disable;
        this.disableMobile = disableMobile;
        this.enable = enable;
        this.enableTime = enableTime;
        this.enableSeconds = enableSeconds;
        this.formatDate = formatDate;
        this.hourIncrement = (hourIncrement | 0);
        this.maxDate = maxDate;
        this.minDate = minDate;
        this.minuteIncrement = (minuteIncrement | 0);
        this.mode = mode;
        this.nextArrow = nextArrow;
        this.noCalendar = noCalendar;
        this.onChange = onChange;
        this.onClose = onClose;
        this.onOpen = onOpen;
        this.onReady = onReady;
        this.parseDate = parseDate;
        this.position = position;
        this.positionElement = positionElement;
        this.prevArrow = prevArrow;
        this.shorthandCurrentMonth = shorthandCurrentMonth;
        this.showMonths = (showMonths | 0);
        this.time_24hr = time_24hr;
        this.weekNumbers = weekNumbers;
        this.wrap = wrap;
        this.monthSelectorType = monthSelectorType;
    }
}

export function FlatpickrOptions$reflection() {
    return record_type("Feliz.FlatpickrOptions", [], FlatpickrOptions, () => [["altFormat", string_type], ["altInput", bool_type], ["altInputClass", string_type], ["allowInput", bool_type], ["allowInvalidPreload", bool_type], ["appendTo", option_type(class_type("Browser.Types.HTMLElement", void 0, HTMLElement))], ["ariaDateFormat", string_type], ["conjunction", option_type(string_type)], ["clickOpens", bool_type], ["dateFormat", string_type], ["defaultDate", option_type(string_type)], ["defaultHour", int32_type], ["defaultMinute", int32_type], ["disable", array_type(string_type)], ["disableMobile", bool_type], ["enable", option_type(array_type(string_type))], ["enableTime", bool_type], ["enableSeconds", bool_type], ["formatDate", option_type(lambda_type(string_type, class_type("System.DateTime")))], ["hourIncrement", int32_type], ["maxDate", option_type(string_type)], ["minDate", option_type(string_type)], ["minuteIncrement", int32_type], ["mode", string_type], ["nextArrow", string_type], ["noCalendar", bool_type], ["onChange", array_type(lambda_type(class_type("System.DateTime"), unit_type))], ["onClose", array_type(lambda_type(class_type("System.DateTime"), unit_type))], ["onOpen", array_type(lambda_type(class_type("System.DateTime"), unit_type))], ["onReady", array_type(lambda_type(class_type("System.DateTime"), unit_type))], ["parseDate", option_type(lambda_type(string_type, option_type(class_type("System.DateTime"))))], ["position", string_type], ["positionElement", option_type(class_type("Browser.Types.HTMLElement", void 0, HTMLElement))], ["prevArrow", string_type], ["shorthandCurrentMonth", bool_type], ["showMonths", int32_type], ["time_24hr", bool_type], ["weekNumbers", bool_type], ["wrap", bool_type], ["monthSelectorType", string_type]]);
}

export const FlatpickrOptionsModule_defaultOptions = new FlatpickrOptions("F j, Y", false, "", false, false, void 0, "F j, Y", void 0, true, "Y-m-d", void 0, 12, 0, [], false, void 0, false, false, void 0, 1, void 0, void 0, 5, "single", ">", false, [], [], [], [], void 0, "auto", void 0, "<", false, 1, false, false, false, "dropdown");

export class flatpickr {
    "constructor"() {
    }
}

export function flatpickr$reflection() {
    return class_type("Feliz.flatpickr", void 0, flatpickr);
}

export class Flatpickr {
    "constructor"() {
    }
}

export function Flatpickr$reflection() {
    return class_type("Feliz.Flatpickr", void 0, Flatpickr);
}

