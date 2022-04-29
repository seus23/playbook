const UserService = require('./../../app/services/UserService')

describe("Tests for UserService", () =>{
    test("1. Create a new user using thw UserService", () =>{
        const user = UserService.create(1,"carlogilmar","Carlo")

        expect(user.username).toBe("carlogilmar");
        expect(user.name).toBe("Carlo");
        expect(user.id).toBe(1);
        expect(user.bio).not.toBeUndefined()
    })

    test("2. Get all user data in a list", () => {
        const user = UserService.create(1,"seus","selene")
        const userInfoInList = UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1);
        expect(userInfoInList[1]).toBe("seus");
        expect(userInfoInList[2]).toBe("selene");
        expect(userInfoInList[3]).toBe("Sin bio");
    })

    test("3. Update username", () => {
        const user = UserService.create(23,"seus","Selene");
        UserService.updateUserUsername(user,"Seus23");
        expect(user.username).toBe("Seus23");
    })

    test("4. Given a list o users give me the list of usernames", () =>{
        const user1 = UserService.create(1, "carlogilmar1", "Carlo");
        const user2 = UserService.create(2, "seus23", "Selene");
        const user3 = UserService.create(3,"kako", "Marco");
        const usernames = UserService.getAllUsernames([user1, user2, user3]);
        expect(usernames).toContain("carlogilmar1");
        expect(usernames).toContain("seus23");
        expect(usernames).toContain("kako");
    })
})