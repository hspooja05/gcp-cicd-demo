const request = require("supertest");
const app = require("../app");

describe("GCP CI/CD API Tests", () => {

  test("GET / should serve the frontend homepage", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toMatch(/text\/html/);
    expect(response.text).toContain("CloudFlow");
  });

  test("GET /api should return welcome message", async () => {
    const response = await request(app).get("/api");

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe(
      "Welcome to GCP CI/CD Project!"
    );
  });

  test("GET /health should return OK status", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("OK");
  });

});