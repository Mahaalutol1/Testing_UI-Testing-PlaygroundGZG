# UI Testing Playground - Cypress Tests

This project contains beginner-friendly Cypress tests for the [UI Testing Playground](https://uitestingplayground.com/) website.

## Test Coverage

This test suite covers 12 different pages from the UI Testing Playground:

1. **Home Page** - Basic page load verification
2. **Dynamic ID** - Testing buttons with dynamically generated IDs
3. **Class Attribute** - Finding elements by class attributes
4. **Hidden Layers** - Testing interactions with hidden elements
5. **Load Delay** - Waiting for elements that load with delays
6. **AJAX Data** - Testing asynchronous data loading
7. **Client Side Delay** - Testing client-side delays
8. **Click** - Verifying button state changes after clicks
9. **Text Input** - Testing form inputs and dynamic updates
10. **Scrollbars** - Testing elements that require scrolling
11. **Dynamic Table** - Extracting and verifying data from dynamic tables
12. **Verify Text** - Finding text with whitespace

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Open Cypress Test Runner:
   ```bash
   npm run cypress:open
   ```

   Or run tests in headless mode:
   ```bash
   npm run cypress:run
   ```


