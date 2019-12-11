import storage from "../dist";

it("Save Data", () => {
  const db = storage("myDb");
  db.setItem("item", "test");
  return expect(db.getItem("item")).resolves.toBe("test");
});

it("Remove Data", async () => {
  const db = storage("myDb");
  await db.removeItem("item");
  return expect(db.getItem("item")).resolves.toBe(null);
});
