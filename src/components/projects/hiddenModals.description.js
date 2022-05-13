import React, {useState, useEffect} from "react";

export default function HiddenModalDescription(props) {

    //we can directly use props instead of using state
    const [descriptions] = useState(props);

    //Have to pass props from parent component so info does not repeat itself 

    function getList() {
        return descriptions.description.map((description, index) => <li key={index}>{description}</li>)
    }

    return (
        <div className="modal-description">
            <ul>{getList()}</ul>
        </div>
    );
}
