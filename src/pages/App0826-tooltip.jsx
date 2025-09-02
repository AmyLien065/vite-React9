import $ from 'jquery'
import { useEffect } from 'react'
import '../css/app0826c.css'
//import hinada from '../images/hinada-p1.jpeg' // public裡面的圖直接點斜線下去找就好了，不用import
import reactLogo from '../assets/react.svg'

const App = () => {
    useEffect(() => { // 如果不用useEffect就要用function
        // 現在寫法 => on('事件名稱', callback function)
        $('a:has(.ttpshow)').on('mouseover', function (e) {
            $('body').append('<div id="ttpPanel">' + $(this).children('.ttpshow').html() + '</div>')
            $('#ttpPanel').css({
                top: (e.pageY + 10) + 'px',
                left: (e.pageX + 10) + 'px',
            }).fadeIn(200);
        }).on('mouseout', function () {
            $('#ttpPanel').remove();
        }).on('mousemove', function (e) {
            $('#ttpPanel').css({
                top: (e.pageY + 10) + 'px',
                left: (e.pageX + 10) + 'px',
            });
        })

        // 到底在寫什麼鬼QQQQ
        // $(function () {
        //     //現在的寫法 => on('事件名稱', callback function)
        //     $('a:has(.ttpShow)').on(function (e) {
        //         $('body').append('<div id="ttpPanel">' + $(this).children('.ttpShow').html() + '</div>')
        //         $('#ttpPanel').css({ top: (e.pageY + 10) + 'px', left: (e.pageX + 10) + 'px' }).fadeIn('fast');
        //     }).on(function (e) {
        //         $('#ttpPanel').css({ top: (e.pageY + 10) + 'px', left: (e.pageX + 10) + 'px' });
        //     }).on(function () {
        //         $('#ttpPanel').remove();
        //     })
        // })


        // 蛤？？？
        // {/* 過時的語法，還是可以用，只是有刪除線 */ }
        // $(function () {
        //     // has＝》檢查超連結中是否有這個指定的名稱存在
        //     $('a:has(.ttpShow)').mouseover(function (e) {
        //         $('body').append('<div id="ttpPanel">' + $(this).children('.ttpShow').html() + '</div>')
        //         $('#ttpPanel').css({ top: (e.pageY + 10) + 'px', left: (e.pageX + 10) + 'px' }).fadeIn('fast');
        //     }).mousemove(function (e) {
        //         $('#ttpPanel').css({ top: (e.pageY + 10) + 'px', left: (e.pageX + 10) + 'px' });
        //     }).mouseout(function () {
        //         $('#ttpPanel').remove();
        //     })
        // })

    }, [])
    return (
        <div className="wrap">
            <h1>Tooltip</h1>
            <p>Lorem ipsum dolor
                <a href="#">sit
                    <span className="ttpShow">
                        sit內容說明xxxxx
                    </span>
                </a>
                amet consectetur adipisicing elit. Minima amet quisquam ipsam placeat officiis explicabo laudantium
                voluptatibus saepe dolore aperiam? Consectetur voluptatibus quae aliquid, ipsum itaque obcaecati nihil!
                Molestias corporis tenetur ullam voluptatibus quos nihil dignissimos fuga cumque eveniet, veritatis
                excepturi officia recusandae tempora ipsam blanditiis aspernatur ratione! Quia molestiae distinctio
                pariatur, ut
                <a href="">vitae
                    <span className="ttpShow">vitae內容說明xxx</span>
                </a>

                expedita. Provident eius nostrum nam dolor ullam dolore in minima sapiente itaque
                reprehenderit ratione incidunt porro, quam distinctio enim expedita sed illo ad asperiores. Cupiditate,
                earum quaerat saepe exercitationem dolores aspernatur iusto? Architecto sapiente illo, quos labore
                consequatur dolores.
                <a href="#">
                    <img src={reactLogo} alt="" />
                    <img src='../images/hinada-p1.jpeg' alt="" />
                    <span className='ttpShow'>圖片說明xxx</span>
                </a>

                Architecto doloribus delectus numquam voluptatem nisi at saepe natus eum, fugiat
                suscipit ipsam quaerat veritatis aliquid soluta laboriosam unde quidem, neque reiciendis? Quae voluptates
                repellat dolore cum quod, numquam reiciendis in, magni dolor beatae, quaerat corporis fugit quia esse autem
                velit iste voluptate labore ipsam doloribus? Consequatur ipsam unde placeat minima nulla veniam, hic, ab
                totam error voluptate iure libero inventore iste at aliquid eligendi recusandae? Aperiam iste vel totam quia
                sit tenetur, ipsum perspiciatis animi blanditiis consequatur commodi ex consequuntur molestiae voluptate
                reprehenderit vero aut, labore perferendis nemo fugit cupiditate id exercitationem? Culpa atque, obcaecati
                itaque quas minus dolores nam voluptatum fugiat sint, aliquid nulla sit. Alias, aperiam deserunt eligendi
                quam sequi sapiente laboriosam repellendus. Odit quae modi officiis animi fuga ex repudiandae nemo quos,
                nostrum consectetur vitae inventore eaque molestias minus ullam laboriosam sapiente aliquid. Quaerat,
                obcaecati laborum fugit delectus amet perferendis modi soluta numquam autem ducimus iste. Ea reprehenderit
                praesentium quam reiciendis explicabo perferendis cupiditate architecto culpa maiores nobis vel, quis
                aliquam dignissimos aliquid ipsa. Nemo, amet voluptatem quae neque perspiciatis, dignissimos odit saepe
                omnis, sint pariatur mollitia expedita? Fugit sunt corrupti aliquam quisquam neque assumenda dolore. Quam
                cupiditate voluptatibus eos fuga consequatur recusandae eius quasi nobis? Debitis, esse sed consequatur
                aliquam voluptatum incidunt.
            </p>
        </div>
    )
}

export default App