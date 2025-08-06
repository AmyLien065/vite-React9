import '../src/css/App0806-1.css'

const App = () => {
    // 資料抽離
    const photos = {
        
        photo1: {
            imgURL: 'https://blog.shopping.gamania.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F3wl0vtkq%2Fproduction%2F8937a0a945c2a911bf81f4fa13414f8af7229abb-900x1278.jpg&w=1920&q=75',
            title: '排球少年第二季',
            desc: '大王者篇',
            btnName: '圖片下載',
            btnURL: 'https://blog.shopping.gamania.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F3wl0vtkq%2Fproduction%2F8937a0a945c2a911bf81f4fa13414f8af7229abb-900x1278.jpg&w=1920&q=75',
        },
        photo2: {
            imgURL: 'https://res.klook.com/image/upload/x_0,y_7,w_2480,h_3472,c_crop/c_scale,w_360/v1711343805/events_admin/p8ueccauubkoi82onk5x.jpg',
            title: '日向翔陽',
            desc: '愛咪男友',
            btnName: '圖片來源',
            btnURL: 'https://res.klook.com/image/upload/x_0,y_7,w_2480,h_3472,c_crop/c_scale,w_360/v1711343805/events_admin/p8ueccauubkoi82onk5x.jpg',
        },
        photo3: {
            imgURL: 'https://s.yimg.com/ny/api/res/1.2/QkLO2e7IYeJs8oQNerC1BA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTkwNw--/https://media.zenfs.com/zh-tw/limedia_tw_150/31720b2706d0bb33d8d842d055659101',
            title: '垃圾場對決',
            desc: 'V.S音駒高中',
            btnName: '圖片來源',
            btnURL: 'https://s.yimg.com/ny/api/res/1.2/QkLO2e7IYeJs8oQNerC1BA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTkwNw--/https://media.zenfs.com/zh-tw/limedia_tw_150/31720b2706d0bb33d8d842d055659101',
        },

    }
    return (
        <>
            <div className='container'>
                <div className="card">
                    <img src={photos.photo1.imgURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{photos.photo1.title}</h5>
                        <p className="card-text">{photos.photo1.desc}</p>
                        <a href={photos.photo1.btnURL} className="btn">{photos.photo1.btnName}</a>
                    </div>
                </div>

                <div className="card">
                    <img src={photos.photo2.imgURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{photos.photo2.title}</h5>
                        <p className="card-text">{photos.photo2.desc}</p>
                        <a href={photos.photo2.btnURL} className="btn">{photos.photo2.btnName}</a>
                    </div>
                </div>

                <div className="card">
                    <img src={photos.photo3.imgURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{photos.photo3.title}</h5>
                        <p className="card-text">{photos.photo3.desc}</p>
                        <a href={photos.photo3.btnURL} className="btn">{photos.photo3.btnName}</a>
                    </div>
                </div>

        </div >
        </>
    )
}

export default App;