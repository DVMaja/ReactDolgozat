export default function MondatKieg(props) {

    function tovabb() {
        props.tovabb();

    }

    return (
        <div className="mondatTarolo" onClick={tovabb}>
            {props.mondatLista.map((elem, index) => {
                if (elem === "_") {
                    return (
                        <form>
                            <input key={index} type="text" />
                        </form>
                    )
                }
                return (<span key={index}>{elem} </span>)
            })}
        </div>
    )
} 