/**
 * @returns the x scroll position in the window element
 */
function getWindowScrollPosX(): number {
    window.addEventListener("scroll", () => {
        return window.pageXOffset;
    });
    return window.pageXOffset;
}

/**
 * 
 * @returns the y scroll position in the window element
 */
function getWindowScrollPosY(): number {
    window.addEventListener("scroll", () => {
        return window.pageYOffset;
    });
    return window.pageYOffset;
}

export { getWindowScrollPosX, getWindowScrollPosY };