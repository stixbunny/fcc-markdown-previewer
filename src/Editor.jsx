import Toolbar from './Toolbar.jsx'

function TextEditor({setContent, content}) {
    const handleTextChange = event => {
        setContent(event.target.value)
    }
    return (
        <textarea id='editor' defaultValue={content} onChange={handleTextChange} />
    )
}

export default function Editor({setContent, content}) {
    return (
        <div id="editorWrapper">
            <Toolbar />
            <TextEditor setContent={setContent} content={content}/>
        </div>
    )
}