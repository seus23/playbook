const User = require('./../../app/models/user')

describe("Unit test for User class", () => {
    test('Create an User object',() =>{
        const user = new User(1, "seus", "Selene", "Bio", "dateCreated", "lastUpdated")

        expect(user.id).toBe(1);
        expect(user.username).toBe('seus');
        expect(user.name).toBe("Selene");
        expect(user.bio).toBe("Bio");
        expect(user.dateCreated).toBe("dateCreated");
        expect(user.lastUpdated).toBe("lastUpdated");
    })
})