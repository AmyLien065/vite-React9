// 建立子元件

// 直接使用props物件
function MyComponent(props) {
    // console.log(props);
    // props.c();
    return <>
        <div>Hello!標準寫法</div>
        {/* 標準寫法 */}
        <div>{props.a}</div>
        <div>{props.b}</div>
        {props.c()} {/* 寫外面不用大括號，寫裡面因為是js寫法，要穿暴龍裝 */}
    </>
}

//物件解構=>{物件成員}
function MyComponent2({ a, b, c }) {
    // c();
    return <>
        <div>Hello222-簡化寫法：使用物件解構</div>
        {/* 簡化寫法 */}
        <div>{a}</div>
        <div>{b}</div>
        {c()}
    </>
}

//物件解構=>{物件成員}
function MyComponent3({ a, b = "我是預設值b", c, e }) {
    console.log(e);
    // c();
    return <>
        <div>Hello333-預設屬性值</div>
        {/* 簡化寫法 */}
        <div>{a}</div>
        <div>{b}</div>
        {c()}
    </>
}

// 父元件
const App0819a = () => {
    return (
        <>
            {/* 呼叫元件 */}
            <MyComponent a="我是屬性a" b="我是屬性b" c={() => { console.log("123") }} />
            <MyComponent2 a="我是屬性a" b="我是屬性b" c={() => { console.log("456") }} />
            <MyComponent3 a="我是屬性a"  c={() => { console.log("789") }} b="日向翔陽"/>
        </>
    )
}

export default App0819a