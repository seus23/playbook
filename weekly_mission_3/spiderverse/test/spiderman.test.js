const Spiderman = require('./../app/spiderman')

describe("Unit test for Spiderman class", () => {
    test('(1) create a spiderman object', () => {
      const andrew = new Spiderman("SpidermanSony", 31, "Andrew Garfield",2,"Sony");
      
      expect(andrew.name).toBe("SpidermanSony");
      expect(andrew.age).toBe(31);
      expect(andrew.actor).toBe("Andrew Garfield");
      expect(andrew.movies).toBe(2);
      expect(andrew.studio).toBe("Sony");
    });
    test('(2)Use the method getInfo()', () => {
        const holland = new Spiderman("Spiderman Marvel",25,"Tom Holland",5,"Marvel")
        expect(holland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio")
    });
  })