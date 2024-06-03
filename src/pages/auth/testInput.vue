<script lang="ts" setup>
import { defineComponent, ref } from 'vue';

let selection = null

onMounted(() => {
    document.addEventListener('selectionchange', () => {
        selection = window.getSelection()
        if (!selection?.rangeCount || selection.getRangeAt(0).toString().length === 0) {
            // tooltipAvailable.value = false
            // status.value = 'initial'
            // replaceText.value = []
            // activeReplaceTextId.value = 0
            return
        }
        const range = selection.getRangeAt(0)
        const rect.value = range.getBoundingClientRect()
        console.log('rect', rect.value);

        childReacts.value = Array.from(range.getClientRects())
    })

    document.addEventListener('mouseover', (e) => {
        mousePos.value.x = e.clientX
        mousePos.value.y = e.clientY
    })
})

const inputTextarea = ref<HTMLTextAreaElement | null>(null);
const mouseDownedInput = ref<HTMLTextAreaElement | null>(null);
const lastSelectionStart = ref<number | null>(null);
const lastSelectionEnd = ref<number | null>(null);

function getTextNodesIn(node: Node): Node[] {
    const textNodes: Node[] = [];
    if (node.nodeType === Node.TEXT_NODE) {
        textNodes.push(node);
    } else {
        const children = node.childNodes;
        for (let i = 0, len = children.length; i < len; ++i)
            textNodes.push(...getTextNodesIn(children[i]));

    }
    return textNodes;
}

function setSelectionRange(el: HTMLElement, start: number, end: number): Range {
    const range = document.createRange();
    range.selectNodeContents(el);
    const textNodes = getTextNodesIn(el);
    let foundStart = false;
    let charCount = 0;
    let endCharCount;

    for (let i = 0; i < textNodes.length; i++) {
        const textNode = textNodes[i];
        endCharCount = charCount + textNode.textContent!.length;

        if (!foundStart && start >= charCount && (start < endCharCount || (start === endCharCount && i < textNodes.length))) {
            range.setStart(textNode, start - charCount);
            foundStart = true;
        }

        if (foundStart && end <= endCharCount) {
            range.setEnd(textNode, end - charCount);
            break;
        }

        charCount = endCharCount;
    }

    const sel = window.getSelection();
    sel?.removeAllRanges();
    sel?.addRange(range);

    return range;
}

function getSelectedTextBounding(input: HTMLInputElement, start: number, end: number): DOMRect {
    const inputBoundRect = input.getBoundingClientRect();
    const clonedInput = input.cloneNode(true) as HTMLInputElement;
    clonedInput.value = input.value;
    clonedInput.style.width = `${inputBoundRect.width}px`;
    clonedInput.style.cssText = window.getComputedStyle(input).cssText;
    clonedInput.style.position = 'absolute';
    clonedInput.style.left = `${inputBoundRect.left}px`;
    clonedInput.style.top = `${inputBoundRect.top}px`;
    clonedInput.style.margin = '0';
    clonedInput.style.overflow = 'hidden';
    clonedInput.scrollLeft = input.scrollLeft;
    clonedInput.scrollTop = input.scrollTop;

    document.body.appendChild(clonedInput);

    const range = document.createRange();
    range.setStart(clonedInput.firstChild as Node, start);
    range.setEnd(clonedInput.firstChild as Node, end);

    const textBounding = range.getBoundingClientRect();

    document.body.removeChild(clonedInput);

    return textBounding;
}

function onMouseDown(event: MouseEvent) {
    if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement)
        mouseDownedInput.value = event.target;

}

function handleMouseUp(e: MouseEvent) {
    const sel = window.getSelection();
    const selectedText = sel?.toString().trim();
    let boundingClientRect: DOMRect | undefined;

    if (selectedText) {
        const r = sel?.getRangeAt(0);
        if (r && r.collapsed) {
            if (mouseDownedInput.value) {
                const start = mouseDownedInput.value.selectionStart ?? 0;
                const end = mouseDownedInput.value.selectionEnd ?? 0;
                lastSelectionStart.value = start;
                lastSelectionEnd.value = end;
                boundingClientRect = getSelectedTextBounding(mouseDownedInput.value, start, end);
                console.log(boundingClientRect);
            }
        } else if (r) {
            boundingClientRect = r.getBoundingClientRect();
        }
    }

    console.log(boundingClientRect);
    mouseDownedInput.value = null;
}

function onClick(_event: MouseEvent) {
    if (lastSelectionStart.value !== null && lastSelectionEnd.value !== null) {
        const input = inputTextarea.value;
        if (input)
            input.setSelectionRange(lastSelectionStart.value, lastSelectionEnd.value);
    }
}

</script>

<template>
    <div style="margin-top: 200px;">
        <textarea ref="inputTextarea" @mousedown="onMouseDown" @mouseup="handleMouseUp" />
    </div>
</template>