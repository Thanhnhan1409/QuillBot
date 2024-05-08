import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_APP_AI_KEY)

export const openaiApi = {

    async getParaphraseText(content: string, fullContent: string) {
        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${import.meta.env.VITE_APP_AI_KEY}`,
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: [
                        {
                            role: 'system',
                            content: `You are a helpful paraphraser.
                        You should return the matching language of the original text.
                        You should not change the meaning of the text
                        You must only reply to the paraphrased text without any extra comments or explanations.
                        For example
                        Full text: Mèo là loài rất dễ thương
                        Paraphrased text: rất dễ thương
                        Result: rất đáng yêu
                        For another example
                        Full text: Cats are very cute animals
                        Paraphrased text: cute animals
                        Result: adorable animals
                        Now please paraphrase this
                        Full text: ${content}
                        Paragraphed text: ${fullContent}`,
                        },
                        {
                            role: 'user',
                            content: 'Hello!',
                        },
                    ],
                }),
            })

            const chatCompletion = await response.json()
            return chatCompletion?.choices?.[0].message?.content || ''
        }
        catch {
            return 'Hề hề'
        }
    },
    async getParaphraseTextFull(fullContent: string) {
        try {
            const model = genAI.getGenerativeModel({ model: 'gemini-pro' })
            const prompt = `You are a helpful paraphraser.
            You should return the matching language of the original text.
            You should not change the meaning of the text
            You must only reply to the paraphrased text without any extra comments or explanations.
            Note: If the original language is English, respond in English; if it is Vietnamese, respond in Vietnamese, and similarly for other languages.
            For example: Mèo là loài rất dễ thương -> Mèo là loài rất đáng yêu
            For another example: Cats are very cute animals -> Cats are adorable animals
            Now please paraphrase this: ${fullContent}`
            const result = await model.generateContent(prompt)
            const response = await result.response
            const text = await response.text()
            return text
        }
        catch {
            return 'Hề hề'
        }
    },
}
