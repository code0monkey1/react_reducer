import { renderHook } from "@testing-library/react"
import { useTextField } from "./useTextField"

describe("useTextField hook", () => {
    it("checking default state", () => {
        const { result } = renderHook(() => useTextField())

        expect(result.current.value).toBe("")
        expect(result.current.onChange).toBeInstanceOf(Function)
    })
})