import URLRequest from "../URLRequest";

describe("request", () => {
  let request;

  describe("when we only have url parameter", () => {
    beforeEach(() => {
      request = URLRequest("https://testing.com.au/api");
    });

    test("url should same with input url", () => {
      expect(request.url).toBe("https://testing.com.au/api");
    });

    test("body should be undefined", () => {
      expect(request.body).toBe(undefined);
    });

    test("headers should be undefined", () => {
      expect(request.headers).toBe(undefined);
    });

    test("http method should be get", () => {
      expect(request.method).toBe("GET");
    });
  });

  describe("when we have url and parameters", () => {
    beforeEach(() => {
      request = URLRequest("https://testing.com.au/api", undefined, undefined, {param1: "value1"});
    });

    test("url should same with input url with queries", () => {
      expect(request.url).toBe("https://testing.com.au/api?param1=value1");
    });
  });

  describe("when we have url and parameters and method POST", () => {
    beforeEach(() => {
      request = URLRequest("https://testing.com.au/api", "POST", undefined, {param1: "value1"});
    });

    test("url should same with input url", () => {
      expect(request.url).toBe("https://testing.com.au/api");
    });

    test("http method should be POST", () => {
      expect(request.method).toBe("POST");
    });

    test("body should be undefined", () => {
      expect(request.body).toStrictEqual({param1: "value1"});
    });
  })
});