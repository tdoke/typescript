var Season;
(function (Season) {
    Season[Season["winter"] = 0] = "winter";
    Season[Season["spring"] = 1] = "spring";
    Season[Season["summer"] = 2] = "summer";
    Season[Season["automn"] = 3] = "automn"; //4
})(Season || (Season = {}));
// enum is used as both type and value.
var getGreeting = function (season) {
    switch (season) {
        case Season.winter: return 'Hello winter';
        case Season.spring: return 'Hello spring';
        case Season.summer: return 'Hello summer';
        case Season.automn: return 'Hello automn';
        default: return '';
    }
};
console.log(getGreeting(Season.spring));
