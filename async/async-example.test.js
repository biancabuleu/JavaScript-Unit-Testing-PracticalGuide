import { expect, it } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example";

it("should generate a token value", () => {
  const testUserEmail = "bianca@test.com";

  generateToken(testUserEmail, (err, token) => {
    //expect(token).toBeDefined(); it passes but it is not okay

    try {
      expect(token).toBeDefined();
      //expect(token).toBe(2);
      done();
    } catch (e) {
      done(e);
    }
  });
});

//testing Promise

it("should generate a token value", () => {
  const email = "bianca99@gmail.com";

  return expect(generateTokenPromise(email)).resolves.toBeDefined(); //return guarantees that Jest wait the promise to be resolved
});

it("should generate a token value", async () => {
  const email = "bianca99@gmail.com";

  const token = await generateTokenPromise(email);

  //dont but return because a function annotated with async returns a promise implicitly
  expect(token).toBeDefined();
});
