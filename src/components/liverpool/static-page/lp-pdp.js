import React,{useState,useEffect} from "react";

export const LPPdp=() => {
	const [props,setProps] = useState({})
	useEffect(() => {
		window.addEventListener("message",function(e) {
			if(typeof e.data && Object.keys(e.data).length>0){
			setProps(e.data)
		}
		});
	},[]);

	useEffect(()=>{
		console.log("--------------------")
		console.log(props)
		console.log("--------------------")
	})
	const openParentModal=() => {
		window.parent.postMessage("open_modal_true")
	}

	console.log("imagUrl..."+props.imageUrl)
	return <div onClick={() => {openParentModal()}}>
		<html>

			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				{/*<!-- Boxicons -->*/}
				<link href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" rel="stylesheet" />

				{/*<!-- Fontawesome -->*/}
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
				{/*<!-- Custom StyleSheet -->*/}
				<link rel="stylesheet" href="/lp-pdp-style.css" />
				<title>ASHALI ONLINE STORE</title>
			</head>

			<body>


				<header className="header">
					<nav>
						<img src="logob.png" className="logob" />
						<ul>
							<li><a href="">HOME</a></li>
							<li><a href="">ABOUT US</a></li>
							<li><a href="">CONTACT US</a></li>

						</ul>
					</nav>

					<div className="intro">
						{props.imageUrl?<div className="intro_background">
							<img width={"100%"} height={"100%"} src={props.imageUrl} alt="abcd"/>
						</div>: null}
						<h1>{props.content || "TRY OUT THESE LEATHER PRODUCTS"}</h1>
						<h2>
							Up to<br />
							<span className="dis">30%
								Discount</span><br />
							on This <br />
							New Year Season
						</h2>
						<h3>From 1st Jan to 31st Jan</h3>
						<a href="#" className="btn">SHOP NOW</a>
					</div>

				</header>

				<section className="section benefits">
					<div className="benefit-center box">
						<div className="benefit">
							<span className="icon"><i className="bx bx-purchase-tag"></i></span>
							<h4>Free Shipping</h4>
							<span className="text">Capped at $16 per order</span>
						</div>


						<div className="benefit">
							<span className="icon"><i className="bx bx-book-reader"></i></span>
							<h4>10-Day Returns</h4>
							<span className="text">Shop without any fear</span>
						</div>

						<div className="benefit">
							<span className="icon"><i className="bx bx-headphone"></i></span>
							<h4>24/7 Support</h4>
							<span className="text">We are always there to help you</span>
						</div>
					</div>
				</section>

				<section className="section">
					<div className="h">
						<h1><span>New</span> Arrivals</h1>
					</div>
					<div className="ac-center box">
						<div className="ac">
							<div className="img-cover">
								<img src="hand1.png" alt="" />
							</div>
							<p>Women handbag leather</p>
							<div className="rating">
								<i className="bx bxs-star"></i>
								<i className="bx bxs-star"></i>
								<i className="bx bxs-star"></i>
								<i className="bx bxs-star"></i>
								<i className="bx bxs-star"></i>
							</div>
							<div className="price">LKR 5000</div>
						</div>

						<div className="ac">
							<div className="img-cover">
								<img src="slip1.jpg" alt="" />
							</div>
							<p>Women Sandals 2021</p>
							<div className="rating">
								<i className="bx bxs-star"></i>
								<i className="bx bxs-star"></i>
								<i className="bx bxs-star"></i>
								<i className="bx bxs-star"></i>
								<i className="bx bx-star"></i>
							</div>
							<div className="price">LKR 3000</div>
						</div>

						<div className="ac">
							<div className="img-cover">
								<img src="wallet2.jpg" alt="" />
							</div>
							<p>Luxuary wallet purse </p>
							<div className="rating">
								<i className="bx bxs-star"></i>
								<i className="bx bxs-star"></i>
								<i className="bx bxs-star"></i>
								<i className="bx bxs-star"></i>
								<i className="bx bx-star"></i>
							</div>
							<div className="price">LKR 2000</div>
						</div>
						<div className="ac">
							<div className="img-cover">
								<img src="belt2.jpg" alt="" />
							</div>
							<p>Leather belt</p>
							<div className="rating">
								<i className="bx bxs-star"></i>
								<i className="bx bxs-star"></i>
								<i className="bx bxs-star"></i>
								<i className="bx bxs-star"></i>
								<i className="bx bx-star"></i>
							</div>
							<div className="price">LKR 1500</div>
						</div>
					</div>
				</section>

				<section className="section">
					<div className="h">
						<h1><span>Shop By</span> Categories</h1>
					</div>
					<div className="ab box">
						<div className="item item-1">
							<img src="hand2.jpg" alt="" />
						</div>
						<div className="item item-2">
							<img src="slip2.jpg" alt="" />
						</div>
						<div className="item item-3">
							<img src="wallet2.jpg" alt="" />
						</div>
						<div className="item item-4">
							<img src="belt2.jpg" alt="" />
						</div>
					</div>
				</section>

				<section className="section">
					<div className="h">
						<h1>Popular <span>Products</span></h1>
					</div>
					<div className="ac-center box">
						<div className="ac">
							<div className="img-cover">
								<img src="hand3.jpg" alt="" />
							</div>
							<p>Luxuary Leather hand bag-black</p>
							<div className="rating">
								<i className="bx bxs-star"></i>
								<i className="bx bxs-star"></i>
								<i className="bx bxs-star"></i>
								<i className="bx bxs-star"></i>
								<i className="bx bx-star"></i>
							</div>
							<div className="price">LKR 8500</div>
						</div>

						<div className="ac">
							<div className="img-cover">
								<img src="slip3.jpg" alt="" />
							</div>
							<p>Covered leather sandal</p>
							<div className="rating">
								<i className="bx bxs-star"></i>
								<i className="bx bxs-star"></i>
								<i className="bx bxs-star"></i>
								<i className="bx bxs-star"></i>
								<i className="bx bx-star"></i>
							</div>
							<div className="price">LKR 5000</div>
						</div>

						<div className="ac">
							<div className="img-cover">
								<img src="wallet2.jpg" alt="" />
							</div>
							<p>Cute Wallet</p>
							<div className="rating">
								<i className="bx bxs-star"></i>
								<i className="bx bxs-star"></i>
								<i className="bx bxs-star"></i>
								<i className="bx bxs-star"></i>
								<i className="bx bx-star"></i>
							</div>
							<div className="price">LKR 1200</div>
						</div>
						<div className="ac">
							<div className="img-cover">
								<img src="hand4.jpg" alt="" />
							</div>
							<p>Ladies wallet-purple</p>
							<div className="rating">
								<i className="bx bxs-star"></i>
								<i className="bx bxs-star"></i>
								<i className="bx bxs-star"></i>
								<i className="bx bxs-star"></i>
								<i className="bx bx-star"></i>
							</div>
							<div className="price">LKR 2000</div>
						</div>
						<div className="ac">
							<div className="img-cover">
								<img src="slip4.jpg" alt="" />
							</div>
							<p>Black Sandals</p>
							<div className="rating">
								<i className="bx bxs-star"></i>
								<i className="bx bxs-star"></i>
								<i className="bx bxs-star"></i>
								<i className="bx bxs-star"></i>
								<i className="bx bx-star"></i>
							</div>
							<div className="price">LKR 3200</div>
						</div>
						<div className="ac">
							<div className="img-cover">
								<img src="wallet3.jpg" alt="" />
							</div>
							<p>Wallet-Ladies-2021</p>
							<div className="rating">
								<i className="bx bxs-star"></i>
								<i className="bx bxs-star"></i>
								<i className="bx bxs-star"></i>
								<i className="bx bxs-star"></i>
								<i className="bx bx-star"></i>
							</div>
							<div className="price">LKR 1600</div>
						</div>
						<div className="ac">
							<div className="img-cover">
								<img src="hand1.png" alt="" />
							</div>
							<p>Handbag-Ladies-Pink</p>
							<div className="rating">
								<i className="bx bxs-star"></i>
								<i className="bx bxs-star"></i>
								<i className="bx bxs-star"></i>
								<i className="bx bxs-star"></i>
								<i className="bx bx-star"></i>
							</div>
							<div className="price">LKR 5600</div>
						</div>
						<div className="ac">
							<div className="img-cover">
								<img src="wallet4.jpg" alt="" />
							</div>
							<p>Mini Leather Wallet</p>
							<div className="rating">
								<i className="bx bxs-star"></i>
								<i className="bx bxs-star"></i>
								<i className="bx bxs-star"></i>
								<i className="bx bxs-star"></i>
								<i className="bx bx-star"></i>
							</div>
							<div className="price">LKR 1500</div>
						</div>
					</div>
				</section>

				<section id="footer">

					<div className="foot">
						<ul>
							<li><a href="">HOME</a></li>
							<li><a href="">ABOUT US</a></li>
							<li><a href="">CONTACT US</a></li>

						</ul>

						<div className="social-links">
							<a href=""><i className="fab fa-linkedin"></i></a>
							<a href=""><i className="fab fa-behance"></i></a>
							<a href=""><i className="fab fa-dribbble"></i></a>
							<a href=""><i className="fab fa-instagram"></i></a>
						</div>
					</div>
				</section>

			</body>

		</html>
	</div>
}