# UI Testing Playground - Cypress Tests

This project contains beginner-friendly Cypress tests for the [UI Testing Playground](https://uitestingplayground.com/) website.

## 📋 Test Coverage

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

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

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

## 📁 Project Structure

```
testing_website/
├── cypress/
│   ├── e2e/
│   │   ├── 01-home-page.cy.js          # Test 1: Home Page
│   │   ├── 02-dynamic-id.cy.js         # Test 2: Dynamic ID
│   │   ├── 03-class-attribute.cy.js    # Test 3: Class Attribute
│   │   ├── 04-hidden-layers.cy.js      # Test 4: Hidden Layers
│   │   ├── 05-load-delay.cy.js         # Test 5: Load Delay
│   │   ├── 06-ajax-data.cy.js          # Test 6: AJAX Data
│   │   ├── 07-client-side-delay.cy.js  # Test 7: Client Side Delay
│   │   ├── 08-click.cy.js              # Test 8: Click
│   │   ├── 09-text-input.cy.js         # Test 9: Text Input
│   │   ├── 10-scrollbars.cy.js         # Test 10: Scrollbars
│   │   ├── 11-dynamic-table.cy.js       # Test 11: Dynamic Table
│   │   └── 12-verify-text.cy.js        # Test 12: Verify Text
│   ├── fixtures/                       # Test data files
│   └── support/
│       ├── commands.js                 # Custom commands
│       └── e2e.js                      # Support file
├── cypress.config.js                  # Cypress configuration
├── package.json                        # Project dependencies
└── README.md                           # This file
```

## 🧪 Running Tests

### Interactive Mode (Recommended for Beginners)

```bash
npm run cypress:open
```

This opens the Cypress Test Runner where you can:
- See all your tests
- Run individual tests
- Watch tests execute in real-time
- Debug tests easily

### Headless Mode (CI/CD)

```bash
npm run cypress:run
```

This runs all tests in the terminal without opening a browser window.

## 📝 Test Files Overview

Each test is in its own separate file, making it easy to:
- **Learn one concept at a time** - Each file focuses on a single testing scenario
- **Run tests individually** - You can run just the test you want to learn about
- **Understand step-by-step** - Each file has detailed comments explaining every step

### Test Files (12 separate files):

1. **01-home-page.cy.js** - Learn basic page navigation and verification
2. **02-dynamic-id.cy.js** - Learn to find elements when IDs change
3. **03-class-attribute.cy.js** - Learn to find elements by CSS class
4. **04-hidden-layers.cy.js** - Learn about element visibility
5. **05-load-delay.cy.js** - Learn to wait for delayed elements
6. **06-ajax-data.cy.js** - Learn to test AJAX/async operations
7. **07-client-side-delay.cy.js** - Learn to wait for client-side processing
8. **08-click.cy.js** - Learn to verify state changes after clicks
9. **09-text-input.cy.js** - Learn to test form inputs
10. **10-scrollbars.cy.js** - Learn to scroll and find off-screen elements
11. **11-dynamic-table.cy.js** - Learn to extract data from tables
12. **12-verify-text.cy.js** - Learn to find text with whitespace

Each file contains:
- **Clear explanations** at the top explaining what you'll learn
- **Step-by-step comments** for every action
- **Beginner tips** explaining Cypress concepts
- **Simple, readable code** that's easy to understand

## 🎓 Learning Resources

### Key Cypress Concepts Used

1. **cy.visit()** - Navigate to a page
2. **cy.get()** - Find elements by selector
3. **cy.contains()** - Find elements by text content
4. **cy.should()** - Make assertions
5. **cy.click()** - Click on elements
6. **cy.type()** - Type text into inputs
7. **cy.scrollIntoView()** - Scroll elements into view
8. **Timeouts** - Wait for elements to appear

### Tips for Beginners

- **Start with Test 1** - Begin with `01-home-page.cy.js` and work your way through
- **Run tests one at a time** - In Cypress Test Runner, click on individual test files
- **Read the comments** - Each file has detailed explanations at the top and inline comments
- **Watch the test run** - Use interactive mode to see exactly what's happening
- **Experiment** - Try modifying the tests to see what happens
- **Take your time** - Don't rush! Understanding each concept is more important than speed
- **Check the docs** - Cypress documentation: https://docs.cypress.io

## 🔧 Configuration

The `cypress.config.js` file contains:
- Base URL: `https://uitestingplayground.com`
- Viewport size: 1280x720
- Default command timeout: 10 seconds
- Video recording: Enabled
- Screenshot on failure: Enabled

## 📊 Test Results

After running tests, you'll find:
- **Videos** in `cypress/videos/` (if tests fail)
- **Screenshots** in `cypress/screenshots/` (on failures)

## 🐛 Troubleshooting

### Common Issues

1. **Tests timeout**: Increase timeout in `cypress.config.js` or use `{ timeout: 20000 }` in specific commands
2. **Element not found**: Check if the element selector is correct
3. **AJAX not loading**: Increase timeout for AJAX-related tests

## 📚 Next Steps

Once you're comfortable with these tests, try:
- Adding more assertions to each test
- Testing edge cases (what happens with invalid input?)
- Creating custom commands in `cypress/support/commands.js`
- Combining multiple actions in one test
- Adding test data in fixtures
- Setting up CI/CD integration
- Creating your own tests for other websites

## 🤝 Contributing

Feel free to modify and extend these tests as you learn more about Cypress!

## 📄 License

This project is for educational purposes.

