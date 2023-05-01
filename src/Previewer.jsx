import Toolbar from './Toolbar.jsx'

export default function Previewer({translation, isEditorMaxed, isPreviewMaxed, setIsPreviewMaxed}) {
    const name="Previewer"
    if (isEditorMaxed) {
        return (<></>)
    }
    else {
        return (
            <div id="previewerWrapper">
                <Toolbar name={name} isPreviewMaxed={isPreviewMaxed} setIsPreviewMaxed={setIsPreviewMaxed} />
                <div id="preview" dangerouslySetInnerHTML={{__html: translation}}></div>
            </div>
        )
    }
}