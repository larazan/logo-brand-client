import React from 'react'

const AutoCompleteItem = ({ _id, name, images }) => {
    return (
        <li className={`list-group-item`}>
            <div className="row">
                <div className="col text-left">
                    <p className="mb-0 font-weight-bold line-height-1">
                        {name}{" "}
                        <img src={images} alt="" style={{ width: "30px" }} />
                    </p>
                </div>
            </div>
        </li>
    )
}

export default AutoCompleteItem
