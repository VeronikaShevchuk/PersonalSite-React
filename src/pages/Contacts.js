
function Contacts () {

    return(

        <main className="section2">
        <div className="container">
            <h1 className="title-1">Contacts</h1>
            <ul className="content-list">
                <li className="content-list__item">
                    <h2 className="title-2">Location</h2>
                    <p>Novosibirsk, Russia</p>
                </li>
                <li className="content-list__item">
                    <h2 className="title-2">Telegram / WhatsApp</h2>
                    <p><a href="tel:+79097019726">+7 (909) 701-97-26</a></p>
                </li>
                <li className="content-list__item">
                    <h2 className="title-2">Email</h2>
                    <p><a href="mailto:nika_shu@mail.ru">nika_shu@mail.ru</a></p>
                </li>
            </ul>
        </div>
    </main>
    )
}

export default Contacts;