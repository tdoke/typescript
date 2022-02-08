const person = {
  name: "test",
  coordes: {
    lat: 2,
    lng: 4
  },
  pos: 'pos',
  setPos(pos: string): void {
    this.pos = pos;
  }
};

// object destructuring and type annotations
const { pos } : { pos: string} = person;
console.log(pos);

const {
  coordes: { lat, lng }
}: { coordes: { lat: number; lng: number } } = person;
console.log(lat, lng);
