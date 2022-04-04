import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <div className='blogs-container'>
                <div className='blog'>
                    <h3>1. What is context-api?</h3>
                    <p>The context api is a react structure that enables you to change particular information and assists in fixing prop-drilling from all levels of your utility. The react context api is a manner for a react app to successfully produce global variables that may be exceeded around. This is the alternative to "prop drilling" or transferring props from grandparent to infant to figure, and so on. Context-api is also touted as an simpler, lighter method to nation control using redux. Context api is a (sort of) new feature delivered in model 16.3 of react that lets in one to share state across the complete app gently and easily.</p>
                </div>
                <div className='blog'>
                    <h3>2. What is semantic tag?</h3>
                    <p>The characteristic of a semantic tag is that it represents its meaning to each the developer and the browser. These tags sincerely define its content material. By using semantic tags to your document, you can offer additional information about that content, which aids in verbal exchange. Particularly, semantic tags make it clear to the browser about the actual meaning of a web page and its content. That clarity is also communicated with search engines, ensuring that the right pages are introduced for the proper queries.</p>
                </div>
                <div className='blog'>
                    <h3>3. Difference between inline & inline-block-elements?</h3>
                    <p>The display assets specifics the display conduct of an element. It's
                        important to understand, for controlling the format of an element.
                        Inline elements don't begin on a new line and most effective takes up as plenty width as its content material. So, if you try to set any width and top, it'll have no outcomes. Instance: span, a ,small and many others.
                        A block-level element usually begins on a brand new line, and the browsers robotically add some area (a margin) before and after the element.
                        A block-level element always takes up the whole width available. Instance: p, div and many others.</p>
                </div>

            </div>
        </div>
    );
};

export default Blogs;