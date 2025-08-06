import './css/app0805-1.css'

function App() {
    // 一般變數
    const hinataName = "日向"
    // 屬性名稱變數
    const myClassName = "myClass"
    // 方法
    function myClick(){
        alert("我是按鈕1")
    }

    return (
        <>
            {/* <h1>hello</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam accusantium sequi eveniet iure beatae repellat, delectus officiis, eius sapiente alias expedita eos aspernatur possimus id deserunt asperiores. Odio, consequatur eius?
        </p> */}

            {/* <form>
            <label htmlFor="uid">帳號</label>
            <input type="text" id="uid"/>
        </form> */}

            {/* <button type="button" onClick={()=>{
                alert("hello")

            }}>按鈕</button>
            <p id="result"></p> */}

            <div>
                {/* 若內部也有style，會覆蓋前面匯入的css style */}
                <p style={{fontSize: "64px"}} className={myClassName}>姓名：{hinataName}</p>
                <button type="button" onClick={myClick}>按鈕1</button>
                <button type="button" onClick={()=>{
                    alert("我是按鈕2")
                }}>按鈕2</button>
            </div>

        </>
    )
}
export default App;