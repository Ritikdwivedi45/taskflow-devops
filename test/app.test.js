const request = require("supertest");
const app = require("../app");

describe("TaskFlow API", () => {

    test("GET /health should return healthy status", async () => {
        const response = await request(app)
            .get("/health");

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe("healthy");
    });

    test("POST /api/tasks should create a task", async () => {
        const response = await request(app)
            .post("/api/tasks")
            .send({
                title: "Jenkins Test Task"
            });

        expect(response.statusCode).toBe(201);
        expect(response.body.title).toBe("Jenkins Test Task");
    });

    test("POST /api/tasks should reject empty title", async () => {
        const response = await request(app)
            .post("/api/tasks")
            .send({});

        expect(response.statusCode).toBe(400);
    });

});