const Footer = () => {
	const link = "https://wisebit.com";
	const target = "_blank";

	return (
		<div className="container">
			Copyright © <small>{new Date().getFullYear()}</small> Wisebit Pak. {" "}
			<a href={link} target={target}>
				wisebit.com
			</a>
		</div>
	);
};

export default Footer;
