import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      <div className="layout__container">{children}</div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
