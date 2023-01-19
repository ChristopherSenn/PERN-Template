import * as urls from "./urls";
import { describe, expect, it } from "@jest/globals";

describe("urls", () => { 
    interface TestCase {
        desc: string,
        urlFn: () => string,
        expected: string
    }

    const urlPrefix = "http://localhost/";

    const testCases: TestCase[] = [
        { 
            desc:     "urlsLogin",
            urlFn:    () => { return urls.urlLogin(); },
            expected: urlPrefix + urls.URLS.Users + "/login",
        },
    ];

    testCases.forEach( (tc) => {
        it(tc.desc, () => { 
            const actualUrl = tc.urlFn();
            expect(actualUrl).toEqual(tc.expected);
        });
    });

});
