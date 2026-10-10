import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FiArrowUpRight, FiCalendar, FiCheckCircle, FiGrid, FiTag } from "react-icons/fi";
import { StoreContext } from "../../context/StoreContext";
import { formatPrice } from "../../utils/currency.js";
import { getOfferDetails, isOfferActive } from "../../utils/offerDetails.js";
import "./OfferPage.css";

const formatExpiry = (expiry) => new Intl.DateTimeFormat("en-PK", {
  day: "numeric", month: "short", year: "numeric", timeZone: "Asia/Karachi",
}).format(new Date(expiry));

const OffersPage = () => {
  const { url, food_list, offers, setOffers, isLoading } = useContext(StoreContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all");
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError("");
    axios.get(url + "/api/offers", { withCredentials: true, signal: controller.signal })
      .then(({ data }) => {
        if (!data.success) throw new Error("Offers could not be loaded.");
        setOffers(data.data || []);
      })
      .catch((error) => {
        if (!controller.signal.aborted) setError("We could not load the offers. Please try again.");
      })
      .finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => controller.abort();
  }, [url, retry, setOffers]);

  const deals = offers.filter((offer) => isOfferActive(offer))
    .map((offer) => ({ ...offer, details: getOfferDetails(offer, food_list) }))
    .filter((offer) => offer.details);
  const types = [...new Set(deals.map((offer) => offer.type))];
  const visibleDeals = filter === "all" ? deals : deals.filter((offer) => offer.type === filter);
  const featuredDeal = [...deals].sort((a, b) => b.discount - a.discount)[0];
  const imageUrl = (image) => /^https?:\/\//i.test(image) || image.startsWith("/")
    ? image : url.replace(/\/$/, "") + "/images/" + encodeURIComponent(image);
  const busy = loading || isLoading;

  return (
    <main className="offers-page">
      <section className="offers-hero" aria-labelledby="offers-title">
        <div className="offers-hero-copy">
          <span className="offers-eyebrow"><FiTag aria-hidden="true" /> INDUS &amp; OLIVE OFFERS</span>
          <h1 id="offers-title">Your favorites,<br />for a little less.</h1>
          <p>Good food, even better value. Discover delicious deals on the dishes you love.</p>
          <span className="offers-auto-note"><FiCheckCircle aria-hidden="true" /> Discounts apply automatically in your cart.</span>
        </div>
        {featuredDeal && !busy && (
          <Link to={featuredDeal.details.to} state={{ discount: featuredDeal.discount }} className="offers-spotlight">
            <img src={imageUrl(featuredDeal.details.image)} alt={featuredDeal.details.product.name} />
            <span className="offers-spotlight-badge">{featuredDeal.discount}%<small>OFF</small></span>
            <div className="offers-spotlight-caption"><span>FEATURED DEAL</span><h2>{featuredDeal.title}</h2><span className="offers-spotlight-link">Explore the offer <FiArrowUpRight aria-hidden="true" /></span></div>
          </Link>
        )}
      </section>

      <section className="offers-collection" aria-labelledby="offers-collection-title">
        <div className="offers-collection-heading"><div><h2 id="offers-collection-title">A little something to look forward to.</h2><p>{busy ? "Finding your next delicious deal..." : deals.length + " offers to make your next meal even better."}</p></div><span className="offers-collection-icon"><FiGrid aria-hidden="true" /></span></div>
        {!busy && !error && deals.length > 0 && (
          <div className="offers-filters" role="group" aria-label="Filter offers">
            <button type="button" onClick={() => setFilter("all")} aria-pressed={filter === "all"}>All offers <span>{deals.length}</span></button>
            {types.map((type) => <button type="button" key={type} onClick={() => setFilter(type)} aria-pressed={filter === type}>{type}<span>{deals.filter((offer) => offer.type === type).length}</span></button>)}
          </div>
        )}
        {busy ? <div className="offers-state" role="status">Loading offers...</div> : error ? (
          <div className="offers-state" role="alert"><p>{error}</p><button type="button" onClick={() => setRetry((value) => value + 1)}>Try again</button></div>
        ) : visibleDeals.length > 0 ? (
          <div className="offers-grid">
            {visibleDeals.map((offer) => (
              <article className="offers-card" key={offer._id}>
                <Link to={offer.details.to} state={{ discount: offer.discount }} className="offers-card-image" aria-label={"View " + offer.title}>
                  <img src={imageUrl(offer.details.image)} alt={offer.details.product.name} loading="lazy" />
                  <span className="offers-discount-badge"><strong>{offer.discount}%</strong> off</span>
                  <span className="offers-type-badge">{offer.type}</span>
                </Link>
                <div className="offers-card-body">
                  <span className="offers-target">{offer.details.categoryDeal ? offer.targetCategory + " collection" : offer.details.product.name}</span>
                  <h3>{offer.title}</h3>
                  <p className="offers-description">{offer.description}</p>
                  <div className="offers-price-row">{offer.details.categoryDeal && <span className="offers-from">From</span>}<strong>{formatPrice(offer.details.discountedPrice)}</strong><del>{formatPrice(offer.details.originalPrice)}</del></div>
                  <div className="offers-eligibility"><FiCheckCircle aria-hidden="true" />{offer.details.categoryDeal ? "Applies to " + offer.details.count + " dishes in this category" : "Save " + formatPrice(offer.details.saving) + " on this dish"}</div>
                  <div className="offers-card-bottom"><span className="offers-expiry"><FiCalendar aria-hidden="true" />{offer.expiry ? "Until " + formatExpiry(offer.expiry) : "Ongoing offer"}</span><Link to={offer.details.to} state={{ discount: offer.discount }} className="offers-card-action">{offer.details.categoryDeal ? "View dishes" : "View deal"}<FiArrowUpRight aria-hidden="true" /></Link></div>
                </div>
              </article>
            ))}
          </div>
        ) : <div className="offers-state"><FiTag aria-hidden="true" /><h3>No active offers right now.</h3><p>You can still explore all your favorites on the menu.</p><Link to="/menu">Explore the menu <FiArrowUpRight aria-hidden="true" /></Link></div>}
      </section>
    </main>
  );
};

export default OffersPage;
