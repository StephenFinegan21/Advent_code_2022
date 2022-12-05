"use strict";
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
        while (_) try {
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
exports.__esModule = true;
var fs = require("fs").promises;
var getRockPaperScissorsWinner = function (elf, me) {
    if ((elf === "A" && me === "X") ||
        (elf === "B" && me === "Y") ||
        (elf === "C" && me === "Z")) {
        return 3;
    }
    if (elf === "A") {
        if (me === "Z")
            return 0;
        if (me === "Y")
            return 6;
    }
    if (elf === "B") {
        if (me === "X")
            return 0;
        if (me === "Z")
            return 6;
    }
    if (elf === "C") {
        if (me === "Y")
            return 0;
        if (me === "X")
            return 6;
    }
    else
        return 0;
};
var getPickScore = function (pick) {
    if (pick === "X")
        return 1;
    if (pick === "Y")
        return 2;
    if (pick === "Z")
        return 3;
};
// Get the puzzle string from data.txt
function readFile(filepath) {
    return __awaiter(this, void 0, void 0, function () {
        var data, results, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fs.readFile(filepath, "utf-8")];
                case 1:
                    data = _a.sent();
                    results = data.split(/\r?\n|\r|\n/g);
                    return [4 /*yield*/, results];
                case 2: // Split on new line
                return [2 /*return*/, _a.sent()];
                case 3:
                    err_1 = _a.sent();
                    console.log(err_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function calculate() {
    return __awaiter(this, void 0, void 0, function () {
        var results, myScore, i, choices;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, readFile("/Users/stephenfinegan/Documents/dev/AdventCode/two/data.txt")];
                case 1:
                    results = _a.sent();
                    myScore = 0;
                    for (i in results) {
                        choices = results[i].split(" ");
                        myScore += getRockPaperScissorsWinner(choices[0], choices[1]);
                        myScore += getPickScore(choices[1]);
                    }
                    console.log(myScore);
                    return [2 /*return*/];
            }
        });
    });
}
calculate();
