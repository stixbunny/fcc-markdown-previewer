import Toolbar from './Toolbar.jsx'


function TextEditor({content}) {
    return (
        <textarea id='editor' defaultValue={content} />
    )
}

export default function Editor({setContent, content}) {
    return (
        <div id="editorWrapper">
            <Toolbar />
            <TextEditor content={content}/>
        </div>
    )
}