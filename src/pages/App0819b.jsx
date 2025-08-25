//次元件
function SecondComponent({ c }) {
    // console.log(props)
    return (
        <>
            <h1>我是secondComponent元件</h1>
            <p>secondComponent接收的屬性是：{c}</p>
        </>
    )
}

function MyComponent2({ b }) {
    // console.log(props)
    return (
        <>
            <h2>接收來自主元件的傳遞</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quasi architecto autem numquam quos quaerat explicabo fugiat magnam! Aliquid, minus?</p>
            <SecondComponent c={b} />
            我是：{b}
        </>
    )
}

//子元件，接收主元件傳遞過來的元件
function MyComponent({ a, children }) {
    // console.log(props)
    return (
        <>
            <h2>接收來自主元件的傳遞</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quasi architecto autem numquam quos quaerat explicabo fugiat magnam! Aliquid, minus?</p>
            {children}
            我是：{a}
        </>
    )
}

//主元件
const App0819b = () => {
    return (
        <div>
            <h1>元件之間，傳遞元件</h1><hr />
            {/* 此方法是進階寫法，現階段理解即可 */}
            <MyComponent a="屬性a">
                <SecondComponent c="屬性a" />
            </MyComponent>

            <hr />
            {/* 現階段使用此方法（逐層各自呼叫元件） */}
            <MyComponent2 b="屬性b" />
        </div>
    )
}

export default App0819b