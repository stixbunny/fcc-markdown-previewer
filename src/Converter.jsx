import { marked } from "marked"
import { useEffect } from "react"
import hljs from 'highlight.js'

export default function Converter({setTranslation, content}) {
    useEffect(() => {
        setTranslation(marked.parse(content))
    }, [content])
    useEffect(()=> {
        marked.setOptions({
            highlight: function(code, lang) {
                const language = hljs.getLanguage(lang) ? lang : 'javascript'
                return hljs.highlight(code, { language }).value
            },
            gfm: true,
            breaks: true
        })
    }, [])
    return (<></>)
}