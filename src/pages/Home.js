import Header from "./../components/header/Header";

function Home() {

    return (
        <>
            <Header />
            <main className="section2">
                <div className="container">
                    <h1 className="title-1">About me</h1>
                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Aducational</h2>
                            <p> система воспитания и обучения личности, а также совокупность приобретаемых знаний, умений, навыков, ценностных установок, функций,</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Work experience</h2>
                            <p>Термин используется для описания прошлых рабочих мест, тренингов и курсов, связанных с должностью, на которую вы претендуете. Успешное выполнение обязанностей невозможно без соответствующих</p>
                        </li>
                    </ul>
                </div>
            </main>
        </>

    )
}

export default Home;