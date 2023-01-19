const migrate = require("node-pg-migrate");

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.createTable("users", {
    id: {
      type: "uuid",
      default: new migrate.PgLiteral("uuid_generate_v4 ()"),
      notNull: true,
      primaryKey: true,
    },
    username: { type: "text", notNull: true, unique: true },
    email: { type: "text", notNull: true },
    password: { type: "text", notNull: true },
    enabled: { type: "boolean", notNull: true },
    roles: { type: "text[]", notNull: true },
    createdAt: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  });
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
exports.down = pgm => {};
