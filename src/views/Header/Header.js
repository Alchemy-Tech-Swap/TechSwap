import React from 'react';
import '../../App.css';
import { Box, Container, Row, Column, HeaderLink, Heading } from './HeaderStyles';
import { getUser, logout } from '../../services/users';
import { useState } from 'react';

const Header = () => {
  const [currentUser, setCurrentUser] = useState(getUser());
  const [query, setQuery] = useState('');

  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
  };
  return (
    <Box>
      <Container className="cont">
        <Row>
          <Column>
            <Heading>
              <HeaderLink href="/">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAXVBMVEUAAAD///+hoaGlpaWSkpLW1ta9vb3o6OiBgYG7u7s/Pz+EhIRERESAgIDq6urAwMA4ODhoaGgxMTE8PDxCQkJLS0uOjo5fX1/4+PjS0tKamporKytpaWl2dnba2tpRiQu7AAADXUlEQVR4nO2d7XLaMBAAY0ghJnwGkrS05f0fs0nbY4qxbEmWfCd3929mYu3MjuSzIXl4AAAAAAAAKJBX7QXkpq5q7SVkZb2sqmq51l5GPjbVHzbaC8nFrhJ22kvJwu9ChSmW+lTd8qS9oNQsqiYL7SUlZbW9E6yq7Up7Wel4bvH75Fl7Yam4L3Rape7bCr2Wutde3nCae2iT4vdUd6HTKPVl2Sv4cfq/aC8znr5Ciy+1v9CyS135FHottcDTf9OvdUNxE5V/oUJZpa5DChVKmqh899Amxeypu34XB2XM/lGFCiWU6pqUfDE/UYXvoU1s76nrrknJl63hUocWKpgttU4kWBl98n9MUaiwPWrr3BN7yrswd/qnK1SwVep+yCnvYmnoKVXopOSLmYkqfaGCjVKDZvlQLMz+uQoV1Esdfh/ah+596ilnocLypCeY+pR3oXb65y9U0Cm19a1nLjTepqaalHwZfaIar1Bh3FJHLVQYs9SxCxVGKzX+eehQxnmemmVS8mWMiUqrUCF7qePvoU3y7qlHzUKFZcanVGPdh/aR7T413ywfSp7Zf9A7pdTkeEeVe5YPJfnsr7+HNkm7p5oqVEhZqvYp7yLZ6W+vUCFNqSYLFVKUarVQYXCpdgsVhpWqMsuHMmT2t3bKu4g+/e3ch/YRd5/a+Rl7a8R85r+UQoXgUu3voU3C9lTVp02xhDylKq1QwbvU8goV/ErN+l4+Nz7v/UstVOgtVe+JfSq6n/yfSjrlXWw73vtbn5R8cU5U5RcqtJea5BPMVmj7JPVUChXuSp1OocJtqUXM8qH8O/tPrVDhWmq596F9LKZS6FfnTz5Lfb1cvjj4Vor7+W+M34/H4+HH4ef5fJ59UNf17tL9d6nO2kv3ZNZp0cVMe+meYIihfTDE0D4YYmgfDDG0D4YY2gdDDO2DIYb2wRBD+2CIoX0wxNA+GGJoHwwxtA+GGNoHQwztgyGG9sEQQ/tgiKF9MMQwnK3rGxw9xH6/Y3zDt8jrvRVj+Bh5vUcMMcQQQwwxxBBDDDHEEEMMMcQQQwwxxBBDDDHEEEMMMcQQQwwxxBBDDDHEEEMMMcQQQwwxxBBDDP9zw3nkFc/9v7qV2P/FMI82PMzjeI+83nvk9Q7RhgAAAAAAAJ78AvSZcuU8ZeIKAAAAAElFTkSuQmCC"
                  className="homelogo"
                ></img>
              </HeaderLink>
            </Heading>
          </Column>
          <Column>
            <button className="logoutbtn" onClick={logoutUser}>
              Log Out
            </button>
          </Column>
          <Column>
            <input className="searchbar" placeholder="Search"></input>
          </Column>
          <button className="searchbtn">GO</button>
          <Column>
            <Heading>
              <HeaderLink href="/categories">
                <img
                  src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/list-icon-18-256.png"
                  className="categoriesbtn"
                ></img>
              </HeaderLink>
            </Heading>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Header;
