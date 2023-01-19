import env from "../src/config";
import { LocalSorageMock } from "./local-storage-mock";
import { beforeAll } from "@jest/globals";

beforeAll(() => {
    env.useMocks = true;
    global.localStorage = new LocalSorageMock();
});
