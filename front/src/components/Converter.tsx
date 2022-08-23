interface ConverterProps {

}

let convertFromMoxfield = () => {
    let link = document.getElementById("moxfield-link")

}

function Converter(props: ConverterProps) {
    return (
        <div>
            <div className="m-8 flex">
                <input
                    type="text"
                    className="max-w-xl form-control block w-full px-4 py-2 text-xl font-normal text-blue-700 bg-white bg-clip-padding border border-solid border-blue-300 rounded transition ease-in-out focus:text-blue-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="moxfield-link"
                    placeholder="Lien Moxfield"
                />
                <button
                    className="ml-3 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                    id="convert-btn"
                    onClick={convertFromMoxfield}
                >
                    Convertir
                </button>
            </div>
        </div>
    )
}

export default Converter