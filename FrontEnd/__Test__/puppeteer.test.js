const puppeteer = require('puppeteer');
// Standalone runtime for Regenerator-compiled generator and async functions
const regeneratorRuntime = require("regenerator-runtime");

// puppeteer works in development but not in production (port 8080)
const APP = 'http://localhost:8080/';
// the use of the APP variable means we don't need to import git the serpate files involved in testing

describe('Google - positive control', () => {
  beforeAll(async () => {
    await page.goto('https://google.com');
  });

  it('should be titled "Google"', async () => {
    await expect(page.title()).resolves.toMatch('Google');
  });
});

describe('Front-end Integration/Features', () => {
  let browser;
  let page;

  // One of the challenges of real-time testing is that almost every single
  // action is asynchronous. Hence, puppeteer is almost always used in an
  // async/await syntax
  beforeAll(async () => {
    // lauch puppeteer on the fake browser
    browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    // open a new page on the fake browser
    page = await browser.newPage();
    });

    // when all tests are done, close the testing browser
    afterAll(() => {
      browser.close();
      });

      describe('Initial display', () => {
        it('loads successfully', async () => {
          // At the beggining of each test, we will navigate to the page
          // using the .goto() method so we have a fresh start
          await page.goto(APP);
          // below is the test case 
          await page.waitForSelector('[data-test=greeting]'); // <-- wait until the element appears
          const greeting = await page.$eval('[data-test=greeting]', el => el.innerText);
          expect(greeting).toBe('Welcome');
        });

        it('displays input field for username', async () => {
          await page.goto(APP);
          await page.waitForSelector('[data-test=un-input]');
          // the focus method needs a selector as a parameter
          // we use the id username
          await page.focus('[data-test=un-input]');
          // emmulate keyboard input using pupeteer methods
          // this will type extremely fast with virtually no delay between charachters 
          await page.keyboard.type('starlord')
          const inputValue = await page.$eval('[data-test=un-input]', el => el.value);
          expect(inputValue).toBe('starlord');
        });

        it('displays input field for password', async () => {
          // this time we don't reload APP to keep the username types in the previous test
          // await page.goto(APP);
          await page.waitForSelector('[data-test=pw-input]'); // < -- this might be uncessary if not going to new page after last test 
          await page.focus('[data-test=pw-input]');
          await page.keyboard.type('hybrid')
          const inputValue = await page.$eval('[data-test=pw-input]', el => el.value);
          expect(inputValue).toBe('hybrid');
        });

        it('allows for login with a known username and password', async () => {
          // this time we don't reload APP to keep the username types in the previous test
          // await page.goto(APP);
          await page.waitForSelector('[data-test=login-button]'); // < -- this might be uncessary if not going to new page after last test 
          // by combinging the click submit and navigation, puppeteer will wait
          // for both promises to resolve
          // this combination is necessary to see if the click triggers navigation to homepage
          await Promise.all([
            page.click('[data-test=login-button]'),
            // if you wait for the nework to be idle you'll know the page if fully loaded
            page.waitForNavigation({ waitUntil: 'networkidle0' }),
          ]);
          await page.waitForSelector('[data-test=map-button]');
          const newTitle = await page.$eval('#[data-test=map-button]', el => el.innerText);
          expect(newTitle).toBe('View Map');
        });

        it('displays a map if show map button is clicked', async () => {
            await page.goto(APP/home);
            await page.waitForSelector('[data-test=map-button]', { visible: true });
            await Promise.all([
              page.click('[data-test=map-button]'),
              page.waitForNavigation({ waitUntil: 'networkidle0' }),
            ]);
            // when visilbe:true is added it waits until the CSS is rendered for that element
            await page.waitForSelector('[data-test=card-container]');
            const mapConfirm = await page.$eval('[data-test=card-container]', el => el.nextSibling);
            expect(mapConfirm).toHaveProperty('[data-test=map-container]');
          });

          // refacotr after desciding about modals
          it('displays an item\'s details page if item card is clicked', async () => {
            await page.goto(APP/home);
            await page.waitForSelector('#itemId');
            await Promise.all([
              page.click('#itemId'),
              page.waitForNavigation({ waitUntil: 'networkidle0' }),
            ]);
            await page.waitForSelector('#rentButton', { visible: true });
            const rentButton = await page.$eval('#rentButton', el => el.innerHTML);
            expect(rentButton).toBe('Request this Item');
          });

          it('add rented items to account inventory and redirects to perosnal invemtory', async () => {
            await page.goto(APP/2);
            await page.waitForSelector('#rentButton');
            await Promise.all([
              page.click('#rentButton'),
              page.waitForNavigation({ waitUntil: 'networkidle0' }),
            ]);
            await page.waitForSelector('#header', { visible: true });
            const myTitle = await page.$eval('#header', el => el.innerHTML);
            expect(myTitle).toBe('My Stuff');
          });

          it('displays input field for item name in the add item section of profile', async () => {
            await page.goto(APP/profile);
            await page.waitForSelector('#itemName');
            await page.focus('#itemName');
            await page.keyboard.type('Thor\'s Lightening Bolt');
            const value = await page.$eval('#itemName', el => el.value);
            expect(value).toBe('Thor\'s Lightening Bolt');
          });

          it('succesfully creates a user', async () => {
            const createUserButtonSelector = '[data-pup*="create-user-button"]'
  
            await page.waitForSelector(createUserButtonSelector);
            await page.focus(createUserButtonSelector);
            await page.click({
              selector: createUserButtonSelector
            })
            //launch an interceptor and check that a 200 is received from server after clicking.
            
          });

    });
});