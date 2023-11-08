import blog from '../assets/images/blog.jpg'

const Blog = () => {
    return (
        <div>
            <div>
                <img className='w-full h-80 object-cover' src={blog} alt="" />
            </div>

            <div>
                <div className="collapse collapse-arrow bg-base-200 mt-5">
                    <input type="radio" name="my-accordion-2" checked="checked" />
                    <div className="collapse-title text-xl font-medium">

                        What is one way data binding?
                    </div>
                    <div className="collapse-content">
                        <p>One-way data binding is a data flow pattern in software development, often associated with user interfaces, where the data is transferred from a data source (e.g., a model or component) to the UI (User Interface) elements, such as the view or components, but not in the reverse direction. In one-way data binding, changes to the data source are reflected in the UI elements, but changes in the UI elements do not update the data source directly.

                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 py-5 my-2.5">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        What is NPM in node.js
                    </div>
                    <div className="collapse-content">
                        <p>NPM (Node Package Manager) is a package manager for Node.js, which is a JavaScript runtime that allows you to execute JavaScript code on the server side. NPM is a crucial part of the Node.js ecosystem and plays a significant role in managing dependencies, running scripts, and distributing Node.js packages and modules.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 mb-5">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Different between MongoDB database vs mySQL database?
                    </div>
                    <div className="collapse-content">
                        <p>MongoDB and MySQL are both popular database management systems, but they differ in several fundamental ways. Here's a comparison of MongoDB and MySQL in various aspects:

                            Database Type:

                            MongoDB: MongoDB is a NoSQL database, specifically a document-oriented database. It stores data in a flexible, JSON-like format called BSON (Binary JSON).

                            MySQL: MySQL is a relational database management system (RDBMS) that uses structured tables with rows and columns to store data.

                            Data Model:

                            MongoDB: MongoDB is schema-less, which means that you don't need to define a fixed schema before storing data. Documents in a collection can have different structures.

                            MySQL: MySQL uses a fixed schema, where you define the structure of your tables (columns, data types, and relationships) before inserting data.

                            Query Language:

                            MongoDB: MongoDB uses a query language similar to JavaScript, known as the MongoDB Query Language (MQL). It supports rich query capabilities for unstructured and semi-structured data.

                            MySQL: MySQL uses SQL (Structured Query Language), which is a powerful language for querying and manipulating structured data.

                            Scalability:

                            MongoDB: MongoDB is designed to be horizontally scalable. It can handle large amounts of data and traffic by distributing data across multiple servers in a cluster.

                            MySQL: MySQL can be scaled vertically (by adding more resources to a single server) or through replication and clustering, but horizontal scalability is not as straightforward as it is with MongoDB.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;