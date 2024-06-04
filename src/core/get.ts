import { isInput, isInputOrTextarea, isTextarea } from "./utils";

export interface GetSelectionResult {
    start: number
    end: number
    direction: 'forward' | 'backward' | 'none'
    text: string
}

export function getInputSelection(element: HTMLElement) {
    const el = element as HTMLInputElement
    const result = {
        start: el.selectionStart,
        end: el.selectionEnd,
        direction: el.selectionDirection,
        text: el.value.slice(el.selectionStart || 0, el.selectionEnd || 0)
    }
    return result as GetSelectionResult
}

export function getTextareaSelection(element: HTMLElement) {
    const el = element as HTMLTextAreaElement
    const result = {
        start: el.selectionStart,
        end: el.selectionEnd,
        direction: el.selectionDirection,
        text: el.value.slice(el.selectionStart || 0, el.selectionEnd || 0)
    }
    console.log(result as GetSelectionResult);

    return result as GetSelectionResult
}

export function getSelectCharacterOffsetWithin(element: HTMLElement) {
    let { start, end } = { start: 0, end: 0 }
    const selection = window.getSelection()
    if (selection?.rangeCount) {
        const range = selection.getRangeAt(0)
        const preSelectionRange = range.cloneRange()
        preSelectionRange.selectNodeContents(element)
        preSelectionRange.setEnd(range.startContainer, range.startOffset)
        start = preSelectionRange.toString().length
        preSelectionRange.setEnd(range.endContainer, range.endOffset)
        end = preSelectionRange.toString().length

    }
    return { start, end }
}

// content: hello </b>world<b>
// start: 3
// end: 9
// text: llo </b>wor<b>
// direction: forward

export function getContenteditableSelection(element: HTMLElement): GetSelectionResult {
    const selection = window.getSelection()

    if (!selection || selection.rangeCount === 0)
        return getDefaultSelection()

    const range = selection?.getRangeAt(0)

    const { start, end } = getSelectCharacterOffsetWithin(element)

    const tempDiv = document.createElement('div')
    tempDiv.appendChild(range!.cloneContents())

    console.log({
        start,
        end,
        text: tempDiv.innerHTML || range?.toString() || '',
        direction: 'forward' as const
    });

    return {
        start,
        end,
        text: tempDiv.innerHTML || range?.toString() || '',
        direction: 'forward' as const
    }
}

export function getSelection(element: HTMLElement) {
    if (isInput(element))
        return getInputSelection(element)
    else if (isTextarea(element))
        return getTextareaSelection(element)
    else
        return getContenteditableSelection(element)

}

function getDefaultSelection(): GetSelectionResult {
    return {
        start: 0,
        end: 0,
        text: '',
        direction: 'none'
    }
}


// export function getSelectionRect(element?: HTMLElement): GetSelectionRectResult {
//     const _element = (element || document.activeElement) as HTMLElement

//     function processRect(domRect: DOMRect): Rect {
//         let _rect = domRect.toJSON()
//         if (isInputOrTextarea(_element))
//             _rect = createRelativeRect(_rect, _element.scrollLeft, _element.scrollTop)

//         _rect = clampRect(_rect, _element.getBoundingClientRect().toJSON())

//         return _rect
//     }

//     let shadowEl: HTMLElement | null = null
//     let inputRect: DOMRect | null = null
//     let inputRects: DOMRect[] | null = null

//     if (isInputOrTextarea(_element)) {
//         const _inputOrTextareaElement = _element as HTMLInputElement | HTMLTextAreaElement

//         const shadowWrapper = shadowInput(_inputOrTextareaElement)
//         document.body.appendChild(shadowWrapper.shadowEl)

//         shadowEl = shadowWrapper.shadowEl

//         inputRect = shadowWrapper.highlightEl.getBoundingClientRect()
//         inputRects = Array.from(shadowWrapper.highlightEl.getClientRects())

//         document.body.removeChild(shadowEl)
//     }

//     const selection = window.getSelection()
//     const range = selection?.getRangeAt(0)

//     const rect = clampRect(
//         processRect(inputRect || range!.getBoundingClientRect()),
//         _element?.getBoundingClientRect().toJSON(),
//     )

//     const rects = Array.from(inputRects || range?.getClientRects() || []).map(processRect)

//     const rectTop = rects[0]
//     const rectBottom = rects[rects.length - 1]

//     const start = { x: rectTop?.left || 0, y: rectTop?.top || 0 }
//     const end = { x: rectBottom?.right || 0, y: rectBottom?.bottom || 0 }

//     return {
//         rect,
//         children: rects.filter(Boolean) as Rect[],
//         start,
//         end,
//     }
// }
