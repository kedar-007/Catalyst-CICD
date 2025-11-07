const request = require("supertest");
const app = require("../index");

describe("Backend API Tests", () => {
  it("should return 200 and message for /health-check", async () => {
    const res = await request(app).get("/health-check");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("server running");
  });

  it("should return 200 and message for /hi", async () => {
    const res = await request(app).get("/hi");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hi Catalyst");
  });

  it("should return 200 and message for /testing", async () => {
    const res = await request(app).get("/testing");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Testing endpoint");
  });
});
