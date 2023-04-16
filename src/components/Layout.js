const Layout = ({ children}) => {
    const props = children.props;
    
    return(
        <>
            <Meta />
            <main>
                {children}
            </main>
        </>
    );
}

export default Layout;