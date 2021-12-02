import './Card.css'

const Card = props =>{

    const classes = props.className;

    return (
        
        <div className="container py-5 my-5">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-xl-10">
                    <div className={classes +" card card-props"} style={{borderRadius: "1rem"}}>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card;
