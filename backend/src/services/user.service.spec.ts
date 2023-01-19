import { describe, expect, it } from "@jest/globals";

import { query } from "../test";
import { user } from "../db";


describe("User", () => {
  describe("GetUsers", () => {
    it("test", async () => {
      query.resolves({
        rows: [{}, {}],
      });

      const result = await user.getUsers();

      expect(result.length).toBe(2);
    });
  });
});
