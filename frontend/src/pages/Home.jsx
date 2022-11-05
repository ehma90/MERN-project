import { Link } from "react-router-dom";
import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa";

function Home() {
  return (
    <>
      <section className="heading">
        <h1>what do you need help with?</h1>
      </section>

      <Link to="/new-ticket" className="btn btn-reverse btn-block">
        <FaQuestionCircle /> Create New Ticket
      </Link>

      <Link to="/ticket" className="btn btn-block">
        <FaQuestionCircle /> View My Ticket
      </Link>
    </>
  );
}

export default Home;
