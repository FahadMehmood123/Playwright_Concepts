import { test, expect } from "@playwright/test";
import { request } from "http";


//GET API request

test("API GET Request", async ({ request }) => {
  const response = await request.get(
    "https://fake-json-api.mock.beeceptor.com/user"
  );

  expect(response.status()).toBe(200);

  const text = await response.text();

  expect.soft(text).toContain("janet");

  console.log(await response.json());
});

//Post API request

test("API POST request", async ({ request }) => {
  const response = await request.post("https://api.restful-api.dev/objects", {
    data: {
      name: "Apple MacBook Pro 16",
      data: {
        year: 2019,
        price: 1849.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB",
      },
    },
  });

  expect.soft(response.status()).toBe(200);

  console.log(await response.json());
});

//PUT Api request: Use to update the data

test("API PUT request", async ({ request }) => {
  const response = await request.put("https://reqres.in/api/users/2", {
    data: {
      name: "morpheus",
      job: "zion resident",
    },
  });

  expect.soft(response.status()).toBe(200);
});

//DELETE api

test.only("API DELETE reuqest", async ({ request }) => {
  const response = await request.delete("https://reqres.in/api/users/2");
  expect(response.status()).toBe(204);
});
