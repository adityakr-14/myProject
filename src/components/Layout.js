const Layout = ({ children}) => {
    const props = children.props;
    
    return(
        <>
            <main>
                {children}
            </main>
        </>
    );
}

export default Layout;