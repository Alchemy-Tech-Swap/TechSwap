# Tech Swap Grading Notes

- I had a pretty hard time navigating this app -- I don't see a link to sign in or sign up or links for adding products -- I had to go searching the code to figure out how to get there -- maybe add a redirect on the home page if there isn't a signed in user to show the auth page -- also add links to your headers to make them really obvious
- I like that you went mobile first, but don't forget to consider larger monitors. You can use media queries in CSS to display different images depending on the size of the browser -- that can stop your header image from stretching on larger monitors
- Try not to use top-level `<div>` elements -- use fragments (crabby hands) instead (prevents a lot of extra divs in your code)
- Your split between views / components looks great -- nice job there
- You had some extraneous props on your routes -- take a look and make sure you understand where `exact` and `path` need to go
- Overall really cool app -- great job -- just a few things to think about mostly usability wise

| Rubric                                                 | Deduction |
| ------------------------------------------------------ | --------- |
| React Router (remove a point for the extraneous props) | -1        |
| Snapshot tests for all components                      | -1        |
| Usability                                              | -1        |

**Total Points: 147 / 150**
