import { useRef, useState } from "react"

const Showlist = (props) =>{
    const [edit, setEdit] = useState(false);
    const editableDiv = useRef();
    const editEnable=()=>{
        editableDiv.current.disabled = false;
        editableDiv.current.focus();
        // editableDiv.current.readOnly = false;
        
        editableDiv.current.addEventListener('focusout',()=>{
            editableDiv.current.disabled = true;
            props.editNode(props.myId,editableDiv.current.value);
        })

    }
    const inputChange = ()=>{
        console.log("input change called..",editableDiv.current.value);
    }
    return(
        <>
        <div className="todo" id="nodeid" data-id={props.key}> 
            <div className="textcontainer">
                {props.stat ? 
                <> 
                    <i className="fa fa-check" aria-hidden="true" onClick={() =>{props.checkBox(props.myId)}}></i> 
                    <div className="line">{props.text}</div>
                </> : 
                <> 
                    <input type="checkBox" id="checkBox" className="checkbox" onClick={() =>{props.checkBox(props.myId)}} /> 
                    {/* <div className="noline"  id="task-todo" contentEditable={edit} ref={editableDiv}>{props.text}</div> */}
                    <input type="text" className="noline" ref={editableDiv} defaultValue={props.text} disabled/>
                    {/* <input type="text" className="noline" value={props.text}/> */}
                </>
                }
            </div>
            <div className="icons">
                {props.stat ?
                <>
                    <i id="editNode" className="fas fa-edit not-allowed"></i> <i id="deleteNode" className="fas fa-trash-alt" onClick={()=>{props.deleteNode(props.myId)}}></i>
                </>:
                <>
                    <i id="editNode" className="fas fa-edit" onClick={editEnable}></i> <i id="deleteNode" className="fas fa-trash-alt" onClick={()=>{props.deleteNode(props.myId)}}></i>
                </> 
                }
            </div>
        </div>
         </>
    )
}
export default Showlist;