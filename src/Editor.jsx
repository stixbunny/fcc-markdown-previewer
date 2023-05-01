import Toolbar from './Toolbar.jsx'

function TextEditor({setContent, content}) {
    const handleTextChange = event => {
        setContent(event.target.value)
    }
    return (
        <textarea id='editor' defaultValue={content} onChange={handleTextChange} />
    )
}

export default function Editor({setContent, content, isPreviewMaxed, isEditorMaxed, setIsEditorMaxed}) {
    const name = "Editor"
    if(isPreviewMaxed) {
        return (<></>)
    }
    else {
        return (
            <div id="editorWrapper">
                <Toolbar name={name} isEditorMaxed={isEditorMaxed} setIsEditorMaxed={setIsEditorMaxed}/>
                <TextEditor setContent={setContent} content={content}/>
            </div>
        )
    }
}