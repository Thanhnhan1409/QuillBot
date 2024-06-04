export function isInput(element: HTMLElement) {
    if (element.tagName === 'INPUT')
        return true;
}

export function isTextarea(element: HTMLElement) {
    if (element.tagName === 'TEXTAREA')
        return true;
}

export function isInputOrTextarea(element: HTMLElement) {
    if (isInput(element) || isTextarea(element))
        return true;
}

// export function createRelativeRect(rect: Rect, x: number, y: number) {
//     return {
//         top: rect.top - y,
//         right: rect.right - x,
//         bottom: rect.bottom - y,
//         left: rect.left - x,
//         width: rect.width,
//         height: rect.height,
//         x: rect.x - x,
//         y: rect.y - y,
//     }
// }

// export function clamp(num: number, min: number, max: number) {
//     return Math.min(Math.max(num, min), max)
// }

// export function clampRect(rect: Rect, bound: Rect) {
//     if (!rect || !bound)
//         return new DOMRect() as Rect

//     const result = {
//         x: clamp(rect.x, bound.left, bound.right),
//         y: clamp(rect.y, bound.top, bound.bottom),
//         top: clamp(rect.top, bound.top, bound.bottom),
//         left: clamp(rect.left, bound.left, bound.right),
//         right: clamp(rect.right, bound.left, bound.right),
//         bottom: clamp(rect.bottom, bound.top, bound.bottom),
//         width: clamp(rect.width, 0, bound.width),
//         height: clamp(rect.height, 0, bound.height),
//     }

