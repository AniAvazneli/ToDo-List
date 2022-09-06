import ToDoList from "./ToDoList";

const Footer = (props) => {
    return <div>
        <div>
            <div className="BottromOfCard">
                <button className="itemsLeft">
                    <h3 className="numberOfTodoes forFont">{ToDoList.length}</h3>
                    <h3 className="forFont">items left</h3>
                </button>
                <button className="clearComplete">
                    <h3 className="forFont" >Clear Completed</h3>
                </button>
            </div>
            <div className="bottomFooter">
                <button className="bottomFooterTextAll" >All</button>
                <button className="bottomFooterTextActive" >Active</button>
                <button className="bottomFooterTextComplited" >Completed</button>
            </div>
        </div>
        <div>
            <h3 className="footerLowText">Drag and drop to reorder list</h3>
        </div>
    </div>
}
export default Footer;