import { isInput, isTextarea } from "./utils"

interface SetSelectionOptions {
    start: number
    end: number
    direction?: 'forward' | 'backward' | 'none'

}

export function setInputSelection(element: HTMLElement, options: SetSelectionOptions) {
    const el = element as HTMLInputElement

    el.setSelectionRange(options.start, options.end, options.direction || 'forward')

}

export function setTextareaSelection(element: HTMLElement, options: SetSelectionOptions) {
    const el = element as HTMLTextAreaElement

    el.setSelectionRange(options.start, options.end, options.direction || 'forward')
}

export function findNodeAndOffset(element: HTMLElement, position: number): { node: Node, offset: number } | null {
    let currentNode: Node | null = element.firstChild
    let currentOffset = 0

    while (currentNode) {
        if (currentNode.nodeType === Node.TEXT_NODE) {
            const nodeLength = currentNode.textContent?.length || 0
            if (currentOffset + nodeLength >= position)
                return { node: currentNode, offset: position - currentOffset }
            currentOffset += nodeLength
        } else if (currentNode.nodeType === Node.ELEMENT_NODE) {
            const childNodes = currentNode.childNodes
            for (let i = 0; i < childNodes.length; i++) {
                const result = findNodeAndOffset(childNodes[i] as HTMLElement, position - currentOffset)
                if (result)
                    return result
                currentOffset += childNodes[i].textContent?.length || 0
            }
        }
        currentNode = currentNode.nextSibling
    }
    return null
}

export function setContenteditableSelection(element: HTMLElement, options: SetSelectionOptions) {
    const { start, end } = options

    const range = document.createRange()
    const selection = window.getSelection()

    let startNode: Node | null = null
    let endNode: Node | null = null
    let startOffset = 0
    let endOffset = 0

    const startNodeAndOffset = findNodeAndOffset(element, start)
    if (startNodeAndOffset) {
        startNode = startNodeAndOffset.node
        startOffset = startNodeAndOffset.offset
    }

    const endNodeAndOffset = findNodeAndOffset(element, end)
    if (endNodeAndOffset) {
        endNode = endNodeAndOffset.node
        endOffset = endNodeAndOffset.offset
    }

    if (startNode && endNode) {
        range.setStart(startNode, startOffset)
        range.setEnd(endNode, endOffset)

        selection?.removeAllRanges()
        selection?.addRange(range)
    }
}

// export function setNativeSelection(element: HTMLElement, options: SetSelectionOptions) {

// }

export function setSelection(element: HTMLElement, options: SetSelectionOptions) {
    if (isInput(element))
        return setInputSelection(element, options)
    else if (isTextarea(element))
        return setTextareaSelection(element, options)
    else
        return setContenteditableSelection(element, options)

}