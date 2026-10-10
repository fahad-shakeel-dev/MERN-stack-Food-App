import { useContext, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { FiArrowLeft, FiArrowUpRight, FiChevronRight, FiShoppingBag, FiStar } from "react-icons/fi";
import { StoreContext } from "../../context/StoreContext";
import { formatPrice } from "../../utils/currency.js";
import { getSimilarProducts } from "../../utils/productRecommendations.js";
import "./ProductDetail.css";

const getDiscount = (product, offers, navigationDiscount = 0) => {
  const discounts = offers
    .filter((offer) =>
      (offer.targetProduct === product._id || offer.targetCategory === product.category) &&
      (!offer.expiry || new Date(offer.expiry) >= new Date())
    )
    .map((offer) => Number(offer.discount) || 0);
  return Math.min(100, Math.max(0, Number(navigationDiscount) || 0, ...discounts));
};

const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const { url, food_list, cartItems, addToCart, offers = [], isLoading } = useContext(StoreContext);
  const product = food_list.find((item) => String(item._id) === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  if (isLoading) {
    return <main className="product-detail product-detail-state" aria-live="polite"><p>Loading your dish?</p></main>;
  }

  if (!product) {
    return (
      <main className="product-detail product-detail-state">
        <h1>We couldn?t find this dish.</h1>
        <p>Explore the menu to find something delicious.</p>
        <Link to="/menu" className="product-primary-action"><FiArrowLeft aria-hidden="true" /> Back to menu</Link>
      </main>
    );
  }

  const discount = getDiscount(product, offers, location.state?.discount);
  const price = Number(product.price);
  const discountedPrice = price * (1 - discount / 100);
  const similarProducts = getSimilarProducts(food_list, product);
  const categoryLink = "/menu?category=" + encodeURIComponent(product.category);
  const imageUrl = (image) => url.replace(/\/$/, "") + "/images/" + encodeURIComponent(image);
  const quantity = cartItems[product._id] || 0;

  return (
    <main className="product-detail">
      <nav className="product-breadcrumbs" aria-label="Breadcrumb">
        <Link to="/menu"><FiArrowLeft aria-hidden="true" /> Menu</Link>
        <FiChevronRight aria-hidden="true" />
        <Link to={categoryLink}>{product.category}</Link>
        <FiChevronRight aria-hidden="true" />
        <span aria-current="page">{product.name}</span>
      </nav>

      <section className="product-content" aria-labelledby="product-title">
        <div className="product-image">
          <img src={imageUrl(product.image)} alt={product.name} />
          {product.isFeatured && <span className="product-image-badge"><FiStar aria-hidden="true" /> Featured favorite</span>}
        </div>
        <div className="product-info">
          <Link to={categoryLink} className="product-category-label">{product.category}<FiArrowUpRight aria-hidden="true" /></Link>
          <h1 id="product-title" className="product-title">{product.name}</h1>
          <div className="product-price">
            <span className="product-current-price">{formatPrice(discountedPrice)}</span>
            {discount > 0 && <><del>{formatPrice(price)}</del><span className="product-discount-badge">{discount}% off</span></>}
          </div>
          <span className="product-price-caption">Price per serving ? Pakistani rupees</span>
          <div className="product-description-panel">
            <h2>About this dish</h2>
            <p className="product-description">{product.description?.trim() || "A description hasn?t been added for this dish yet."}</p>
          </div>
          <div className="product-actions">
            <button type="button" className="product-primary-action" onClick={() => addToCart(product._id)}>
              <FiShoppingBag aria-hidden="true" /> Add to cart
            </button>
            <Link to="/cart" className="product-secondary-action">View cart <FiArrowUpRight aria-hidden="true" /></Link>
          </div>
          <p className="product-cart-status" aria-live="polite">{quantity > 0 ? quantity + (quantity === 1 ? " serving" : " servings") + " in your cart" : "Choose your favorite and add it to your cart."}</p>
        </div>
      </section>

      <section className="product-similar" aria-labelledby="similar-products-heading">
        <div className="product-similar-header">
          <div>
            <p className="product-section-eyebrow">MORE FROM {product.category.toUpperCase()}</p>
            <h2 id="similar-products-heading">Similar products</h2>
            <p>More dishes from the same category, picked for your next bite.</p>
          </div>
          <Link to={categoryLink} className="product-category-link">Explore {product.category} <FiArrowUpRight aria-hidden="true" /></Link>
        </div>
        {similarProducts.length > 0 ? (
          <div className="product-similar-grid">
            {similarProducts.map((item) => {
              const itemDiscount = getDiscount(item, offers);
              return (
                <Link key={item._id} to={"/product/" + item._id} className="product-similar-card">
                  <div className="product-similar-image"><img src={imageUrl(item.image)} alt={item.name} loading="lazy" /></div>
                  <div className="product-similar-info">
                    <span className="product-similar-category">{item.category}</span>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <div className="product-similar-bottom"><span>{formatPrice(Number(item.price) * (1 - itemDiscount / 100))}</span><span className="product-card-arrow"><FiArrowUpRight aria-hidden="true" /></span></div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : <p className="product-similar-empty">There are no other products in this category yet.</p>}
      </section>
    </main>
  );
};

export default ProductDetail;
