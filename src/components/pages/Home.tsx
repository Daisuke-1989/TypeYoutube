import { FC } from 'react';
import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react';

import './Home.css';

const Home: FC = () => (
  <>
    <header className="app-header">
      <h1>会社一覧</h1>
    </header>
    <List celled relaxed>
      <List.Item className="list-item" key="You">
        <List.Icon name="youtube" size="large" verticalAlign="middle" />
        <List.Content>
          <Link to="You">Youtube</Link>
        </List.Content>
      </List.Item>
    </List>
  </>
);

export default Home;
