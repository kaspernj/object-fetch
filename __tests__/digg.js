const {digg} = require("../index")

const hash = {
  people: [
    {firstName: "Kasper", lastName: "Johansen"},
    {firstName: "Christina", lastName: "Stöckel"}
  ]
}

test("returns the value for the given path", () => {
  const firstName = digg(hash, "people", 1, "firstName")
  expect(firstName).toBe("Christina")
})

test("raises an error if path cannot be found", () => {
  expect(() => digg(hash, "people", 1, "middleName")).toThrow(new Error("Path didn't exist: middleName"))
})
