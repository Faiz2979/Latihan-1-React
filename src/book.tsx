

import axios from 'axios';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';



interface BookProps {
    title: string;
    isbn: string;
    author: string;
    publisher: string;
    category: string;
    stock: number;
    cover: string;
    }

    function BookCard(book: BookProps) {
    const [isHovered, setIsHovered] = useState(false);
    const backendURL = "http://localhost:7070";

    return (
        <>
        <motion.div 
            className="relative w-[200px] h-[300px] rounded-md overflow-hidden cursor-pointer"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
        >
            {/* Cover Image */}
            <img
            src={`${backendURL}/cover/${book.cover}`}
            alt={book.title}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            className="rounded-md"
            />

            {/* Overlay on hover */}
            <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            >
            {/* Book details */}
            <motion.div 
                className="absolute bottom-0 left-0 right-0 p-4 text-white"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            >
                <h3 className="text-lg font-bold mb-1 line-clamp-1">{book.title}</h3>
                <p className="text-sm mb-2 line-clamp-1">{book.author}</p>
                <div className="flex items-center justify-between">
                <span className="text-xs bg-blue-600 px-2 py-1 rounded">{book.category}</span>
                <span className="text-xs">{book.stock} in stock</span>
                </div>
            </motion.div>
            </motion.div>

            {/* "Read More" button on hover */}
            <motion.button
            className="absolute top-2 right-2 bg-white text-black text-xs font-bold py-1 px-2 rounded opacity-0"
            whileHover={{ scale: 1.05 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            >
            Read More
            </motion.button>
        </motion.div>

        </>
    );
    }

    export default function BookPage() {
        interface Book {
        isbn: string;
        title: string;
        author: string;
        publisher: string;
        category: string;
        stock: number;
        cover: string;
        }
    
        const [books, setBooks] = useState<Book[]>([]);
    
        async function getBooks() {
        try {
            const response = await axios.get('http://localhost:7070/book/');
            const result = response.data;
            if (result.success && Array.isArray(result.data)) {
            setBooks(result.data);
            } else {
            console.error('Unexpected data format:', result);
            setBooks([]);
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }
        }
    
        useEffect(() => {
        getBooks();
        }, []);
    
        return (
        <div className="bg-gradient-to-tr overflow-hidden relative w-full">
            <div className='min-h-screen'>
            <h1 className='font-semibold'>Bookshelf</h1>
            <div className="flex justify-center align-center flex-wrap gap-2">
            {
                books.map((book) => (
                    <BookCard key={book.isbn} {...book}></BookCard>
                ))
            
            }
            </div>
            </div>
        </div>
        );
    }
    