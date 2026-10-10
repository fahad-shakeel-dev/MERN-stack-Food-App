import { Link } from "react-router-dom";
import { FiArrowUpRight, FiGrid, FiStar } from "react-icons/fi";
import "./BrowseLink.css";

const BrowseLink = ({ to, children, variant = "featured" }) => {
  const Icon = variant === "featured" ? FiStar : FiGrid;
  return (
    <Link to={to} className={"browse-link browse-link--" + variant}>
      <span className="browse-link-icon"><Icon aria-hidden="true" /></span>
      <span className="browse-link-label">{children}</span>
      <FiArrowUpRight className="browse-link-arrow" aria-hidden="true" />
    </Link>
  );
};

export default BrowseLink;
