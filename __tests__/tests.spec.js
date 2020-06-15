const { checkForURL } = require("../src/client/js/nameChecker");
const { validateInput } = require("../src/server/requestHandler");

test("should be truthy", () => {
  expect(checkForURL("http://www.google.com")).toBeTruthy();
});
