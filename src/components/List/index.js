import React from 'react';
import { Link } from 'react-router-dom';
import { List, Button, Spin } from 'antd';

export default class LoadMoreList extends React.Component {
  static defaultProps = {
    loading: true,
    loadingMore: false,
    showLoadingMore: true,
    data: [],
  };

  getLoadMoreComponent = () => {
    const { loadingMore, showLoadingMore, onLoadMore } = this.props;

    return showLoadingMore ? (
      <div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
        {loadingMore && <Spin />}
        {!loadingMore && <Button onClick={onLoadMore}>Load more</Button>}
      </div>
    ) : null;
  };

  render() {
    const { loading, data } = this.props;
    return (
      <List
        className="demo-loadmore-list"
        loading={loading}
        itemLayout="horizontal"
        loadMore={this.getLoadMoreComponent()}
        dataSource={data}
        renderItem={(item, idx) => (
          <List.Item actions={[<Link to={`pokemon/${idx + 1}`}>view</Link>]}>
            <List.Item.Meta title={<Link to={`pokemon/${idx + 1}`}>{item.name}</Link>} />
          </List.Item>
        )}
      />
    );
  }
}
