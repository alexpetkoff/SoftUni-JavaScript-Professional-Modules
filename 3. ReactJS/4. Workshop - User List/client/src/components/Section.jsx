import Pagination from "./Pagination";
import Search from "./Search";
import Table from "./Table";

const Section = () => {
    return (
        <section className="card users-container">
            <Search />
            <Table />
            <button className="btn-add btn">Add new user</button>
            <Pagination />
        </section>
    );
}

export default Section;