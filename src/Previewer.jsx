import Toolbar from './Toolbar.jsx'

function Preview() {
    return (
        <div className="contentWindow">

        </div>
    )
}

export default function Previewer() {
    return (
        <div id="previewerWrapper">
            <Toolbar />
            <Preview />
        </div>
    )
}