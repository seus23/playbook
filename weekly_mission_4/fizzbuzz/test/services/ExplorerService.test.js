const ExplorerService = require('./../../lib/services/ExplorerService');
const Reader = require('./../../lib/utils/Reader');

describe("Unit Tests for ExplorerService Class", () => {
    test('1) objeto de explorer node', () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const cualesExplorers = ExplorerService.filterByMission(explorers, "node");
        const cuantosExplorers = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        const expUsernames = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(cuantosExplorers).toBe(10);
        expect(expUsernames).toContain("ajolonauta1")
    });
})