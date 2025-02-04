import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';


const Menu = () => {
	return (<Navbar expand="lg" className="bg-body-tertiary">
		<Container fluid>
			<Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
			<Navbar.Toggle aria-controls="navbarScroll" />
			<Navbar.Collapse id="navbarScroll">
				<Nav
					className="me-auto my-2 my-lg-0"
					style={{ maxHeight: '100px' }}
					navbarScroll
				>
					<Nav.Link href="#action1">Home</Nav.Link>
					<NavDropdown title="Learning" id="navbarScrollingDropdown">
						<NavDropdown.Item href="/order-list">Ordered List</NavDropdown.Item>
						<NavDropdown.Item href="/images">Images</NavDropdown.Item>
						<NavDropdown.Item href="/gallery">Gallery</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action5">
							Something else here
						</NavDropdown.Item>
					</NavDropdown>
					<Nav.Link href="#" disabled>
						Other
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Container>
	</Navbar>)
}

export default Menu;