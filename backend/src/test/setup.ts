import { beforeAll, afterAll } from "@jest/globals";
import sinon, { SinonMock, SinonStub } from "sinon";
import { Pool } from "pg";

export class ClientMock {
  query() {}
  release() {}
}

export let query: SinonStub;
export let connect: SinonStub;
export let client: SinonMock;


beforeAll(() => {
  query = sinon.stub(Pool.prototype, "query");
  connect = sinon.stub(Pool.prototype, "connect");
  client = sinon.mock(ClientMock.prototype);
});

afterAll(() => {
  query.restore(); // reset stub/mock
  connect.restore();
  client.restore();
});
