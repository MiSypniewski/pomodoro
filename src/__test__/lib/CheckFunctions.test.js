import { isNumber, getMinutesAndSecondsFromDurationInSeconds } from "../../lib/CheckFunctions";

describe("isNumber", () => {
  describe("for numbers smaller than ten", () => {
    it("returns 02 for 2 number", () => {
      expect(isNumber(`2`)).toBe("02");
    });
    it("returns 03 for 3 number", () => {
      expect(isNumber(3)).toBe("03");
    });
  });
  describe("for numbers bigger than ten", () => {
    it("returns 11 for 11 number", () => {
      expect(isNumber(11)).toBe("11");
    });
    it("returns 21 for 21 number", () => {
      expect(isNumber(`21`)).toBe("21");
    });
  });
  describe("for numbers bigger than twenty-four", () => {
    it("returns 99 for 25 number", () => {
      expect(isNumber(25)).toBe("99");
    });
    it("returns 99 for 34 number", () => {
      expect(isNumber(`34`)).toBe("99");
    });
  });
  describe("for not number variable", () => {
    it("returns 99 for not number", () => {
      expect(isNumber("zzzz")).toBe("99");
    });
    it("returns 99 for null value", () => {
      expect(isNumber(null)).toBe("99");
    });
    it("returns 99 for undefind value", () => {
      expect(isNumber(undefined)).toBe("99");
    });
  });
});

describe("getMinutesAndSecondsFromDurationInSeconds", () => {
  describe("for duration shorter than one minute", () => {
    it("works with 30 seconds", () => {
      expect(getMinutesAndSecondsFromDurationInSeconds(30)).toEqual([0, 30]);
    });
    it("returns 30 seconds for 30 seconds duration", () => {
      expect(getMinutesAndSecondsFromDurationInSeconds(30)[1]).toEqual(30);
    });
  });
  describe("for duration longer than one minute", () => {
    it("returns 1 minute for 60 seconds duration", () => {
      expect(getMinutesAndSecondsFromDurationInSeconds(60)[0]).toEqual(1);
    });
    it("returns 2 minute and 20 seconds for 140 seconds duration", () => {
      expect(getMinutesAndSecondsFromDurationInSeconds(140)).toEqual([2, 20]);
    });
  });
});
