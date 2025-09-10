// 不同斷點的RWD圖片顯示套件=>https://www.npmjs.com/package/react-masonry-css
import { img } from 'motion/react-client';
import Masonry from 'react-masonry-css'
import "../css/masonry.css"

const App0909 = () => {

    var photos = [
        { id: 1, src: './images/hikyuu-1.png' },
        { id: 2, src: './images/hikyuu-2.png' },
        { id: 3, src: './images/hikyuu-3.png' },
        { id: 4, src: './images/hikyuu-4.png' },
        { id: 5, src: './images/hikyuu-5.png' },
    ];

    // RWD斷點設定
    const breakpointColumnsObj = {
        // 預設4欄，預設值可以自己改
        default: 3,
        // 斷點尺寸
        1100: 2,
        700: 1,
        // 500: 1
    };

    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
        >

            {/* array of JSX items */}
            {
                photos.map((item) => {
                    return (
                        < div key={item.id} >
                            <img src={item.src} alt="" />
                        </ div>
                    )
                })

            }
        </Masonry >
    )
}

export default App0909