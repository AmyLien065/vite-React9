

const Card = ({ imgURL, title, desc, btnName, btnURL }) => {
    // console.log(props)
    // 解構=>就是把元件得到的參數給props之後，再逐一拆解出來使用

    // const { imgURL } = props;
    // const { title } = props;
    // const { desc } = props;
    // const { btnName } = props;
    // const { btnURL } = props;

    // 把五行簡化成一行
    // const { imgURL, title, desc, btnName, btnURL } = props;

    return (
        <div className="card" >
            <img src={imgURL} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{ title}</h5>
                <p className="card-text">{desc }</p>
                <a href={btnURL} className="btn">{btnName }</a>
            </div>
        </div >
    )
}

export default Card