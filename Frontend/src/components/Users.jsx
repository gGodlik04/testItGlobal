import User from "./User";


export default function Users(props) {
    return(
    <div className='users' >
        <div key='#' className='app-wrapper'>
            {props.articles.map((article) => {
                return (
                    <div>
                        <User user={article} />
                    </div>
                );
            })}
        </div>
    </div>
    )
}