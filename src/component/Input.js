import React, { useState } from 'react';

function Input({ showDiv }) {
    const [searchWord, setSearchWord] = useState("");
    return (
        <div className="inputComp">
            <input
                type="text"
                placeholder="Search..."
                onChange={e => setSearchWord(e.target.value)}
            />
            <h1>{searchWord}</h1>
            {showDiv && (
                <div>
                    Hey! My Name is Huseyin, I'm a Front end developer.
                </div>
            )}
        </div>
    );
}

export default Input;
