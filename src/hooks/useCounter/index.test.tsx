import { renderHook, act } from "test-utils";
import useCounter from ".";

describe("useCounter", () => {
  test("custom hook works correctlly", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 10,
      },
    });
    //   console.log(result);
    expect(result.current.count).toBe(10);
  });

  it("should be increment by 1", () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });

});
