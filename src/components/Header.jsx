import React from 'react'
import '../css/Header.css'

function Header() {
    return (
        <div className='all-h'>
            <div className="gavel">
                <h1 className='header-text'>
                    HUKUK BÜROSU TANITIM SİTESİ
                </h1>
                <div className='bilgiler'>
                    <div className='dava'>
                        <h3>
                            Hakkımızda
                        </h3>
                        <p>
                            Avukat X, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum.
                        </p>
                        <button className='btn'>
                            Detaylar
                        </button>
                    </div>
                    <div className='dava'>
                        <h3>
                            Çalışma Alanlarımız
                        </h3>
                        <p>
                            Avukat X, Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis officia architecto natus ea optio provident iure vero ipsa magnam.
                        </p>
                        <button className='btn'>
                            Detaylar
                        </button>
                    </div>
                    <div className='dava'>
                        <h3>
                            Makalelerimiz
                        </h3>
                        <p>
                            Avukat X, Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus est eveniet magnam? Numquam culpa id dolores?Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <button className='btn'>
                            Detaylar
                        </button>
                    </div>

                </div>

            </div >
        </div>)
}


export default Header