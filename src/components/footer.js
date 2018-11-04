import React from "react";

const Footer = () => {
  return (
    <footer >
      <FooterList
        className={"privacy footer-list"}
        heading={"Privacy"}
        list={privacy}
      />
      <FooterList
        className={"faq footer-list"}
        heading={"NEED HELP ?"}
        list={needHelp}
      />
      <FooterSubscribe />
    </footer>
  );
};

//A list for iterating through links in footer like privacy , terms etc

const FooterList = ({ className, list, heading }) => {
  return (
    <div className={className}>
      <h4>{heading}</h4>
      <ul>
        {list.map(item => {
          return (
            <li key={item.id}>
              <a href={item.href}>{item.value}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

//Subscribe Form For Footer

const FooterSubscribe = () => {
  return (
    <div className="subscribe">
      <h4>SUBSCRIBE</h4>
      <form action="#">
        <input
          className="footer-email"
          type="email"
          placeholder="example@email.com"
        />
        <button type="submit">SUBSCRIBE</button>
      </form>
      <p>Register now to get updates on promotions and coupons.</p>
    </div>
  );
};

export default Footer;

//Footer List Values

const privacy = [
  {
    id: 1,
    value: "Privacy",
    href: "#"
  },
  {
    id: 2,
    value: "Terms of Use",
    href: "#"
  },
  {
    id: 3,
    value: "Terms of Sale",
    href: "#"
  },
  {
    id: 4,
    value: "Report Abuse",
    href: "#"
  }
];

const needHelp = [
  {
    id: 1,
    value: "FAQ",
    href: "#"
  },
  {
    id: 2,
    value: "Contact Us",
    href: "#"
  },
  {
    id: 3,
    value: "Call Us",
    href: "#"
  }
];
