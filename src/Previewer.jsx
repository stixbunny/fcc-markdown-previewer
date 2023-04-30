import Toolbar from './Toolbar.jsx'

export default function Previewer({translation}) {
    return (
        <div id="previewerWrapper">
            <Toolbar />
            <div id="preview" dangerouslySetInnerHTML={{__html: translation}}></div>
        </div>
    )
}