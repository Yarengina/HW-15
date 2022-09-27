import { useNavigate, useParams } from 'react-router-dom'
import booksStub from '../../components/booksStub'
import './BookDesc.css'

function BookDesc() {
    const { bookId } = useParams()

    const searcBook = booksStub().find((book) => book.id === Number(bookId))

    const navigate = useNavigate()

    const goBack = () => {
        navigate('/order')
    }

    return (
        <div className="BookDesc">
            <p>
                Книга: <strong>{searcBook.title}</strong>
            </p>
            <p className="Description">
                Описание:
                <br />
                <strong>{searcBook.description}</strong>
            </p>
            <p>
                Цена: <strong>{searcBook.price} руб.</strong>
            </p>
            <button className="ButtonBack" type="button" onClick={goBack}>
                Back
            </button>
        </div>
    )
}

export default BookDesc
