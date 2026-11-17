
function launchBrowser(browserName)
{
    if(browserName === "chrome")
        console.log(browserName , "launched successfully");
    else
        console.log("Other browser launched successfully");
}
function runTests(testType)
{
    switch(testType)
    {
        case "smoke":
        console.log("Smoke test is performed");
        break;
        case "sanity":
        console.log("Sanity test is performed");
        break;
        case "regression":
        console.log("Regression test is performed");
        break;
        default:
        console.log("Default Smoke test is performed");
     }
}
launchBrowser("chrome");
launchBrowser("Edge");

runTests("smoke");
runTests("sanity");
runTests("regression");
runTests("functional");


