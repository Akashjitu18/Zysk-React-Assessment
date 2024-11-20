import React from 'react';

const BlogCard = ({ image, category, title, description, profileImage, author, date }) => (
    <div className="p-4" style={{ width: '384px', height: '444px' }}>
        <div className="h-full rounded-lg overflow-hidden">
            <img
                className="w-[384px] h-[240px] object-cover object-center"
                src={image}
                alt="blog"
            />
            <div className="py-2">
                <h2 className="tracking-widest text-xs title-font font-medium text-[#6941C6] mb-1">{category}</h2>
                <div className='flex justify-between'>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-1">{title}</h1>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 11L11 1M11 1H1M11 1V11" stroke="#101828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                </div>
                <p className=" mb-3 text-sm">{description}</p>
                <div className="flex items-center">
                    <img
                        className="w-10 h-10 rounded-full mr-4"
                        src={profileImage}
                        alt="profile"
                    />
                    <div className="flex-grow">
                        <h2 className="text-gray-900 title-font font-medium">{author}</h2>
                        <p className="text-gray-500 text-sm">{date}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const Blog = () => {
    const blogData = [
        {
            image: 'images\Image.png',
            category: 'Design',
            title: 'UX review presentations',
            description: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
            profileImage: 'images\Avatar.png',
            author: 'John Doe',
            date: 'Nov 20, 2024',
        },
        {
            image: 'images\Image (1).png',
            category: 'Product',
            title: 'Migrating to Linear 101',
            description: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.',
            profileImage: 'images\Avatar.png',
            author: 'Jane Smith',
            date: 'Nov 19, 2024',
        },
        {
            image: 'images\Image (2).png',
            category: 'Software Engineering',
            title: 'Building your API stack',
            description: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
            profileImage: 'images\Avatar.png',
            author: 'Alice Johnson',
            date: 'Nov 18, 2024',
        },
    ];

    return (
        <>

            <section className="flex flex-col md:flex-row justify-between mt-14 mx-auto container px-4 md:px-8">
                <div className="flex flex-col gap-2 mb-6 md:mb-0">
                    <p className="text-xs text-[#6941C6] font-semibold">Our blog</p>
                    <h1 className="font-semibold text-3xl">Latest blog posts</h1>
                    <p className="text-gray-600">Tools and strategies modern teams need to help their companies grow.</p>
                </div>
                <div>
                    <button className="text-white bg-[#7F56D9] border-0 rounded-lg py-2 px-4 focus:outline-none hover:bg-[#6d47c0] font-semibold sm:w-auto w-full hidden md:block">
                        View all posts
                    </button>
                </div>
            </section>



            <section className="text-gray-600 container mx-auto px-4 lg:px-8">
                <div className="py-16">
                    <div className="flex flex-wrap gap-6 justify-center">
                        {blogData.map((blog, index) => (
                            <BlogCard key={index} {...blog} />
                        ))}
                    </div>


                    <div className="flex justify-center mt-6">
                        <button className="text-white bg-[#7F56D9] border-0 rounded-lg py-2 px-4 focus:outline-none hover:bg-[#6d47c0] font-semibold md:w-auto w-full md:hidden">
                            View all posts
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;




