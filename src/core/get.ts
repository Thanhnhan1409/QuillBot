import { isInput, isTextarea } from "./utils";

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

export function getContenteditableSelection(element: HTMLElement) : GetSelectionResult {
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

function getDefaultSelection() :GetSelectionResult {
    return {
        start: 0,
        end: 0,
        text: '',
        direction: 'none'
    }
}

