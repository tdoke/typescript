enum Season {
  winter, //0
  spring, //1
  summer, //2
  automn  //4
}
// enum is used as both type and value.

const getGreeting = (season: Season) => {
  switch (season) {
    case Season.winter: return 'Hello winter';
    case Season.spring: return 'Hello spring';
    case Season.summer: return 'Hello summer';
    case Season.automn: return 'Hello automn';  
    default: return ''
  }
}

console.log(getGreeting(Season.spring));
console.log(Season.spring);