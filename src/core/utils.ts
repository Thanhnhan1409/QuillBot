export function isInput(element: HTMLElement) {
    if(element.tagName === 'INPUT') 
        return true;
}

export function isTextarea(element: HTMLElement) {
    if(element.tagName === 'TEXTAREA')
        return true;
}

export function isInputOrTextarea(element: HTMLElement) {
    if(isInput(element) || isTextarea(element))
        return true;
}