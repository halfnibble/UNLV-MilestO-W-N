import settings from '../data/settings.json' assert { type: 'json' };
let heightValue = settings.windowSize.heightValue;
let widthValue = settings.windowSize.widthValue;

let windowIsBigEnough = true;
export function checkMinimumWindowSize() {
    if (window.innerHeight < heightValue || window.innerWidth < widthValue) {
        console.log(
            `Hiding page... Window too small as ${window.innerHeight} and ${window.innerWidth}`
        );
        windowIsBigEnough = false;
        document.getElementById('game').style = 'opacity: 0';
        let widthOrHeightProblem = '';
        if (window.innerHeight < heightValue && window.innerWidth < widthValue) {
            widthOrHeightProblem = 'wider and taller';
        } else if (window.innerHeight < heightValue) {
            widthOrHeightProblem = 'taller';
        } else if (window.innerWidth < widthValue) {
            widthOrHeightProblem = 'wider';
        }
        document.getElementById(
            'windowSizeWarning'
        ).textContent = `Please make me ${widthOrHeightProblem} to play the game. - Sincerely, the window.`;
    } else if (
        window.innerHeight >= heightValue &&
        window.innerWidth >= widthValue &&
        windowIsBigEnough === false
    ) {
        console.log(
            `Page has become large enough as ${window.innerHeight} and ${window.innerWidth}`
        );
        document.getElementById('windowSizeWarning').textContent = '';
        windowIsBigEnough = true;
        document.getElementById('game').style = 'opacity: 1';
    } else if (
        window.innerHeight >= heightValue &&
        window.innerWidth >= widthValue &&
        windowIsBigEnough === true
    ) {
        console.log(`Page still large enough as ${window.innerHeight} and ${window.innerWidth}`);
        document.getElementById('windowSizeWarning').textContent = '';
    }
}
