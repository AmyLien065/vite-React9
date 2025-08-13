import { Route, Routes } from 'react-router-dom'//非自己開發放上面
import Nav from './components/Nav' //自己開發放下面
import Footer from './components/Footer'

import Home from '../pages/Home'
import About from '../pages/About'
import News from '../pages/News'

const MyApp = () => {
    return (
        <div className='wrap'>
            {/* 選單 */}
            <Nav />
            <hr />
            <Routes>
                {/* 首頁 */}
                <Route path='/' element={<Home />}></Route>
                {/* ABOUT */}
                <Route path='/about' element={<About />}></Route>
                {/* NEWS */}
                <Route path='/news' element={<News />}></Route>


            </Routes>

            {/* footer區 */}
            <Footer />

        </div>
    )
}

export default MyApp