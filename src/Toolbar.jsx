import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import { faDownLeftAndUpRightToCenter } from "@fortawesome/free-solid-svg-icons";
import { faMaximize } from "@fortawesome/free-solid-svg-icons";
import { PropTypes } from 'prop-types';

export default function Toolbar({name, isPreviewMaxed, setIsPreviewMaxed, isEditorMaxed, setIsEditorMaxed}) {
    let isThisMaxed
    let toggleMaxed
    //Gets called from Previewer
    if(setIsPreviewMaxed) {
        isThisMaxed = isPreviewMaxed
        toggleMaxed = () => setIsPreviewMaxed(value => !value)
    }
    //Gets called from Editor
    else {
        isThisMaxed = isEditorMaxed
        toggleMaxed = () => setIsEditorMaxed(value => !value)
    }
    if(isThisMaxed) {
        return (
            <div className="toolbar">
                <FontAwesomeIcon icon={faFreeCodeCamp} />
                {name}
                <FontAwesomeIcon icon={faDownLeftAndUpRightToCenter} onClick={toggleMaxed} />
            </div>
        )
    }
    else {
        return (
            <div className="toolbar">
                <FontAwesomeIcon icon={faFreeCodeCamp} />
                {name}
                <FontAwesomeIcon icon={faMaximize} onClick={toggleMaxed} />
            </div>
        )
    }
}