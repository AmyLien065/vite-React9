import Card from '../src/components/Card';
import '../src/css/App0806-1.css'

const App = () => {
    // 資料抽離
    // 建立陣列物件資料

    const arrPhotos = [
        {
            id: 1,
            imgURL: 'https://blog.shopping.gamania.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F3wl0vtkq%2Fproduction%2F8937a0a945c2a911bf81f4fa13414f8af7229abb-900x1278.jpg&w=1920&q=75',
            title: '排球少年第二季',
            desc: '大王者篇',
            btnName: '圖片下載',
            btnURL: '',
        },
        {
            id: 2,
            imgURL: 'https://res.klook.com/image/upload/x_0,y_7,w_2480,h_3472,c_crop/c_scale,w_360/v1711343805/events_admin/p8ueccauubkoi82onk5x.jpg',
            title: '日向翔陽',
            desc: '愛咪男友',
            btnName: '圖片來源',
            btnURL: 'https://res.klook.com/image/upload/x_0,y_7,w_2480,h_3472,c_crop/c_scale,w_360/v1711343805/events_admin/p8ueccauubkoi82onk5x.jpg',
        },
        {
            id: 3,
            imgURL: 'https://s.yimg.com/ny/api/res/1.2/QkLO2e7IYeJs8oQNerC1BA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTkwNw--/https://media.zenfs.com/zh-tw/limedia_tw_150/31720b2706d0bb33d8d842d055659101',
            title: '垃圾場對決',
            desc: 'V.S音駒高中',
            btnName: '圖片來源',
            btnURL: 'https://s.yimg.com/ny/api/res/1.2/QkLO2e7IYeJs8oQNerC1BA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTkwNw--/https://media.zenfs.com/zh-tw/limedia_tw_150/31720b2706d0bb33d8d842d055659101',
        },

    ]

    // const photos = {

    //     photo1: {
    //         imgURL: 'https://blog.shopping.gamania.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F3wl0vtkq%2Fproduction%2F8937a0a945c2a911bf81f4fa13414f8af7229abb-900x1278.jpg&w=1920&q=75',
    //         title: '排球少年第二季',
    //         desc: '大王者篇',
    //         btnName: '圖片下載',
    //         btnURL: 'https://blog.shopping.gamania.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F3wl0vtkq%2Fproduction%2F8937a0a945c2a911bf81f4fa13414f8af7229abb-900x1278.jpg&w=1920&q=75',
    //     },
    //     photo2: {
    //         imgURL: 'https://res.klook.com/image/upload/x_0,y_7,w_2480,h_3472,c_crop/c_scale,w_360/v1711343805/events_admin/p8ueccauubkoi82onk5x.jpg',
    //         title: '日向翔陽',
    //         desc: '愛咪男友',
    //         btnName: '圖片來源',
    //         btnURL: 'https://res.klook.com/image/upload/x_0,y_7,w_2480,h_3472,c_crop/c_scale,w_360/v1711343805/events_admin/p8ueccauubkoi82onk5x.jpg',
    //     },
    //     photo3: {
    //         imgURL: 'https://s.yimg.com/ny/api/res/1.2/QkLO2e7IYeJs8oQNerC1BA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTkwNw--/https://media.zenfs.com/zh-tw/limedia_tw_150/31720b2706d0bb33d8d842d055659101',
    //         title: '垃圾場對決',
    //         desc: 'V.S音駒高中',
    //         btnName: '圖片來源',
    //         btnURL: 'https://s.yimg.com/ny/api/res/1.2/QkLO2e7IYeJs8oQNerC1BA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTkwNw--/https://media.zenfs.com/zh-tw/limedia_tw_150/31720b2706d0bb33d8d842d055659101',
    //     },

    // }
    return (
        <>
            <div className='container'>
                {
                    arrPhotos.map((photo) => {
                        return (
                            <Card
                                key={photo.id}
                                imgURL={photo.imgURL}
                                title={photo.title}
                                desc={photo.desc}
                                btnName={photo.btnName}
                                btnURL={photo.btnURL}
                            ></Card>
                        )
                    })
                }
            </div>





            {/* 
            <div className='container'>
                <Card
                    imgURL={photos.photo1.imgURL}
                    title={photos.photo1.title}
                    desc={photos.photo1.desc}
                    btnName={photos.photo1.btnName}
                    btnURL={photos.photo1.btnURL}
                ></Card>


                <Card
                    imgURL={photos.photo2.imgURL}
                    title={photos.photo2.title}
                    desc={photos.photo2.desc}
                    btnName={photos.photo2.btnName}
                    btnURL={photos.photo2.btnURL}
                ></Card>

                <Card
                    imgURL={photos.photo3.imgURL}
                    title={photos.photo3.title}
                    desc={photos.photo3.desc}
                    btnName={photos.photo3.btnName}
                    btnURL={photos.photo3.btnURL}
                ></Card>

            </div> */}

        </>
    )
}

export default App;