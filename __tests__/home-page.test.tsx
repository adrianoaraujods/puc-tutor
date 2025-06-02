import HomePage from "@/app/(pages)/(home)/page";
import { render } from "@/tests/util/test-utils";

import "@/tests/util/match-media.mock";

describe("Page", () => {
  it("renders home page", () => {
    render(<HomePage />);
  });
});
