import { render, screen } from "@testing-library/react";
import Link from ".";

it("snapshot renders correctly", () => {
  const tree = render(<Link page="http://www.facebook.com" />);
  expect(tree).toMatchSnapshot();
});

// exports[`renders correctly 1`] = `
// <a
//   className="normal"
//   href="http://www.facebook.com"
//   onMouseEnter={[Function]}
//   onMouseLeave={[Function]}
// >
//   Facebook
// </a>
// `; // jest will take ss before testing and run the component then compare with new one, using 
// prettier

// if update the throw error beacause it store the ss in "snapshot.test.tsx.snap" file