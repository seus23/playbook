const User = require('./../../app/models/user')

describe("Unit test for User class", () => {
    test('Create an User object',() =>{
        const user = new User(1, "seus", "Selene", "Bio")

        expect(user.id).toBe(1);
        expect(user.username).toBe('seus');
        expect(user.name).toBe("Selene");
        expect(user.bio).toBe("Bio");
        expect(user.dateCreated).not.toBeUndefined();
        expect(user.lastUpdated).not.toBeUndefined();
    })

    test('Add getters', () => {
        const user = new User(1,"carlogilmar","carlo","Bio")
        expect(user.getUsername).toBe("carlogilmar");
        expect(user.getBio).toBe("Bio");
        expect(user.getDateCreated).not.toBeUndefined();
        expect(user.getLastUpdated).not.toBeUndefined();
    })

    test('Add setters', () =>{
        const user =new User(1, "miguelangel","Miguel","Bio")
        user.setUsername = "Paco";
        expect(user.username).toBe("Paco");

        user.setBio = "New bio";
        expect(user.bio).toBe("New bio");

    })
})