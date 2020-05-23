import { createYield, createPartiallyEmittedExpression } from "typescript";

describe("Home Page", () => {
  beforeEach(() => {});

  it("should display list of courses", () => {
    cy.fixture("courses.json").as("coursesJSON");

    cy.server();

    cy.route("/api/courses", "@coursesJSON").as("courses");

    cy.visit("/");

    cy.contains("All Courses");

    cy.wait("@courses");

    cy.get("mat-card").should("have.length", 9);
  });
});
