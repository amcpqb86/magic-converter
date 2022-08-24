import React, {SetStateAction} from "react";

interface ChangeSourceProps {
    sourceState: SetStateAction<any>
}


function ChangeSource(props: ChangeSourceProps) {

    let handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        props.sourceState(e.target?.value)
    }

    return (
        <div className="m-8">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                Sélectionner une source
            </label>
            <select
                onChange={(e) => handleChange(e)}
                    className="mt-5 font-normal max-w-xl block bg-white border border-blue-300 text-blue-700 text-l rounded focus:ring-blue-500 focus:border-blue-500 selection:border-blue-500 block w-full p-2.5">
                <option selected value="moxfield">Moxfield</option>
                <option value="archidekt">Archidekt</option>
            </select>
        </div>
    )
}

export default ChangeSource