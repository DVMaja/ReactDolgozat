import AlapValasz from "./AlapValasz";


//import { ChangeEvent} from "react";
export default function MondatKieg(props) {

    function tovabb() {
        props.tovabb();

    }
    //https://codefrontend.com/reactjs-get-input-value/
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
            <AlapValasz alapV={props.alapSzo}/>
        </div>
    )
} 