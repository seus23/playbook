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
})