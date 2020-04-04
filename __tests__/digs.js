const {digs} = require("../index")
const hash = {firstName: "Kasper", lastName: "Johansen"}

test("destructs the given object", () => {
  const {firstName, lastName} = digs(hash, "firstName", "lastName")
  expect(firstName).toBe("Kasper")
  expect(lastName).toBe("Johansen")
})

test("throws an error if an given key couldnt be found", () => {
  const test = () => {
    const {firstName, middleName, lastName} = digs(hash, "firstName", "middleName", "lastName")
  }

  expect(test).toThrow(new Error("Target didn't contain expected key: middleName"))
})
