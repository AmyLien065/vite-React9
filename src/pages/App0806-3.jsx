import React from 'react'

// 建立員工元件
// 解構prpos
const Employee = ({ name, age, h, w }) => {
    return (
        <div className='emp'>
            <h2>姓名：{name}</h2>
            <p>年齡：{age}</p>
            <p>身高：{h}</p>
            <p>體重：{w}</p>
            <p>BMI:{(w / Math.pow(h / 100, 2)).toFixed(2)}</p>
        </div>
    )
}

// 建立陣列物件資料
const arrEmployee = [
    {
        id: 1,
        name: "日向翔陽",
        age: "21",
        h: 164,
        w: 50,
    },
    {
        id: 2,
        name: "影山飛雄",
        age: "22",
        h: 180,
        w: 60,
    },
    {
        id: 3,
        name: "月島螢",
        age: "23",
        h: 180,
        w: 70,
    },
    {
        id: 4,
        name: "山口忠",
        age: "24",
        h: 178,
        w: 78,
    },


]

const App = () => {
    return (
        <div>
            <h1>員工資料</h1>
            {/* 方法3：呼叫員工元件，使用陣列物件資料，搭配map */}
            {
                arrEmployee.map((emp) => {
                    return (
                        <Employee name={emp.name} age={emp.age} h={emp.h} w={emp.w}></Employee>
                    )
                }
                )

            }

            {/* 方法2：呼叫員工元件，使用物件資料*/}
            {/* 
            <Employee name={employee.emp1.name} age={employee.emp1.age} />
            <Employee name={employee.emp2.name} age={employee.emp2.age} />
            <Employee name={employee.emp3.name} age={employee.emp3.age} />
            */}


            {/* 方法1 呼叫員工元件，使用全部輸入法 土法煉鋼>< */}
            {/*<Employee name="員工1" age="21"></Employee>
            <Employee name="員工2" age="22"></Employee>
            <Employee name="員工3" age="23"></Employee> */}
            {/* 如果沒有要做其他事，可以元件直接加上關閉標籤
        // 原本長這樣：<Employee name="員工1" age="21"></Employee>
        // 直接加上關閉標籤長這樣： <Employee/> */}
        </div>
    )
}

// 建立物件資料
const employee = {
    emp1: {
        name: "員工1", age: "21"
    },
    emp2: {
        name: "員工2", age: "22"
    },
    emp3: {
        name: "員工3", age: "23"
    }
}

export default App
