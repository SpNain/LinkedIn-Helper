const puppeteer = require("puppeteer");
const withDrawInvitations = require("./withdraw");
const sentInvitations = require("./sentInvitations");
const CSSentInvitations = require("./CSSentInvitation");
const msg = require("./msg");
const InboxMsg = require("./inboxMsg");
// give your email id and password here
const id = "YOURMAIL@gmail.com";
const pw = "YOUR PASSWORD";

async function login() {
    let browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"],
        // slowMo : 200
    });
    let pages = await browser.pages();
    let tab = pages[0];
    await tab.goto("https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin"); // login page pe gye
    await tab.type("#username", id); // id type ki 
    await tab.type("#password", pw); // pw type kiya
    await tab.click(".btn__primary--large.from__button--floating"); // login button pe click kiya
    await tab.waitForTimeout(10000);
    
    // await withDrawInvitations(browser, tab);
    await sentInvitations(browser, tab);
    // await CSSentInvitations(browser, tab);
    // await msg(browser, tab);
    // await InboxMsg(browser, tab);


};
login();