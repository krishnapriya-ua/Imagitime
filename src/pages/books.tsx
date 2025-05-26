import book1Front from '../assets/book1.jpeg';
import book1Back from '../assets/book2.jpeg';
import book2Front from '../assets/book4.jpeg';
import book2Back from '../assets/book3.jpeg';
import book3Front from '../assets/book5.jpeg';
import book3Back from '../assets/book6.jpeg';
import '../assets/homepage.css'
import {Button} from '@mui/material';
const books = [
    {
        front: book1Front,
        back: book1Back,
        title: 'Child Wonders',
        age: 'Ages: 3 to 8'
    }, {
        front: book2Front,
        back: book2Back,
        title: 'The Magic Garden',
        age: 'Ages: 4 to 9'
    }, {
        front: book3Front,
        back: book3Back,
        title: 'Superhero Dreams',
        age: 'Ages: 5 to 10'
    }
];

export default function ChooseBookSection() {
    return (
        <section className="choose-book-section mt-5 text-center">
            <h2 className="section-heading mb-4">Choose Your Book</h2>
            <div className="row justify-content-center">
                {
                    books.map((book, idx) => (
                        <div key={idx} className="col-md-4 mb-4 book-card">
                            <div className="book-image-wrapper">
                                <img src={book.front} alt={book.title} className="book-image front"/>
                                <img src={book.back} alt={book.title + ' back'} className="book-image back"/>
                            </div>
                            <h4 className="book-title mt-3">{book.title}</h4>
                            <p className="book-age">{book.age}</p>
                            <Button
                                variant="contained"
                                sx={{
                                    background: 'linear-gradient(90deg,rgb(10, 9, 11),rgb(0, 0, 0))',
                                    borderRadius: 3,
                                    color: '#fff',
                                    px: 10,
                                    py: 1.2,
                                    fontSize: 'small'
                                }}
                                className="book-btn">
                                Personalize This Book
                            </Button>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}
