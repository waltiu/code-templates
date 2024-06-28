import { test } from "lib";
export function setupCounter(element) {
  element.addEventListener("click", () => {
    test()
  });
}
