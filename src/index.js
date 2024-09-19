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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomNumber = exports.createRouletteImage = exports.getRandomDarkHexCode = exports.shuffleArray = exports.createRouletteGifImage = void 0;
var canvas_1 = require("@napi-rs/canvas");
var gifenc_1 = require("@skyra/gifenc");
var consumers_1 = require("node:stream/consumers");
var node_path_1 = require("node:path");
canvas_1.GlobalFonts.registerFromPath((0, node_path_1.join)('.', 'node_modules', 'roulette-image', 'fonts', 'Tajawal.ttf'), 'Tajawal');
canvas_1.GlobalFonts.registerFromPath((0, node_path_1.join)('.', 'node_modules', 'roulette-image', 'fonts', 'Arial.ttf'), 'Arial');
canvas_1.GlobalFonts.registerFromPath((0, node_path_1.join)('.', 'node_modules', 'roulette-image', 'fonts', 'DejaVuSans.ttf'), 'DejaVuSans');
canvas_1.GlobalFonts.registerFromPath((0, node_path_1.join)('.', 'node_modules', 'roulette-image', 'fonts', 'Symbola_hint.ttf'), 'Symbola_hint');
canvas_1.GlobalFonts.registerFromPath((0, node_path_1.join)('.', 'node_modules', 'roulette-image', 'fonts', 'Symbola.ttf'), 'Symbola');
canvas_1.GlobalFonts.registerFromPath((0, node_path_1.join)('.', 'node_modules', 'roulette-image', 'fonts', 'NotoEmoji.ttf'), 'NotoEmoji');
canvas_1.GlobalFonts.registerFromPath((0, node_path_1.join)('.', 'node_modules', 'roulette-image', 'fonts', 'NotoRegular.ttf'), 'NotoRegular');
function createRouletteGifImage(sectors, return_stream) {
    if (return_stream === void 0) { return_stream = false; }
    return __awaiter(this, void 0, void 0, function () {
        var main, gif_image, one_image, frames, one_ctx, roulette_images, _i, roulette_images_1, image_ctx, delay, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    main = sectors;
                    return [4 /*yield*/, createGifImage(120)];
                case 1:
                    gif_image = _b.sent();
                    return [4 /*yield*/, createRouletteImage(main, false, false)];
                case 2:
                    one_image = _b.sent();
                    return [4 /*yield*/, getRotateRouletteImage(one_image, "https://i.pinimg.com/564x/03/a9/5b/03a95b4163bac8525809f191a206e729.jpg")];
                case 3:
                    frames = _b.sent();
                    return [4 /*yield*/, createRouletteImage(main, true)];
                case 4:
                    one_ctx = _b.sent();
                    roulette_images = __spreadArray(__spreadArray([], frames, true), [one_ctx], false);
                    _i = 0, roulette_images_1 = roulette_images;
                    _b.label = 5;
                case 5:
                    if (!(_i < roulette_images_1.length)) return [3 /*break*/, 9];
                    image_ctx = roulette_images_1[_i];
                    delay = roulette_images.indexOf(image_ctx) >= 14 ? 150 : roulette_images.indexOf(image_ctx) >= 11 ? 120 :
                        roulette_images.indexOf(image_ctx) >= 7 ? 100 : 75;
                    return [4 /*yield*/, gif_image.encoder.setDelay(25)];
                case 6:
                    _b.sent();
                    return [4 /*yield*/, gif_image.encoder.addFrame(image_ctx)];
                case 7:
                    _b.sent();
                    _b.label = 8;
                case 8:
                    _i++;
                    return [3 /*break*/, 5];
                case 9:
                    if (!(roulette_images.length > 0)) return [3 /*break*/, 14];
                    return [4 /*yield*/, gif_image.encoder.finish()];
                case 10:
                    _b.sent();
                    if (!return_stream) return [3 /*break*/, 11];
                    _a = gif_image.stream;
                    return [3 /*break*/, 13];
                case 11: return [4 /*yield*/, (0, consumers_1.buffer)(gif_image.stream)];
                case 12:
                    _a = _b.sent();
                    _b.label = 13;
                case 13: return [2 /*return*/, _a];
                case 14: return [2 /*return*/];
            }
        });
    });
}
exports.createRouletteGifImage = createRouletteGifImage;
function createGifImage(delay) {
    if (delay === void 0) { delay = 120; }
    return __awaiter(this, void 0, void 0, function () {
        var encoder, stream;
        return __generator(this, function (_a) {
            encoder = new gifenc_1.GifEncoder(500, 500);
            stream = encoder.createReadStream();
            encoder.start();
            encoder.setRepeat(-1);
            encoder.setQuality(1);
            encoder.setTransparent(1);
            return [2 /*return*/, { encoder: encoder, loadImage: canvas_1.loadImage, stream: stream }];
        });
    });
}
function getRotateRouletteImage(image_buffer, specific_win_avatar) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                    var img, avatar, canvasWidth, canvasHeight, centerX, centerY, angleIncrement, frames, i, canvas, ctx, angle, circle, aspect, hsx, hsy;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, (0, canvas_1.loadImage)(image_buffer)];
                            case 1:
                                img = _a.sent();
                                return [4 /*yield*/, (0, canvas_1.loadImage)(specific_win_avatar)];
                            case 2:
                                avatar = _a.sent();
                                canvasWidth = 500;
                                canvasHeight = 500;
                                centerX = canvasWidth / 2;
                                centerY = canvasHeight / 2;
                                angleIncrement = (2 * Math.PI) / 15;
                                frames = [];
                                for (i = 0; i < 15; i++) {
                                    canvas = (0, canvas_1.createCanvas)(canvasWidth, canvasHeight);
                                    ctx = canvas.getContext('2d');
                                    ctx.save();
                                    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
                                    angle = angleIncrement * i;
                                    ctx.translate(centerX, centerY);
                                    ctx.rotate(angle);
                                    ctx.drawImage(img, -img.width / 2, -img.height / 2);
                                    ctx.restore();
                                    ctx.beginPath();
                                    ctx.moveTo(499, 203);
                                    ctx.lineTo(468, 230);
                                    ctx.lineTo(499, 257);
                                    ctx.fillStyle = '#e2e2e2';
                                    ctx.fill();
                                    ctx.closePath();
                                    circle = {
                                        x: canvas.width / 2,
                                        y: canvas.height / 2,
                                        radius: 75,
                                    };
                                    ctx.beginPath();
                                    ctx.strokeStyle = "white";
                                    ctx.arc(circle.x, circle.y, circle.radius + 2, 0, Math.PI * 2, true);
                                    ctx.fillStyle = 'white';
                                    ctx.fill();
                                    ctx.closePath();
                                    ctx.beginPath();
                                    ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, true);
                                    ctx.closePath();
                                    ctx.clip();
                                    aspect = avatar.height / avatar.width;
                                    hsx = circle.radius * Math.max(1.0 / aspect, 1.0);
                                    hsy = circle.radius * Math.max(aspect, 1.0);
                                    ctx.drawImage(avatar, circle.x - hsx, circle.y - hsy, hsx * 2, hsy * 2);
                                    frames.push(ctx);
                                }
                                resolve(frames);
                                return [2 /*return*/];
                        }
                    });
                }); })];
        });
    });
}
function getRotateRouletteImageOLD(image_buffer, specific_win_avatar) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                    var img, avatar, canvasWidth, canvasHeight, centerX, centerY, angleIncrement, frames, i, canvas, ctx, angle, circle, aspect, hsx, hsy;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, (0, canvas_1.loadImage)(image_buffer)];
                            case 1:
                                img = _a.sent();
                                return [4 /*yield*/, (0, canvas_1.loadImage)(specific_win_avatar)];
                            case 2:
                                avatar = _a.sent();
                                canvasWidth = 500;
                                canvasHeight = 500;
                                centerX = canvasWidth / 2;
                                centerY = canvasHeight / 2;
                                angleIncrement = (2 * Math.PI) / 30;
                                frames = [];
                                for (i = 0; i < 30; i++) {
                                    canvas = (0, canvas_1.createCanvas)(canvasWidth, canvasHeight);
                                    ctx = canvas.getContext('2d');
                                    ctx.save();
                                    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
                                    angle = angleIncrement * i;
                                    ctx.translate(centerX, centerY);
                                    ctx.rotate(angle);
                                    ctx.drawImage(img, -img.width / 2, -img.height / 2);
                                    ctx.restore();
                                    ctx.beginPath();
                                    ctx.moveTo(499, 203);
                                    ctx.lineTo(468, 230);
                                    ctx.lineTo(499, 257);
                                    ctx.fillStyle = '#e2e2e2';
                                    ctx.fill();
                                    ctx.closePath();
                                    circle = {
                                        x: canvas.width / 2,
                                        y: canvas.height / 2,
                                        radius: 75,
                                    };
                                    ctx.beginPath();
                                    ctx.strokeStyle = "white";
                                    ctx.arc(circle.x, circle.y, circle.radius + 2, 0, Math.PI * 2, true);
                                    ctx.fillStyle = 'white';
                                    ctx.fill();
                                    ctx.closePath();
                                    ctx.beginPath();
                                    ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, true);
                                    ctx.closePath();
                                    ctx.clip();
                                    aspect = avatar.height / avatar.width;
                                    hsx = circle.radius * Math.max(1.0 / aspect, 1.0);
                                    hsy = circle.radius * Math.max(aspect, 1.0);
                                    ctx.drawImage(avatar, circle.x - hsx, circle.y - hsy, hsx * 2, hsy * 2);
                                    frames.push(ctx);
                                }
                                resolve(frames);
                                return [2 /*return*/];
                        }
                    });
                }); })];
        });
    });
}
function createRouletteImage(sectors, return_ctx, pointer, specific_win_avatar) {
    if (return_ctx === void 0) { return_ctx = false; }
    if (pointer === void 0) { pointer = true; }
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                    var canvas, ctx, sectorAngle, avatar, circle, aspect, hsx, hsy, _a, _b;
                    var _this = this;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                canvas = (0, canvas_1.createCanvas)(500, 500);
                                ctx = canvas.getContext('2d');
                                sectorAngle = (2 * Math.PI) / sectors.length;
                                sectors.forEach(function (sector, i) { return __awaiter(_this, void 0, void 0, function () {
                                    var startAngle, endAngle, text, angle, x, y;
                                    return __generator(this, function (_a) {
                                        startAngle = sectorAngle * i;
                                        endAngle = startAngle + sectorAngle;
                                        ctx.beginPath();
                                        ctx.moveTo(250, 250);
                                        ctx.arc(250, 250, 244, startAngle, endAngle);
                                        ctx.closePath();
                                        ctx.fillStyle = sector.color;
                                        ctx.fill();
                                        ctx.save();
                                        ctx.translate(250, 250);
                                        ctx.rotate(startAngle + sectorAngle / 2);
                                        text = "".concat(sector.number + 1, "- ").concat(sector.username).trim();
                                        ctx.textAlign = "left";
                                        ctx.fillStyle = "#1a150e";
                                        ctx.font = "bold " + Math.round(24 - sectors.length * 0.25) + "px Tajawal,Symbola,Symbola_hint,DejaVuSans,NotoRegular,NotoEmoji,Arial";
                                        ctx.fillText(text.length >= 14 ? text.slice(0, 12) + ".." : text.slice(0, 16), 86, 4);
                                        ctx.restore();
                                        angle = i * sectorAngle;
                                        x = Math.cos(angle) * 244 + 250;
                                        y = Math.sin(angle) * 244 + 250;
                                        ctx.beginPath();
                                        ctx.moveTo(250, 250);
                                        ctx.lineTo(x, y);
                                        ctx.lineWidth = 3;
                                        ctx.strokeStyle = "#1a150e";
                                        ctx.stroke();
                                        return [2 /*return*/];
                                    });
                                }); });
                                ctx.beginPath();
                                ctx.arc(250, 250, 244, 0, 2 * Math.PI);
                                ctx.lineWidth = 2;
                                ctx.strokeStyle = "#fff";
                                ctx.stroke();
                                if (!pointer) return [3 /*break*/, 2];
                                ctx.beginPath();
                                ctx.moveTo(499, 203);
                                ctx.lineTo(468, 230);
                                ctx.lineTo(499, 257);
                                ctx.fillStyle = '#e2e2e2';
                                ctx.fill();
                                ctx.closePath();
                                return [4 /*yield*/, (0, canvas_1.loadImage)(specific_win_avatar ? specific_win_avatar : sectors[sectors.length - 1].avatarURL)];
                            case 1:
                                avatar = _c.sent();
                                circle = {
                                    x: canvas.width / 2,
                                    y: canvas.height / 2,
                                    radius: 75,
                                };
                                ctx.beginPath();
                                ctx.strokeStyle = "white";
                                ctx.arc(circle.x, circle.y, circle.radius + 2, 0, Math.PI * 2, true);
                                ctx.fillStyle = 'white';
                                ctx.fill();
                                ctx.closePath();
                                ctx.beginPath();
                                ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, true);
                                ctx.closePath();
                                ctx.clip();
                                aspect = avatar.height / avatar.width;
                                hsx = circle.radius * Math.max(1.0 / aspect, 1.0);
                                hsy = circle.radius * Math.max(aspect, 1.0);
                                ctx.drawImage(avatar, circle.x - hsx, circle.y - hsy, hsx * 2, hsy * 2);
                                _c.label = 2;
                            case 2:
                                _a = resolve;
                                if (!return_ctx) return [3 /*break*/, 3];
                                _b = ctx;
                                return [3 /*break*/, 5];
                            case 3: return [4 /*yield*/, canvas.toBuffer('image/png')];
                            case 4:
                                _b = _c.sent();
                                _c.label = 5;
                            case 5:
                                _a.apply(void 0, [_b]);
                                return [2 /*return*/];
                        }
                    });
                }); })];
        });
    });
}
exports.createRouletteImage = createRouletteImage;
function getRandomNumber(length, excludedNumbers) {
    if (excludedNumbers === void 0) { excludedNumbers = []; }
    var number = 0;
    do {
        number = Math.floor(Math.random() * length) + 1;
    } while (excludedNumbers.includes(number));
    return number;
}
exports.getRandomNumber = getRandomNumber;
function getRandomGifColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var hex = ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
    return '#' + hex;
}
function getRandomDarkHexCode() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    var lightness = Math.floor(Math.random() * 25);
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    var darkColor = color;
    while (getBrightness(darkColor) >= 128 || darkColor === '#000000') {
        color = '#';
        for (var i_1 = 0; i_1 < 6; i_1++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        darkColor = color;
    }
    return darkColor;
}
exports.getRandomDarkHexCode = getRandomDarkHexCode;
function getBrightness(color) {
    var hex = color.replace('#', '');
    var r = parseInt(hex.substring(0, 2), 16);
    var g = parseInt(hex.substring(2, 4), 16);
    var b = parseInt(hex.substring(4, 6), 16);
    var brightness = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return brightness;
}
function shuffleArray(arr, specific_num) {
    var random_number = specific_num ? specific_num : Math.floor(Math.random() * arr.length) + 1;
    return __spreadArray(__spreadArray([], arr.slice(arr.length - random_number), true), arr.slice(0, arr.length - random_number), true);
}
exports.shuffleArray = shuffleArray;
//# sourceMappingURL=index.js.map