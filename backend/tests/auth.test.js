import { login } from "../src/controllers/authController.js";

test("Login com credenciais corretas retorna token", () => {
  const req = { body: { username: "admin", password: "1234" } };
  const res = {
    json: jest.fn(),
    status: jest.fn(() => res)
  };
  login(req, res);
  expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ token: expect.any(String) }));
});

