import React, { useMemo, useState } from 'react'

const App0902a = () => {
    // 建立表格資料
    const arrProd = [
        {
            id: 1,
            prodName: "筆電",
            prodPrice: 80,
            prodImgUrl: './images/hikyuu-1.png',
        },
        {
            id: 2,
            prodName: "人物1",
            prodPrice: 800,
            prodImgUrl: './images/hikyuu-2.png',
        },
        {
            id: 3,
            prodName: "街景",
            prodPrice: 120,
            prodImgUrl: './images/hikyuu-3.png',
        },
        {
            id: 4,
            prodName: "自拍視角",
            prodPrice: 160,
            prodImgUrl: './images/hikyuu-4.png',
        },
        {
            id: 5,
            prodName: "人物2",
            prodPrice: 100,
            prodImgUrl: './images/hikyuu-5.png',
        },

    ]
    // 建立表格元件
    const ProdTable = ({ ascfilterProds }) => {
        return (
            <table style={{ width: '500px', marginTop: '20px' }}>
                <tbody>
                    {/* jsx中撰寫js語法，必須先打一組大誇號！ */}
                    {
                        ascfilterProds.map((prod) => {
                            return (
                                <tr key={prod.id}>
                                    <td style={{
                                        borderBottom: '1px dashed #ccc',
                                        padding: '5px',
                                        width: "100px",
                                    }}>{prod.prodName} </td>

                                    <td style={{
                                        borderBottom: '1px dashed #ccc',
                                        padding: '5px',
                                        width: "300px",
                                    }}>
                                        <img src={prod.prodImgUrl} alt=""
                                            style={{ width: '250px' }} />
                                    </td>
                                    <td style={{
                                        borderBottom: '1px dashed #ccc',
                                        padding: '5px',
                                        width: "100px",
                                    }}>{prod.prodPrice}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }

    // 陣列變數，預設為原商品陣列資料
    const [prods, setProds] = useState(arrProd);

    //排序變數，預設為遞增
    const [ascending, setAscending] = useState(true);

    //搜尋變數，預設為空字串
    const [search, setSearch] = useState('');

    //建立排序與搜尋的函式
    const ascfilterProds = useMemo(() => {
        return [...prods]
            //排序
            .sort((a, b) => {
                return ascending ? a.prodPrice - b.prodPrice //依照產品價格遞增
                    : b.prodPrice - a.prodPrice //否則依照產品價格遞減
            })
            //搜尋
            .filter((prod) => {
                //保留搜尋關鍵字的內容，有相同的就保留
                return prod.prodName.match(search);
            })
    }, [ascending, search])

    return (
        <div className='wrap'>
            <h2>useMemo搜尋與排序</h2>
            排序：
            <input
                type="checkbox"
                // 綁定排序變數
                checked={ascending}
                // 當checkbox有異動時，更新排序變數
                onChange={(e) => { setAscending(e.target.checked) }} />
            <br />
            搜尋：
            <input type="text"
                // 綁定搜尋變數
                value={search}
                // 當搜尋內容有異動時，更新搜尋變數
                onChange={(e) => { setSearch(e.target.value) }}
            />

            {/* 表格 */}
            <ProdTable ascfilterProds={ascfilterProds} />




        </div>
    )
}

export default App0902a