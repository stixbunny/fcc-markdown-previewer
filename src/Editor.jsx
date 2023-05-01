import { useEffect, useState } from 'react'
import Toolbar from './Toolbar.jsx'

function TextEditor({setContent, content, isEditorMaxed}) {
    const handleTextChange = event => {
        setContent(event.target.value)
    }
    if(isEditorMaxed) {
        return (
            <textarea id='editor' defaultValue={content} onChange={handleTextChange} style={{minHeight: "95vh", resize: "none"}} />
        )
    }
    else {
        return (
            <textarea id='editor' defaultValue={content} onChange={handleTextChange} />
        )
    }
    
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
                <TextEditor setContent={setContent} content={content} isEditorMaxed={isEditorMaxed} />
            </div>
        )
    }
}