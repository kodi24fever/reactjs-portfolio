import React, {useState, useEffect} from "react";

export default function HiddenModalDescription(props) {

    const [descriptions] = useState(props);

    //Have to pass props from parent component so info does not repeat itself 

    function getList() {
        return descriptions.description.map((description) => <li>{description}</li>)
    }

    return (
        <div className="modal-description">
            <ul>{getList()}</ul>
        </div>
    );
}
