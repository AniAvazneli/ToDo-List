const Footer = (props) => {
    const ShowCompleted = () => {
        props.onlyCompleted();
    }
    const ShowActive = () => {
        props.onlyActive();
    }
    const ShowAll = () => {
        props.all();
    }

    const ClearCompleted = () => {
        props.clearCompleted();
    }
    const lefted = props.toDoList.filter((todo) => !todo.complete)
    return <div>
        <div>
            <div className={props.darkMode ? "BottromOfCard" : "BottromOfCardDarck"}>
                <button className="itemsLeft">
                    <h3 className="numberOfTodoes forFont">{lefted.length}</h3>
                    <h3 className="forFont">items left</h3>
                </button>
                <button onClick={ClearCompleted} className="forFont clearComplete">
                    Clear Completed
                </button>
            </div>
            <div className={props.darkMode ? "bottomFooter" : "darkbottomFooter"}>
                <button onClick={ShowAll} className="bottomFooterTextAll" >All</button>
                <button onClick={ShowActive} className="bottomFooterTextActive" >Active</button>
                <button onClick={ShowCompleted} className="bottomFooterTextComplited" >Completed</button>
            </div>
        </div>
        <div>
            <h3 className="footerLowText">Drag and drop to reorder list</h3>
        </div>
    </div>
}
export default Footer;